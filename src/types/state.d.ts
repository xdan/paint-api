import { ILayer } from './layer';
import { IObservableArray } from './array';
import { IGeometry, IPoint } from './geometry';
import { IShape } from './shape';

export const enum SceneSteps {
	nope,
	drag,
	scale,
	draw
}

export const enum Modes {
	nope,
	select,
	draw
}

export interface IState {
	layers: IObservableArray<ILayer>;

	width: number;
	height: number;

	zoom: number;
	offset: [number, number];
	selection: null | IGeometry;

	step: SceneSteps;
	mode: Modes;

	cursor: IPoint & {
		draw: boolean;
	};

	options: {
		showFPS: boolean;
	};

	behaviours: {
		selectShapeOnMouseEnter: boolean;
	};

	shapes: {
		active: IShape[];
		hover: IShape[];
	};
}
