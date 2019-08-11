import { IFont, IRGB, IStyle, IStyleRaw } from '../types/';
import { Font, RGB } from './helpers';

export class Style implements IStyle {
	color: IRGB = new RGB();
	fillColor: IRGB = new RGB();
	opacity = 0;
	strokeWidth = 1;
	lineCap: 'butt' | 'round' | 'square' = 'round';
	dash: [number, number] | [] = [];
	textBaseline: 'alphabetic' | 'top' | 'middle' | 'bottom' | 'hanging' =
		'top';
	font: IFont = new Font();

	set(key: string, value: any): void {
		if (value !== undefined) {
			switch (key) {
				case 'font':
					if (value instanceof Font) {
						this.font.set(value.size, value.family, value.style);
					}

					break;
				case 'fillColor':
				case 'color':
					this[key].hex = value.toString();
					break;

				default:
					(this as any)[key] = value;
			}
		}
	}

	constructor(raw?: IStyleRaw) {
		if (raw) {
			Object.keys(raw).forEach(key => {
				this.set(key, raw[key]);
			});
		}
	}

	clone(): IStyle {
		const style = new Style();

		Object.keys(this).forEach(key => {
			style.set(key, (this as any)[key]);
		});

		return style;
	}
}
