import { IObservableArray } from '../../types/';

export class ObserveArray<T> extends Array<T> implements IObservableArray<T> {
	change: () => any;

	private constructor() {
		super();
	}

	static create<T>(items: T[], change: () => any): ObserveArray<T> {
		const array = Object.create(ObserveArray.prototype);

		Array.prototype.push.call(array, ...items);
		array.change = change;

		return array;
	}

	push(...items: T[]): number {
		const res = super.push(...items);
		this.change();
		return res;
	}

	pop(): T | undefined {
		const item = super.pop();
		this.change();
		return item;
	}

	shift(): T | undefined {
		const item = super.shift();
		this.change();
		return item;
	}

	unshift(...items: T[]): number {
		const res = super.unshift(...items);
		this.change();
		return res;
	}

	set(index: number, value: T) {
		if (this[index] !== value) {
			this[index] = value;
			this.change();
		}
	}
}
