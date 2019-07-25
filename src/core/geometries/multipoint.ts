import {IBound, IPolyline, PointVariant} from "../../types";
import { Point } from "./point";
import { getBoundByMultiline } from "../helpers/getBoundByMultiline";

export class Multipoint extends Array implements IPolyline {
	constructor(points?: PointVariant[]) {
		super();

		if (points) {
			points.forEach((point) => {
				this.push(point instanceof Point ? point : new Point(point));
			});
		}

		Object.setPrototypeOf(this, Object.create(Multipoint.prototype));
	}

	get bound(): IBound {
		return getBoundByMultiline(this)
	}
}
