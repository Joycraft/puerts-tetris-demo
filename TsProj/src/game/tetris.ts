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
        super.Start();
        this.content = this.transform.Find('content');
        console.log('tetris gameLogic start.');
        let cubePrefab = resLoader.ins.loadPrefab('prefab/Cube');
        let cube = this.Instantiate(cubePrefab, this.content);
    }

    Update() {
        super.Update();
    }

    OnDestory() {
        super.OnDestory();
    }
}