import { component } from "../puerts/component";
import { JsBehaviour, UnityEngine } from "csharp";
import { common } from "../common/common";

const speed = 50;

@common.globalObject
export class rotate extends component {
    constructor(mono: JsBehaviour) {
        super(mono);
    }

    Start() {
        super.Start();
    }

    Update() {
        super.Update();
        let r = UnityEngine.Vector3.op_Multiply(UnityEngine.Vector3.up, UnityEngine.Time.deltaTime * speed);
        this.transform.Rotate(r);
    }

    OnDestory() {
        super.OnDestory();
    }
}