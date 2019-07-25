import { Api } from './core/api';
import { Layer } from './core/layer';
import * as Transforms from './core/transforms';
import * as Geometries from './core/geometries';
import * as Shapes from './shapes';

Object.keys(Shapes).forEach((key) => {
	Api.Shapes[key] = (<any>Shapes)[key];
});

Object.keys(Geometries).forEach((key) => {
	Api.Geometries[key] = (<any>Geometries)[key];
});

Object.keys(Transforms).forEach((key) => {
	Api.Transforms[key] = (<any>Transforms)[key];
});

(<any>Api).Layer = Layer;

export const PaintApi = Api;
