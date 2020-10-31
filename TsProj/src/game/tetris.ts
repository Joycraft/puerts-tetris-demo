import { component } from "../puerts/component";
import { JsBehaviour, UnityEngine } from "csharp";
import { common } from "../common/common";
import { resLoader } from "../unity/resLoader";

@common.globalObject
export class tetris extends component {
    constructor(mono: JsBehaviour) {
        super(mono);
    }

    Start() {
        super.Start();
        console.log('tetris gameLogic start.');
        let cubePrefab = resLoader.ins.loadPrefab('prefab/Cube');
        let cube = UnityEngine.Object.Instantiate(cubePrefab);
    }

    Update() {
        super.Update();
    }

    OnDestory() {
        super.OnDestory();
    }
}