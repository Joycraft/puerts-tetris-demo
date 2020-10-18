export class common {
    static timePromise(time) {
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