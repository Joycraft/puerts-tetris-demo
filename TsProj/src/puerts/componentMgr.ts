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

    getComponent<T extends component>(go: UnityEngine.GameObject | UnityEngine.Transform, compType: { prototype: T }): T {
        if (go instanceof UnityEngine.Transform) {
            go = go.gameObject;
        }
        let components = this.getComponents(go, compType);
        if (components.length <= 0) return null;
        return <T>components[0];
    }

    getComponents<T extends component>(go: UnityEngine.GameObject | UnityEngine.Transform, compType: { prototype: T }): T[] {
        let hashCode = go.GetHashCode();
        if (this.map[hashCode] == null || this.map[hashCode].length <= 0) return null;
        let components = this.map[hashCode].filter(comp => comp instanceof <typeof component><unknown>compType);
        return <T[]>components;
    }
}