/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/GameMain.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/GameMain.ts":
/*!*************************!*\
  !*** ./src/GameMain.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
const csharp_1 = __webpack_require__(/*! csharp */ "csharp");
const globalEvent_1 = __webpack_require__(/*! ./puerts/globalEvent */ "./src/puerts/globalEvent.ts");
__webpack_require__(/*! ./game/rotate */ "./src/game/rotate.ts");
__webpack_require__(/*! ./game/tetris */ "./src/game/tetris.ts");
class GameMain {
    constructor() {
        csharp_1.JsManager.Instance.JsOnApplicationQuit = () => this.onApplicationQuit();
        csharp_1.JsManager.Instance.JsOnDispose = () => this.onDispose();
        csharp_1.JsManager.Instance.JsOnUpdate = () => this.onUpdate();
    }
    onUpdate() {
        globalEvent_1.globalEvent.emitter.emit(globalEvent_1.EVT.UPDATE_TICK);
    }
    onApplicationQuit() {
        console.log("Game onApplicationQuit in JS....");
    }
    onDispose() {
        console.log("Game onDispose in JS....");
    }
}
global['GameMain'] = new GameMain();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/common/common.ts":
/*!******************************!*\
  !*** ./src/common/common.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.common = void 0;
class common {
    //[min,max] 闭区间随机整数
    static ranInt(min, max) {
        var Range = max - min;
        var Rand = Math.random();
        var num = min + Math.round(Rand * Range); //四舍五入            
        return num;
    }
    static timePromise(time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    }
    static get globalObject() {
        return function (target) {
            global[target.prototype.constructor.name] = target;
        };
    }
}
exports.common = common;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/game/rotate.ts":
/*!****************************!*\
  !*** ./src/game/rotate.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotate = void 0;
const component_1 = __webpack_require__(/*! ../puerts/component */ "./src/puerts/component.ts");
const csharp_1 = __webpack_require__(/*! csharp */ "csharp");
const common_1 = __webpack_require__(/*! ../common/common */ "./src/common/common.ts");
const speed = 50;
let rotate = class rotate extends component_1.component {
    constructor(mono) {
        super(mono);
    }
    Start() {
        super.Start();
    }
    Update() {
        super.Update();
        let r = csharp_1.UnityEngine.Vector3.op_Multiply(csharp_1.UnityEngine.Vector3.up, csharp_1.UnityEngine.Time.deltaTime * speed);
        this.transform.Rotate(r);
    }
    OnDestory() {
        super.OnDestory();
    }
};
rotate = __decorate([
    common_1.common.globalObject
], rotate);
exports.rotate = rotate;


/***/ }),

