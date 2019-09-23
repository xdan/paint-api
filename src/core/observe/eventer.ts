import {
	EventTypes,
	Handler,
	IDictionary,
	IEventer,
	RequiredParamsList
} from '../../types';

type ListenStore<T> = IDictionary<Array<Handler<T>>>;

export class Eventer<T> implements IEventer<T> {
	constructor(readonly host: T) {}
	private listeners: ListenStore<T> = {};

	on<K extends keyof EventTypes>(
		event: K & string,
		callback: Handler<T, EventTypes[K]>
	): Eventer<T> {
		const eventName = event.toLowerCase();

		if (!this.listeners[eventName]) {
			this.listeners[eventName] = [];
		}

		this.listeners[eventName].push(callback);

		return this;
	}

	fire<K extends keyof EventTypes>(
		event: K & string,
		args: RequiredParamsList[K]
	): Eventer<T> {
		const eventName = event.toLowerCase();

		if (this.listeners[eventName]) {
			this.listeners[eventName].forEach(callback =>
				callback.call(this.host, {
					type: eventName,
					...args
				})
			);
		}

		return this;
	}
}
