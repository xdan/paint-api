import { IBound, IDictionary, IEventer, IMouseSyntheticEvent, IPoint, IRender, IShape, IState, Modes, SceneSteps } from '../types';
import { Render } from './render';
import { Eventer } from './observe/eventer';
import { Shape } from './shape';
import { Geometry } from './geometry';
import { Transform } from './transform';
import { distanceBetween, isInBound, mergeDeep } from './helpers';
import { IApi } from '../types/api';
import { Polyline } from '../shapes';
import { Layer } from './layer';
import { Scale, Translate } from './transforms';
import { Point } from './geometries';
import { getOppositeCorner } from './helpers/getOppositeCorner';
// import { Translate } from './transforms';
// import { Polyline } from '../shapes';
// import { Layer } from './layer';
// import { Point } from './geometries';

export class Api implements IApi {
	render: IRender;
	events: IEventer<IApi> = new Eventer(this);

	state: IState = {
		mode: Modes.select,
		step: SceneSteps.nope,

		options: {
			showFPS: true
		},

		shapes: {
			active: [],
			hover: []
		},

		layers: [],
		width: 400,
		height: 400,

		behaviours: {
			selectShapeOnMouseEnter: true
		},

		cursor: {
			x: 0,
			y: 0,
			draw: true
		}
	};

	/**
	 * Change current mode
	 * @param mode
	 */
	setMode(mode: Modes) {
		this.state.mode = mode;
		this.state.shapes.active = [];
	}

	constructor(options?: IDictionary) {
		this.state = mergeDeep(this.state, options) as IState;

		const redraw = () => {
			this.draw();
			requestAnimationFrame(redraw);
		};

		this.render = Render.create(this.state.width, this.state.height);

		redraw();

		this.addMouseListeners();
	}

	getShapesUnderPoint(point: IPoint): IShape[] {
		const result: IShape[] = [];

		this.state.layers.forEach(layer => {
			layer.shapes.forEach(shape => {
				if (isInBound(point, shape.geometry.bound)) {
					result.push(shape);
				}
			});
		});

		return result;
	}

	protected addMouseListeners() {
		const setCursor = (e: IMouseSyntheticEvent) => {
			this.state.cursor.x = e.x;
			this.state.cursor.y = e.y;
			this.draw();
		};

		let scale: null | Scale = null,
			translate: null | Translate = null,
			shape: null | Polyline = null,
			lastPoint: null | IPoint = null,
			startBound: IBound = { x: 0, y: 0, w: 0, h: 0 },
			start: IPoint = { x: 0, y: 0 };

		this.events
			.on('cornerMousedown', e => {
				if (e.shape && e.corner) {
					this.state.step = SceneSteps.scale;
					this.state.shapes.active = [e.shape];
					start = getOppositeCorner(e.shape.bound, e.corner);
					startBound = e.shape.bound;
				}
			})
			.on('shapeMousedown', e => {
				if (e.shape) {
					this.state.step = SceneSteps.drag;
					this.state.shapes.active = [e.shape];
				}
			})
			.on('mouseup', e => {
				this.state.step = SceneSteps.nope;

				translate = null;
				scale = null;
				shape = null;
				lastPoint = null;

				if (this.state.mode === Modes.select) {
					this.state.layers.forEach(layer =>
						layer.fire('mouseup', e)
					);
				}
			})
			.on('mousedown', e => {
				start = e;

				switch (this.state.mode) {
					case Modes.draw: {
						this.state.step = SceneSteps.draw;
						break;
					}

					case Modes.select: {
						this.state.layers.forEach(layer =>
							layer.fire('mousedown', e)
						);

						break;
					}

					default:
						this.state.step = SceneSteps.nope;
				}
			})
			.on('mousemove', setCursor)
			.on('mousemove', e => {
				switch (this.state.step) {
					case SceneSteps.draw:
						if (!shape) {
							shape = new Polyline([e]);
							const layer = new Layer();
							this.state.layers.push(layer);
							layer.add(shape);

							this.state.shapes.active = [shape];
						} else {
							if (!lastPoint) {
								lastPoint = new Point(e);
								shape.geometry.push(lastPoint);
								start = e;
							}

							lastPoint.x = e.x;
							lastPoint.y = e.y;

							if (distanceBetween(e, start) > 5) {
								lastPoint = null;
							}
						}

						this.draw();

						break;

					case SceneSteps.drag:
						if (!translate) {
							translate = new Translate(e.x, e.y);

							this.state.shapes.active.forEach(shape => {
								translate && shape.transforms.push(translate);
							});
						}

						translate.x = e.x - start.x;
						translate.y = e.y - start.y;

						this.draw();

						break;

					case SceneSteps.scale:
						if (!scale) {
							const [shape] = this.state.shapes.active;

							scale = new Scale(1, 1, start);

							shape.transforms.push(scale);
						}

						scale.sx = Math.abs(e.x - start.x) / startBound.w;
						scale.sy = Math.abs(e.y - start.y) / startBound.h;

						this.draw();

						break;
				}
			});
	}

	bind(root: HTMLElement) {
		const container = this.render.getContainer();

		if (!container || !root) {
			throw new Error('Render has not HTML connector');
		}

		root.appendChild(container);

		(container as any).__paint_api__ = this;
		(root as any).__paint_api__ = this;

		const mouseEvent = (e: MouseEvent) => {
			const rect = container.getBoundingClientRect();

			e.preventDefault();

			this.events.fire(e.type, {
				type: e.type,
				api: this,
				x: e.clientX - rect.left,
				y: e.clientY - rect.top
			});
		};

		['mousemove', 'mousedown', 'mouseup'].forEach(eventType => {
			container.addEventListener(eventType, mouseEvent as any);
		});

		container.addEventListener('mouseleave', () => {
			this.state.cursor.x = -10;
			this.state.cursor.y = -10;
		});

		['mouseup'].forEach(eventType => {
			window.addEventListener(eventType, ((e: MouseEvent) => {
				if (e.target !== container) {
					mouseEvent(e);
				}
			}) as any);
		});
	}

	draw() {
		this.render.clear();

		const { width, height, layers, cursor } = this.state,
			{ selectShapeOnMouseEnter } = this.state.behaviours,
			drawOptions = {
				drawBoundIfInPoint: selectShapeOnMouseEnter,
				cursor
			};

		this.render.setSize(width, height);

		layers.forEach(layer => {
			layer.draw(this.render, drawOptions);
		});

		if (this.state.mode !== Modes.draw) {
			this.state.shapes.active.forEach(shape =>
				shape.manager.draw(this.render, cursor)
			);
		}

		const text = this.debugInfo();

		if (text.length) {
			this.render.drawText({ x: -10, y: 10 }, text);
		}
	}

	protected debugInfo(): string {
		return '';
	}

	static Shapes: IDictionary<typeof Shape> = {};
	static Geometries: IDictionary<typeof Geometry> = {};
	static Transforms: IDictionary<typeof Transform> = {};
}
