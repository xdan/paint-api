import { IGeometry, ITransform } from '../types';

export abstract class Transform implements ITransform {
	static apply(transforms: ITransform[], geometry: IGeometry): IGeometry {
		return transforms.reduce(
			(geometry, transformation) => transformation.apply(geometry),
			geometry
		);
	}

	abstract apply(geometry: IGeometry): IGeometry;
}
