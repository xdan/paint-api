import { IRender, DrawOptions } from "./render";

export interface ILayer {
	shapes: ILayer[];
	draw(canvas: IRender, opt: DrawOptions): void;
}
