import { IBound, ImageSource, IPoint, IRender } from "../types/";

export class Render implements IRender {
	private context: CanvasRenderingContext2D;
	container: HTMLElement | null = null;

	getContainer(): HTMLElement | null {
		return this.container;
	}

	private state = {
		width: 0,
		height: 0,
	};

	protected constructor(width: number = 400, height: number = 400) {
		this.makeCanvas(width, height);
	}

	static create(width: number, height: number): IRender {
		return new Render(width, height);
	}

	protected makeCanvas(width: number, height: number) {
		const
			canvas = document.createElement("canvas");

		if (!canvas) {
			throw new Error('Canvas was not created');
		}

		const ctx = canvas.getContext("2d");

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

		this.context.canvas.width  = width;
		this.context.canvas.height = height;

		this.container.style.width = width + 'px';
		this.container.style.height = height + 'px';
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

	drawCircle(x: number, y: number, r: number): void {
		this.context.beginPath();
		this.context.arc(x, y, r, 0, 2 * Math.PI);
		this.context.stroke();
	}

	drawPolyline(points: IPoint[]): void {
		this.context.beginPath();

		this.context.setLineDash([2, 2]);

		points.forEach(({x, y}, index) => {
			if (!index) {
				this.context.moveTo(x, y);
			}

			this.context.lineTo(x, y);
		});

		this.context.stroke();

		this.context.setLineDash([]);
	}

	drawRectangle(bound: IBound, fill: boolean): void {
		if (fill) {
			this.context.fillRect(bound.x, bound.y, bound.w, bound.h);

		} else {
			this.context.rect(bound.x, bound.y, bound.w, bound.h);
			this.context.stroke();
		}
	}

	drawCursor({x, y}: IPoint): void {
		this.context.beginPath();

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
}
