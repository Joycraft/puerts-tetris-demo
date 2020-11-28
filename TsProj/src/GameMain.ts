import { JsManager } from 'csharp';
import { EVT, GlobalEvent } from './Puerts/GlobalEvent';
require('./game/rotate');
require('./game/tetris');

class GameMain {
    constructor() {
        JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        JsManager.Instance.JsOnDispose = () => this.onDispose();
        JsManager.Instance.JsOnUpdate = () => this.onUpdate();
    }

    public onUpdate() {
        GlobalEvent.emitter.emit(EVT.UPDATE_TICK);
    }

    public onApplicationQuit() {
        console.log("Game onApplicationQuit in JS....");
    }

    public onDispose() {
        console.log("Game onDispose in JS....");
    }
}

global['GameMain'] = new GameMain();