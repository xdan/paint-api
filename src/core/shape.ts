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
	IMouseSyntheticEvent,
	ILayer,
	IShapeRecord
} from '../types';
import { GeometryTransform, StyleTransform, Transform } from './transform';
import { Manager } from './manager';

export abstract class Shape<G extends IGeometry> implements IShape {
	get bound(): IBound {
		return this.geometry.bound;
	}

	manager: IManager;
	layer: ILayer | null = null;

	setLayer(layer: ILayer | null): void {
		this.layer = layer;
	}

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
		return this.applyTransforms(GeometryTransform).geometry as G;
	}

	get simpleGeometry(): G {
		return this.__geometry;
	}

	private applyTransforms(type: typeof Transform): IShapeRecord {
		return Transform.applyAll(
			this.layer && this.layer.transforms.length
				? this.transforms.concat(this.layer.transforms)
				: this.transforms,
			{
				geometry: this.__geometry,
				style: this.__style
			},
			type
		);
	}

	set style(value: IStyle) {
		this.__style = value;
	}

	get style(): IStyle {
		return this.applyTransforms(StyleTransform).style;
	}

	get simpleStyle(): IStyle {
		return this.__style;
	}

	abstract drawGeometry(render: IRender, opt: DrawOptions): void;

	draw(render: IRender, opt: DrawOptions): void {
		render.save();

		render.setStyle(this.style);
		const geometry = this.geometry;

		if (geometry.angle) {
			render.rotate(geometry.center, geometry.angle);
		}

		this.drawGeometry(render, opt);

		render.restore();
	}

	fire(eventName: keyof EventTypes, e: IMouseSyntheticEvent): void {
		this.manager.fire(eventName, e);
	}
}
