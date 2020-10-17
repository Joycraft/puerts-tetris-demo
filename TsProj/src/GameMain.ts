import { JsManager } from 'csharp';
import { rotate } from './game/rotate';
import { tetris } from './game/tetris';

class GameMain {
    constructor() {
        JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        JsManager.Instance.JsOnDispose = () => this.onDispose();
    }

    public onApplicationQuit(): void {
        console.log("Game onApplicationQuit in JS....");
    }

    public onDispose(): void {
        console.log("Game onDispose in JS....");
    }
}

global['tetris'] = tetris;
global['rotate'] = rotate;
global['GameMain'] = new GameMain();