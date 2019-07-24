import { Api } from './core/api';
import { Layer } from './core/layer';
import * as Shapes from './shapes';

Object.keys(Shapes).forEach((key) => {
	(<any>Api)[key] = (<any>Shapes)[key];
});

(<any>Api).Layer = Layer;

export const PaintApi = Api;
