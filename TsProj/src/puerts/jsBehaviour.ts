import { JsBehaviour } from "csharp";
import { EVT, globalEvent } from "./globalEvent";

export class jsBehaviour {
    mono: JsBehaviour = null;
    constructor(mono: JsBehaviour) {
        this.mono = mono;
        this.mono.JsStart = () => this.Start();
        this.mono.JsOnDestroy = () => this.OnDestory();
        globalEvent.ins.emitter.on(EVT.UPDATE_TICK, () => this.Update());
    }

    Start() {

    }

    Update() {

    }

    OnDestory() {

    }
}