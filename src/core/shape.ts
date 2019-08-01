import {
	IRender,
	IShape,
	DrawOptions,
	ITransform,
	IGeometry,
	IStyle
} from '../types';
import { Layer } from './layer';
import { Transform } from './transform';
import { TRANSFORM_GEOMETRY, TRANSFORM_STYLE } from '../const';

export abstract class Shape<G extends IGeometry> extends Layer
	implements IShape {
	transforms: ITransform[] = [];

	protected constructor(shapes: IShape[] = []) {
		super(shapes);
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
