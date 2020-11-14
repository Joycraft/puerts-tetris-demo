import { component } from "../puerts/component";
import { JsBehaviour, UnityEngine } from "csharp";
import { common } from "../common/common";

interface tetrisPiece {
    x: number,
    y: number,
}

interface tetrisCube {
    spins: tetrisPiece[][]
}

const tetrisCubeData: tetrisCube[] = [];
const tetrisArrData = [];
tetrisArrData[0] = [
    [
        0, 1, 0,    // ☐▨☐
        1, 1, 1,    // ▨▨▨
        0, 0, 0     // ☐☐☐
    ],
    [
        0, 1, 0,    // ☐▨☐
        0, 1, 1,    // ☐▨▨
        0, 1, 0     // ☐▨☐
    ],
    [
        0, 0, 0,    // ☐☐☐
        1, 1, 1,    // ▨▨▨
        0, 1, 0     // ☐▨☐
    ],
    [
        0, 1, 0,    // ☐▨☐
        1, 1, 0,    // ▨▨☐
        0, 1, 0,    // ☐▨☐
    ]
]
tetrisArrData[1] = [
    [
        1, 1, 0,    // ▨▨☐
        1, 0, 0,    // ▨☐☐
        1, 0, 0     // ▨☐☐
    ],
    [
        0, 0, 0,    // ☐☐☐
        1, 0, 0,    // ▨☐☐
        1, 1, 1     // ▨▨▨
    ],
    [
        0, 0, 1,    // ☐☐▨
        0, 0, 1,    // ☐☐▨
        0, 1, 1     // ☐▨▨
    ],
    [
        1, 1, 1,    // ▨▨▨
        0, 0, 1,    // ☐☐▨
        0, 0, 0,    // ☐☐☐
    ]
]
tetrisArrData[2] = [
    [
        1, 0, 0,    // ▨☐☐
        1, 0, 0,    // ▨☐☐
        1, 1, 0     // ▨▨☐
    ],
    [
        0, 0, 0,    // ☐☐☐
        0, 0, 1,    // ☐☐▨
        1, 1, 1     // ▨▨▨
    ],
    [
        0, 1, 1,    // ☐▨▨
        0, 0, 1,    // ☐☐▨
        0, 0, 1     // ☐☐▨
    ],
    [
        1, 1, 1,    // ▨▨▨
        1, 0, 0,    // ▨☐☐
        0, 0, 0,    // ☐☐☐
    ]
]
tetrisArrData[3] = [
    [
        0, 1, 0,    // ☐▨☐
        1, 1, 0,    // ▨▨☐
        1, 0, 0     // ▨☐☐
    ],
    [
        1, 1, 0,    // ▨▨☐
        0, 1, 1,    // ☐▨▨
        0, 0, 0     // ☐☐☐
    ],
]
tetrisArrData[4] = [
    [
        1, 0, 0,    // ▨☐☐
        1, 1, 0,    // ▨▨☐
        0, 1, 0     // ☐▨☐
    ],
    [
        0, 1, 1,    // ☐▨▨
        1, 1, 0,    // ▨▨☐
        0, 0, 0     // ☐☐☐
    ],
]
tetrisArrData[5] = [
    [
        1, 1,       // ▨▨
        1, 1,       // ▨▨
    ],
]
tetrisArrData[6] = [
    [
        0, 0, 0, 0, // ☐☐☐☐
        1, 1, 1, 1, // ▨▨▨▨
        0, 0, 0, 0, // ☐☐☐☐
        0, 0, 0, 0  // ☐☐☐☐
    ],
    [
        0, 0, 1, 0, // ☐☐▨☐
        0, 0, 1, 0, // ☐☐▨☐
        0, 0, 1, 0, // ☐☐▨☐
        0, 0, 1, 0  // ☐☐▨☐
    ],
]

@common.globalObject
export class tetris extends component {
    content: UnityEngine.Transform = null;

    constructor(mono: JsBehaviour) {
        super(mono);
    }

    Start() {
        console.log('tetris gameLogic start.');
        super.Start();
        this.content = this.transform.Find('content');
    }

    Update() {
        super.Update();
    }

    OnDestory() {
        super.OnDestory();
    }
}