import { IRender, ILayer, DrawOptions, IShape } from "../types";

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
}
