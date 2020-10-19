import * as events from 'events';

export enum EVT {
    UPDATE_TICK = 'updateTick',
}

export class globalEvent {
    static emitter: events.EventEmitter = new events.EventEmitter();
}