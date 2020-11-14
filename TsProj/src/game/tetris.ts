import { component } from "../puerts/component";
import { JsBehaviour, UnityEngine } from "csharp";
import { common } from "../common/common";
import { tetrisCubeData, tetrisCube } from "./tetrisData";

@common.globalObject
export class tetrisBlock extends component {
    cube: UnityEngine.Transform = null;

    constructor(mono: JsBehaviour) {
        super(mono);
    }

    Start() {
        super.Start();
        this.cube = this.transform.Find("Cube");
    }

    Update() {
        super.Update();
    }

    OnDestory() {
        super.OnDestory();
    }
}

@common.globalObject
export class tetris extends component {
    content: UnityEngine.Transform = null;
    block: UnityEngine.Transform = null;

    constructor(mono: JsBehaviour) {
        super(mono);
    }

    Start() {
        console.log('tetris gameLogic start.');
        super.Start();
        this.content = this.transform.Find('content');
        this.genBlock(tetrisCubeData[0]);
    }

    genBlock(cubeData: tetrisCube, spinIndex: number = 0) {
        let blockGo = new UnityEngine.GameObject("new block");
        let spinData = cubeData.spins[spinIndex];

    }

    Update() {
        super.Update();
    }

    OnDestory() {
        super.OnDestory();
    }
}