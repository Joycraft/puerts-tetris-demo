import { EVT, GlobalEvent } from "./GlobalEvent";
import { ComponentMgr } from "./ComponentMgr";
import { JsBehaviour, UnityEngine } from "csharp";

export class Component {
    static create(mono: JsBehaviour) {
        new this(mono);
    }

    _mono: JsBehaviour = null;
    _updateListener = null;

    get gameObject() {
        return this._mono == null ? null : this._mono.gameObject;
    }

    get transform() {
        return this._mono == null ? null : this._mono.transform;
    }

    constructor(mono: JsBehaviour) {
        this._mono = mono;
        this._mono.JsStart = () => this.Start();
        this._mono.JsOnDestroy = () => this.OnDestory();
        this._updateListener = () => {
            if (this.gameObject == null) return;
            if (this.gameObject.activeInHierarchy == false) return;
            this.Update();
        };
        GlobalEvent.emitter.on(EVT.UPDATE_TICK, this._updateListener);
        ComponentMgr.ins.add(this.gameObject.GetHashCode(), this);
    }

    OnDestory() {
        GlobalEvent.emitter.off(EVT.UPDATE_TICK, this._updateListener);
        ComponentMgr.ins.del(this.gameObject.GetHashCode(), this);
        this._mono = null;
        this._updateListener = null;
    }

    Instantiate = UnityEngine.GameObject.Instantiate;

    Start() {
    }

    Update() {
    }

}