import { IStyle } from './style';
import { IRender } from './render';
import { IShape } from './shape';
import { IPoint } from './geometry';
import { EventTypes, ISyntheticEvent } from './event';

export interface IManager {
	shape: IShape;

	styles: {
		round: IStyle;
		line: IStyle;
		active: IStyle;
	};

	draw(render: IRender, cursor: IPoint): void;

	checkEvent(eventName: keyof EventTypes, e: ISyntheticEvent): void;
}
