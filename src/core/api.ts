import {IDictionary, IEventer, IMouseSyntheticEvent, IPoint, IRender, IShape, IState, SceneSteps} from "../types";
import {Render} from "./render";
import {Eventer} from "./observe/eventer";
import {Shape} from "./shape";
import {Geometry} from "./geometry";
import {Transform} from "./transform";
import {distanceBetween, isPointInBound, mergeDeep} from "./helpers";
import {Translate} from "./transforms";
import {Polyline} from "../shapes";
import {Layer} from "./layer";

export class Api {
	render: IRender;
	events: IEventer<Api> = new Eventer(this);

	state: IState = {
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
			selectShapeOnMouseEnter: true,
		},

		cursor: {
			x: 0,
			y: 0,
			draw: true
		}
	};

	constructor(options?: IDictionary) {
		this.state = <IState>mergeDeep(this.state, options);

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

		this.state.layers.forEach((layer) => {
			layer.shapes.forEach((shape) => {
				if (isPointInBound(point, shape.geometry.bound)) {
					result.push(shape);
				}
			})
		});

		return result;
	}

	addMouseListeners() {
		const setCursor = (e: IMouseSyntheticEvent) => {
			this.state.cursor.x = e.x;
			this.state.cursor.y = e.y;
		};

		let
			translate: null | Translate = null,
			shape: null | Polyline = null,
			start: IPoint = {x: 0, y: 0};

		this.events
			.on('mouseup', (e) => {
				this.state.step = SceneSteps.nope;
				this.state.shapes.active = [];
				translate = null;
				shape = null;
			})
			.on('mousedown', (e) => {
				const clickedShapes = this.getShapesUnderPoint(e);

				if (clickedShapes.length) {
					this.state.shapes.active = clickedShapes;
					this.state.step = SceneSteps.drag;
				} else {
					this.state.step = SceneSteps.draw;
				}

				console.log(this.state.step);

				start = e;
			})
			.on('mousemove', setCursor)
			.on('mousemove', (e) => {
					switch (this.state.step) {
						case SceneSteps.draw:
							if (!shape) {
								shape = new Polyline([e]);
								const layer = new Layer();
								this.state.layers.push(layer);
								layer.add(shape);
								console.log(shape);
							} else if (distanceBetween(e, start) > 3) {
								shape.geometry.push(e);
								start = e;
							}

							break;

						case SceneSteps.drag:
							if (!translate) {
								translate = new Translate(e.x, e.y);

								this.state.shapes.active.forEach((shape) => {
									translate && shape.transforms.push(translate);
								})
							}

							translate.x = e.x - start.x;
							translate.y = e.y - start.y;

							break;
					}
			});
	}

	bind(root: HTMLElement) {
		const container = this.render.getContainer();

		if (container) {
			root.appendChild(container);

		} else {
			throw new Error('Render has not HTML connector');
		}

		const mouseEvent = (e: MouseEvent) => {
			const rect = container.getBoundingClientRect();

			this.events.fire(e.type, {
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			})
		};

		['mousemove', 'mousedown', 'mouseup'].forEach((eventType) => {
			container.addEventListener(eventType, <any>mouseEvent);
		});
	}

	draw() {
		this.render.clear();

		const
			{ width, height, layers, cursor } = this.state,
			{ selectShapeOnMouseEnter } = this.state.behaviours,
			drawOptions = {
				drawBoundIfInPoint: selectShapeOnMouseEnter,
				cursor
			};

		this.render.setSize(width, height);

		layers.forEach((layer) => {
			layer.draw(this.render, drawOptions);
		});

		this.state.shapes.active.forEach(shape => {
			this.render.drawRectangle(shape.geometry.bound, false);
		});

		if (cursor.draw) {
			this.render.drawCursor(cursor)
		}

		const text = this.debugInfo();

		if (text.length) {
			this.render.drawText({x: -10, y: 10}, text);
		}
	}

	protected debugInfo(): string {
		return '';
	}

	static Shapes: IDictionary<typeof Shape> = {};
	static Geometries: IDictionary<typeof Geometry> = {};
	static Transforms: IDictionary<typeof Transform> = {};
}
