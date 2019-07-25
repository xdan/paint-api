import { ILayer } from "./layer";
import { DrawOptions, IRender } from "./render";
import { IGeometry } from "./geometry";

export interface IShape extends ILayer {
	geometry: IGeometry;
	drawGeometry(render: IRender, opt: DrawOptions): void;
}
