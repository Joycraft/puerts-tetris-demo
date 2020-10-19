import { EVT, globalEvent } from "./globalEvent";
import { componentMgr } from "./componentMgr";
import { JsBehaviour } from "csharp";

export class component {
    static create(mono: JsBehaviour) {
        new this(mono);
    }

    get gameObject() {
        return this.mono == null ? null : this.mono.gameObject;
    }

    get transform() {
        return this.mono == null ? null : this.mono.transform;
    }

    mono: JsBehaviour = null;
    updateListener = null;
    constructor(mono: JsBehaviour) {
        this.mono = mono;
        this.mono.JsStart = () => this.Start();
        this.mono.JsOnDestroy = () => this.OnDestory();
        this.updateListener = () => {
            if (this.gameObject == null) return;
            if (this.gameObject.activeInHierarchy == false) return;
            this.Update();
        };
        globalEvent.ins.emitter.on(EVT.UPDATE_TICK, this.updateListener);
        componentMgr.ins.add(this.gameObject.GetHashCode(), this);
    }

    Start() {
    }

    Update() {
    }

    OnDestory() {
        globalEvent.ins.emitter.off(EVT.UPDATE_TICK, this.updateListener);
        componentMgr.ins.del(this.gameObject.GetHashCode(), this);
        this.mono = null;
        this.updateListener = null;
    }
}