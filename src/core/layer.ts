import {
	IRender,
	ILayer,
	DrawOptions,
	IShape,
	EventTypes,
	IMouseSyntheticEvent
} from '../types';
import { isInBound } from './helpers/';
import { HANDLE_RADIUS } from '../const';

export class Layer implements ILayer {
	shapes: IShape[];

	constructor(shapes: IShape[] = []) {
		this.shapes = shapes;
	}

	add(shape: IShape) {
		this.shapes.push(shape);
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
