export interface IRGB {
	r: number;
	g: number;
	b: number;
	hex: string;
	set(r: number, g: number, b: number): void;
	toString(): string;
}

export interface IFont {
	size: number;
	family: string;
	style: 'normal' | 'italic' | 'bold';

	set(
		size: number,
		family: string,
		style: 'normal' | 'italic' | 'bold'
	): void;

	toString(): string;
}

export interface IStyleRaw {
	color?: string;
	fillColor?: string;
	opacity?: number;
	strokeWidth?: number;
	lineCap?: 'butt' | 'round' | 'square';
	dash?: [number, number] | [];
	font?: IFont;
	textBaseline?: 'alphabetic' | 'top' | 'middle' | 'bottom' | 'hanging';
	[key: string]: number | string | undefined | [number, number] | [] | IFont;
}

export interface IStyle {
	color: IRGB;
	fillColor: IRGB;
	opacity: number;
	strokeWidth: number;
	lineCap: 'butt' | 'round' | 'square';
	dash: [number, number] | [];
	textBaseline: 'alphabetic' | 'top' | 'middle' | 'bottom' | 'hanging';
	font: IFont;
	clone(): IStyle;
}
