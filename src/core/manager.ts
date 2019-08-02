import { Style } from './style';
import { IBound, IManager, IPoint, IRender, IShape } from '../types';
import { isOnLine } from './helpers/isOnLine';

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
			fillColor: '#ff00ff',
			dash: [5, 1],
			color: '#cccccc'
		})
	};

	private getBoundLines(
		bound: IBound,
		handleRadius: number
	): Array<[IPoint, IPoint]> {
		return [
			[
				{ x: bound.x + handleRadius, y: bound.y },
				{ x: bound.x + bound.w - handleRadius, y: bound.y }
			],

			[
				{ x: bound.x + bound.w, y: bound.y + handleRadius },
				{ x: bound.x + bound.w, y: bound.y + bound.h - handleRadius }
			],

			[
				{ x: bound.x + handleRadius, y: bound.y + bound.h },
				{ x: bound.x + bound.w - handleRadius, y: bound.y + bound.h }
			],

			[
				{ x: bound.x, y: bound.y + handleRadius },
				{ x: bound.x, y: bound.y + bound.h - handleRadius }
			]
		];
	}

	draw(render: IRender, cursor: IPoint): void {
		render.setStyle(this.styles.line);

		const handleRadius = 4,
			bound = this.shape.geometry.bound,
			round = {
				x: bound.x,
				y: bound.y,
				r: handleRadius
			};

		const lines = this.getBoundLines(bound, handleRadius);
		lines.forEach(line => {
			render.setStyle(
				isOnLine(cursor, line) ? this.styles.active : this.styles.line
			);

			render.drawLine(line[0], line[1]);
		});

		render.setStyle(this.styles.round);

		render.drawCircle(round, true);

		render.drawCircle(
			{
				...round,
				x: bound.x + bound.w
			},
			true
		);

		render.drawCircle(
			{
				...round,
				x: bound.x + bound.w,
				y: bound.y + bound.h
			},
			true
		);

		render.drawCircle(
			{
				...round,
				y: bound.y + bound.h
			},
			true
		);

		render.resetStyle();
	}
}
