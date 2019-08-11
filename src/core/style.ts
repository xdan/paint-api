import { IStyle, IStyleRaw } from '../types/';
import { RGB } from './rgb';
import { Font } from './helpers';

export class Style implements IStyle {
	color = new RGB();
	fillColor = new RGB();
	opacity = 0;
	strokeWidth = 1;
	lineCap: 'butt' | 'round' | 'square' = 'round';
	dash: [number, number] | [] = [];
	textBaseline: 'alphabetic' | 'top' | 'middle' | 'bottom' | 'hanging' =
		'top';
	font = new Font();

	constructor(raw?: IStyleRaw) {
		if (raw) {
			Object.keys(raw).forEach(key => {
				const value = raw[key];
				if (value !== undefined) {
					switch (key) {
						case 'fillColor':
						case 'color':
							this[key].hex = value.toString();
							break;

						default:
							(this as any)[key] = raw[key];
					}
				}
			});
		}
	}
}
