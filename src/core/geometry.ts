import { IBound, IGeometry } from "../types";

export abstract class Geometry implements IGeometry {
	abstract bound: IBound;
}
