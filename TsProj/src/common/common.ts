export class common {
    //[min,max] 闭区间随机整数
    static ranInt(min: number, max: number) {
        var Range = max - min;
        var Rand = Math.random();
        var num = min + Math.round(Rand * Range); //四舍五入            
        return num;
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