import {
	IRender,
	IShape,
	DrawOptions,
	ITransform,
	IGeometry,
	IStyle,
	IManager
} from '../types';
import { Transform } from './transform';
import { TRANSFORM_GEOMETRY, TRANSFORM_STYLE } from '../const';
import { Manager } from './manager';
import { Layer } from './layer';

export abstract class Shape<G extends IGeometry> extends Layer
	implements IShape {
	manager: IManager;
	transforms: ITransform[] = [];

	protected constructor(shapes: IShape[] = []) {
		super(shapes);
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
			TRANSFORM_GEOMETRY
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
			TRANSFORM_STYLE
		).style;
	}

	abstract drawGeometry(render: IRender, opt: DrawOptions): void;

	draw(render: IRender, opt: DrawOptions): void {
		render.setStyle(this.style);
		this.drawGeometry(render, opt);
		render.resetStyle();

		super.draw(render, opt);
	}
}