/***/ "./src/game/tetris.ts":
/*!****************************!*\
  !*** ./src/game/tetris.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tetris = exports.tetrisBlock = void 0;
const componentMgr_1 = __webpack_require__(/*! ../puerts/componentMgr */ "./src/puerts/componentMgr.ts");
const csharp_1 = __webpack_require__(/*! csharp */ "csharp");
const component_1 = __webpack_require__(/*! ../puerts/component */ "./src/puerts/component.ts");
const common_1 = __webpack_require__(/*! ../common/common */ "./src/common/common.ts");
const tetrisData_1 = __webpack_require__(/*! ./tetrisData */ "./src/game/tetrisData.ts");
const puerts_1 = __webpack_require__(/*! puerts */ "puerts");
var DIR;
(function (DIR) {
    DIR[DIR["LEFT"] = 0] = "LEFT";
    DIR[DIR["RIGHT"] = 1] = "RIGHT";
    DIR[DIR["DOWN"] = 2] = "DOWN";
})(DIR || (DIR = {}));
let tetrisBlock = class tetrisBlock extends component_1.component {
    constructor(mono) {
        super(mono);
        this.cube = null;
        this.cubeList = [];
        this._type = null;
        this._spinIndex = 0;
        this._tetrisLogic = null;
        this.isSettle = false;
        console.log('tetris block create');
        this.cube = this.transform.Find("/Tetris/cube");
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
        if (this._type >= tetrisData_1.tetrisData.cubeData.length || this._type < 0)
            this._type = 0;
        this.draw();
    }
    get spinIndex() {
        return this._spinIndex;
    }
    set spinIndex(value) {
        value = this.checkSpinIndex(value);
        if (value == null)
            return;
        this._spinIndex = value;
        this.draw();
    }
    get allData() {
        return tetrisData_1.tetrisData.cubeData[this.type].spins;
    }
    get data() {
        return tetrisData_1.tetrisData.cubeData[this.type].spins[this.spinIndex];
    }
    get tetrisLogic() {
        if (this._tetrisLogic == null) {
            this._tetrisLogic = componentMgr_1.componentMgr.ins.getComponent(this.transform.Find("/Tetris"), tetris);
        }
        return this._tetrisLogic;
    }
    Start() {
        super.Start();
    }
    draw() {
        console.log('draw block');
        if (this.data == null)
            return;
        if (this.cubeList.length != this.data.length) {
            this.cubeList.forEach(cube => csharp_1.UnityEngine.GameObject.Destroy(cube));
            this.cubeList = [];
            this.data.forEach(pieceData => {
                let cube = this.Instantiate(this.cube);
                cube.transform.SetParent(this.transform);
                cube.transform.localPosition = new csharp_1.UnityEngine.Vector3(pieceData.x, pieceData.y, 0);
                this.cubeList.push(cube.transform);
            });
            return;
        }
        else {
            for (let i in this.data) {
                this.cubeList[i].localPosition = new csharp_1.UnityEngine.Vector3(this.data[i].x, this.data[i].y);
            }
        }
    }
    checkSpinIndex(value) {
        if (value >= this.allData.length || value < 0)
            value = 0;
        let spinedData = this.allData[value];
        for (let i in spinedData) {
            let boundPiece = { x: spinedData[i].x + this.transform.localPosition.x, y: spinedData[i].y + this.transform.localPosition.y };
            if (this.tetrisLogic.checkExist(boundPiece.x, boundPiece.y) == true
                || boundPiece.x < -this.tetrisLogic.width / 2
                || boundPiece.x > this.tetrisLogic.width / 2
                || boundPiece.y < 0) {
                return null;
            }
        }
        return value;
    }
    checkBound(dir) {
        for (let i in this.data) {
            let piece = this.data[i];
            let boundPiece = null;
            switch (dir) {
                case DIR.DOWN: //下移碰撞
                    boundPiece = { x: this.transform.localPosition.x + piece.x, y: this.transform.localPosition.y + piece.y - 1 };
                    if (boundPiece.y < 0)
                        return true;
                    break;
                case DIR.LEFT: //左移碰撞
                    boundPiece = { x: this.transform.localPosition.x + piece.x - 1, y: this.transform.localPosition.y + piece.y };
                    if (boundPiece.x < -this.tetrisLogic.width / 2)
                        return true;
                    break;
                case DIR.RIGHT: //右移碰撞
                    boundPiece = { x: this.transform.localPosition.x + piece.x + 1, y: this.transform.localPosition.y + piece.y };
                    if (boundPiece.x > this.tetrisLogic.width / 2)
                        return true;
                    break;
            }
            if (this.tetrisLogic.checkExist(boundPiece.x, boundPiece.y) == true) {
                return true;
            }
        }
    }
    async move(dir) {
        if (this.checkBound(dir)) {
            if (dir == DIR.DOWN) {
                if (this.isSettle == true)
                    return;
                this.isSettle = true;
                await common_1.common.timePromise(250);
                if (this.checkBound(dir) != true) {
                    this.isSettle = false;
                    return;
                }
                this.tetrisLogic.settle(this.cubeList, this.transform.localPosition);
            }
            ;
            return;
        }
        switch (dir) {
            case DIR.DOWN:
                this.transform.localPosition = new csharp_1.UnityEngine.Vector3(this.transform.localPosition.x, this.transform.localPosition.y - 1, this.transform.localPosition.z);
                break;
            case DIR.LEFT:
                this.transform.localPosition = new csharp_1.UnityEngine.Vector3(this.transform.localPosition.x - 1, this.transform.localPosition.y, this.transform.localPosition.z);
                break;
            case DIR.RIGHT:
                this.transform.localPosition = new csharp_1.UnityEngine.Vector3(this.transform.localPosition.x + 1, this.transform.localPosition.y, this.transform.localPosition.z);
                break;
        }
    }
    Update() {
        super.Update();
    }
    OnDestory() {
        super.OnDestory();
    }
};
tetrisBlock = __decorate([
    common_1.common.globalObject
], tetrisBlock);
exports.tetrisBlock = tetrisBlock;
let tetris = class tetris extends component_1.component {
    constructor(mono) {
        super(mono);
        //GameObject
        this.content = null;
        this.block = null;
        //UI
        this.btnSpin = null;
        this.btnLeft = null;
        this.btnRight = null;
        this.btnStartGame = null;
        this.btnDown = null;
        //Data
        this.curBlock = null;
        this.settlePieces = [];
        this.width = 15;
        this.height = 20;
        this.gameTick = null;
        this.content = this.transform.Find('content');
        this.block = this.transform.Find('block');
        this.btnSpin = this.transform.Find('/Canvas/Spin').GetComponent(puerts_1.$typeof(csharp_1.UnityEngine.UI.Button));
        this.btnLeft = this.transform.Find('/Canvas/Left').GetComponent(puerts_1.$typeof(csharp_1.UnityEngine.UI.Button));
        this.btnRight = this.transform.Find('/Canvas/Right').GetComponent(puerts_1.$typeof(csharp_1.UnityEngine.UI.Button));
        this.btnStartGame = this.transform.Find('/Canvas/StartGame').GetComponent(puerts_1.$typeof(csharp_1.UnityEngine.UI.Button));
        this.btnDown = this.transform.Find('/Canvas/Down').GetComponent(puerts_1.$typeof(csharp_1.UnityEngine.UI.Button));
        this.btnSpin.onClick.AddListener(() => {
            if (this.curBlock)
                this.curBlock.spinIndex++;
        });
        this.btnLeft.onClick.AddListener(() => {
            if (this.curBlock)
                this.curBlock.move(DIR.LEFT);
        });
        this.btnRight.onClick.AddListener(() => {
            if (this.curBlock)
                this.curBlock.move(DIR.RIGHT);
        });
        this.btnStartGame.onClick.AddListener(() => {
            this.StartGame();
        });
    }
    StartGame() {
        if (this.curBlock != null) {
            csharp_1.UnityEngine.GameObject.Destroy(this.curBlock.gameObject);
            this.curBlock = null;
        }
        this.settlePieces.forEach(pieceObj => {
            csharp_1.UnityEngine.GameObject.Destroy(pieceObj.trans.gameObject);
        });
        this.settlePieces = [];
        this.genRandomBlock();
        this.btnStartGame.gameObject.SetActive(false);
    }
    Start() {
        console.log('tetris gameLogic start.');
        super.Start();
        this.gameTick = setInterval(() => {
            console.log('gameTick');
            if (this.curBlock)
                this.curBlock.move(DIR.DOWN);
        }, 500);
    }
    genRandomBlock() {
        let blockType = common_1.common.ranInt(0, tetrisData_1.tetrisData.cubeData.length - 1);
        let spinIndex = common_1.common.ranInt(0, tetrisData_1.tetrisData.cubeData[blockType].spins.length - 1);
        this.genBlock(blockType, spinIndex);
    }
    genBlock(blockType, spinIndex = 0) {
        console.log(`genBlock Type:${blockType}, Spin:${spinIndex}`);
        if (this.curBlock != null) {
            csharp_1.UnityEngine.GameObject.Destroy(this.curBlock.gameObject);
            this.curBlock = null;
        }
        this.curBlock = componentMgr_1.componentMgr.ins.getComponent(this.Instantiate(this.block), tetrisBlock);
        this.curBlock.transform.SetParent(this.content);
        this.curBlock.transform.localPosition = new csharp_1.UnityEngine.Vector3(0, this.height + 5, 0);
        this.curBlock.type = blockType;
        this.curBlock.spinIndex = spinIndex;
    }
    checkExist(posx, posy) {
        return this.settlePieces.filter(piece => piece != null && piece.pos.x == posx && piece.pos.y == posy).length > 0;
    }
    addPiece(piece) {
        for (let i in this.settlePieces) {
            if (this.settlePieces[i] == null) {
                this.settlePieces[i] = piece;
                return;
            }
        }
        this.settlePieces.push(piece);
    }
    settle(cubeList, blockPos) {
        cubeList.forEach(cube => {
            this.addPiece({
                pos: {
                    x: cube.localPosition.x + blockPos.x,
                    y: cube.localPosition.y + blockPos.y,
                },
                trans: cube,
            });
            cube.SetParent(this.content);
        });
        csharp_1.UnityEngine.GameObject.Destroy(this.curBlock.gameObject);
        this.curBlock = null;
        for (let i = 0; i < this.height; i++) {
            let line = this.settlePieces.filter(piece => piece != null && piece.pos.y == i);
            if (line.length >= this.width) {
                line.forEach(linePiece => {
                    this.settlePieces[this.settlePieces.indexOf(linePiece)] = null;
                    csharp_1.UnityEngine.GameObject.Destroy(linePiece.trans.gameObject);
                });
                this.settlePieces.filter(piece => piece != null && piece.pos.y > i)
                    .forEach(piece => {
                    piece.trans.localPosition = new csharp_1.UnityEngine.Vector3(piece.trans.localPosition.x, piece.trans.localPosition.y - 1, piece.trans.localPosition.z);
                    piece.pos.y--;
                });
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
};
tetris = __decorate([
    common_1.common.globalObject
], tetris);
exports.tetris = tetris;


/***/ }),

/***/ "./src/game/tetrisData.ts":
/*!********************************!*\
  !*** ./src/game/tetrisData.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tetrisData = void 0;
var tetrisData;
(function (tetrisData) {
    let tetrisArrData = [];
    tetrisArrData[0] = {
        anchor: [1, 1],
        arr: [
            [
                [0, 1, 0],
                [1, 1, 1],
                [0, 0, 0] // ☐☐☐
            ],
            [
                [0, 1, 0],
                [0, 1, 1],
                [0, 1, 0] // ☐▨☐
            ],
            [
                [0, 0, 0],
                [1, 1, 1],
                [0, 1, 0] // ☐▨☐
            ],
            [
                [0, 1, 0],
                [1, 1, 0],
                [0, 1, 0],
            ]
        ]
    };
    tetrisArrData[1] = {
        anchor: [1, 1],
        arr: [
            [
                [1, 1, 0],
                [1, 0, 0],
                [1, 0, 0] // ▨☐☐
            ],
            [
                [0, 0, 0],
                [1, 0, 0],
                [1, 1, 1] // ▨▨▨
            ],
            [
                [0, 0, 1],
                [0, 0, 1],
                [0, 1, 1] // ☐▨▨
            ],
            [
                [1, 1, 1],
                [0, 0, 1],
                [0, 0, 0],
            ]
        ]
    };
    tetrisArrData[2] = {
        anchor: [1, 1],
        arr: [
            [
                [1, 0, 0],
                [1, 0, 0],
                [1, 1, 0] // ▨▨☐
            ],
            [
                [0, 0, 0],
                [0, 0, 1],
                [1, 1, 1] // ▨▨▨
            ],
            [
                [0, 1, 1],
                [0, 0, 1],
                [0, 0, 1] // ☐☐▨
            ],
            [
                [1, 1, 1],
                [1, 0, 0],
                [0, 0, 0],
            ]
        ]
    };
    tetrisArrData[3] = {
        anchor: [1, 1],
        arr: [
            [
                [0, 1, 0],
                [1, 1, 0],
                [1, 0, 0] // ▨☐☐
            ],
            [
                [1, 1, 0],
                [0, 1, 1],
                [0, 0, 0] // ☐☐☐
            ],
        ]
    };
    tetrisArrData[4] = {
        anchor: [1, 1],
        arr: [
            [
                [1, 0, 0],
                [1, 1, 0],
                [0, 1, 0] // ☐▨☐
            ],
            [
                [0, 1, 1],
                [1, 1, 0],
                [0, 0, 0] // ☐☐☐
            ],
        ]
    };
    tetrisArrData[5] = {
        anchor: [0, 0],
        arr: [
            [
                [1, 1],
                [1, 1],
            ],
        ]
    };
    tetrisArrData[6] = {
        anchor: [1, 2],
        arr: [
            [
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0] // ☐☐☐☐
            ],
            [
                [0, 0, 1, 0],
                [0, 0, 1, 0],
                [0, 0, 1, 0],
                [0, 0, 1, 0] // ☐☐▨☐
            ],
        ]
    };
    tetrisData.cubeData = [];
    tetrisArrData.forEach((arrData, index) => {
        let tetrisCube = {
            spins: [],
        };
        arrData.arr.forEach(spinArr => {
            let spin = [];
            for (let i in spinArr) {
                for (let j in spinArr[i]) {
                    let result = spinArr[i][j];
                    if (result == 1) {
                        let tetrisPiece = {
                            x: parseInt(i) - arrData.anchor[0],
                            y: parseInt(j) - arrData.anchor[1],
                        };
                        spin.push(tetrisPiece);
                    }
                }
            }
            tetrisCube.spins.push(spin);
        });
        tetrisData.cubeData.push(tetrisCube);
    });
})(tetrisData = exports.tetrisData || (exports.tetrisData = {}));


/***/ }),

