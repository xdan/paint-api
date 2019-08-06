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
		event: K,
		callback: Handler<T, EventTypes[K]>
	): Eventer<T> {
		if (!this.listeners[event]) {
			this.listeners[event] = [];
		}

		this.listeners[event].push(callback);

		return this;
	}

	fire<K extends keyof EventTypes>(
		event: K,
		args: RequiredParamsList[K]
	): Eventer<T> {
		if (this.listeners[event]) {
			this.listeners[event].forEach(callback =>
				callback.call(this.host, {
					type: event,
					...args
				})
			);
		}

		return this;
	}
}
