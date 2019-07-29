import { IStyle } from '../types/';
import { RGB } from './rgb';

export class Style implements IStyle {
	color = new RGB();
	opacity = 0;
	strokeWidth = 1;
}