/***/ "./src/puerts/component.ts":
/*!*********************************!*\
  !*** ./src/puerts/component.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.component = void 0;
const globalEvent_1 = __webpack_require__(/*! ./globalEvent */ "./src/puerts/globalEvent.ts");
const componentMgr_1 = __webpack_require__(/*! ./componentMgr */ "./src/puerts/componentMgr.ts");
const csharp_1 = __webpack_require__(/*! csharp */ "csharp");
class component {
    constructor(mono) {
        this._mono = null;
        this._updateListener = null;
        this.Instantiate = csharp_1.UnityEngine.GameObject.Instantiate;
        this._mono = mono;
        this._mono.JsStart = () => this.Start();
        this._mono.JsOnDestroy = () => this.OnDestory();
        this._updateListener = () => {
            if (this.gameObject == null)
                return;
            if (this.gameObject.activeInHierarchy == false)
                return;
            this.Update();
        };
        globalEvent_1.globalEvent.emitter.on(globalEvent_1.EVT.UPDATE_TICK, this._updateListener);
        componentMgr_1.componentMgr.ins.add(this.gameObject.GetHashCode(), this);
    }
    static create(mono) {
        new this(mono);
    }
    get gameObject() {
        return this._mono == null ? null : this._mono.gameObject;
    }
    get transform() {
        return this._mono == null ? null : this._mono.transform;
    }
    OnDestory() {
        globalEvent_1.globalEvent.emitter.off(globalEvent_1.EVT.UPDATE_TICK, this._updateListener);
        componentMgr_1.componentMgr.ins.del(this.gameObject.GetHashCode(), this);
        this._mono = null;
        this._updateListener = null;
    }
    Start() {
    }
    Update() {
    }
}
exports.component = component;


/***/ }),

/***/ "./src/puerts/componentMgr.ts":
/*!************************************!*\
  !*** ./src/puerts/componentMgr.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.componentMgr = void 0;
const csharp_1 = __webpack_require__(/*! csharp */ "csharp");
class componentMgr {
    constructor() {
        this.map = {};
    }
    add(hashCode, comp) {
        if (this.map[hashCode] == null)
            this.map[hashCode] = [];
        this.map[hashCode].push(comp);
    }
    del(hashCode, comp) {
        for (let i = 0, length = this.map[hashCode].length; i < length; i++) {
            if (this.map[hashCode][i] == comp) {
                delete this.map[hashCode][i];
                this.map[hashCode][i] = null;
                return;
            }
        }
    }
    getComponent(go, compType) {
        if (go instanceof csharp_1.UnityEngine.Transform) {
            go = go.gameObject;
        }
        let components = this.getComponents(go, compType);
        if (components.length <= 0)
            return null;
        return components[0];
    }
    getComponents(go, compType) {
        let hashCode = go.GetHashCode();
        if (this.map[hashCode] == null || this.map[hashCode].length <= 0)
            return null;
        let components = this.map[hashCode].filter(comp => comp instanceof compType);
        return components;
    }
}
exports.componentMgr = componentMgr;
componentMgr.ins = new componentMgr();


/***/ }),

/***/ "./src/puerts/globalEvent.ts":
/*!***********************************!*\
  !*** ./src/puerts/globalEvent.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.globalEvent = exports.EVT = void 0;
const events = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var EVT;
(function (EVT) {
    EVT["UPDATE_TICK"] = "updateTick";
})(EVT = exports.EVT || (exports.EVT = {}));
class globalEvent {
}
exports.globalEvent = globalEvent;
globalEvent.emitter = new events.EventEmitter();


/***/ }),

/***/ "csharp":
/*!*************************!*\
  !*** external "csharp" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("csharp");

/***/ }),

