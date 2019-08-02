import { IRGB } from '../types';

export class RGB implements IRGB {
	r: number;
	g: number;
	b: number;

	constructor(r: number = 0, g: number = 0, b: number = 0) {
		this.set(r, g, b);
	}

	set(r: number, g: number, b: number) {
		this.r = r;
		this.g = g;
		this.b = b;
	}

	set hex(value: string) {
		if (value.length < 6) {
			value = value.replace(/([A-F0-9])/gi, '$1$1');
		}

		const bigint = parseInt(
			value.indexOf('#') === 0 ? value.substr(1) : value,
			16
		);

		this.r = (bigint >> 16) & 255;
		this.g = (bigint >> 8) & 255;
		this.b = bigint & 255;
	}

	get hex(): string {
		return (
			'#' +
			((1 << 24) + (this.r << 16) + (this.g << 8) + this.b)
				.toString(16)
				.slice(1)
		);
	}
}
