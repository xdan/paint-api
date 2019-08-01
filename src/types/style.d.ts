export interface IRGB {
	r: number;
	g: number;
	b: number;
	hex: string;
	set(r: number, g: number, b: number): void;
}

export interface IStyle {
	color: IRGB;
	opacity: number;
	strokeWidth: number;
	lineCap: 'butt' | 'round' | 'square';
}
