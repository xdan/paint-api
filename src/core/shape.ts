import { IRender, IShape, DrawOptions, ITransform, IGeometry } from "../types";
import { Layer } from "./layer";
import { Transform } from "./transform";

export abstract class Shape<G extends IGeometry> extends Layer implements IShape {
	transforms: ITransform[] = [];

	private __geometry: G;
	set geometry(value: G) {
		this.__geometry = value;
	};

	get geometry(): G {
		return <G>Transform.apply(this.transforms, this.__geometry);
	}

	abstract drawGeometry(render: IRender, opt: DrawOptions): void;

	draw(render: IRender, opt: DrawOptions): void {
		this.drawGeometry(render, opt);
		super.draw(render, opt)
	}
}
