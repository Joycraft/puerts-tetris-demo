import { JsBehaviour } from "csharp";
import { behaviourMgr } from "./behaviourMgr";
import { EVT, globalEvent } from "./globalEvent";

export class jsBehaviour {
    static create(mono: JsBehaviour) {
        Object.create(this.prototype)(mono);
    }

    mono: JsBehaviour = null;
    updateListener = null;
    constructor(mono: JsBehaviour) {
        this.mono = mono;
        this.mono.JsStart = () => this.Start();
        this.mono.JsOnDestroy = () => this.OnDestory();
        this.updateListener = this.Update.bind(this);
        globalEvent.ins.emitter.on(EVT.UPDATE_TICK, this.updateListener);
        behaviourMgr.ins.add(mono.GetHashCode(), this);
    }

    isValid() {
        return this.mono != null;
    }

    canUpdate() {
        return this.mono.gameObject.activeInHierarchy == true;
    }

    Start() {
    }

    Update() {
        if (!this.isValid()) return;
        if (!this.canUpdate()) return;
    }

    OnDestory() {
        globalEvent.ins.emitter.off(EVT.UPDATE_TICK, this.updateListener);
        this.mono = null;
        this.updateListener = null;
    }
}