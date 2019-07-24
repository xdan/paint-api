import { IBound, IPoint } from "./global";

export type ImageSource = CanvasImageSource;

export interface IRender {
	getContainer(): HTMLElement | null;
	setSize(w: number, h: number): void;
	clear(): void;

	drawImage(image: ImageSource, bound: IBound): void;

	drawCircle(x: number, y: number, r: number): void;
	drawPolyline(points: IPoint[]): void;

	drawRectangle(bound: IBound, fill: boolean): void;
	drawCursor(bound: IPoint): void;
}

export interface DrawOptions {
	drawBound?: boolean;
	drawBoundIfInPoint?: boolean;
	cursor: IPoint;
}
