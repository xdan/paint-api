import { Style } from './style';
import {
	EventTypes,
	IBound,
	IManager,
	IMouseSyntheticEvent,
	IPoint,
	IRender,
	IRound,
	IShape
} from '../types';
import { isOnLine, isInRound } from './helpers/';
import { HANDLE_RADIUS } from '../const';
import { ucfirst } from './helpers/ucfirst';

export class Manager implements IManager {
	constructor(readonly shape: IShape) {}

	styles = {
		round: new Style({
			fillColor: '#0d80ff',
			dash: [],
			color: '#005d7f'
		}),

		line: new Style({
			fillColor: '#0d80ff',
			opacity: 0.3,
			dash: [5, 1],
			color: '#005d7f'
		}),

		active: new Style({
			fillColor: '#00b8ff',
			dash: [5, 1],
			color: '#cccccc'
		})
	};

	private getBoundLines(bound: IBound): Array<[IPoint, IPoint]> {
		return [
			[
				{ x: bound.x + HANDLE_RADIUS, y: bound.y },
				{ x: bound.x + bound.w - HANDLE_RADIUS, y: bound.y }
			],

			[
				{ x: bound.x + bound.w, y: bound.y + HANDLE_RADIUS },
				{ x: bound.x + bound.w, y: bound.y + bound.h - HANDLE_RADIUS }
			],

			[
				{ x: bound.x + HANDLE_RADIUS, y: bound.y + bound.h },
				{ x: bound.x + bound.w - HANDLE_RADIUS, y: bound.y + bound.h }
			],

			[
				{ x: bound.x, y: bound.y + HANDLE_RADIUS },
				{ x: bound.x, y: bound.y + bound.h - HANDLE_RADIUS }
			]
		];
	}

	private getCorners(bound: IBound): IRound[] {
		return [
			{
				x: bound.x,
				y: bound.y,
				r: HANDLE_RADIUS
			},
			{
				x: bound.x + bound.w,
				y: bound.y,
				r: HANDLE_RADIUS
			},
			{
				x: bound.x + bound.w,
				y: bound.y + bound.h,
				r: HANDLE_RADIUS
			},
			{
				x: bound.x,
				y: bound.y + bound.h,
				r: HANDLE_RADIUS
			}
		];
	}

	draw(render: IRender, cursor: IPoint): void {
		render.setStyle(this.styles.line);

		const bound = this.shape.bound;

		const lines = this.getBoundLines(bound);

		lines.forEach(line => {
			render.setStyle(
				isOnLine(cursor, line) ? this.styles.active : this.styles.line
			);

			render.drawLine(line[0], line[1]);
		});

		const corners = this.getCorners(bound);

		corners.forEach(corner => {
			render.setStyle(
				isInRound(cursor, corner)
					? this.styles.active
					: this.styles.round
			);

			render.drawCircle(corner, true);
		});

		render.resetStyle();
	}

	fire(eventName: keyof EventTypes, e: IMouseSyntheticEvent): void {
		const bound = this.shape.bound;

		const lines = this.getBoundLines(bound),
			type = ucfirst(eventName.toString()),
			es = { ...e, shape: this.shape };

		e.api.events.fire('shape' + type, es);

		lines.forEach(line => {
			if (isOnLine(e, line)) {
				e.api.events.fire('border' + type, es, line);
			}
		});

		const corners = this.getCorners(bound);

		corners.forEach(corner => {
			if (isInRound(e, corner)) {
				e.api.events.fire('corner' + type, { ...es, corner });
			}
		});
	}
}
