import { UnityEngine } from "csharp";
import { component } from "./component";

export class componentMgr {
    static ins: componentMgr = new componentMgr();

    map: { [key: number]: component[] } = {};

    add(hashCode: number, comp: component) {
        if (this.map[hashCode] == null)
            this.map[hashCode] = [];
        this.map[hashCode].push(comp);
    }

    del(hashCode: number, comp: component) {
        for (let i = 0, length = this.map[hashCode].length; i < length; i++) {
            if (this.map[hashCode][i] == comp) {
                delete this.map[hashCode][i];
                this.map[hashCode][i] = null;
                return;
            }
        }
    }

    getComponent(go: UnityEngine.GameObject, compName: string) {
        
    }
}