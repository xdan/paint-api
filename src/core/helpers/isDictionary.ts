import { IDictionary } from '../../types';

export function isDictionary(obj: unknown): obj is IDictionary {
	return (
		typeof obj === 'object' &&
		obj !== null &&
		obj.constructor.name === 'Object' &&
		!Array.isArray(obj)
	);
}
