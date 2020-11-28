import { ComponentMgr } from "../Puerts/ComponentMgr";
import { JsBehaviour, UnityEngine } from "csharp";
import { Component } from "../Puerts/Component";
import { Common } from "../Common/Common";
import { TetrisData } from "./TetrisData";
import { $typeof } from "puerts";

enum DIR {
    LEFT,
    RIGHT,
    DOWN,
}

@Common.GlobalObject
export class TetrisBlock extends Component {
    cube: UnityEngine.Transform = null;

    cubeList: UnityEngine.Transform[] = [];

    private _type: number = null;
    public get type(): number {
        return this._type;
    }
    public set type(value: number) {
        this._type = value;
        if (this._type >= TetrisData.cubeData.length || this._type < 0)
            this._type = 0;
        this.Draw();
    }

    private _spinIndex: number = 0;
    public get spinIndex(): number {
        return this._spinIndex;
    }
    public set spinIndex(value: number) {
        value = this.CheckSpinIndex(value);
        if (value == null) return;
        this._spinIndex = value;
        this.Draw();
    }

    get allData() {
        return TetrisData.cubeData[this.type].spins;
    }

    get data() {
        return TetrisData.cubeData[this.type].spins[this.spinIndex];
    }

    private _tetrisLogic: Tetris = null;
    public get tetrisLogic(): Tetris {
        if (this._tetrisLogic == null) {
            this._tetrisLogic = ComponentMgr.ins.getComponent(this.transform.Find("/Tetris"), Tetris);
        }
        return this._tetrisLogic;
    }

    isSettle: boolean = false;

    constructor(mono: JsBehaviour) {
        super(mono);
        console.log('tetris block create');
        this.cube = this.transform.Find("/Tetris/cube");
    }

    Start() {
        super.Start();
    }

    private Draw() {
        console.log('draw block');
        if (this.data == null) return;
        if (this.cubeList.length != this.data.length) {
            this.cubeList.forEach(cube => UnityEngine.GameObject.Destroy(cube))
            this.cubeList = [];
            this.data.forEach(pieceData => {
                let cube = <UnityEngine.GameObject>this.Instantiate(this.cube);
                cube.transform.SetParent(this.transform);
                cube.transform.localPosition = new UnityEngine.Vector3(pieceData.x, pieceData.y, 0);
                let mat = cube.GetComponent($typeof(UnityEngine.MeshRenderer)) as UnityEngine.MeshRenderer;
                let color = TetrisData.tetrisColor[this.type];
                let UnityColor = new UnityEngine.Color(color[0] / 255, color[1] / 255, color[2] / 255, color[3] / 255);
                mat.material.SetColor("_Color", UnityColor)
                this.cubeList.push(cube.transform);
            })
            return;
        } else {
            for (let i in this.data) {
                this.cubeList[i].localPosition = new UnityEngine.Vector3(this.data[i].x, this.data[i].y);
            }
        }
    }

    private CheckSpinIndex(value: number) {
        if (value >= this.allData.length || value < 0)
            value = 0;
        let spinedData = this.allData[value];
        for (let i in spinedData) {
            let boundPiece: TetrisData.TetrisPiece = { x: spinedData[i].x + this.transform.localPosition.x, y: spinedData[i].y + this.transform.localPosition.y };
            if (this.tetrisLogic.CheckExist(boundPiece.x, boundPiece.y) == true
                || boundPiece.x < - this.tetrisLogic.Width / 2
                || boundPiece.x > this.tetrisLogic.Width / 2
                || boundPiece.y < 0
            ) {
                return null;
            }
        }
        return value;
    }

