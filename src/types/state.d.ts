import { ILayer } from "./layer";
import { IObservableArray } from "./array";
import { IPoint } from "./geometry";
import { IShape } from "./shape";

export const enum SceneSteps {
	drag,
	scale,
	draw,
	nope
}

export interface IState {
	layers: IObservableArray<ILayer>;

	width: number;
	height: number;

	step: SceneSteps;

	cursor: IPoint & {
		draw: boolean;
	},

	options: {
		showFPS: boolean;
	}

	behaviours: {
		selectShapeOnMouseEnter: boolean;
	}

	shapes: {
		active: IShape[],
		hover: IShape[],
	}
}
