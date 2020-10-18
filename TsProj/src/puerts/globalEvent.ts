import * as events from 'events';

export enum EVT {
    UPDATE_TICK = 'updateTick',
}

export class globalEvent {
    static ins: globalEvent = new globalEvent();
    emitter: events.EventEmitter = null;

    constructor() {
        this.emitter = new events.EventEmitter();
    }

}