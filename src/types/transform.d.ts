import { IGeometry } from "./geometry";

export interface ITransform {
	apply(geometry: IGeometry): IGeometry;
}
