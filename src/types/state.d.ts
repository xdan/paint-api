import { ILayer } from "./layer";
import { IObservableArray } from "./array";
import { IPoint } from "./geometry";
import { IShape } from "./shape";

export interface IState {
	layers: IObservableArray<ILayer>;

	width: number;
	height: number;

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
