import { isDictionary } from './index';
import { IDictionary } from '../../types';

export function mergeDeep(...objects: unknown[]) {
	return objects.reduce<IDictionary>((prev, obj) => {
		if (isDictionary(obj)) {
			Object.keys(obj).forEach(key => {
				const pVal = prev[key];
				const oVal = obj[key];

				if (Array.isArray(pVal) && Array.isArray(oVal)) {
					prev[key] = pVal.concat(...oVal);
				} else if (isDictionary(pVal) && isDictionary(oVal)) {
					prev[key] = mergeDeep(pVal, oVal);
				} else {
					prev[key] = oVal;
				}
			});
		}

		return prev;
	}, {});
}
