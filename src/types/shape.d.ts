import { ILayer } from "./layer";
import { DrawOptions, IRender } from "./render";
import { IGeometry } from "./geometry";
import { ITransform } from "./transform";

export interface IShape extends ILayer {
	transforms: ITransform[];
	geometry: IGeometry;
	drawGeometry(render: IRender, opt: DrawOptions): void;
}
