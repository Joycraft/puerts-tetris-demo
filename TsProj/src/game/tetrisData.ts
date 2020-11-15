export namespace tetrisData {
    export interface tetrisPiece {
        x: number,
        y: number,
    }

    export interface tetrisCube {
        spins: tetrisPiece[][]
    }

    export const tetrisColor: { [key: number]: number[] } = {
        [0]: [0, 166, 255, 255],
        [1]: [255, 166, 0, 255],
        [2]: [166, 255, 0, 255],
        [3]: [255, 0, 166, 255],
        [4]: [255, 0, 0, 255],
        [5]: [120, 255, 255, 255],
        [6]: [255, 255, 255, 255],
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

    tetrisArrData.forEach((arrData, index) => {
        let tetrisCube: tetrisCube = {
            spins: [],
        }
        arrData.arr.forEach(spinArr => {
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
        })
        cubeData.push(tetrisCube);
    })

}



