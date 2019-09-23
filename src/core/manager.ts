import { Style } from './style';
import {
	EventTypes,
	IBound,
	ICorner,
	IManager,
	IMouseSyntheticEvent,
	IPoint,
	IRender,
	IRound,
	IShape
} from '../types';

import {
	isOnLine,
	isInRound,
	findRectVertices,
	getPerpOfLine
} from './helpers/';

import { HANDLE_RADIUS } from '../const';

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

	private getHandles(bound: IBound, angle: number): Array<IRound & ICorner> {
		const realBox = findRectVertices(bound, angle);

		return [
			{
				type: 'LT',
				...realBox.LT,
				r: HANDLE_RADIUS
			},
			{
				type: 'RT',
				...realBox.RT,
				r: HANDLE_RADIUS
			},
			{
				type: 'RB',
				...realBox.RB,
				r: HANDLE_RADIUS
			},
			{
				type: 'LB',
				...realBox.LB,
				r: HANDLE_RADIUS
			},
			{
				type: 'CT',
				...realBox.CT,
				r: HANDLE_RADIUS
			},
			{
				type: 'CT',
				x: bound.x + bound.w / 2,
				y: bound.y + bound.h / 2,
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

		const corners = this.getHandles(bound, geometry.angle);

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

	checkEvent(eventName: keyof EventTypes, e: IMouseSyntheticEvent): void {
		const bound = this.shape.bound;
		const geometry = this.shape.geometry;
		const es = { ...e, shape: this.shape };

		this.getBoundLines(bound, geometry.angle).forEach(line => {
			if (isOnLine(e, line)) {
				e.api.events.fire('border.' + eventName, es, line);
			}
		});

		this.getHandles(bound, geometry.angle).forEach(corner => {
			if (isInRound(e, corner)) {
				e.api.events.fire('corner.' + eventName, { ...es, corner });
			}
		});
	}
}
