import { component } from "../puerts/component";
import { JsBehaviour, UnityEngine } from "csharp";
import { common } from "../common/common";
import { resLoader } from "../unity/resLoader";

@common.globalObject
export class tetris extends component {
    content: UnityEngine.Transform = null;

    constructor(mono: JsBehaviour) {
        super(mono);
    }

    Start() {
        console.log('tetris gameLogic start.');
        super.Start();
        this.content = this.transform.Find('content');
    }

    Update() {
        super.Update();
    }

    OnDestory() {
        super.OnDestory();
    }
}