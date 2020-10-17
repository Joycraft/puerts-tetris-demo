import { JsManager } from 'csharp';
import { rotate } from './game/rotate';
import { tetris } from './game/tetris';
import { updateTick } from './puerts/updateTick';

class GameMain {
    constructor() {
        JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        JsManager.Instance.JsOnDispose = () => this.onDispose();
        JsManager.Instance.JsOnUpdate = () => this.onUpdate();
    }

    public onUpdate() {
        updateTick.Tick();
    }

    public onApplicationQuit() {
        console.log("Game onApplicationQuit in JS....");
    }

    public onDispose() {
        console.log("Game onDispose in JS....");
    }
}

global['tetris'] = tetris;
global['rotate'] = rotate;
global['GameMain'] = new GameMain();