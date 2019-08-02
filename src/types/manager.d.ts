import { IStyle } from './style';
import { IRender } from './render';
import { IShape } from './shape';
import { IPoint } from './geometry';

export interface IManager {
	shape: IShape;

	styles: {
		round: IStyle;
		line: IStyle;
		active: IStyle;
	};

	draw(render: IRender, cursor: IPoint): void;
}
