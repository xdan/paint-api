import { Callback, IDictionary } from "../../types";
import { isDictionary } from "../helpers/isDictionary";
import { ObserveArray } from "./array";

export class ObserveObject {
	setItem(data: IDictionary, key: string, value: unknown): void {
		if (isDictionary(value)) {
			data[key] = ObserveObject.create(value, this.change);

		} else if (Array.isArray(value) && !(value instanceof ObserveArray)) {
			data[key] = ObserveArray.create(value, this.change);

		} else if (data[key] !== value) {
			data[key] = value;
		}
	}

	protected constructor(readonly data: IDictionary, readonly change: Callback) {
		Object.keys(data).forEach((key) => {
			this.setItem(data, key, data[key]);

			Object.defineProperty(this, key, {
				set: (value) => {
					this.setItem(data, key, value);

					change();
				},
				get: () => {
					return data[key];
				}
			})
		});
	}

	static create<T, K extends T & Object = T & Object>(data: T, change: Callback): K {
		return (new ObserveObject(data, change)) as any;
	}
}
