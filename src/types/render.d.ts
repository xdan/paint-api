import { IBound, IPoint, IPolyline, IRound } from './geometry';
import { IStyle } from './style';

export type ImageSource = CanvasImageSource;

export interface IRender {
	getContainer(): HTMLElement | null;
	setSize(w: number, h: number): void;
	clear(): void;

	setZoom(value: number): void;
	setStyle(style: IStyle): void;
	resetStyle(): void;

	drawPoint(point: IPoint): void;
	drawImage(image: ImageSource, bound: IBound): void;

	drawCircle(round: IRound, fill?: boolean): void;

	drawPolyline(points: IPolyline): void;
	drawLine(pointA: IPoint, pointB: IPoint): void;

	drawRectangle(bound: IBound, fill?: boolean): void;

	drawCursor(point: IPoint): void;

	drawText(point: IPoint, text: string): void;
	measureText(text: string): IBound;

	rotate(point: IPoint, angle: number): void;
	save(): void;
	restore(): void;
}

export interface DrawOptions {}
