import { JsBehaviour } from "csharp";
import { jsBehaviour } from "../puerts/jsBehaviour";

export class tetris extends jsBehaviour {
    static create(mono: JsBehaviour) {
        new tetris(mono);
    }

    constructor(mono: JsBehaviour) {
        super(mono);
    }

    Start() {
        console.log('tetris gameLogic start.');
    }

    Update() {
    }

    OnDestory() {
    }
}