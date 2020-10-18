import { JsBehaviour } from "csharp";
import { behaviourMgr } from "./behaviourMgr";
import { EVT, globalEvent } from "./globalEvent";

export class jsBehaviour {
    static create(mono: JsBehaviour) {
        new this(mono);
    }

    mono: JsBehaviour = null;
    updateListener = null;
    constructor(mono: JsBehaviour) {
        this.mono = mono;
        this.mono.JsStart = () => this.Start();
        this.mono.JsOnDestroy = () => this.OnDestory();
        this.updateListener = () => {
            if (!this.isValid()) return;
            if (!this.canUpdate()) return;
            this.Update();
        };
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
    }

    OnDestory() {
        globalEvent.ins.emitter.off(EVT.UPDATE_TICK, this.updateListener);
        this.mono = null;
        this.updateListener = null;
    }
}