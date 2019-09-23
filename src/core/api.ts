import {
	IBound,
	IDictionary,
	IEventer,
	IGeometryTransform,
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
import {
	angle,
	distanceBetween,
	getOppositeCorner,
	isInBound,
	mergeDeep
} from './helpers';
import { IApi } from '../types/';
import { Polyline } from '../shapes';
import { Layer } from './layer';
import { Rotate, Scale, Translate, Zoom } from './transforms';
import { Point } from './geometries';

export class Api implements IApi {
	render: IRender;
	events: IEventer<IApi> = new Eventer(this);

	state: IState = {
		zoom: 1,
		offset: [0, 0],
		selection: null,

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
		const setCursor = (e: IPoint) => {
			this.state.cursor.x = e.x;
			this.state.cursor.y = e.y;
			this.draw();
		};

		let transform: null | IGeometryTransform = null,
			shape: null | Polyline = null,
			lastPoint: null | IPoint = null,
			oldOffset = [0, 0],
			startBound: IBound = { x: 0, y: 0, w: 0, h: 0 },
			start: IPoint = { x: 0, y: 0 };

		this.events
			.on('corner.mousedown', e => {
				if (e.shape && e.corner) {
					this.state.shapes.active = [e.shape];

					if (e.corner.type !== 'CT') {
						this.state.step = SceneSteps.scale;

						start = getOppositeCorner(
							e.shape.bound,
							e.corner,
							e.shape.geometry.angle
						);
					} else {
						this.state.step = SceneSteps.rotate;
						start = e.corner;
					}

					startBound = e.shape.bound;
				}
			})
			.on('shape.mousedown', e => {
				if (e.shape) {
					this.state.step = SceneSteps.drag;
					this.state.shapes.active = [e.shape];
				}
			})
			.on('mouseup', e => {
				this.state.step = SceneSteps.nope;

				transform = null;
				shape = null;
				lastPoint = null;

				if (this.state.mode === Modes.select) {
					this.state.layers.forEach(layer => layer.fire(e.type, e));
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
						const [active] = this.state.shapes.active;
						this.state.shapes.active = [];

						if (active) {
							active.manager.checkEvent(e.type, e);
						}

						this.state.layers.forEach(layer =>
							layer.fire(e.type, e)
						);

						if (!this.state.shapes.active.length) {
							oldOffset = [...this.state.offset];
							this.state.step = SceneSteps.dragMap;
						}

						break;
					}

					default:
						this.state.step = SceneSteps.nope;
				}
			})
			.on('mousemove', e => {
				const { offset, zoom } = this.state;
				const x = e.x / zoom - offset[0],
					y = e.y / zoom - offset[1];

				setCursor(e);

				switch (this.state.step) {
					case SceneSteps.draw:
						if (!shape) {
							shape = new Polyline([[x, y]]);
							const layer = new Layer(this);
							this.state.layers.push(layer);
							layer.add(shape);

							this.state.shapes.active = [shape];
						} else {
							if (!lastPoint) {
								lastPoint = new Point(x, y);
								shape.simpleGeometry.push(lastPoint);
								start = e;
							}

							lastPoint.x = x;
							lastPoint.y = y;

							if (distanceBetween(e, start) > 5) {
								lastPoint = null;
							}
						}

						this.draw();

						break;

					case SceneSteps.dragMap:
						this.state.offset = [
							(e.x - start.x) / zoom + oldOffset[0],
							(e.y - start.y) / zoom + oldOffset[1]
						];

						break;

					case SceneSteps.drag:
						if (!transform) {
							transform = new Translate(x, y);

							this.state.shapes.active.forEach(shape => {
								transform && shape.transforms.push(transform);
							});
						}

						transform.x = (e.x - start.x) / zoom;
						transform.y = (e.y - start.y) / zoom;

						break;

					case SceneSteps.scale:
						if (!transform) {
							transform = new Scale(1, 1, {
								x: start.x / zoom - offset[0],
								y: start.y / zoom - offset[1]
							});

							this.state.shapes.active.forEach(shape => {
								transform && shape.transforms.push(transform);
							});
						}

						transform.x = Math.abs(e.x - start.x) / startBound.w;

						transform.y = Math.abs(e.y - start.y) / startBound.h;

						break;

					case SceneSteps.rotate:
						const [active] = this.state.shapes.active,
							geometry = active.geometry;

						if (!transform) {
							transform = new Rotate(geometry.angle);
							active.transforms.push(transform);
						}

						(transform as Rotate).angle =
							90 -
							angle({
								x: e.x - geometry.center.x,
								y: -(e.y - geometry.center.y)
							});

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
		let f = 1;

		container.addEventListener('wheel', (e: WheelEvent) => {
			e.preventDefault();

			if (f > 20000) {
				return;
			}

			f++;

			const { cursor, offset, zoom } = this.state;
			const globalCursor = {
				x: cursor.x / zoom - offset[0],
				y: cursor.y / zoom - offset[1]
			};

			this.state.zoom += e.deltaY * -0.01;

			offset[0] = cursor.x / this.state.zoom - globalCursor.x;
			offset[1] = cursor.y / this.state.zoom - globalCursor.y;
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

	mainTransforms = {
		zoom: new Zoom(),
		offset: new Translate()
	};

	draw() {
		const {
			width,
			height,
			layers,
			cursor,
			zoom,
			offset,
			behaviours,
			mode,
			shapes
		} = this.state;

		this.mainTransforms.zoom.setValue(zoom);
		this.mainTransforms.offset.setValue(offset[0], offset[1]);

		this.render.clear();

		const { selectShapeOnMouseEnter } = behaviours,
			drawOptions = {
				drawBoundIfInPoint: selectShapeOnMouseEnter,
				cursor
			};

		this.render.setSize(width, height);

		layers.forEach(layer => {
			layer.draw(this.render, drawOptions);
		});

		if (mode !== Modes.draw) {
			shapes.active.forEach(shape =>
				shape.manager.draw(this.render, cursor)
			);
		}

		const text = this.debugInfo();

		if (text.length) {
			this.render.drawText({ x: -10, y: 10 }, text);
		}

		this.render.drawCursor(cursor);
	}

	protected debugInfo(): string {
		return '';
	}

	static Shapes: IDictionary<typeof Shape> = {};
	static Geometries: IDictionary<typeof Geometry> = {};
	static Transforms: IDictionary<typeof Transform> = {};
}
