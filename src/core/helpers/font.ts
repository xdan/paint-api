import { IFont } from '../../types';

export type FontStyle = 'normal' | 'italic' | 'bold';

export class Font implements IFont {
	set(
		size: number = 20,
		family: string = 'Arial',
		style: FontStyle = 'normal'
	) {
		this.size = size;
		this.family = family;
		this.style = style;
	}

	constructor(
		size: number = 20,
		family: string = 'Arial',
		style: FontStyle = 'normal'
	) {
		this.set(size, family, style);
	}

	size: number;
	family: string;
	style: FontStyle;

	toString() {
		return `${this.style} ${this.size}px ${this.family}`;
	}
}
