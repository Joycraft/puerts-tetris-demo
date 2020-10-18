import { JsBehaviour } from "csharp";
import { EVT, globalEvent } from "./globalEvent";

export class jsBehaviour {
    mono: JsBehaviour = null;
    updateListener = null;
    constructor(mono: JsBehaviour) {
        this.mono = mono;
        this.mono.JsStart = () => this.Start();
        this.mono.JsOnDestroy = () => this.OnDestory();
        this.updateListener = this.Update.bind(this);
        globalEvent.ins.emitter.on(EVT.UPDATE_TICK, this.updateListener);
    }

    isValid() {
        return this.mono != null;
    }

    canUpdate() {
        return this.isValid() && this.mono.gameObject.activeInHierarchy == true;
    }

    Start() {

    }

    Update() {
        if (!this.canUpdate()) return;
    }

    OnDestory() {
        globalEvent.ins.emitter.off(EVT.UPDATE_TICK, this.updateListener);
        this.mono = null;
        this.updateListener = null;
    }
}