import { IBound } from "./global";
import { ILayer } from "./layer";
import { DrawOptions, IRender } from "./render";

export interface IShape extends ILayer {
	bound: IBound;
	drawGeometry(render: IRender, opt: DrawOptions): void;
}
