import { JsManager } from 'csharp';
import { EVT, globalEvent } from './puerts/globalEvent';
import { rotate } from './game/rotate';
import { tetris } from './game/tetris';

class GameMain {
    constructor() {
        JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        JsManager.Instance.JsOnDispose = () => this.onDispose();
        JsManager.Instance.JsOnUpdate = () => this.onUpdate();
    }

    public onUpdate() {
        globalEvent.ins.emitter.emit(EVT.UPDATE_TICK);
    }

    public onApplicationQuit() {
        console.log("Game onApplicationQuit in JS....");
    }

    public onDispose() {
        console.log("Game onDispose in JS....");
    }
}

global['GameMain'] = new GameMain();
global['rotate'] = rotate;
global['tetris'] = tetris;