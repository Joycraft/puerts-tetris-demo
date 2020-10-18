import { JsBehaviour, UnityEngine } from "csharp";
import { common } from "../common/common";
import { jsBehaviour } from "../puerts/jsBehaviour";

const speed = 10;

export class rotate extends jsBehaviour {
    static create(mono: JsBehaviour) {
        new rotate(mono);
    }

    constructor(mono: JsBehaviour) {
        super(mono);
    }

    async Start() {
        super.Start();
        await common.timePromise(5000);
        UnityEngine.Object.Destroy(this.mono.gameObject);
    }

    Update() {
        super.Update();
        if (!this.canUpdate()) return;
        let r = UnityEngine.Vector3.op_Multiply(UnityEngine.Vector3.up, UnityEngine.Time.deltaTime * speed);
        this.mono.transform.Rotate(r);
    }

    OnDestory() {
        super.OnDestory();
    }
}