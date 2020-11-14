export class common {
    //[min,max] 闭区间随机整数
    static ranInt(min: number, max: number) {
        let aNumber = (min + 1 - max) * Math.random() + max;
        let result = Math.floor(aNumber);
        return result;
    }

    static timePromise(time: number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, time);
        })
    }

    static get globalObject() {
        return function (target: any) {
            global[target.prototype.constructor.name] = target;
        }
    }
}