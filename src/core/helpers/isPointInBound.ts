import { IBound, IPoint } from "../../types";

export function isPointInBound(point: IPoint, box: IBound) {
	return point.x >= box.x && point.y >= box.y && point.x <= box.x + box.w && point.y <= box.y + box.h;
}
