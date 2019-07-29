import { IBound, IPoint, IPolyline, IRound } from './geometry';
import { IStyle } from './style';

export type ImageSource = CanvasImageSource;

export interface IRender {
	getContainer(): HTMLElement | null;
	setSize(w: number, h: number): void;
	clear(): void;

	setStyle(style: IStyle): void;
	resetStyle(): void;

	drawImage(image: ImageSource, bound: IBound): void;

	drawCircle(round: IRound): void;

	drawPolyline(points: IPolyline): void;

	drawRectangle(bound: IBound, fill: boolean): void;

	drawCursor(point: IPoint): void;

	drawText(point: IPoint, text: string): void;
}

export interface DrawOptions {}
