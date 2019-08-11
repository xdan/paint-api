import {
	IRender,
	ILayer,
	DrawOptions,
	IShape,
	EventTypes,
	IMouseSyntheticEvent,
	ITransform
} from '../types';
import { isInBound } from './helpers/';
import { HANDLE_RADIUS } from '../const';
import { IApi } from '../types/';
import { Api } from './api';

export class Layer implements ILayer {
	private __shapes: IShape[] = [];

	get shapes(): IShape[] {
		return this.__shapes;
	}

	transforms: ITransform[] = [];

	constructor(readonly api: IApi, shapes: IShape[] = []) {
		if (!api || !(api instanceof Api)) {
			throw new Error('Need Api instance in first argument');
		}

		this.transforms.push(
			api.mainTransforms.offset,
			api.mainTransforms.zoom
		);

		shapes.forEach(shape => this.add(shape));
	}

	add(shape: IShape) {
		const index = this.__shapes.indexOf(shape);

		if (index === -1) {
			this.__shapes.push(shape);
		}

		shape.setLayer(this);

		return this;
	}

	remove(shape: IShape) {
		const index = this.__shapes.indexOf(shape);
		shape.setLayer(null);

		if (index !== -1) {
			this.__shapes.splice(index, 1);
		}

		return this;
	}

	draw(render: IRender, opt: DrawOptions): void {
		this.shapes.forEach(shape => {
			shape.draw(render, opt);
		});
	}

	fire(eventName: keyof EventTypes, e: IMouseSyntheticEvent): void {
		this.shapes.forEach(shape => {
			if (isInBound(e, shape.bound, HANDLE_RADIUS)) {
				shape.fire(eventName, e);
			}
		});
	}
}
