import { Component } from "../Puerts/Component";
import { JsBehaviour, UnityEngine } from "csharp";
import { Common } from "../Common/Common";

const speed = 50;

@Common.globalObject
export class Rotate extends Component {
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