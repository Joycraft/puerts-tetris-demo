export namespace tetrisData {
    export interface tetrisPiece {
        x: number,
        y: number,
    }

    export interface tetrisCube {
        spins: tetrisPiece[][]
    }

    let tetrisArrData: {
        anchor: number[],
        arr: number[][][],
    }[] = [];

    tetrisArrData[0] = {
        anchor: [1, 1],
        arr: [
            [
                [0, 1, 0],    // ☐▨☐
                [1, 1, 1],    // ▨▨▨
                [0, 0, 0]     // ☐☐☐
            ],
            [
                [0, 1, 0],    // ☐▨☐
                [0, 1, 1],    // ☐▨▨
                [0, 1, 0]     // ☐▨☐
            ],
            [
                [0, 0, 0],    // ☐☐☐
                [1, 1, 1],    // ▨▨▨
                [0, 1, 0]     // ☐▨☐
            ],
            [
                [0, 1, 0],    // ☐▨☐
                [1, 1, 0],    // ▨▨☐
                [0, 1, 0],    // ☐▨☐
            ]
        ]
    }

    tetrisArrData[1] = {
        anchor: [1, 1],
        arr: [
            [
                [1, 1, 0],    // ▨▨☐
                [1, 0, 0],    // ▨☐☐
                [1, 0, 0]     // ▨☐☐
            ],
            [
                [0, 0, 0],    // ☐☐☐
                [1, 0, 0],    // ▨☐☐
                [1, 1, 1]     // ▨▨▨
            ],
            [
                [0, 0, 1],    // ☐☐▨
                [0, 0, 1],    // ☐☐▨
                [0, 1, 1]     // ☐▨▨
            ],
            [
                [1, 1, 1],    // ▨▨▨
                [0, 0, 1],    // ☐☐▨
                [0, 0, 0],    // ☐☐☐
            ]
        ]
    }

    tetrisArrData[2] = {
        anchor: [1, 1],
        arr: [
            [
                [1, 0, 0],    // ▨☐☐
                [1, 0, 0],    // ▨☐☐
                [1, 1, 0]     // ▨▨☐
            ],
            [
                [0, 0, 0],    // ☐☐☐
                [0, 0, 1],    // ☐☐▨
                [1, 1, 1]     // ▨▨▨
            ],
            [
                [0, 1, 1],    // ☐▨▨
                [0, 0, 1],    // ☐☐▨
                [0, 0, 1]     // ☐☐▨
            ],
            [
                [1, 1, 1],    // ▨▨▨
                [1, 0, 0],    // ▨☐☐
                [0, 0, 0],    // ☐☐☐
            ]
        ]
    }

    tetrisArrData[3] = {
        anchor: [1, 1],
        arr: [
            [
                [0, 1, 0],    // ☐▨☐
                [1, 1, 0],    // ▨▨☐
                [1, 0, 0]     // ▨☐☐
            ],
            [
                [1, 1, 0],    // ▨▨☐
                [0, 1, 1],    // ☐▨▨
                [0, 0, 0]     // ☐☐☐
            ],
        ]
    }

    tetrisArrData[4] = {
        anchor: [1, 1],
        arr: [
            [
                [1, 0, 0],    // ▨☐☐
                [1, 1, 0],    // ▨▨☐
                [0, 1, 0]     // ☐▨☐
            ],
            [
                [0, 1, 1],    // ☐▨▨
                [1, 1, 0],    // ▨▨☐
                [0, 0, 0]     // ☐☐☐
            ],
        ]
    }

    tetrisArrData[5] = {
        anchor: [0, 0],
        arr: [
            [
                [1, 1],       // ▨▨
                [1, 1],       // ▨▨
            ],
        ]
    }

    tetrisArrData[6] = {
        anchor: [1, 2],
        arr: [
            [
                [0, 0, 0, 0], // ☐☐☐☐
                [1, 1, 1, 1], // ▨▨▨▨
                [0, 0, 0, 0], // ☐☐☐☐
                [0, 0, 0, 0]  // ☐☐☐☐
            ],
            [
                [0, 0, 1, 0], // ☐☐▨☐
                [0, 0, 1, 0], // ☐☐▨☐
                [0, 0, 1, 0], // ☐☐▨☐
                [0, 0, 1, 0]  // ☐☐▨☐
            ],
        ]
    }

    export let cubeData: tetrisCube[] = [];

    for (let i = 0, length = tetrisArrData.length; i < length; i++) {
        let arrData = tetrisArrData[i];
        let tetrisCube: tetrisCube = {
            spins: [],
        }
        for (let i = 0, length = arrData.arr.length; i < length; i++) {
            let spinArr = arrData.arr[i];
            let spin: tetrisPiece[] = [];
            for (let i in spinArr) {
                for (let j in spinArr[i]) {
                    let result = spinArr[i][j];
                    if (result == 1) {
                        let tetrisPiece: tetrisPiece = {
                            x: parseInt(i) - arrData.anchor[0],
                            y: parseInt(j) - arrData.anchor[1],
                        }
                        spin.push(tetrisPiece);
                    }
                }
            }
            tetrisCube.spins.push(spin);
        }
        cubeData.push(tetrisCube);
    }
}



