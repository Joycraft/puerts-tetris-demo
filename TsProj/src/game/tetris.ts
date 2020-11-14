import { componentMgr } from "../puerts/componentMgr";
import { JsBehaviour, UnityEngine } from "csharp";
import { component } from "../puerts/component";
import { common } from "../common/common";
import { tetrisData } from "./tetrisData";
import { $typeof } from "puerts";

enum DIR {
    LEFT,
    RIGHT,
    DOWN,
}

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

    private _tetrisLogic: tetris = null;
    public get tetrisLogic(): tetris {
        if (this._tetrisLogic == null) {
            this._tetrisLogic = componentMgr.ins.getComponent(this.transform.Find("/Tetris"), tetris);
        }
        return this._tetrisLogic;
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

    checkBound(dir: DIR) {
        for (let i in this.data) {
            let piece = this.data[i];

            let boundPiece: tetrisData.tetrisPiece = null;

            switch (dir) {
                case DIR.DOWN:
                    boundPiece = { x: this.transform.localPosition.x + piece.x, y: this.transform.localPosition.y + piece.y - 1 };
                    if (boundPiece.y <= 0) return true;
                    break;
                case DIR.LEFT:
                    boundPiece = { x: this.transform.localPosition.x + piece.x - 1, y: this.transform.localPosition.y + piece.y };
                    if (boundPiece.x <= this.tetrisLogic.width / 2) return true;
                    break;
                case DIR.RIGHT:
                    boundPiece = { x: this.transform.localPosition.x + piece.x + 1, y: this.transform.localPosition.y + piece.y };
                    if (boundPiece.x >= this.tetrisLogic.width / 2) return true;
                    break;
            }

            if (this.tetrisLogic.checkExist(boundPiece.x, boundPiece.y) == true) {
                return true;
            }
        }
    }

    move(dir: DIR) {
        if (this.checkBound(dir)) {
            if (dir == DIR.DOWN)
                this.tetrisLogic.settle();
            return;
        }

        switch (dir) {
            case DIR.DOWN:
                this.transform.localPosition = new UnityEngine.Vector3(this.transform.localPosition.x, this.transform.localPosition.y - 1, this.transform.localPosition.z);
                break;
            case DIR.LEFT:
                this.transform.localPosition = new UnityEngine.Vector3(this.transform.localPosition.x - 1, this.transform.localPosition.y, this.transform.localPosition.z);
                break;
            case DIR.RIGHT:
                this.transform.localPosition = new UnityEngine.Vector3(this.transform.localPosition.x + 1, this.transform.localPosition.y, this.transform.localPosition.z);
                break;
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

    //UI
    btnSpin: UnityEngine.UI.Button = null;
    btnLeft: UnityEngine.UI.Button = null;
    btnRight: UnityEngine.UI.Button = null;

    settlePieces: UnityEngine.Transform[][] = [];
    width: number = 20;
    height: number = 30;

    gameTick: NodeJS.Timeout = null;

    constructor(mono: JsBehaviour) {
        super(mono);
        this.content = this.transform.Find('content');
        this.block = this.transform.Find('block');
        this.btnSpin = this.transform.Find('/Canvas/Button').GetComponent($typeof(UnityEngine.UI.Button)) as UnityEngine.UI.Button;
        this.btnLeft = this.transform.Find('/Canvas/Left').GetComponent($typeof(UnityEngine.UI.Button)) as UnityEngine.UI.Button;
        this.btnRight = this.transform.Find('/Canvas/Right').GetComponent($typeof(UnityEngine.UI.Button)) as UnityEngine.UI.Button;

        this.btnSpin.onClick.AddListener(() => {
            if (this.curBlock)
                this.curBlock.spinIndex++;
        })
        this.btnLeft.onClick.AddListener(() => {
            if (this.curBlock)
                this.curBlock.move(DIR.LEFT);
        })
        this.btnRight.onClick.AddListener(() => {
            if (this.curBlock)
                this.curBlock.move(DIR.RIGHT);
        })
    }

    Start() {
        console.log('tetris gameLogic start.');
        super.Start();
        this.genBlock(1);
        this.gameTick = setInterval(() => {
            console.log('gameTick');
            if (this.curBlock)
                this.curBlock.move(DIR.DOWN);
        }, 100);
    }

    genBlock(cubeType: number, spinIndex: number = 0) {
        let blockComp = componentMgr.ins.getComponent(<UnityEngine.GameObject>this.Instantiate(this.block), tetrisBlock);
        blockComp.type = cubeType;
        blockComp.spinIndex = spinIndex;
        blockComp.transform.SetParent(this.content);
        this.curBlock = blockComp;
        this.curBlock.transform.localPosition = new UnityEngine.Vector3(0, this.height + 5, 0);
    }

    checkExist(posx: number, posy: number) {
        return (this.settlePieces[posx] != null && this.settlePieces[posx][posy] != null);
    }

    settle() {
        this.curBlock.cubeList.forEach(cube => {
            if (this.settlePieces[cube.position.x] == null)
                this.settlePieces[cube.position.x] = [];
            cube.SetParent(this.content);
            this.settlePieces[cube.position.x][cube.position.y] = cube;
        })
        UnityEngine.GameObject.Destroy(this.curBlock.gameObject);
        this.curBlock = null;
        this.genBlock(0);
    }

    Update() {
        super.Update();
    }

    OnDestory() {
        super.OnDestory();
        clearInterval(this.gameTick);
    }
}