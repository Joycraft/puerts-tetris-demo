import { JsBehaviour } from "csharp";

export class jsBehaviour {
    mono: JsBehaviour = null;
    constructor(mono: JsBehaviour) {
        this.mono = mono;
        this.mono.JsStart = () => this.Start();
        this.mono.JsUpdate = () => this.Update();
        this.mono.JsOnDestroy = () => this.OnDestory();
    }

    Start() {

    }

    Update() {

    }

    OnDestory() {

    }
}