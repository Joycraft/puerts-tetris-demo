import { UnityEngine } from "csharp";

export class resLoader {
    static ins: resLoader = new resLoader();

    loadPrefab(name: string) {
        return UnityEngine.Resources.Load(name);
    }
}