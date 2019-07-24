import { EventTypes, Handler, IDictionary, IEventer, RequiredParamsList } from "../../types";

export class Eventer<T> implements IEventer<T> {
	constructor(readonly host: T) {}

	private state = {
		listeners: <IDictionary<Handler<T>[]>>{}
	};

	on<K extends keyof EventTypes>(event: K, callback: Handler<T, EventTypes[K]>): Eventer<T> {
		const { listeners } = this.state;

		if (!listeners[event]) {
			listeners[event] = [];
		}

		listeners[event].push(callback);

		return this;
	};

	fire<K extends keyof EventTypes>(event: K, args: RequiredParamsList[K]): Eventer<T> {
		const { listeners } = this.state;

		if (listeners[event]) {
			listeners[event].forEach((callback) => callback.call(this.host, {
				type: event,
				...args
			}));
		}

		return this;
	};
}
