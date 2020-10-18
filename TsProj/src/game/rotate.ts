import { jsBehaviour } from "../puerts/jsBehaviour";
import { JsBehaviour, UnityEngine } from "csharp";
import { common } from "../common/common";

const speed = 10;

@common.globalObject
export class rotate extends jsBehaviour {
    constructor(mono: JsBehaviour) {
        super(mono);
    }

    async Start() {
        super.Start();
    }

    Update() {
        super.Update();
        if (!this.isValid()) return;
        if (!this.canUpdate()) return;
        let r = UnityEngine.Vector3.op_Multiply(UnityEngine.Vector3.up, UnityEngine.Time.deltaTime * speed);
        this.mono.transform.Rotate(r);
    }

    OnDestory() {
        super.OnDestory();
    }
}