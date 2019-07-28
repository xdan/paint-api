export interface IGeometry {
	bound: IBound;
	center: IPoint;
}

export interface IPoint {
	x: number;
	y: number;
}

export interface IRound extends IPoint {
	r: number;
}

export interface IBound extends IPoint {
	w: number;
	h: number;
}

export interface IPolyline extends Array<IPoint> {
	[key: number]: IPoint
}

type PointVariant = IPoint | [number, number];
