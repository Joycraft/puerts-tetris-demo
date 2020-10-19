import { behaviour } from "./behaviour";

export class behaviourMgr {
    static ins: behaviourMgr = new behaviourMgr();

    map: { [key: number]: behaviour[] } = {};

    add(hashCode: number, jb: behaviour) {
        if (this.map[hashCode] == null)
            this.map[hashCode] = [];
        this.map[hashCode].push(jb);
    }

    del(hashCode: number, jb: behaviour) {
        for (let i = 0, length = this.map[hashCode].length; i < length; i++) {
            if (this.map[hashCode][i] == jb) {
                delete this.map[hashCode][i];
                this.map[hashCode][i] = null;
                return;
            }
        }
    }
}