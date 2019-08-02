export interface IRGB {
	r: number;
	g: number;
	b: number;
	hex: string;
	set(r: number, g: number, b: number): void;
}

export interface IStyleRaw {
	color?: string;
	fillColor?: string;
	opacity?: number;
	strokeWidth?: number;
	lineCap?: 'butt' | 'round' | 'square';
	dash?: [number, number] | [];
	[key: string]: number | string | undefined | [number, number] | [];
}

export interface IStyle {
	color: IRGB;
	fillColor: IRGB;
	opacity: number;
	strokeWidth: number;
	lineCap: 'butt' | 'round' | 'square';
	dash: [number, number] | [];
}
