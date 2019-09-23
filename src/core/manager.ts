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
import { isOnLine, isInRound, findRectVertices, ucfirst } from './helpers/';
import { HANDLE_RADIUS } from '../const';

function getPerpOfLine(start: IPoint, end: IPoint): [IPoint, IPoint] {
	const x = (start.x + end.x) / 2;
	const y = (start.y + end.y) / 2;
	const dx = (end.x - start.x) / 3;
	const dy = (end.y - start.y) / 3;

	return [
		{ x, y },
		{
			x: x + dy,
			y: y - dx
		}
	];
}

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

	private getBoundLines(
		bound: IBound,
		angle: number
	): Array<[IPoint, IPoint]> {
		const realBox = findRectVertices(bound, angle);

		return [
			[realBox.LT, realBox.RT],

			[realBox.RT, realBox.RB],

			[realBox.LB, realBox.RB],

			[realBox.LT, realBox.LB],

			getPerpOfLine(realBox.LT, realBox.RT)
		];
	}

	private getCorners(bound: IBound, angle: number): IRound[] {
		const realBox = findRectVertices(bound, angle);

		return [
			{
				...realBox.LT,
				r: HANDLE_RADIUS
			},
			{
				...realBox.RT,
				r: HANDLE_RADIUS
			},
			{
				...realBox.RB,
				r: HANDLE_RADIUS
			},
			{
				...realBox.LB,
				r: HANDLE_RADIUS
			},
			{
				...getPerpOfLine(realBox.LT, realBox.RT)[1],
				r: HANDLE_RADIUS
			}
		];
	}

	draw(render: IRender, cursor: IPoint): void {
		render.save();
		render.setStyle(this.styles.line);

		const geometry = this.shape.geometry,
			bound = this.shape.bound;

		const lines = this.getBoundLines(bound, geometry.angle);

		lines.forEach(line => {
			render.setStyle(
				isOnLine(cursor, line) ? this.styles.active : this.styles.line
			);

			render.drawLine(line[0], line[1]);
		});

		const corners = this.getCorners(bound, geometry.angle);

		corners.forEach(corner => {
			render.setStyle(
				isInRound(cursor, corner)
					? this.styles.active
					: this.styles.round
			);

			render.drawCircle(corner, true);
		});

		render.restore();
	}

	fire(eventName: keyof EventTypes, e: IMouseSyntheticEvent): void {
		const bound = this.shape.bound;

		const geometry = this.shape.geometry,
			lines = this.getBoundLines(bound, geometry.angle),
			type = ucfirst(eventName.toString()),
			es = { ...e, shape: this.shape };

		e.api.events.fire('shape.' + type, es);

		lines.forEach(line => {
			if (isOnLine(e, line)) {
				e.api.events.fire('border.' + type, es, line);
			}
		});

		const corners = this.getCorners(bound, geometry.angle);

		corners.forEach(corner => {
			console.log(e, corner);
			if (isInRound(e, corner)) {
				e.api.events.fire('corner.' + type, { ...es, corner });
			}
		});
	}
}
