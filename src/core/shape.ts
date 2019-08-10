import {
	IRender,
	IShape,
	DrawOptions,
	ITransform,
	IGeometry,
	IStyle,
	IManager,
	EventTypes,
	IBound,
	IMouseSyntheticEvent
} from '../types';
import { GeometryTransform, StyleTransform, Transform } from './transform';
import { Manager } from './manager';

export abstract class Shape<G extends IGeometry> implements IShape {
	get bound(): IBound {
		return this.geometry.bound;
	}

	manager: IManager;
	transforms: ITransform[] = [];

	protected constructor() {
		this.manager = new Manager(this);
	}

	private __geometry: G;
	private __style: IStyle;

	set geometry(value: G) {
		this.__geometry = value;
	}

	get geometry(): G {
		return Transform.apply(
			this.transforms,
			{
				geometry: this.__geometry,
				style: this.style
			},
			GeometryTransform
		).geometry as G;
	}

	set style(value: IStyle) {
		this.__style = value;
	}

	get style(): IStyle {
		return Transform.apply(
			this.transforms,
			{
				geometry: this.__geometry,
				style: this.__style
			},
			StyleTransform
		).style;
	}

	abstract drawGeometry(render: IRender, opt: DrawOptions): void;

	draw(render: IRender, opt: DrawOptions): void {
		render.setStyle(this.style);
		this.drawGeometry(render, opt);
		render.resetStyle();
	}

	fire(eventName: keyof EventTypes, e: IMouseSyntheticEvent): void {
		this.manager.fire(eventName, e);
	}
}
