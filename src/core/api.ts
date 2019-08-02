import {
	IDictionary,
	IEventer,
	IMouseSyntheticEvent,
	IPoint,
	IRender,
	IShape,
	IState,
	Modes,
	SceneSteps
} from '../types';
import { Render } from './render';
import { Eventer } from './observe/eventer';
import { Shape } from './shape';
import { Geometry } from './geometry';
import { Transform } from './transform';
import { distanceBetween, isPointInBound, mergeDeep } from './helpers';
import { Translate } from './transforms';
import { Polyline } from '../shapes';
import { Layer } from './layer';
import { Point } from './geometries';

export class Api {
	render: IRender;
	events: IEventer<Api> = new Eventer(this);

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
				if (isPointInBound(point, shape.geometry.bound)) {
					result.push(shape);
				}
			});
		});

		return result;
	}

	addMouseListeners() {
		const setCursor = (e: IMouseSyntheticEvent) => {
			this.state.cursor.x = e.x;
			this.state.cursor.y = e.y;
			this.draw();
		};

		let translate: null | Translate = null,
			shape: null | Polyline = null,
			lastPoint: null | IPoint = null,
			start: IPoint = { x: 0, y: 0 };

		this.events
			.on('mouseup', () => {
				this.state.step = SceneSteps.nope;
				translate = null;
				shape = null;
				lastPoint = null;
			})
			.on('mousedown', e => {
				start = e;

				switch (this.state.mode) {
					case Modes.draw: {
						this.state.step = SceneSteps.draw;
						break;
					}

					case Modes.select: {
						const clickedShapes = this.getShapesUnderPoint(e);

						if (clickedShapes.length) {
							this.state.shapes.active = [clickedShapes[0]];

							this.events.fire(
								'select',
								this.state.shapes.active
							);

							this.state.step = SceneSteps.drag;
						} else {
							this.state.shapes.active.length = 0;
						}

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

			this.events.fire(e.type, {
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

		this.state.shapes.active.forEach(shape =>
			shape.manager.draw(this.render, cursor)
		);

		if (cursor.draw) {
			this.render.drawCursor(cursor);
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
