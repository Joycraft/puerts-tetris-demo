import { jsBehaviour } from "../puerts/jsBehaviour";
import { JsBehaviour, UnityEngine } from "csharp";
import { common } from "../common/common";
import { behaviourMgr } from "../puerts/behaviourMgr";

const speed = 10;

export class rotate extends jsBehaviour {
    static create(mono: JsBehaviour) {
        behaviourMgr.ins.add(mono.GetHashCode(), new rotate(mono));
    }

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