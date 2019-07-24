import { ILayer } from "./layer";
import { IObservableArray } from "./array";
import { IPoint } from "./global";

export interface IState {
	layers: IObservableArray<ILayer>;

	width: number;
	height: number;

	cursor: IPoint & {
		draw: boolean;
	},

	behaviours: {
		selectShapeOnMouseEnter: boolean;
	}
}
