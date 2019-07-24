import { IRender, ILayer, DrawOptions } from "../types";

export class Layer implements ILayer {
	shapes: ILayer[];

	constructor(shapes: ILayer[] = []) {
		this.shapes = shapes;
	}

	add(shape: ILayer) {
		this.shapes.push(shape);
	}

	draw(render: IRender, opt: DrawOptions): void {
		this.shapes.forEach(shape => {
			shape.draw(render, opt);
		});
	}
}
