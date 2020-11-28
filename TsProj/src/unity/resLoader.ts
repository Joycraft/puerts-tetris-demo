import { UnityEngine } from "csharp";

export class ResLoader {
    static ins: ResLoader = new ResLoader();

    loadPrefab(name: string) {
        return UnityEngine.Resources.Load(name);
    }
}