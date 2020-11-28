import { UnityEngine } from "csharp";
import { Component } from "./Component";

export class ComponentMgr {
    static ins: ComponentMgr = new ComponentMgr();

    map: { [key: number]: Component[] } = {};

    add(hashCode: number, comp: Component) {
        if (this.map[hashCode] == null)
            this.map[hashCode] = [];
        this.map[hashCode].push(comp);
    }

    del(hashCode: number, comp: Component) {
        for (let i = 0, length = this.map[hashCode].length; i < length; i++) {
            if (this.map[hashCode][i] == comp) {
                delete this.map[hashCode][i];
                this.map[hashCode][i] = null;
                return;
            }
        }
    }

    getComponent<T extends Component>(go: UnityEngine.GameObject | UnityEngine.Transform, compType: { prototype: T }): T {
        if (go instanceof UnityEngine.Transform) {
            go = go.gameObject;
        }
        let components = this.getComponents(go, compType);
        if (components.length <= 0) return null;
        return <T>components[0];
    }

    getComponents<T extends Component>(go: UnityEngine.GameObject | UnityEngine.Transform, compType: { prototype: T }): T[] {
        let hashCode = go.GetHashCode();
        if (this.map[hashCode] == null || this.map[hashCode].length <= 0) return null;
        let components = this.map[hashCode].filter(comp => comp instanceof <typeof Component><unknown>compType);
        return <T[]>components;
    }
}