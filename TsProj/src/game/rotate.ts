import { JsBehaviour, UnityEngine } from "csharp";
import { jsBehaviour } from "../puerts/jsBehaviour";

const speed = 10;

export class rotate extends jsBehaviour {
    static create(mono: JsBehaviour) {
        new rotate(mono);
    }

    constructor(mono: JsBehaviour) {
        super(mono);
    }

    Start() {
    }

    Update() {
        if (this.mono == null) return;
        if (this.mono.gameObject.activeInHierarchy == false) return;
        let r = UnityEngine.Vector3.op_Multiply(UnityEngine.Vector3.up, UnityEngine.Time.deltaTime * speed);
        this.mono.transform.Rotate(r);
    }

    OnDestory() {
    }
}