    private CheckBound(dir: DIR) {
        for (let i in this.data) {
            let piece = this.data[i];
            let boundPiece: TetrisData.TetrisPiece = null;
            switch (dir) {
                case DIR.DOWN: //下移碰撞
                    boundPiece = { x: this.transform.localPosition.x + piece.x, y: this.transform.localPosition.y + piece.y - 1 };
                    if (boundPiece.y < 0) return true;
                    break;
                case DIR.LEFT: //左移碰撞
                    boundPiece = { x: this.transform.localPosition.x + piece.x - 1, y: this.transform.localPosition.y + piece.y };
                    if (boundPiece.x < -this.tetrisLogic.Width / 2) return true;
                    break;
                case DIR.RIGHT: //右移碰撞
                    boundPiece = { x: this.transform.localPosition.x + piece.x + 1, y: this.transform.localPosition.y + piece.y };
                    if (boundPiece.x > this.tetrisLogic.Width / 2) return true;
                    break;
            }

            if (this.tetrisLogic.CheckExist(boundPiece.x, boundPiece.y) == true) {
                return true;
            }
        }
    }

    async Move(dir: DIR) {
        if (this.CheckBound(dir)) {
            if (dir == DIR.DOWN) {
                if (this.isSettle == true) return;
                this.isSettle = true;
                await Common.TimePromise(250);
                if (this.CheckBound(dir) != true) {
                    this.isSettle = false;
                    return;
                }
                this.tetrisLogic.Settle(this.cubeList, this.transform.localPosition);
            };
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

interface PieceObj {
    pos: {
        x: number,
        y: number,
    },
    trans: UnityEngine.Transform,
}

@Common.GlobalObject
export class Tetris extends Component {
    //GameObject
    Content: UnityEngine.Transform = null;
    Block: UnityEngine.Transform = null;

    //UI
    BtnSpin: UnityEngine.UI.Button = null;
    BtnLeft: UnityEngine.UI.Button = null;
    BtnRight: UnityEngine.UI.Button = null;
    BtnStartGame: UnityEngine.UI.Button = null;
    BtnDown: UnityEngine.UI.Button = null;

    //Audio
    AudioSpin: UnityEngine.AudioSource = null;
    AudioClear: UnityEngine.AudioSource = null;

    //Data
    CurBlock: TetrisBlock = null;
    SettlePieces: PieceObj[] = [];
    Width: number = 15;
    Height: number = 20;

    GameTick: NodeJS.Timeout = null;

    constructor(mono: JsBehaviour) {
        super(mono);
        this.Content = this.transform.Find('content');
        this.Block = this.transform.Find('block');
        this.BtnSpin = this.transform.Find('/Canvas/Spin').GetComponent($typeof(UnityEngine.UI.Button)) as UnityEngine.UI.Button;
        this.BtnLeft = this.transform.Find('/Canvas/Left').GetComponent($typeof(UnityEngine.UI.Button)) as UnityEngine.UI.Button;
        this.BtnRight = this.transform.Find('/Canvas/Right').GetComponent($typeof(UnityEngine.UI.Button)) as UnityEngine.UI.Button;
        this.BtnStartGame = this.transform.Find('/Canvas/StartGame').GetComponent($typeof(UnityEngine.UI.Button)) as UnityEngine.UI.Button;
        this.BtnDown = this.transform.Find('/Canvas/Down').GetComponent($typeof(UnityEngine.UI.Button)) as UnityEngine.UI.Button;
        this.AudioSpin = this.transform.Find('/Audio/spin').GetComponent($typeof(UnityEngine.AudioSource)) as UnityEngine.AudioSource;
        this.AudioClear = this.transform.Find('/Audio/clear').GetComponent($typeof(UnityEngine.AudioSource)) as UnityEngine.AudioSource;

        this.BtnSpin.onClick.AddListener(() => {
            if (this.CurBlock)
                this.CurBlock.spinIndex++;
            this.AudioSpin.PlayOneShot(this.AudioSpin.clip);
        });
        this.BtnLeft.onClick.AddListener(() => {
            if (this.CurBlock)
                this.CurBlock.Move(DIR.LEFT);
            this.AudioSpin.PlayOneShot(this.AudioSpin.clip);
        });
        this.BtnRight.onClick.AddListener(() => {
            if (this.CurBlock)
                this.CurBlock.Move(DIR.RIGHT);
            this.AudioSpin.PlayOneShot(this.AudioSpin.clip);
        });
        this.BtnDown.onClick.AddListener(() => {
            if (this.CurBlock)
                this.CurBlock.Move(DIR.DOWN);
            this.AudioSpin.PlayOneShot(this.AudioSpin.clip);
        });
        this.BtnStartGame.onClick.AddListener(() => {
            this.StartGame();
            this.AudioSpin.PlayOneShot(this.AudioSpin.clip);
        });
    }

    StartGame() {
        if (this.CurBlock != null) {
            UnityEngine.GameObject.Destroy(this.CurBlock.gameObject);
            this.CurBlock = null;
        }
        this.SettlePieces.forEach(pieceObj => {
            UnityEngine.GameObject.Destroy(pieceObj.trans.gameObject);
        })
        this.SettlePieces = [];
        this.GenRandomBlock();
        this.BtnStartGame.gameObject.SetActive(false);
    }

    Start() {
        console.log('tetris gameLogic start.');
        super.Start();
        this.GameTick = setInterval(() => {
            console.log('gameTick');
            if (this.CurBlock)
                this.CurBlock.Move(DIR.DOWN);
        }, 500);
    }

    private GenRandomBlock() {
        let blockType = Common.RanInt(0, TetrisData.cubeData.length - 1);
        let spinIndex = Common.RanInt(0, TetrisData.cubeData[blockType].spins.length - 1);
        this.GenBlock(blockType, spinIndex);
    }

    private GenBlock(blockType: number, spinIndex: number = 0) {
        console.log(`genBlock Type:${blockType}, Spin:${spinIndex}`);
        if (this.CurBlock != null) {
            UnityEngine.GameObject.Destroy(this.CurBlock.gameObject);
            this.CurBlock = null;
        }
        this.CurBlock = ComponentMgr.ins.getComponent(<UnityEngine.GameObject>this.Instantiate(this.Block), TetrisBlock);
        this.CurBlock.transform.SetParent(this.Content);
        this.CurBlock.transform.localPosition = new UnityEngine.Vector3(0, this.Height + 5, 0);
        this.CurBlock.type = blockType;
        this.CurBlock.spinIndex = spinIndex;
    }

    private AddPiece(piece: PieceObj) {
        for (let i in this.SettlePieces) {
            if (this.SettlePieces[i] == null) {
                this.SettlePieces[i] = piece;
                return;
            }
        }
        this.SettlePieces.push(piece);
    }

    CheckExist(posx: number, posy: number) {
        return this.SettlePieces.filter(piece => piece != null && piece.pos.x == posx && piece.pos.y == posy).length > 0
    }

    Settle(cubeList: UnityEngine.Transform[], blockPos: UnityEngine.Vector3) {
        cubeList.forEach(cube => {
            this.AddPiece({
                pos: {
                    x: cube.localPosition.x + blockPos.x,
                    y: cube.localPosition.y + blockPos.y,
                },
                trans: cube,
            });
            cube.SetParent(this.Content);
        })
        UnityEngine.GameObject.Destroy(this.CurBlock.gameObject);
        this.CurBlock = null;

        for (let i = 0; i < this.Height; i++) {
            let line = this.SettlePieces.filter(piece => piece != null && piece.pos.y == i);
            if (line.length >= this.Width) {
                line.forEach(linePiece => {
                    this.SettlePieces[this.SettlePieces.indexOf(linePiece)] = null;
                    UnityEngine.GameObject.Destroy(linePiece.trans.gameObject);
                });
                this.SettlePieces.filter(piece => piece != null && piece.pos.y > i)
                    .forEach(piece => {
                        piece.trans.localPosition = new UnityEngine.Vector3(piece.trans.localPosition.x, piece.trans.localPosition.y - 1, piece.trans.localPosition.z);
                        piece.pos.y--;
                    }
                    );
                this.AudioClear.Play();
                i--;
            }
        }
        this.GenRandomBlock();
    }

    Update() {
        super.Update();
    }

    OnDestory() {
        super.OnDestory();
        clearInterval(this.GameTick);
    }
}