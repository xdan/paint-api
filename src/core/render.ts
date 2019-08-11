import {
	IBound,
	ImageSource,
	IPoint,
	IRender,
	IRound,
	IStyle
} from '../types/';
import { Style } from './style';

export class Render implements IRender {
	private context: CanvasRenderingContext2D;
	container: HTMLElement | null = null;

	getContainer(): HTMLElement | null {
		return this.container;
	}

	private state = {
		width: 0,
		height: 0
	};

	protected constructor(width: number = 400, height: number = 400) {
		this.makeCanvas(width, height);
	}

	static create(width: number, height: number): IRender {
		return new Render(width, height);
	}

	protected makeCanvas(width: number, height: number) {
		const canvas = document.createElement('canvas');

		if (!canvas) {
			throw new Error('Canvas was not created');
		}

		const ctx = canvas.getContext('2d');

		if (!ctx) {
			throw new Error('Canvas context was not created');
		}

		this.context = ctx;

		this.container = canvas;
		this.setSize(width, height);
	}

	protected changeSize(width: number, height: number) {
		if (!this.container) {
			return;
		}

		this.context.canvas.width = width;
		this.context.canvas.height = height;

		this.container.style.width = width + 'px';
		this.container.style.height = height + 'px';
	}

	setZoom(value: number): void {
		this.context.scale(value, value);
	}

	setSize(width: number, height: number) {
		if (width !== this.state.width || height !== this.state.height) {
			this.changeSize(width, height);
			this.state.width = width;
			this.state.height = height;
		}
	}

	clear(): void {
		this.context.clearRect(0, 0, this.state.width, this.state.height);
	}

	drawImage(image: ImageSource, bound: IBound): void {
		this.context.drawImage(image, bound.x, bound.y, bound.w, bound.h);
	}

	drawCircle(round: IRound, fill: boolean = false): void {
		this.context.beginPath();

		if (round.r === round.rv || !round.rv) {
			this.context.arc(round.x, round.y, round.r, 0, 2 * Math.PI);
		} else {
			this.context.ellipse(
				round.x,
				round.y,
				round.r,
				round.rv,
				0,
				0,
				2 * Math.PI
			);
		}

		if (fill) {
			this.context.fill();
		}

		this.context.stroke();
	}

	drawPolyline(points: IPoint[]): void {
		if (points.length < 2) {
			return;
		}

		this.context.beginPath();

		this.context.moveTo(points[0].x, points[0].y);

		for (let i = 1; i < points.length - 2; i += 1) {
			const xc = (points[i].x + points[i + 1].x) / 2,
				yc = (points[i].y + points[i + 1].y) / 2;

			this.context.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
		}

		this.context.quadraticCurveTo(
			points[points.length - 2].x,
			points[points.length - 2].y,
			points[points.length - 2 + 1].x,
			points[points.length - 2 + 1].y
		);

		this.context.stroke();
	}

	drawLine(pointA: IPoint, pointB: IPoint): void {
		this.context.beginPath();
		this.context.moveTo(pointA.x, pointA.y);
		this.context.lineTo(pointB.x, pointB.y);
		this.context.stroke();
	}

	drawRectangle(bound: IBound, fill: boolean): void {
		this.context.beginPath();

		if (fill) {
			this.context.fillRect(bound.x, bound.y, bound.w, bound.h);
		} else {
			this.context.rect(bound.x, bound.y, bound.w, bound.h);
		}

		this.context.stroke();
	}

	drawCursor({ x, y }: IPoint): void {
		this.context.beginPath();
		this.context.lineWidth = 1;

		this.context.setLineDash([2, 2]);

		this.context.moveTo(x, y - 5);
		this.context.lineTo(x, y - 5);
		this.context.lineTo(x, y + 5);

		this.context.moveTo(x - 5, y);
		this.context.lineTo(x - 5, y);
		this.context.lineTo(x + 5, y);

		this.context.stroke();

		this.context.setLineDash([]);
	}

	drawText({ x, y }: IPoint, text: string): void {
		if (x < 0) {
			const metrics = this.context.measureText(text);

			x += this.state.width - metrics.width;
		}

		this.context.fillText(text, x, y);
	}

	private defaultStyle = new Style();

	setStyle(style: IStyle): void {
		this.context.strokeStyle = style.color.hex;
		this.context.fillStyle = style.fillColor.hex;
		this.context.lineWidth = style.strokeWidth;
		this.context.lineCap = style.lineCap;
		this.context.globalAlpha = 1 - style.opacity;
		this.context.setLineDash(style.dash);
	}

	resetStyle(): void {
		this.setStyle(this.defaultStyle);
	}
}
