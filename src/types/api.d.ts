import { IRender } from './render';
import { IEventer } from './event';
import { IState, Modes } from './state';
import { IGeometryTransform } from './transform';

export interface IApi {
	render: IRender;
	events: IEventer<IApi>;
	state: IState;
	setMode(mode: Modes): void;
	draw(): void;
	bind(root: HTMLElement): void;

	mainTransforms: {
		zoom: IGeometryTransform;
		offset: IGeometryTransform;
	};
}
