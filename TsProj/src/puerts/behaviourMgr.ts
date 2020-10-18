import { JsBehaviour } from "csharp";
import { jsBehaviour } from "./jsBehaviour";

export class behaviourMgr {
    static ins: behaviourMgr = new behaviourMgr();

    map: { [key: number]: jsBehaviour } = {};

    add(hashCode: number, ts: jsBehaviour) {
        this.map[hashCode] = ts;
    }

    del(hashCode: number) {
        delete this.map[hashCode];
        this.map[hashCode] = null;
    }
}