import { IBothTransform, IShapeRecord } from '../../types';
import { BothTransform } from '../transform';
import { Bound, Multipoint, Point, Round } from '../geometries';

export class Zoom extends BothTransform implements IBothTransform {
	constructor(sx: number = 1, sy: number = sx) {
		super();

		this.x = sx;
		this.y = sy;
	}

	apply(r: IShapeRecord): IShapeRecord {
		const zoom = this.x;

		if (zoom === 1) {
			return r;
		}

		const style = r.style.clone();

		style.font.size = r.style.font.size * zoom;
		if (r.style.font.size > 30) {
			console.log(style.font.toString());
		}

		const g = r.geometry;

		if (g instanceof Round || g instanceof Bound) {
			return {
				style,
				geometry:
					g instanceof Round
						? new Round(g.x * zoom, g.y * zoom, g.r * zoom, g.rv * zoom)
						: new Bound(g.x * zoom, g.y * zoom, g.w * zoom, g.h * zoom)
			};
		}

		if (g instanceof Multipoint) {
			const ng = new Multipoint();

			g.forEach(point => {
				ng.push(new Point(point.x * zoom, point.y * zoom));
			});

			return {
				style,
				geometry: ng
			};
		}

		return r;
	}
}
