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
        value = this.checkSpinIndex(value);
        if (value == null) return;
        this._spinIndex = value;
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
                cube.transform.SetParent(this.transform);
                cube.transform.localPosition = new UnityEngine.Vector3(pieceData.x, pieceData.y, 0);
                this.cubeList.push(cube.transform);
            })
            return;
        } else {
            for (let i in this.data) {
                this.cubeList[i].localPosition = new UnityEngine.Vector3(this.data[i].x, this.data[i].y);
            }
        }
    }

    checkSpinIndex(value: number) {
        if (value >= this.allData.length || value < 0)
            value = 0;
        let spinedData = this.allData[value];
        for (let i in spinedData) {
            let boundPiece: tetrisData.tetrisPiece = { x: spinedData[i].x + this.transform.localPosition.x, y: spinedData[i].y + this.transform.localPosition.y };
            if (this.tetrisLogic.checkExist(boundPiece.x, boundPiece.y) == true
                || boundPiece.x < - this.tetrisLogic.width / 2
                || boundPiece.x > this.tetrisLogic.width / 2
                || boundPiece.y < 0
            ) {
                return null;
            }
        }
        return value;
    }

    checkBound(dir: DIR) {

        for (let i in this.data) {
            let piece = this.data[i];
            let boundPiece: tetrisData.tetrisPiece = null;
            switch (dir) {
                case DIR.DOWN: //下移碰撞
                    boundPiece = { x: this.transform.localPosition.x + piece.x, y: this.transform.localPosition.y + piece.y - 1 };
                    if (boundPiece.y < 0) return true;
                    break;
                case DIR.LEFT: //左移碰撞
                    boundPiece = { x: this.transform.localPosition.x + piece.x - 1, y: this.transform.localPosition.y + piece.y };
                    if (boundPiece.x < -this.tetrisLogic.width / 2) return true;
                    break;
                case DIR.RIGHT: //右移碰撞
                    boundPiece = { x: this.transform.localPosition.x + piece.x + 1, y: this.transform.localPosition.y + piece.y };
                    if (boundPiece.x > this.tetrisLogic.width / 2) return true;
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

    settlePieces: UnityEngine.Transform[] = [];
    width: number = 15;
    height: number = 25;

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
        this.genRandomBlock();
        this.gameTick = setInterval(() => {
            console.log('gameTick');
            if (this.curBlock)
                this.curBlock.move(DIR.DOWN);
        }, 500);
    }

    genRandomBlock() {
        this.genBlock(common.ranInt(0, tetrisData.cubeData.length));
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
        return this.settlePieces.filter(piece => piece != null && piece.position.x == posx && piece.position.y == posy).length > 0
    }

    addPiece(piece: UnityEngine.Transform) {
        for (let i in this.settlePieces) {
            if (this.settlePieces[i] == null) {
                this.settlePieces[i] = piece;
                return;
            }
        }
        this.settlePieces.push(piece);
    }

    settle() {
        this.curBlock.cubeList.forEach(cube => {
            cube.SetParent(this.content);
            this.addPiece(cube);
        })
        UnityEngine.GameObject.Destroy(this.curBlock.gameObject);
        this.curBlock = null;

        for (let i = 0; i < this.height; i++) {
            let line = this.settlePieces.filter(piece => piece != null && piece.position.y == i);
            if (line.length >= this.width) {
                line.forEach(linePiece => {
                    this.settlePieces[this.settlePieces.indexOf(linePiece)] = null;
                    UnityEngine.GameObject.Destroy(linePiece.gameObject);
                });
                this.settlePieces.filter(piece => piece != null && piece.position.y > i)
                    .forEach(piece =>
                        piece.position = new UnityEngine.Vector3(piece.position.x, piece.position.y - 1, piece.position.z)
                    );
                i--;
            }
        }
        this.genRandomBlock();
    }

    Update() {
        super.Update();
    }

    OnDestory() {
        super.OnDestory();
        clearInterval(this.gameTick);
    }
}