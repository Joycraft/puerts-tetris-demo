import { jsBehaviour } from "../puerts/jsBehaviour";
import { JsBehaviour } from "csharp";
import { common } from "../common/common";

@common.globalObject
export class tetris extends jsBehaviour {
    constructor(mono: JsBehaviour) {
        super(mono);
    }

    Start() {
        super.Start();
        console.log('tetris gameLogic start.');
    }

    Update() {
        super.Update();
    }

    OnDestory() {
        super.OnDestory();
    }
}