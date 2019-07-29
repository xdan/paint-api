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

export abstract class Shape<G extends IGeometry> extends Layer
	implements IShape {
	transforms: ITransform[] = [];
	protected constructor(shapes: IShape[] = []) {
		super(shapes);
	}

	private __geometry: G;

	set geometry(value: G) {
		this.__geometry = value;
	}
	get geometry(): G {
		return Transform.apply(this.transforms, this.__geometry) as G;
	}

	abstract style: IStyle;
	abstract drawGeometry(render: IRender, opt: DrawOptions): void;

	draw(render: IRender, opt: DrawOptions): void {
		render.setStyle(this.style);
		this.drawGeometry(render, opt);
		render.resetStyle();

		super.draw(render, opt);
	}
}
