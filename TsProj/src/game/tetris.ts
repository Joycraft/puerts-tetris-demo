import { component } from "../puerts/component";
import { JsBehaviour, UnityEngine } from "csharp";
import { common } from "../common/common";
import { tetrisData } from "./tetrisData";
import { componentMgr } from "../puerts/componentMgr";

@common.globalObject
export class tetrisBlock extends component {
    cube: UnityEngine.Transform = null;

    cubeList: UnityEngine.Transform[] = [];

    private _type: number = null;
    public get type(): number {
        return this._type;
    }
    public set type(value: number) {
        this._type = value;
        if (this._type >= tetrisData.cubeData.length || this._type < 0)
            this._type = 0;
        this.draw();
    }

    private _spinIndex: number = 0;
    public get spinIndex(): number {
        return this._spinIndex;
    }
    public set spinIndex(value: number) {
        this._spinIndex = value;
        if (this._spinIndex >= this.allData.length || this._spinIndex < 0)
            this._spinIndex = 0;
        this.draw();
    }

    get allData() {
        return tetrisData.cubeData[this.type].spins;
    }

    get data() {
        return tetrisData.cubeData[this.type].spins[this.spinIndex];
    }

    constructor(mono: JsBehaviour) {
        super(mono);
        console.log('tetris block create');
        this.cube = this.transform.Find("/Tetris/cube");
    }

    Start() {
        super.Start();
    }

    draw() {
        console.log('draw block');
        if (this.data == null) return;
        if (this.cubeList.length != this.data.length) {
            this.cubeList.forEach(cube => UnityEngine.GameObject.Destroy(cube))
            this.cubeList = [];
            this.data.forEach(pieceData => {
                let cube = <UnityEngine.GameObject>this.Instantiate(this.cube);
                cube.transform.localPosition = new UnityEngine.Vector3(pieceData.x, pieceData.y, 0);
                cube.transform.SetParent(this.transform);
                this.cubeList.push(cube.transform);
                this.transform.localPosition = UnityEngine.Vector3.zero;
            })
            return;
        } else {
            for (let i in this.data) {
                this.cubeList[i].localPosition = new UnityEngine.Vector3(this.data[i].x, this.data[i].y);
            }
        }
    }

    Update() {
        super.Update();
    }

    OnDestory() {
        super.OnDestory();
    }
}

@common.globalObject
export class tetris extends component {
    content: UnityEngine.Transform = null;
    block: UnityEngine.Transform = null;
    curBlock: tetrisBlock = null;

    constructor(mono: JsBehaviour) {
        super(mono);
        this.content = this.transform.Find('content');
        this.block = this.transform.Find('block');
    }

    Start() {
        console.log('tetris gameLogic start.');
        super.Start();
        this.genBlock(1);

        setInterval(() => {
            this.curBlock.spinIndex++;
        }, 1000);
    }

    genBlock(cubeType: number, spinIndex: number = 0) {
        let blockComp = componentMgr.ins.getComponent(<UnityEngine.GameObject>this.Instantiate(this.block), tetrisBlock);
        blockComp.type = cubeType;
        blockComp.spinIndex = spinIndex;
        blockComp.transform.SetParent(this.content);
        this.curBlock = blockComp;
    }

    Update() {
        super.Update();
    }

    OnDestory() {
        super.OnDestory();
    }
}