import { IState, IRender, IEventer, IDictionary } from "../types";
import { Render } from "./render";
import { ObserveObject } from "./observe/object";
import { Eventer } from "./observe/eventer";
import { Shape } from "./shape";
import { Geometry } from "./geometry";
import { Transform } from "./transform";

export class Api {
	render: IRender;
	events: IEventer<Api> = new Eventer(this);

	state: IState = {
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
		this.state = ObserveObject.create({...this.state, ...options}, this.draw.bind(this));

		this.render = Render.create(this.state.width, this.state.height);

		this.events.on('mousemove', (e) => {
			this.state.cursor.x = e.x;
			this.state.cursor.y = e.y;
		});

		this.draw();
	}

	bind(root: HTMLElement) {
		const container = this.render.getContainer();

		if (container) {
			root.appendChild(container);

		} else {
			throw new Error('Render has not HTML connector');
		}

		container.addEventListener('mousemove', (e: MouseEvent) => {
			const rect = container.getBoundingClientRect();

			this.events.fire('mousemove', {
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			})
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

		if (cursor.draw) {
			this.render.drawCursor(cursor)
		}
	}

	static Shapes: IDictionary<typeof Shape> = {};
	static Geometries: IDictionary<typeof Geometry> = {};
	static Transforms: IDictionary<typeof Transform> = {};
}
