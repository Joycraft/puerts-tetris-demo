import { jsBehaviour } from "./jsBehaviour";

export class behaviourMgr {
    static ins: behaviourMgr = new behaviourMgr();

    map: { [key: number]: jsBehaviour[] } = {};

    add(hashCode: number, jb: jsBehaviour) {
        if (this.map[hashCode] == null)
            this.map[hashCode] = [];
        this.map[hashCode].push(jb);
    }

    del(hashCode: number, jb: jsBehaviour) {
        for (let i = 0, length = this.map[hashCode].length; i < length; i++) {
            if (this.map[hashCode][i] == jb) {
                delete this.map[hashCode][i];
                this.map[hashCode][i] = null;
                return;
            }
        }
    }
}