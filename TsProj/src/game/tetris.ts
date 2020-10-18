import { jsBehaviour } from "../puerts/jsBehaviour";
import { JsBehaviour } from "csharp";
import { behaviourMgr } from "../puerts/behaviourMgr";

export class tetris extends jsBehaviour {
    static create(mono: JsBehaviour) {
        behaviourMgr.ins.add(mono.GetHashCode(), new tetris(mono));
    }

    constructor(mono: JsBehaviour) {
        super(mono);
    }

    Start() {
        super.Start();
        console.log('tetris gameLogic start.');
    }

    Update() {
        super.Update();
        if (!this.isValid()) return;
        if (!this.canUpdate()) return;
    }

    OnDestory() {
        super.OnDestory();
    }
}