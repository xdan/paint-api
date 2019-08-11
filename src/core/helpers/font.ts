import { IFont } from '../../types';

export class Font implements IFont {
	size: number = 20;
	family: string = 'Arial';
	style: 'normal' | 'italic' | 'bold' = 'normal';

	toString() {
		return `${this.style} ${this.size}px ${this.family}`;
	}
}
