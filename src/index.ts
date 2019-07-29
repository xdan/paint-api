import { Api } from './core/api';
import { Layer } from './core/layer';
import * as Transforms from './core/transforms';
import * as Geometries from './core/geometries';
import * as Shapes from './shapes';

Object.keys(Shapes).forEach(key => {
	Api.Shapes[key] = (Shapes as any)[key];
});

Object.keys(Geometries).forEach(key => {
	Api.Geometries[key] = (Geometries as any)[key];
});

Object.keys(Transforms).forEach(key => {
	Api.Transforms[key] = (Transforms as any)[key];
});

(Api as any).Layer = Layer;

export const PaintApi = Api;