/***/ "puerts":
/*!*************************!*\
  !*** external "puerts" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("puerts");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZU1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21tb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvcm90YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3RldHJpcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS90ZXRyaXNEYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9wdWVydHMvY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wdWVydHMvY29tcG9uZW50TWdyLnRzIiwid2VicGFjazovLy8uL3NyYy9wdWVydHMvZ2xvYmFsRXZlbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3NoYXJwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHVlcnRzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUssTUFBTTthQUN2QjtZQUNEO2dCQUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUssTUFBTTthQUN2QjtZQUNEO2dCQUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ1o7U0FDSjtLQUNKO0lBRUQsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHO1FBQ2YsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNkLEdBQUcsRUFBRTtZQUNEO2dCQUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUssTUFBTTthQUN2QjtZQUNEO2dCQUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUssTUFBTTthQUN2QjtZQUNEO2dCQUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUssTUFBTTthQUN2QjtZQUNEO2dCQUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ1o7U0FDSjtLQUNKO0lBRUQsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHO1FBQ2YsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNkLEdBQUcsRUFBRTtZQUNEO2dCQUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUssTUFBTTthQUN2QjtZQUNEO2dCQUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUssTUFBTTthQUN2QjtZQUNEO2dCQUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUssTUFBTTthQUN2QjtZQUNEO2dCQUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ1o7U0FDSjtLQUNKO0lBRUQsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHO1FBQ2YsTUFBTSxFQUFFLENBQUMsQ0FBQyxF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QUksVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDeEMsT0FBVSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGFBQWEsQ0FBc0IsRUFBa0QsRUFBRSxRQUEwQjtRQUM3RyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDOUUsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFlBQXVDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hHLE9BQVksVUFBVSxDQUFDO0lBQzNCLENBQUM7O0FBbkNMLG9DQW9DQztBQW5DVSxnQkFBRyxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDSmxELG9GQUFpQztBQUVqQyxJQUFZLEdBRVg7QUFGRCxXQUFZLEdBQUc7SUFDWCxpQ0FBMEI7QUFDOUIsQ0FBQyxFQUZXLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQUVkO0FBRUQsTUFBYSxXQUFXOztBQUF4QixrQ0FFQztBQURVLG1CQUFPLEdBQXdCLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7QUNQcEUsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvR2FtZU1haW4udHNcIik7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xubW9kdWxlLmV4cG9ydHMub25jZSA9IG9uY2U7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gX2dldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBvbmNlKGVtaXR0ZXIsIG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmdW5jdGlvbiBldmVudExpc3RlbmVyKCkge1xuICAgICAgaWYgKGVycm9yTGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG4gICAgdmFyIGVycm9yTGlzdGVuZXI7XG5cbiAgICAvLyBBZGRpbmcgYW4gZXJyb3IgbGlzdGVuZXIgaXMgbm90IG9wdGlvbmFsIGJlY2F1c2VcbiAgICAvLyBpZiBhbiBlcnJvciBpcyB0aHJvd24gb24gYW4gZXZlbnQgZW1pdHRlciB3ZSBjYW5ub3RcbiAgICAvLyBndWFyYW50ZWUgdGhhdCB0aGUgYWN0dWFsIGV2ZW50IHdlIGFyZSB3YWl0aW5nIHdpbGxcbiAgICAvLyBiZSBmaXJlZC4gVGhlIHJlc3VsdCBjb3VsZCBiZSBhIHNpbGVudCB3YXkgdG8gY3JlYXRlXG4gICAgLy8gbWVtb3J5IG9yIGZpbGUgZGVzY3JpcHRvciBsZWFrcywgd2hpY2ggaXMgc29tZXRoaW5nXG4gICAgLy8gd2Ugc2hvdWxkIGF2b2lkLlxuICAgIGlmIChuYW1lICE9PSAnZXJyb3InKSB7XG4gICAgICBlcnJvckxpc3RlbmVyID0gZnVuY3Rpb24gZXJyb3JMaXN0ZW5lcihlcnIpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihuYW1lLCBldmVudExpc3RlbmVyKTtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9O1xuXG4gICAgICBlbWl0dGVyLm9uY2UoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgZW1pdHRlci5vbmNlKG5hbWUsIGV2ZW50TGlzdGVuZXIpO1xuICB9KTtcbn1cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IEpzTWFuYWdlciB9IGZyb20gJ2NzaGFycCc7XHJcbmltcG9ydCB7IEVWVCwgZ2xvYmFsRXZlbnQgfSBmcm9tICcuL3B1ZXJ0cy9nbG9iYWxFdmVudCc7XHJcbnJlcXVpcmUoJy4vZ2FtZS9yb3RhdGUnKTtcclxucmVxdWlyZSgnLi9nYW1lL3RldHJpcycpO1xyXG5cclxuY2xhc3MgR2FtZU1haW4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgSnNNYW5hZ2VyLkluc3RhbmNlLkpzT25BcHBsaWNhdGlvblF1aXQgPSAoKSA9PiB0aGlzLm9uQXBwbGljYXRpb25RdWl0KCk7XHJcbiAgICAgICAgSnNNYW5hZ2VyLkluc3RhbmNlLkpzT25EaXNwb3NlID0gKCkgPT4gdGhpcy5vbkRpc3Bvc2UoKTtcclxuICAgICAgICBKc01hbmFnZXIuSW5zdGFuY2UuSnNPblVwZGF0ZSA9ICgpID0+IHRoaXMub25VcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgZ2xvYmFsRXZlbnQuZW1pdHRlci5lbWl0KEVWVC5VUERBVEVfVElDSyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQXBwbGljYXRpb25RdWl0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBvbkFwcGxpY2F0aW9uUXVpdCBpbiBKUy4uLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRGlzcG9zZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgb25EaXNwb3NlIGluIEpTLi4uLlwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZ2xvYmFsWydHYW1lTWFpbiddID0gbmV3IEdhbWVNYWluKCk7IiwiZXhwb3J0IGNsYXNzIGNvbW1vbiB7XHJcbiAgICAvL1ttaW4sbWF4XSDpl63ljLrpl7Tpmo/mnLrmlbTmlbBcclxuICAgIHN0YXRpYyByYW5JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIFJhbmdlID0gbWF4IC0gbWluO1xyXG4gICAgICAgIHZhciBSYW5kID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB2YXIgbnVtID0gbWluICsgTWF0aC5yb3VuZChSYW5kICogUmFuZ2UpOyAvL+Wbm+iIjeS6lOWFpSAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRpbWVQcm9taXNlKHRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCB0aW1lKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgZ2xvYmFsT2JqZWN0KCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICAgICAgZ2xvYmFsW3RhcmdldC5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZV0gPSB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSBcIi4uL3B1ZXJ0cy9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSnNCZWhhdmlvdXIsIFVuaXR5RW5naW5lIH0gZnJvbSBcImNzaGFycFwiO1xyXG5pbXBvcnQgeyBjb21tb24gfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vblwiO1xyXG5cclxuY29uc3Qgc3BlZWQgPSA1MDtcclxuXHJcbkBjb21tb24uZ2xvYmFsT2JqZWN0XHJcbmV4cG9ydCBjbGFzcyByb3RhdGUgZXh0ZW5kcyBjb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IobW9ubzogSnNCZWhhdmlvdXIpIHtcclxuICAgICAgICBzdXBlcihtb25vKTtcclxuICAgIH1cclxuXHJcbiAgICBTdGFydCgpIHtcclxuICAgICAgICBzdXBlci5TdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgICAgICBzdXBlci5VcGRhdGUoKTtcclxuICAgICAgICBsZXQgciA9IFVuaXR5RW5naW5lLlZlY3RvcjMub3BfTXVsdGlwbHkoVW5pdHlFbmdpbmUuVmVjdG9yMy51cCwgVW5pdHlFbmdpbmUuVGltZS5kZWx0YVRpbWUgKiBzcGVlZCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uUm90YXRlKHIpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uRGVzdG9yeSgpIHtcclxuICAgICAgICBzdXBlci5PbkRlc3RvcnkoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGNvbXBvbmVudE1nciB9IGZyb20gXCIuLi9wdWVydHMvY29tcG9uZW50TWdyXCI7XHJcbmltcG9ydCB7IEpzQmVoYXZpb3VyLCBVbml0eUVuZ2luZSB9IGZyb20gXCJjc2hhcnBcIjtcclxuaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSBcIi4uL3B1ZXJ0cy9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgY29tbW9uIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb25cIjtcclxuaW1wb3J0IHsgdGV0cmlzRGF0YSB9IGZyb20gXCIuL3RldHJpc0RhdGFcIjtcclxuaW1wb3J0IHsgJHR5cGVvZiB9IGZyb20gXCJwdWVydHNcIjtcclxuXHJcbmVudW0gRElSIHtcclxuICAgIExFRlQsXHJcbiAgICBSSUdIVCxcclxuICAgIERPV04sXHJcbn1cclxuXHJcbkBjb21tb24uZ2xvYmFsT2JqZWN0XHJcbmV4cG9ydCBjbGFzcyB0ZXRyaXNCbG9jayBleHRlbmRzIGNvbXBvbmVudCB7XHJcbiAgICBjdWJlOiBVbml0eUVuZ2luZS5UcmFuc2Zvcm0gPSBudWxsO1xyXG5cclxuICAgIGN1YmVMaXN0OiBVbml0eUVuZ2luZS5UcmFuc2Zvcm1bXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX3R5cGU6IG51bWJlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLl90eXBlID49IHRldHJpc0RhdGEuY3ViZURhdGEubGVuZ3RoIHx8IHRoaXMuX3R5cGUgPCAwKVxyXG4gICAgICAgICAgICB0aGlzLl90eXBlID0gMDtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zcGluSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZ2V0IHNwaW5JbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcGluSW5kZXg7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHNwaW5JbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLmNoZWNrU3BpbkluZGV4KHZhbHVlKTtcclxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX3NwaW5JbmRleCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbGxEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0ZXRyaXNEYXRhLmN1YmVEYXRhW3RoaXMudHlwZV0uc3BpbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRldHJpc0RhdGEuY3ViZURhdGFbdGhpcy50eXBlXS5zcGluc1t0aGlzLnNwaW5JbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdGV0cmlzTG9naWM6IHRldHJpcyA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IHRldHJpc0xvZ2ljKCk6IHRldHJpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RldHJpc0xvZ2ljID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGV0cmlzTG9naWMgPSBjb21wb25lbnRNZ3IuaW5zLmdldENvbXBvbmVudCh0aGlzLnRyYW5zZm9ybS5GaW5kKFwiL1RldHJpc1wiKSwgdGV0cmlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RldHJpc0xvZ2ljO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU2V0dGxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IobW9ubzogSnNCZWhhdmlvdXIpIHtcclxuICAgICAgICBzdXBlcihtb25vKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGV0cmlzIGJsb2NrIGNyZWF0ZScpO1xyXG4gICAgICAgIHRoaXMuY3ViZSA9IHRoaXMudHJhbnNmb3JtLkZpbmQoXCIvVGV0cmlzL2N1YmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgU3RhcnQoKSB7XHJcbiAgICAgICAgc3VwZXIuU3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkcmF3IGJsb2NrJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuY3ViZUxpc3QubGVuZ3RoICE9IHRoaXMuZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdWJlTGlzdC5mb3JFYWNoKGN1YmUgPT4gVW5pdHlFbmdpbmUuR2FtZU9iamVjdC5EZXN0cm95KGN1YmUpKVxyXG4gICAgICAgICAgICB0aGlzLmN1YmVMaXN0ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKHBpZWNlRGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3ViZSA9IDxVbml0eUVuZ2luZS5HYW1lT2JqZWN0PnRoaXMuSW5zdGFudGlhdGUodGhpcy5jdWJlKTtcclxuICAgICAgICAgICAgICAgIGN1YmUudHJhbnNmb3JtLlNldFBhcmVudCh0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgICAgICAgICBjdWJlLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uID0gbmV3IFVuaXR5RW5naW5lLlZlY3RvcjMocGllY2VEYXRhLngsIHBpZWNlRGF0YS55LCAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3ViZUxpc3QucHVzaChjdWJlLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdWJlTGlzdFtpXS5sb2NhbFBvc2l0aW9uID0gbmV3IFVuaXR5RW5naW5lLlZlY3RvcjModGhpcy5kYXRhW2ldLngsIHRoaXMuZGF0YVtpXS55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja1NwaW5JbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID49IHRoaXMuYWxsRGF0YS5sZW5ndGggfHwgdmFsdWUgPCAwKVxyXG4gICAgICAgICAgICB2YWx1ZSA9IDA7XHJcbiAgICAgICAgbGV0IHNwaW5lZERhdGEgPSB0aGlzLmFsbERhdGFbdmFsdWVdO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gc3BpbmVkRGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgYm91bmRQaWVjZTogdGV0cmlzRGF0YS50ZXRyaXNQaWVjZSA9IHsgeDogc3BpbmVkRGF0YVtpXS54ICsgdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi54LCB5OiBzcGluZWREYXRhW2ldLnkgKyB0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnkgfTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGV0cmlzTG9naWMuY2hlY2tFeGlzdChib3VuZFBpZWNlLngsIGJvdW5kUGllY2UueSkgPT0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfHwgYm91bmRQaWVjZS54IDwgLSB0aGlzLnRldHJpc0xvZ2ljLndpZHRoIC8gMlxyXG4gICAgICAgICAgICAgICAgfHwgYm91bmRQaWVjZS54ID4gdGhpcy50ZXRyaXNMb2dpYy53aWR0aCAvIDJcclxuICAgICAgICAgICAgICAgIHx8IGJvdW5kUGllY2UueSA8IDBcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tCb3VuZChkaXI6IERJUikge1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCBwaWVjZSA9IHRoaXMuZGF0YVtpXTtcclxuICAgICAgICAgICAgbGV0IGJvdW5kUGllY2U6IHRldHJpc0RhdGEudGV0cmlzUGllY2UgPSBudWxsO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGRpcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBESVIuRE9XTjogLy/kuIvnp7vnorDmkp5cclxuICAgICAgICAgICAgICAgICAgICBib3VuZFBpZWNlID0geyB4OiB0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnggKyBwaWVjZS54LCB5OiB0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnkgKyBwaWVjZS55IC0gMSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib3VuZFBpZWNlLnkgPCAwKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgRElSLkxFRlQ6IC8v5bem56e756Kw5pKeXHJcbiAgICAgICAgICAgICAgICAgICAgYm91bmRQaWVjZSA9IHsgeDogdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi54ICsgcGllY2UueCAtIDEsIHk6IHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24ueSArIHBpZWNlLnkgfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYm91bmRQaWVjZS54IDwgLXRoaXMudGV0cmlzTG9naWMud2lkdGggLyAyKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgRElSLlJJR0hUOiAvL+WPs+enu+eisOaSnlxyXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kUGllY2UgPSB7IHg6IHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24ueCArIHBpZWNlLnggKyAxLCB5OiB0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnkgKyBwaWVjZS55IH07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvdW5kUGllY2UueCA+IHRoaXMudGV0cmlzTG9naWMud2lkdGggLyAyKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGV0cmlzTG9naWMuY2hlY2tFeGlzdChib3VuZFBpZWNlLngsIGJvdW5kUGllY2UueSkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbW92ZShkaXI6IERJUikge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrQm91bmQoZGlyKSkge1xyXG4gICAgICAgICAgICBpZiAoZGlyID09IERJUi5ET1dOKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NldHRsZSA9PSB0cnVlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2V0dGxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbW1vbi50aW1lUHJvbWlzZSgyNTApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tCb3VuZChkaXIpICE9IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2V0dGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXRyaXNMb2dpYy5zZXR0bGUodGhpcy5jdWJlTGlzdCwgdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZGlyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRElSLkRPV046XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uID0gbmV3IFVuaXR5RW5naW5lLlZlY3RvcjModGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi54LCB0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnkgLSAxLCB0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRElSLkxFRlQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uID0gbmV3IFVuaXR5RW5naW5lLlZlY3RvcjModGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi54IC0gMSwgdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi55LCB0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRElSLlJJR0hUOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbiA9IG5ldyBVbml0eUVuZ2luZS5WZWN0b3IzKHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24ueCArIDEsIHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24ueSwgdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGUoKSB7XHJcbiAgICAgICAgc3VwZXIuVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgT25EZXN0b3J5KCkge1xyXG4gICAgICAgIHN1cGVyLk9uRGVzdG9yeSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgcGllY2VPYmoge1xyXG4gICAgcG9zOiB7XHJcbiAgICAgICAgeDogbnVtYmVyLFxyXG4gICAgICAgIHk6IG51bWJlcixcclxuICAgIH0sXHJcbiAgICB0cmFuczogVW5pdHlFbmdpbmUuVHJhbnNmb3JtLFxyXG59XHJcblxyXG5AY29tbW9uLmdsb2JhbE9iamVjdFxyXG5leHBvcnQgY2xhc3MgdGV0cmlzIGV4dGVuZHMgY29tcG9uZW50IHtcclxuICAgIC8vR2FtZU9iamVjdFxyXG4gICAgY29udGVudDogVW5pdHlFbmdpbmUuVHJhbnNmb3JtID0gbnVsbDtcclxuICAgIGJsb2NrOiBVbml0eUVuZ2luZS5UcmFuc2Zvcm0gPSBudWxsO1xyXG5cclxuICAgIC8vVUlcclxuICAgIGJ0blNwaW46IFVuaXR5RW5naW5lLlVJLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBidG5MZWZ0OiBVbml0eUVuZ2luZS5VSS5CdXR0b24gPSBudWxsO1xyXG4gICAgYnRuUmlnaHQ6IFVuaXR5RW5naW5lLlVJLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBidG5TdGFydEdhbWU6IFVuaXR5RW5naW5lLlVJLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBidG5Eb3duOiBVbml0eUVuZ2luZS5VSS5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIC8vRGF0YVxyXG4gICAgY3VyQmxvY2s6IHRldHJpc0Jsb2NrID0gbnVsbDtcclxuICAgIHNldHRsZVBpZWNlczogcGllY2VPYmpbXSA9IFtdO1xyXG4gICAgd2lkdGg6IG51bWJlciA9IDE1O1xyXG4gICAgaGVpZ2h0OiBudW1iZXIgPSAyMDtcclxuXHJcbiAgICBnYW1lVGljazogTm9kZUpTLlRpbWVvdXQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vbm86IEpzQmVoYXZpb3VyKSB7XHJcbiAgICAgICAgc3VwZXIobW9ubyk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy50cmFuc2Zvcm0uRmluZCgnY29udGVudCcpO1xyXG4gICAgICAgIHRoaXMuYmxvY2sgPSB0aGlzLnRyYW5zZm9ybS5GaW5kKCdibG9jaycpO1xyXG4gICAgICAgIHRoaXMuYnRuU3BpbiA9IHRoaXMudHJhbnNmb3JtLkZpbmQoJy9DYW52YXMvU3BpbicpLkdldENvbXBvbmVudCgkdHlwZW9mKFVuaXR5RW5naW5lLlVJLkJ1dHRvbikpIGFzIFVuaXR5RW5naW5lLlVJLkJ1dHRvbjtcclxuICAgICAgICB0aGlzLmJ0bkxlZnQgPSB0aGlzLnRyYW5zZm9ybS5GaW5kKCcvQ2FudmFzL0xlZnQnKS5HZXRDb21wb25lbnQoJHR5cGVvZihVbml0eUVuZ2luZS5VSS5CdXR0b24pKSBhcyBVbml0eUVuZ2luZS5VSS5CdXR0b247XHJcbiAgICAgICAgdGhpcy5idG5SaWdodCA9IHRoaXMudHJhbnNmb3JtLkZpbmQoJy9DYW52YXMvUmlnaHQnKS5HZXRDb21wb25lbnQoJHR5cGVvZihVbml0eUVuZ2luZS5VSS5CdXR0b24pKSBhcyBVbml0eUVuZ2luZS5VSS5CdXR0b247XHJcbiAgICAgICAgdGhpcy5idG5TdGFydEdhbWUgPSB0aGlzLnRyYW5zZm9ybS5GaW5kKCcvQ2FudmFzL1N0YXJ0R2FtZScpLkdldENvbXBvbmVudCgkdHlwZW9mKFVuaXR5RW5naW5lLlVJLkJ1dHRvbikpIGFzIFVuaXR5RW5naW5lLlVJLkJ1dHRvbjtcclxuICAgICAgICB0aGlzLmJ0bkRvd24gPSB0aGlzLnRyYW5zZm9ybS5GaW5kKCcvQ2FudmFzL0Rvd24nKS5HZXRDb21wb25lbnQoJHR5cGVvZihVbml0eUVuZ2luZS5VSS5CdXR0b24pKSBhcyBVbml0eUVuZ2luZS5VSS5CdXR0b247XHJcblxyXG4gICAgICAgIHRoaXMuYnRuU3Bpbi5vbkNsaWNrLkFkZExpc3RlbmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyQmxvY2spXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckJsb2NrLnNwaW5JbmRleCsrO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5idG5MZWZ0Lm9uQ2xpY2suQWRkTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJCbG9jaylcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyQmxvY2subW92ZShESVIuTEVGVCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmJ0blJpZ2h0Lm9uQ2xpY2suQWRkTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJCbG9jaylcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyQmxvY2subW92ZShESVIuUklHSFQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5idG5TdGFydEdhbWUub25DbGljay5BZGRMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuU3RhcnRHYW1lKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBTdGFydEdhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyQmxvY2sgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBVbml0eUVuZ2luZS5HYW1lT2JqZWN0LkRlc3Ryb3kodGhpcy5jdXJCbG9jay5nYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5jdXJCbG9jayA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dGxlUGllY2VzLmZvckVhY2gocGllY2VPYmogPT4ge1xyXG4gICAgICAgICAgICBVbml0eUVuZ2luZS5HYW1lT2JqZWN0LkRlc3Ryb3kocGllY2VPYmoudHJhbnMuZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNldHRsZVBpZWNlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2VuUmFuZG9tQmxvY2soKTtcclxuICAgICAgICB0aGlzLmJ0blN0YXJ0R2FtZS5nYW1lT2JqZWN0LlNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgU3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RldHJpcyBnYW1lTG9naWMgc3RhcnQuJyk7XHJcbiAgICAgICAgc3VwZXIuU3RhcnQoKTtcclxuICAgICAgICB0aGlzLmdhbWVUaWNrID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2FtZVRpY2snKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyQmxvY2spXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckJsb2NrLm1vdmUoRElSLkRPV04pO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuUmFuZG9tQmxvY2soKSB7XHJcbiAgICAgICAgbGV0IGJsb2NrVHlwZSA9IGNvbW1vbi5yYW5JbnQoMCwgdGV0cmlzRGF0YS5jdWJlRGF0YS5sZW5ndGggLSAxKTtcclxuICAgICAgICBsZXQgc3BpbkluZGV4ID0gY29tbW9uLnJhbkludCgwLCB0ZXRyaXNEYXRhLmN1YmVEYXRhW2Jsb2NrVHlwZV0uc3BpbnMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgdGhpcy5nZW5CbG9jayhibG9ja1R5cGUsIHNwaW5JbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuQmxvY2soYmxvY2tUeXBlOiBudW1iZXIsIHNwaW5JbmRleDogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBnZW5CbG9jayBUeXBlOiR7YmxvY2tUeXBlfSwgU3Bpbjoke3NwaW5JbmRleH1gKTtcclxuICAgICAgICBpZiAodGhpcy5jdXJCbG9jayAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIFVuaXR5RW5naW5lLkdhbWVPYmplY3QuRGVzdHJveSh0aGlzLmN1ckJsb2NrLmdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICB0aGlzLmN1ckJsb2NrID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJCbG9jayA9IGNvbXBvbmVudE1nci5pbnMuZ2V0Q29tcG9uZW50KDxVbml0eUVuZ2luZS5HYW1lT2JqZWN0PnRoaXMuSW5zdGFudGlhdGUodGhpcy5ibG9jayksIHRldHJpc0Jsb2NrKTtcclxuICAgICAgICB0aGlzLmN1ckJsb2NrLnRyYW5zZm9ybS5TZXRQYXJlbnQodGhpcy5jb250ZW50KTtcclxuICAgICAgICB0aGlzLmN1ckJsb2NrLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uID0gbmV3IFVuaXR5RW5naW5lLlZlY3RvcjMoMCwgdGhpcy5oZWlnaHQgKyA1LCAwKTtcclxuICAgICAgICB0aGlzLmN1ckJsb2NrLnR5cGUgPSBibG9ja1R5cGU7XHJcbiAgICAgICAgdGhpcy5jdXJCbG9jay5zcGluSW5kZXggPSBzcGluSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tFeGlzdChwb3N4OiBudW1iZXIsIHBvc3k6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRsZVBpZWNlcy5maWx0ZXIocGllY2UgPT4gcGllY2UgIT0gbnVsbCAmJiBwaWVjZS5wb3MueCA9PSBwb3N4ICYmIHBpZWNlLnBvcy55ID09IHBvc3kpLmxlbmd0aCA+IDBcclxuICAgIH1cclxuXHJcbiAgICBhZGRQaWVjZShwaWVjZTogcGllY2VPYmopIHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc2V0dGxlUGllY2VzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRsZVBpZWNlc1tpXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRsZVBpZWNlc1tpXSA9IHBpZWNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dGxlUGllY2VzLnB1c2gocGllY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHRsZShjdWJlTGlzdDogVW5pdHlFbmdpbmUuVHJhbnNmb3JtW10sIGJsb2NrUG9zOiBVbml0eUVuZ2luZS5WZWN0b3IzKSB7XHJcbiAgICAgICAgY3ViZUxpc3QuZm9yRWFjaChjdWJlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRQaWVjZSh7XHJcbiAgICAgICAgICAgICAgICBwb3M6IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBjdWJlLmxvY2FsUG9zaXRpb24ueCArIGJsb2NrUG9zLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogY3ViZS5sb2NhbFBvc2l0aW9uLnkgKyBibG9ja1Bvcy55LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRyYW5zOiBjdWJlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY3ViZS5TZXRQYXJlbnQodGhpcy5jb250ZW50KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFVuaXR5RW5naW5lLkdhbWVPYmplY3QuRGVzdHJveSh0aGlzLmN1ckJsb2NrLmdhbWVPYmplY3QpO1xyXG4gICAgICAgIHRoaXMuY3VyQmxvY2sgPSBudWxsO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVpZ2h0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGxpbmUgPSB0aGlzLnNldHRsZVBpZWNlcy5maWx0ZXIocGllY2UgPT4gcGllY2UgIT0gbnVsbCAmJiBwaWVjZS5wb3MueSA9PSBpKTtcclxuICAgICAgICAgICAgaWYgKGxpbmUubGVuZ3RoID49IHRoaXMud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIGxpbmUuZm9yRWFjaChsaW5lUGllY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGxlUGllY2VzW3RoaXMuc2V0dGxlUGllY2VzLmluZGV4T2YobGluZVBpZWNlKV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIFVuaXR5RW5naW5lLkdhbWVPYmplY3QuRGVzdHJveShsaW5lUGllY2UudHJhbnMuZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGxlUGllY2VzLmZpbHRlcihwaWVjZSA9PiBwaWVjZSAhPSBudWxsICYmIHBpZWNlLnBvcy55ID4gaSlcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChwaWVjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLnRyYW5zLmxvY2FsUG9zaXRpb24gPSBuZXcgVW5pdHlFbmdpbmUuVmVjdG9yMyhwaWVjZS50cmFucy5sb2NhbFBvc2l0aW9uLngsIHBpZWNlLnRyYW5zLmxvY2FsUG9zaXRpb24ueSAtIDEsIHBpZWNlLnRyYW5zLmxvY2FsUG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLnBvcy55LS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZW5SYW5kb21CbG9jaygpO1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgICAgICBzdXBlci5VcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkRlc3RvcnkoKSB7XHJcbiAgICAgICAgc3VwZXIuT25EZXN0b3J5KCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmdhbWVUaWNrKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBuYW1lc3BhY2UgdGV0cmlzRGF0YSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIHRldHJpc1BpZWNlIHtcclxuICAgICAgICB4OiBudW1iZXIsXHJcbiAgICAgICAgeTogbnVtYmVyLFxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgdGV0cmlzQ3ViZSB7XHJcbiAgICAgICAgc3BpbnM6IHRldHJpc1BpZWNlW11bXVxyXG4gICAgfVxyXG5cclxuICAgIGxldCB0ZXRyaXNBcnJEYXRhOiB7XHJcbiAgICAgICAgYW5jaG9yOiBudW1iZXJbXSxcclxuICAgICAgICBhcnI6IG51bWJlcltdW11bXSxcclxuICAgIH1bXSA9IFtdO1xyXG5cclxuICAgIHRldHJpc0FyckRhdGFbMF0gPSB7XHJcbiAgICAgICAgYW5jaG9yOiBbMSwgMV0sXHJcbiAgICAgICAgYXJyOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSwgICAgLy8g4piQ4pao4piQXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMV0sICAgIC8vIOKWqOKWqOKWqFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDBdICAgICAvLyDimJDimJDimJBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLCAgICAvLyDimJDilqjimJBcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxXSwgICAgLy8g4piQ4pao4paoXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0gICAgIC8vIOKYkOKWqOKYkFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMF0sICAgIC8vIOKYkOKYkOKYkFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDFdLCAgICAvLyDilqjilqjilqhcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSAgICAgLy8g4piQ4pao4piQXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSwgICAgLy8g4piQ4pao4piQXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMF0sICAgIC8vIOKWqOKWqOKYkFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLCAgICAvLyDimJDilqjimJBcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICB0ZXRyaXNBcnJEYXRhWzFdID0ge1xyXG4gICAgICAgIGFuY2hvcjogWzEsIDFdLFxyXG4gICAgICAgIGFycjogW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMF0sICAgIC8vIOKWqOKWqOKYkFxyXG4gICAgICAgICAgICAgICAgWzEsIDAsIDBdLCAgICAvLyDilqjimJDimJBcclxuICAgICAgICAgICAgICAgIFsxLCAwLCAwXSAgICAgLy8g4pao4piQ4piQXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwXSwgICAgLy8g4piQ4piQ4piQXHJcbiAgICAgICAgICAgICAgICBbMSwgMCwgMF0sICAgIC8vIOKWqOKYkOKYkFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDFdICAgICAvLyDilqjilqjilqhcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDFdLCAgICAvLyDimJDimJDilqhcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxXSwgICAgLy8g4piQ4piQ4paoXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMV0gICAgIC8vIOKYkOKWqOKWqFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMV0sICAgIC8vIOKWqOKWqOKWqFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDFdLCAgICAvLyDimJDimJDilqhcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwXSwgICAgLy8g4piQ4piQ4piQXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgdGV0cmlzQXJyRGF0YVsyXSA9IHtcclxuICAgICAgICBhbmNob3I6IFsxLCAxXSxcclxuICAgICAgICBhcnI6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzEsIDAsIDBdLCAgICAvLyDilqjimJDimJBcclxuICAgICAgICAgICAgICAgIFsxLCAwLCAwXSwgICAgLy8g4pao4piQ4piQXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMF0gICAgIC8vIOKWqOKWqOKYkFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMF0sICAgIC8vIOKYkOKYkOKYkFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDFdLCAgICAvLyDimJDimJDilqhcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAxXSAgICAgLy8g4pao4pao4paoXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxXSwgICAgLy8g4piQ4pao4paoXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMV0sICAgIC8vIOKYkOKYkOKWqFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDFdICAgICAvLyDimJDimJDilqhcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDFdLCAgICAvLyDilqjilqjilqhcclxuICAgICAgICAgICAgICAgIFsxLCAwLCAwXSwgICAgLy8g4pao4piQ4piQXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMF0sICAgIC8vIOKYkOKYkOKYkFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHRldHJpc0FyckRhdGFbM10gPSB7XHJcbiAgICAgICAgYW5jaG9yOiBbMSwgMV0sXHJcbiAgICAgICAgYXJyOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSwgICAgLy8g4piQ4pao4piQXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMF0sICAgIC8vIOKWqOKWqOKYkFxyXG4gICAgICAgICAgICAgICAgWzEsIDAsIDBdICAgICAvLyDilqjimJDimJBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDBdLCAgICAvLyDilqjilqjimJBcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxXSwgICAgLy8g4piQ4pao4paoXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMF0gICAgIC8vIOKYkOKYkOKYkFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICB0ZXRyaXNBcnJEYXRhWzRdID0ge1xyXG4gICAgICAgIGFuY2hvcjogWzEsIDFdLFxyXG4gICAgICAgIGFycjogW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMCwgMF0sICAgIC8vIOKWqOKYkOKYkFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDBdLCAgICAvLyDilqjilqjimJBcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSAgICAgLy8g4piQ4pao4piQXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxXSwgICAgLy8g4piQ4pao4paoXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMF0sICAgIC8vIOKWqOKWqOKYkFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDBdICAgICAvLyDimJDimJDimJBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgdGV0cmlzQXJyRGF0YVs1XSA9IHtcclxuICAgICAgICBhbmNob3I6IFswLCAwXSxcclxuICAgICAgICBhcnI6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzEsIDFdLCAgICAgICAvLyDilqjilqhcclxuICAgICAgICAgICAgICAgIFsxLCAxXSwgICAgICAgLy8g4pao4paoXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHRldHJpc0FyckRhdGFbNl0gPSB7XHJcbiAgICAgICAgYW5jaG9yOiBbMSwgMl0sXHJcbiAgICAgICAgYXJyOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSwgLy8g4piQ4piQ4piQ4piQXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMSwgMV0sIC8vIOKWqOKWqOKWqOKWqFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDBdLCAvLyDimJDimJDimJDimJBcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSAgLy8g4piQ4piQ4piQ4piQXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAwXSwgLy8g4piQ4piQ4pao4piQXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMF0sIC8vIOKYkOKYkOKWqOKYkFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDBdLCAvLyDimJDimJDilqjimJBcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAwXSAgLy8g4piQ4piQ4pao4piQXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBsZXQgY3ViZURhdGE6IHRldHJpc0N1YmVbXSA9IFtdO1xyXG5cclxuICAgIHRldHJpc0FyckRhdGEuZm9yRWFjaCgoYXJyRGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICBsZXQgdGV0cmlzQ3ViZTogdGV0cmlzQ3ViZSA9IHtcclxuICAgICAgICAgICAgc3BpbnM6IFtdLFxyXG4gICAgICAgIH1cclxuICAgICAgICBhcnJEYXRhLmFyci5mb3JFYWNoKHNwaW5BcnIgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3BpbjogdGV0cmlzUGllY2VbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHNwaW5BcnIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogaW4gc3BpbkFycltpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBzcGluQXJyW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV0cmlzUGllY2U6IHRldHJpc1BpZWNlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogcGFyc2VJbnQoaSkgLSBhcnJEYXRhLmFuY2hvclswXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHBhcnNlSW50KGopIC0gYXJyRGF0YS5hbmNob3JbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bpbi5wdXNoKHRldHJpc1BpZWNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV0cmlzQ3ViZS5zcGlucy5wdXNoKHNwaW4pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY3ViZURhdGEucHVzaCh0ZXRyaXNDdWJlKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IEVWVCwgZ2xvYmFsRXZlbnQgfSBmcm9tIFwiLi9nbG9iYWxFdmVudFwiO1xyXG5pbXBvcnQgeyBjb21wb25lbnRNZ3IgfSBmcm9tIFwiLi9jb21wb25lbnRNZ3JcIjtcclxuaW1wb3J0IHsgSnNCZWhhdmlvdXIsIFVuaXR5RW5naW5lIH0gZnJvbSBcImNzaGFycFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIGNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgY3JlYXRlKG1vbm86IEpzQmVoYXZpb3VyKSB7XHJcbiAgICAgICAgbmV3IHRoaXMobW9ubyk7XHJcbiAgICB9XHJcblxyXG4gICAgX21vbm86IEpzQmVoYXZpb3VyID0gbnVsbDtcclxuICAgIF91cGRhdGVMaXN0ZW5lciA9IG51bGw7XHJcblxyXG4gICAgZ2V0IGdhbWVPYmplY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbm8gPT0gbnVsbCA/IG51bGwgOiB0aGlzLl9tb25vLmdhbWVPYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRyYW5zZm9ybSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9ubyA9PSBudWxsID8gbnVsbCA6IHRoaXMuX21vbm8udHJhbnNmb3JtO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vbm86IEpzQmVoYXZpb3VyKSB7XHJcbiAgICAgICAgdGhpcy5fbW9ubyA9IG1vbm87XHJcbiAgICAgICAgdGhpcy5fbW9uby5Kc1N0YXJ0ID0gKCkgPT4gdGhpcy5TdGFydCgpO1xyXG4gICAgICAgIHRoaXMuX21vbm8uSnNPbkRlc3Ryb3kgPSAoKSA9PiB0aGlzLk9uRGVzdG9yeSgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lT2JqZWN0ID09IG51bGwpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZU9iamVjdC5hY3RpdmVJbkhpZXJhcmNoeSA9PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLlVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2xvYmFsRXZlbnQuZW1pdHRlci5vbihFVlQuVVBEQVRFX1RJQ0ssIHRoaXMuX3VwZGF0ZUxpc3RlbmVyKTtcclxuICAgICAgICBjb21wb25lbnRNZ3IuaW5zLmFkZCh0aGlzLmdhbWVPYmplY3QuR2V0SGFzaENvZGUoKSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgT25EZXN0b3J5KCkge1xyXG4gICAgICAgIGdsb2JhbEV2ZW50LmVtaXR0ZXIub2ZmKEVWVC5VUERBVEVfVElDSywgdGhpcy5fdXBkYXRlTGlzdGVuZXIpO1xyXG4gICAgICAgIGNvbXBvbmVudE1nci5pbnMuZGVsKHRoaXMuZ2FtZU9iamVjdC5HZXRIYXNoQ29kZSgpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9tb25vID0gbnVsbDtcclxuICAgICAgICB0aGlzLl91cGRhdGVMaXN0ZW5lciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgSW5zdGFudGlhdGUgPSBVbml0eUVuZ2luZS5HYW1lT2JqZWN0Lkluc3RhbnRpYXRlO1xyXG5cclxuICAgIFN0YXJ0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBVbml0eUVuZ2luZSB9IGZyb20gXCJjc2hhcnBcIjtcclxuaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgY29tcG9uZW50TWdyIHtcclxuICAgIHN0YXRpYyBpbnM6IGNvbXBvbmVudE1nciA9IG5ldyBjb21wb25lbnRNZ3IoKTtcclxuXHJcbiAgICBtYXA6IHsgW2tleTogbnVtYmVyXTogY29tcG9uZW50W10gfSA9IHt9O1xyXG5cclxuICAgIGFkZChoYXNoQ29kZTogbnVtYmVyLCBjb21wOiBjb21wb25lbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5tYXBbaGFzaENvZGVdID09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMubWFwW2hhc2hDb2RlXSA9IFtdO1xyXG4gICAgICAgIHRoaXMubWFwW2hhc2hDb2RlXS5wdXNoKGNvbXApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbChoYXNoQ29kZTogbnVtYmVyLCBjb21wOiBjb21wb25lbnQpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdGhpcy5tYXBbaGFzaENvZGVdLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcFtoYXNoQ29kZV1baV0gPT0gY29tcCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMubWFwW2hhc2hDb2RlXVtpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwW2hhc2hDb2RlXVtpXSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tcG9uZW50PFQgZXh0ZW5kcyBjb21wb25lbnQ+KGdvOiBVbml0eUVuZ2luZS5HYW1lT2JqZWN0IHwgVW5pdHlFbmdpbmUuVHJhbnNmb3JtLCBjb21wVHlwZTogeyBwcm90b3R5cGU6IFQgfSk6IFQge1xyXG4gICAgICAgIGlmIChnbyBpbnN0YW5jZW9mIFVuaXR5RW5naW5lLlRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICBnbyA9IGdvLmdhbWVPYmplY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5nZXRDb21wb25lbnRzKGdvLCBjb21wVHlwZSk7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudHMubGVuZ3RoIDw9IDApIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiA8VD5jb21wb25lbnRzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbXBvbmVudHM8VCBleHRlbmRzIGNvbXBvbmVudD4oZ286IFVuaXR5RW5naW5lLkdhbWVPYmplY3QgfCBVbml0eUVuZ2luZS5UcmFuc2Zvcm0sIGNvbXBUeXBlOiB7IHByb3RvdHlwZTogVCB9KTogVFtdIHtcclxuICAgICAgICBsZXQgaGFzaENvZGUgPSBnby5HZXRIYXNoQ29kZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hcFtoYXNoQ29kZV0gPT0gbnVsbCB8fCB0aGlzLm1hcFtoYXNoQ29kZV0ubGVuZ3RoIDw9IDApIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5tYXBbaGFzaENvZGVdLmZpbHRlcihjb21wID0+IGNvbXAgaW5zdGFuY2VvZiA8dHlwZW9mIGNvbXBvbmVudD48dW5rbm93bj5jb21wVHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIDxUW10+Y29tcG9uZW50cztcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIGV2ZW50cyBmcm9tICdldmVudHMnO1xyXG5cclxuZXhwb3J0IGVudW0gRVZUIHtcclxuICAgIFVQREFURV9USUNLID0gJ3VwZGF0ZVRpY2snLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgZ2xvYmFsRXZlbnQge1xyXG4gICAgc3RhdGljIGVtaXR0ZXI6IGV2ZW50cy5FdmVudEVtaXR0ZXIgPSBuZXcgZXZlbnRzLkV2ZW50RW1pdHRlcigpO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3NoYXJwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInB1ZXJ0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9