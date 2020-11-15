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
                let mat = cube.GetComponent(puerts_1.$typeof(csharp_1.UnityEngine.MeshRenderer));
                let color = tetrisData_1.tetrisData.tetrisColor[this.type];
                let UnityColor = new csharp_1.UnityEngine.Color(color[0] / 255, color[1] / 255, color[2] / 255, color[3] / 255);
                mat.material.SetColor("_Color", UnityColor);
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
        //Audio
        this.audioSpin = null;
        this.audioClear = null;
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
        this.audioSpin = this.transform.Find('/Audio/spin').GetComponent(puerts_1.$typeof(csharp_1.UnityEngine.AudioSource));
        this.audioClear = this.transform.Find('/Audio/clear').GetComponent(puerts_1.$typeof(csharp_1.UnityEngine.AudioSource));
        this.btnSpin.onClick.AddListener(() => {
            if (this.curBlock)
                this.curBlock.spinIndex++;
            this.audioSpin.PlayOneShot(this.audioSpin.clip);
        });
        this.btnLeft.onClick.AddListener(() => {
            if (this.curBlock)
                this.curBlock.move(DIR.LEFT);
            this.audioSpin.PlayOneShot(this.audioSpin.clip);
        });
        this.btnRight.onClick.AddListener(() => {
            if (this.curBlock)
                this.curBlock.move(DIR.RIGHT);
            this.audioSpin.PlayOneShot(this.audioSpin.clip);
        });
        this.btnDown.onClick.AddListener(() => {
            if (this.curBlock)
                this.curBlock.move(DIR.DOWN);
            this.audioSpin.PlayOneShot(this.audioSpin.clip);
        });
        this.btnStartGame.onClick.AddListener(() => {
            this.StartGame();
            this.audioSpin.PlayOneShot(this.audioSpin.clip);
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
                this.audioClear.Play();
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
    tetrisData.tetrisColor = {
        [0]: [0, 166, 255, 255],
        [1]: [255, 166, 0, 255],
        [2]: [166, 255, 0, 255],
        [3]: [255, 0, 166, 255],
        [4]: [255, 0, 0, 255],
        [5]: [120, 255, 255, 255],
        [6]: [255, 255, 255, 255],
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZU1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21tb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvcm90YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3RldHJpcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS90ZXRyaXNEYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9wdWVydHMvY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wdWVydHMvY29tcG9uZW50TWdyLnRzIiwid2VicGFjazovLy8uL3NyYy9wdWVydHMvZ2xvYmFsRXZlbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3NoYXJwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHVlcnRzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O2FBQ3ZCO1lBQ0Q7Z0JBQ0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBSyxNQUFNO2FBQ3ZCO1lBQ0Q7Z0JBQ0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBSyxNQUFNO2FBQ3ZCO1lBQ0Q7Z0JBQ0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDWjtTQUNKO0tBQ0o7SUFFRCxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUc7UUFDZixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2QsR0FBRyxFQUFFO1lBQ0Q7Z0JBQ0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBSyxNQUFNO2FBQ3ZCO1lBQ0Q7Z0JBQ0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBSyxNQUFNO2FBQ3ZCO1lBQ0Q7Z0JBQ0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBSyxNQUFNO2FBQ3ZCO1lBQ0Q7Z0JBQ0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDWjtTQUNKO0tBQ0o7SUFFRCxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUc7UUFDZixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2QsR0FBRyxFQUFFO1lBQ0Q7Z0JBQ0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBSyxNQUFNO2FBQ3ZCO1lBQ0Q7Z0JBQ0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBSyxNQUFNO2FBQ3ZCO1lBQ0Q7Z0JBQ0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBSyxNQUFNO2FBQ3ZCO1lBQ0Q7Z0JBQ0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDWjtTQUNKO0tBQ0o7SUFFRCxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUc7UUFDZixNQUFNLEVB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LENBQUM7UUFDbEQsSUFBSSxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUN4QyxPQUFVLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsYUFBYSxDQUFzQixFQUFrRCxFQUFFLFFBQTBCO1FBQzdHLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUM5RSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksWUFBdUMsUUFBUSxDQUFDLENBQUM7UUFDeEcsT0FBWSxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7QUFuQ0wsb0NBb0NDO0FBbkNVLGdCQUFHLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbEQsb0ZBQWlDO0FBRWpDLElBQVksR0FFWDtBQUZELFdBQVksR0FBRztJQUNYLGlDQUEwQjtBQUM5QixDQUFDLEVBRlcsR0FBRyxHQUFILFdBQUcsS0FBSCxXQUFHLFFBRWQ7QUFFRCxNQUFhLFdBQVc7O0FBQXhCLGtDQUVDO0FBRFUsbUJBQU8sR0FBd0IsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7Ozs7Ozs7Ozs7OztBQ1BwRSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9HYW1lTWFpbi50c1wiKTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5tb2R1bGUuZXhwb3J0cy5vbmNlID0gb25jZTtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZW1pdHRlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGV2ZW50TGlzdGVuZXIoKSB7XG4gICAgICBpZiAoZXJyb3JMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgICB2YXIgZXJyb3JMaXN0ZW5lcjtcblxuICAgIC8vIEFkZGluZyBhbiBlcnJvciBsaXN0ZW5lciBpcyBub3Qgb3B0aW9uYWwgYmVjYXVzZVxuICAgIC8vIGlmIGFuIGVycm9yIGlzIHRocm93biBvbiBhbiBldmVudCBlbWl0dGVyIHdlIGNhbm5vdFxuICAgIC8vIGd1YXJhbnRlZSB0aGF0IHRoZSBhY3R1YWwgZXZlbnQgd2UgYXJlIHdhaXRpbmcgd2lsbFxuICAgIC8vIGJlIGZpcmVkLiBUaGUgcmVzdWx0IGNvdWxkIGJlIGEgc2lsZW50IHdheSB0byBjcmVhdGVcbiAgICAvLyBtZW1vcnkgb3IgZmlsZSBkZXNjcmlwdG9yIGxlYWtzLCB3aGljaCBpcyBzb21ldGhpbmdcbiAgICAvLyB3ZSBzaG91bGQgYXZvaWQuXG4gICAgaWYgKG5hbWUgIT09ICdlcnJvcicpIHtcbiAgICAgIGVycm9yTGlzdGVuZXIgPSBmdW5jdGlvbiBlcnJvckxpc3RlbmVyKGVycikge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKG5hbWUsIGV2ZW50TGlzdGVuZXIpO1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH07XG5cbiAgICAgIGVtaXR0ZXIub25jZSgnZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBlbWl0dGVyLm9uY2UobmFtZSwgZXZlbnRMaXN0ZW5lcik7XG4gIH0pO1xufVxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHsgSnNNYW5hZ2VyIH0gZnJvbSAnY3NoYXJwJztcclxuaW1wb3J0IHsgRVZULCBnbG9iYWxFdmVudCB9IGZyb20gJy4vcHVlcnRzL2dsb2JhbEV2ZW50JztcclxucmVxdWlyZSgnLi9nYW1lL3JvdGF0ZScpO1xyXG5yZXF1aXJlKCcuL2dhbWUvdGV0cmlzJyk7XHJcblxyXG5jbGFzcyBHYW1lTWFpbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBKc01hbmFnZXIuSW5zdGFuY2UuSnNPbkFwcGxpY2F0aW9uUXVpdCA9ICgpID0+IHRoaXMub25BcHBsaWNhdGlvblF1aXQoKTtcclxuICAgICAgICBKc01hbmFnZXIuSW5zdGFuY2UuSnNPbkRpc3Bvc2UgPSAoKSA9PiB0aGlzLm9uRGlzcG9zZSgpO1xyXG4gICAgICAgIEpzTWFuYWdlci5JbnN0YW5jZS5Kc09uVXBkYXRlID0gKCkgPT4gdGhpcy5vblVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblVwZGF0ZSgpIHtcclxuICAgICAgICBnbG9iYWxFdmVudC5lbWl0dGVyLmVtaXQoRVZULlVQREFURV9USUNLKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25BcHBsaWNhdGlvblF1aXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHYW1lIG9uQXBwbGljYXRpb25RdWl0IGluIEpTLi4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25EaXNwb3NlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBvbkRpc3Bvc2UgaW4gSlMuLi4uXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5nbG9iYWxbJ0dhbWVNYWluJ10gPSBuZXcgR2FtZU1haW4oKTsiLCJleHBvcnQgY2xhc3MgY29tbW9uIHtcclxuICAgIC8vW21pbixtYXhdIOmXreWMuumXtOmaj+acuuaVtOaVsFxyXG4gICAgc3RhdGljIHJhbkludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcclxuICAgICAgICB2YXIgUmFuZ2UgPSBtYXggLSBtaW47XHJcbiAgICAgICAgdmFyIFJhbmQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIHZhciBudW0gPSBtaW4gKyBNYXRoLnJvdW5kKFJhbmQgKiBSYW5nZSk7IC8v5Zub6IiN5LqU5YWlICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdGltZVByb21pc2UodGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0sIHRpbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBnbG9iYWxPYmplY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgICAgICBnbG9iYWxbdGFyZ2V0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lXSA9IHRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tIFwiLi4vcHVlcnRzL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBKc0JlaGF2aW91ciwgVW5pdHlFbmdpbmUgfSBmcm9tIFwiY3NoYXJwXCI7XHJcbmltcG9ydCB7IGNvbW1vbiB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uXCI7XHJcblxyXG5jb25zdCBzcGVlZCA9IDUwO1xyXG5cclxuQGNvbW1vbi5nbG9iYWxPYmplY3RcclxuZXhwb3J0IGNsYXNzIHJvdGF0ZSBleHRlbmRzIGNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtb25vOiBKc0JlaGF2aW91cikge1xyXG4gICAgICAgIHN1cGVyKG1vbm8pO1xyXG4gICAgfVxyXG5cclxuICAgIFN0YXJ0KCkge1xyXG4gICAgICAgIHN1cGVyLlN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlKCkge1xyXG4gICAgICAgIHN1cGVyLlVwZGF0ZSgpO1xyXG4gICAgICAgIGxldCByID0gVW5pdHlFbmdpbmUuVmVjdG9yMy5vcF9NdWx0aXBseShVbml0eUVuZ2luZS5WZWN0b3IzLnVwLCBVbml0eUVuZ2luZS5UaW1lLmRlbHRhVGltZSAqIHNwZWVkKTtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybS5Sb3RhdGUocik7XHJcbiAgICB9XHJcblxyXG4gICAgT25EZXN0b3J5KCkge1xyXG4gICAgICAgIHN1cGVyLk9uRGVzdG9yeSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgY29tcG9uZW50TWdyIH0gZnJvbSBcIi4uL3B1ZXJ0cy9jb21wb25lbnRNZ3JcIjtcclxuaW1wb3J0IHsgSnNCZWhhdmlvdXIsIFVuaXR5RW5naW5lIH0gZnJvbSBcImNzaGFycFwiO1xyXG5pbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tIFwiLi4vcHVlcnRzL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBjb21tb24gfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vblwiO1xyXG5pbXBvcnQgeyB0ZXRyaXNEYXRhIH0gZnJvbSBcIi4vdGV0cmlzRGF0YVwiO1xyXG5pbXBvcnQgeyAkdHlwZW9mIH0gZnJvbSBcInB1ZXJ0c1wiO1xyXG5cclxuZW51bSBESVIge1xyXG4gICAgTEVGVCxcclxuICAgIFJJR0hULFxyXG4gICAgRE9XTixcclxufVxyXG5cclxuQGNvbW1vbi5nbG9iYWxPYmplY3RcclxuZXhwb3J0IGNsYXNzIHRldHJpc0Jsb2NrIGV4dGVuZHMgY29tcG9uZW50IHtcclxuICAgIGN1YmU6IFVuaXR5RW5naW5lLlRyYW5zZm9ybSA9IG51bGw7XHJcblxyXG4gICAgY3ViZUxpc3Q6IFVuaXR5RW5naW5lLlRyYW5zZm9ybVtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfdHlwZTogbnVtYmVyID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl90eXBlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuX3R5cGUgPj0gdGV0cmlzRGF0YS5jdWJlRGF0YS5sZW5ndGggfHwgdGhpcy5fdHlwZSA8IDApXHJcbiAgICAgICAgICAgIHRoaXMuX3R5cGUgPSAwO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NwaW5JbmRleDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBnZXQgc3BpbkluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwaW5JbmRleDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgc3BpbkluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuY2hlY2tTcGluSW5kZXgodmFsdWUpO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5fc3BpbkluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsbERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRldHJpc0RhdGEuY3ViZURhdGFbdGhpcy50eXBlXS5zcGlucztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGV0cmlzRGF0YS5jdWJlRGF0YVt0aGlzLnR5cGVdLnNwaW5zW3RoaXMuc3BpbkluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90ZXRyaXNMb2dpYzogdGV0cmlzID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgdGV0cmlzTG9naWMoKTogdGV0cmlzIHtcclxuICAgICAgICBpZiAodGhpcy5fdGV0cmlzTG9naWMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl90ZXRyaXNMb2dpYyA9IGNvbXBvbmVudE1nci5pbnMuZ2V0Q29tcG9uZW50KHRoaXMudHJhbnNmb3JtLkZpbmQoXCIvVGV0cmlzXCIpLCB0ZXRyaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdGV0cmlzTG9naWM7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTZXR0bGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb25vOiBKc0JlaGF2aW91cikge1xyXG4gICAgICAgIHN1cGVyKG1vbm8pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXRyaXMgYmxvY2sgY3JlYXRlJyk7XHJcbiAgICAgICAgdGhpcy5jdWJlID0gdGhpcy50cmFuc2Zvcm0uRmluZChcIi9UZXRyaXMvY3ViZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBTdGFydCgpIHtcclxuICAgICAgICBzdXBlci5TdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RyYXcgYmxvY2snKTtcclxuICAgICAgICBpZiAodGhpcy5kYXRhID09IG51bGwpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5jdWJlTGlzdC5sZW5ndGggIT0gdGhpcy5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1YmVMaXN0LmZvckVhY2goY3ViZSA9PiBVbml0eUVuZ2luZS5HYW1lT2JqZWN0LkRlc3Ryb3koY3ViZSkpXHJcbiAgICAgICAgICAgIHRoaXMuY3ViZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmZvckVhY2gocGllY2VEYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjdWJlID0gPFVuaXR5RW5naW5lLkdhbWVPYmplY3Q+dGhpcy5JbnN0YW50aWF0ZSh0aGlzLmN1YmUpO1xyXG4gICAgICAgICAgICAgICAgY3ViZS50cmFuc2Zvcm0uU2V0UGFyZW50KHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICAgICAgICAgIGN1YmUudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24gPSBuZXcgVW5pdHlFbmdpbmUuVmVjdG9yMyhwaWVjZURhdGEueCwgcGllY2VEYXRhLnksIDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hdCA9IGN1YmUuR2V0Q29tcG9uZW50KCR0eXBlb2YoVW5pdHlFbmdpbmUuTWVzaFJlbmRlcmVyKSkgYXMgVW5pdHlFbmdpbmUuTWVzaFJlbmRlcmVyO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gdGV0cmlzRGF0YS50ZXRyaXNDb2xvclt0aGlzLnR5cGVdO1xyXG4gICAgICAgICAgICAgICAgbGV0IFVuaXR5Q29sb3IgPSBuZXcgVW5pdHlFbmdpbmUuQ29sb3IoY29sb3JbMF0gLyAyNTUsIGNvbG9yWzFdIC8gMjU1LCBjb2xvclsyXSAvIDI1NSwgY29sb3JbM10gLyAyNTUpO1xyXG4gICAgICAgICAgICAgICAgbWF0Lm1hdGVyaWFsLlNldENvbG9yKFwiX0NvbG9yXCIsIFVuaXR5Q29sb3IpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1YmVMaXN0LnB1c2goY3ViZS50cmFuc2Zvcm0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3ViZUxpc3RbaV0ubG9jYWxQb3NpdGlvbiA9IG5ldyBVbml0eUVuZ2luZS5WZWN0b3IzKHRoaXMuZGF0YVtpXS54LCB0aGlzLmRhdGFbaV0ueSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tTcGluSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2YWx1ZSA+PSB0aGlzLmFsbERhdGEubGVuZ3RoIHx8IHZhbHVlIDwgMClcclxuICAgICAgICAgICAgdmFsdWUgPSAwO1xyXG4gICAgICAgIGxldCBzcGluZWREYXRhID0gdGhpcy5hbGxEYXRhW3ZhbHVlXTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHNwaW5lZERhdGEpIHtcclxuICAgICAgICAgICAgbGV0IGJvdW5kUGllY2U6IHRldHJpc0RhdGEudGV0cmlzUGllY2UgPSB7IHg6IHNwaW5lZERhdGFbaV0ueCArIHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24ueCwgeTogc3BpbmVkRGF0YVtpXS55ICsgdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi55IH07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRldHJpc0xvZ2ljLmNoZWNrRXhpc3QoYm91bmRQaWVjZS54LCBib3VuZFBpZWNlLnkpID09IHRydWVcclxuICAgICAgICAgICAgICAgIHx8IGJvdW5kUGllY2UueCA8IC0gdGhpcy50ZXRyaXNMb2dpYy53aWR0aCAvIDJcclxuICAgICAgICAgICAgICAgIHx8IGJvdW5kUGllY2UueCA+IHRoaXMudGV0cmlzTG9naWMud2lkdGggLyAyXHJcbiAgICAgICAgICAgICAgICB8fCBib3VuZFBpZWNlLnkgPCAwXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQm91bmQoZGlyOiBESVIpIHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgcGllY2UgPSB0aGlzLmRhdGFbaV07XHJcbiAgICAgICAgICAgIGxldCBib3VuZFBpZWNlOiB0ZXRyaXNEYXRhLnRldHJpc1BpZWNlID0gbnVsbDtcclxuICAgICAgICAgICAgc3dpdGNoIChkaXIpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgRElSLkRPV046IC8v5LiL56e756Kw5pKeXHJcbiAgICAgICAgICAgICAgICAgICAgYm91bmRQaWVjZSA9IHsgeDogdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi54ICsgcGllY2UueCwgeTogdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi55ICsgcGllY2UueSAtIDEgfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYm91bmRQaWVjZS55IDwgMCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIERJUi5MRUZUOiAvL+W3puenu+eisOaSnlxyXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kUGllY2UgPSB7IHg6IHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24ueCArIHBpZWNlLnggLSAxLCB5OiB0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnkgKyBwaWVjZS55IH07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvdW5kUGllY2UueCA8IC10aGlzLnRldHJpc0xvZ2ljLndpZHRoIC8gMikgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIERJUi5SSUdIVDogLy/lj7Pnp7vnorDmkp5cclxuICAgICAgICAgICAgICAgICAgICBib3VuZFBpZWNlID0geyB4OiB0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnggKyBwaWVjZS54ICsgMSwgeTogdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi55ICsgcGllY2UueSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib3VuZFBpZWNlLnggPiB0aGlzLnRldHJpc0xvZ2ljLndpZHRoIC8gMikgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRldHJpc0xvZ2ljLmNoZWNrRXhpc3QoYm91bmRQaWVjZS54LCBib3VuZFBpZWNlLnkpID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG1vdmUoZGlyOiBESVIpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja0JvdW5kKGRpcikpIHtcclxuICAgICAgICAgICAgaWYgKGRpciA9PSBESVIuRE9XTikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTZXR0bGUgPT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NldHRsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjb21tb24udGltZVByb21pc2UoMjUwKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrQm91bmQoZGlyKSAhPSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1NldHRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudGV0cmlzTG9naWMuc2V0dGxlKHRoaXMuY3ViZUxpc3QsIHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGRpcikge1xyXG4gICAgICAgICAgICBjYXNlIERJUi5ET1dOOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbiA9IG5ldyBVbml0eUVuZ2luZS5WZWN0b3IzKHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi55IC0gMSwgdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERJUi5MRUZUOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbiA9IG5ldyBVbml0eUVuZ2luZS5WZWN0b3IzKHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24ueCAtIDEsIHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24ueSwgdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERJUi5SSUdIVDpcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24gPSBuZXcgVW5pdHlFbmdpbmUuVmVjdG9yMyh0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnggKyAxLCB0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnksIHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlKCkge1xyXG4gICAgICAgIHN1cGVyLlVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uRGVzdG9yeSgpIHtcclxuICAgICAgICBzdXBlci5PbkRlc3RvcnkoKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIHBpZWNlT2JqIHtcclxuICAgIHBvczoge1xyXG4gICAgICAgIHg6IG51bWJlcixcclxuICAgICAgICB5OiBudW1iZXIsXHJcbiAgICB9LFxyXG4gICAgdHJhbnM6IFVuaXR5RW5naW5lLlRyYW5zZm9ybSxcclxufVxyXG5cclxuQGNvbW1vbi5nbG9iYWxPYmplY3RcclxuZXhwb3J0IGNsYXNzIHRldHJpcyBleHRlbmRzIGNvbXBvbmVudCB7XHJcbiAgICAvL0dhbWVPYmplY3RcclxuICAgIGNvbnRlbnQ6IFVuaXR5RW5naW5lLlRyYW5zZm9ybSA9IG51bGw7XHJcbiAgICBibG9jazogVW5pdHlFbmdpbmUuVHJhbnNmb3JtID0gbnVsbDtcclxuXHJcbiAgICAvL1VJXHJcbiAgICBidG5TcGluOiBVbml0eUVuZ2luZS5VSS5CdXR0b24gPSBudWxsO1xyXG4gICAgYnRuTGVmdDogVW5pdHlFbmdpbmUuVUkuQnV0dG9uID0gbnVsbDtcclxuICAgIGJ0blJpZ2h0OiBVbml0eUVuZ2luZS5VSS5CdXR0b24gPSBudWxsO1xyXG4gICAgYnRuU3RhcnRHYW1lOiBVbml0eUVuZ2luZS5VSS5CdXR0b24gPSBudWxsO1xyXG4gICAgYnRuRG93bjogVW5pdHlFbmdpbmUuVUkuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICAvL0F1ZGlvXHJcbiAgICBhdWRpb1NwaW46IFVuaXR5RW5naW5lLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIGF1ZGlvQ2xlYXI6IFVuaXR5RW5naW5lLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcbiAgICAvL0RhdGFcclxuICAgIGN1ckJsb2NrOiB0ZXRyaXNCbG9jayA9IG51bGw7XHJcbiAgICBzZXR0bGVQaWVjZXM6IHBpZWNlT2JqW10gPSBbXTtcclxuICAgIHdpZHRoOiBudW1iZXIgPSAxNTtcclxuICAgIGhlaWdodDogbnVtYmVyID0gMjA7XHJcblxyXG4gICAgZ2FtZVRpY2s6IE5vZGVKUy5UaW1lb3V0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb25vOiBKc0JlaGF2aW91cikge1xyXG4gICAgICAgIHN1cGVyKG1vbm8pO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMudHJhbnNmb3JtLkZpbmQoJ2NvbnRlbnQnKTtcclxuICAgICAgICB0aGlzLmJsb2NrID0gdGhpcy50cmFuc2Zvcm0uRmluZCgnYmxvY2snKTtcclxuICAgICAgICB0aGlzLmJ0blNwaW4gPSB0aGlzLnRyYW5zZm9ybS5GaW5kKCcvQ2FudmFzL1NwaW4nKS5HZXRDb21wb25lbnQoJHR5cGVvZihVbml0eUVuZ2luZS5VSS5CdXR0b24pKSBhcyBVbml0eUVuZ2luZS5VSS5CdXR0b247XHJcbiAgICAgICAgdGhpcy5idG5MZWZ0ID0gdGhpcy50cmFuc2Zvcm0uRmluZCgnL0NhbnZhcy9MZWZ0JykuR2V0Q29tcG9uZW50KCR0eXBlb2YoVW5pdHlFbmdpbmUuVUkuQnV0dG9uKSkgYXMgVW5pdHlFbmdpbmUuVUkuQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuYnRuUmlnaHQgPSB0aGlzLnRyYW5zZm9ybS5GaW5kKCcvQ2FudmFzL1JpZ2h0JykuR2V0Q29tcG9uZW50KCR0eXBlb2YoVW5pdHlFbmdpbmUuVUkuQnV0dG9uKSkgYXMgVW5pdHlFbmdpbmUuVUkuQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuYnRuU3RhcnRHYW1lID0gdGhpcy50cmFuc2Zvcm0uRmluZCgnL0NhbnZhcy9TdGFydEdhbWUnKS5HZXRDb21wb25lbnQoJHR5cGVvZihVbml0eUVuZ2luZS5VSS5CdXR0b24pKSBhcyBVbml0eUVuZ2luZS5VSS5CdXR0b247XHJcbiAgICAgICAgdGhpcy5idG5Eb3duID0gdGhpcy50cmFuc2Zvcm0uRmluZCgnL0NhbnZhcy9Eb3duJykuR2V0Q29tcG9uZW50KCR0eXBlb2YoVW5pdHlFbmdpbmUuVUkuQnV0dG9uKSkgYXMgVW5pdHlFbmdpbmUuVUkuQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuYXVkaW9TcGluID0gdGhpcy50cmFuc2Zvcm0uRmluZCgnL0F1ZGlvL3NwaW4nKS5HZXRDb21wb25lbnQoJHR5cGVvZihVbml0eUVuZ2luZS5BdWRpb1NvdXJjZSkpIGFzIFVuaXR5RW5naW5lLkF1ZGlvU291cmNlO1xyXG4gICAgICAgIHRoaXMuYXVkaW9DbGVhciA9IHRoaXMudHJhbnNmb3JtLkZpbmQoJy9BdWRpby9jbGVhcicpLkdldENvbXBvbmVudCgkdHlwZW9mKFVuaXR5RW5naW5lLkF1ZGlvU291cmNlKSkgYXMgVW5pdHlFbmdpbmUuQXVkaW9Tb3VyY2U7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuU3Bpbi5vbkNsaWNrLkFkZExpc3RlbmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyQmxvY2spXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckJsb2NrLnNwaW5JbmRleCsrO1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvU3Bpbi5QbGF5T25lU2hvdCh0aGlzLmF1ZGlvU3Bpbi5jbGlwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJ0bkxlZnQub25DbGljay5BZGRMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1ckJsb2NrKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJCbG9jay5tb3ZlKERJUi5MRUZUKTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1NwaW4uUGxheU9uZVNob3QodGhpcy5hdWRpb1NwaW4uY2xpcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5idG5SaWdodC5vbkNsaWNrLkFkZExpc3RlbmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyQmxvY2spXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckJsb2NrLm1vdmUoRElSLlJJR0hUKTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1NwaW4uUGxheU9uZVNob3QodGhpcy5hdWRpb1NwaW4uY2xpcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5idG5Eb3duLm9uQ2xpY2suQWRkTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJCbG9jaylcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyQmxvY2subW92ZShESVIuRE9XTik7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9TcGluLlBsYXlPbmVTaG90KHRoaXMuYXVkaW9TcGluLmNsaXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYnRuU3RhcnRHYW1lLm9uQ2xpY2suQWRkTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlN0YXJ0R2FtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvU3Bpbi5QbGF5T25lU2hvdCh0aGlzLmF1ZGlvU3Bpbi5jbGlwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBTdGFydEdhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyQmxvY2sgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBVbml0eUVuZ2luZS5HYW1lT2JqZWN0LkRlc3Ryb3kodGhpcy5jdXJCbG9jay5nYW1lT2JqZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5jdXJCbG9jayA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dGxlUGllY2VzLmZvckVhY2gocGllY2VPYmogPT4ge1xyXG4gICAgICAgICAgICBVbml0eUVuZ2luZS5HYW1lT2JqZWN0LkRlc3Ryb3kocGllY2VPYmoudHJhbnMuZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNldHRsZVBpZWNlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2VuUmFuZG9tQmxvY2soKTtcclxuICAgICAgICB0aGlzLmJ0blN0YXJ0R2FtZS5nYW1lT2JqZWN0LlNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgU3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RldHJpcyBnYW1lTG9naWMgc3RhcnQuJyk7XHJcbiAgICAgICAgc3VwZXIuU3RhcnQoKTtcclxuICAgICAgICB0aGlzLmdhbWVUaWNrID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2FtZVRpY2snKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyQmxvY2spXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckJsb2NrLm1vdmUoRElSLkRPV04pO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuUmFuZG9tQmxvY2soKSB7XHJcbiAgICAgICAgbGV0IGJsb2NrVHlwZSA9IGNvbW1vbi5yYW5JbnQoMCwgdGV0cmlzRGF0YS5jdWJlRGF0YS5sZW5ndGggLSAxKTtcclxuICAgICAgICBsZXQgc3BpbkluZGV4ID0gY29tbW9uLnJhbkludCgwLCB0ZXRyaXNEYXRhLmN1YmVEYXRhW2Jsb2NrVHlwZV0uc3BpbnMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgdGhpcy5nZW5CbG9jayhibG9ja1R5cGUsIHNwaW5JbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuQmxvY2soYmxvY2tUeXBlOiBudW1iZXIsIHNwaW5JbmRleDogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBnZW5CbG9jayBUeXBlOiR7YmxvY2tUeXBlfSwgU3Bpbjoke3NwaW5JbmRleH1gKTtcclxuICAgICAgICBpZiAodGhpcy5jdXJCbG9jayAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIFVuaXR5RW5naW5lLkdhbWVPYmplY3QuRGVzdHJveSh0aGlzLmN1ckJsb2NrLmdhbWVPYmplY3QpO1xyXG4gICAgICAgICAgICB0aGlzLmN1ckJsb2NrID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJCbG9jayA9IGNvbXBvbmVudE1nci5pbnMuZ2V0Q29tcG9uZW50KDxVbml0eUVuZ2luZS5HYW1lT2JqZWN0PnRoaXMuSW5zdGFudGlhdGUodGhpcy5ibG9jayksIHRldHJpc0Jsb2NrKTtcclxuICAgICAgICB0aGlzLmN1ckJsb2NrLnRyYW5zZm9ybS5TZXRQYXJlbnQodGhpcy5jb250ZW50KTtcclxuICAgICAgICB0aGlzLmN1ckJsb2NrLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uID0gbmV3IFVuaXR5RW5naW5lLlZlY3RvcjMoMCwgdGhpcy5oZWlnaHQgKyA1LCAwKTtcclxuICAgICAgICB0aGlzLmN1ckJsb2NrLnR5cGUgPSBibG9ja1R5cGU7XHJcbiAgICAgICAgdGhpcy5jdXJCbG9jay5zcGluSW5kZXggPSBzcGluSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tFeGlzdChwb3N4OiBudW1iZXIsIHBvc3k6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRsZVBpZWNlcy5maWx0ZXIocGllY2UgPT4gcGllY2UgIT0gbnVsbCAmJiBwaWVjZS5wb3MueCA9PSBwb3N4ICYmIHBpZWNlLnBvcy55ID09IHBvc3kpLmxlbmd0aCA+IDBcclxuICAgIH1cclxuXHJcbiAgICBhZGRQaWVjZShwaWVjZTogcGllY2VPYmopIHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc2V0dGxlUGllY2VzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRsZVBpZWNlc1tpXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRsZVBpZWNlc1tpXSA9IHBpZWNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dGxlUGllY2VzLnB1c2gocGllY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHRsZShjdWJlTGlzdDogVW5pdHlFbmdpbmUuVHJhbnNmb3JtW10sIGJsb2NrUG9zOiBVbml0eUVuZ2luZS5WZWN0b3IzKSB7XHJcbiAgICAgICAgY3ViZUxpc3QuZm9yRWFjaChjdWJlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRQaWVjZSh7XHJcbiAgICAgICAgICAgICAgICBwb3M6IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBjdWJlLmxvY2FsUG9zaXRpb24ueCArIGJsb2NrUG9zLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogY3ViZS5sb2NhbFBvc2l0aW9uLnkgKyBibG9ja1Bvcy55LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRyYW5zOiBjdWJlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY3ViZS5TZXRQYXJlbnQodGhpcy5jb250ZW50KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFVuaXR5RW5naW5lLkdhbWVPYmplY3QuRGVzdHJveSh0aGlzLmN1ckJsb2NrLmdhbWVPYmplY3QpO1xyXG4gICAgICAgIHRoaXMuY3VyQmxvY2sgPSBudWxsO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVpZ2h0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGxpbmUgPSB0aGlzLnNldHRsZVBpZWNlcy5maWx0ZXIocGllY2UgPT4gcGllY2UgIT0gbnVsbCAmJiBwaWVjZS5wb3MueSA9PSBpKTtcclxuICAgICAgICAgICAgaWYgKGxpbmUubGVuZ3RoID49IHRoaXMud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIGxpbmUuZm9yRWFjaChsaW5lUGllY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGxlUGllY2VzW3RoaXMuc2V0dGxlUGllY2VzLmluZGV4T2YobGluZVBpZWNlKV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIFVuaXR5RW5naW5lLkdhbWVPYmplY3QuRGVzdHJveShsaW5lUGllY2UudHJhbnMuZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGxlUGllY2VzLmZpbHRlcihwaWVjZSA9PiBwaWVjZSAhPSBudWxsICYmIHBpZWNlLnBvcy55ID4gaSlcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChwaWVjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLnRyYW5zLmxvY2FsUG9zaXRpb24gPSBuZXcgVW5pdHlFbmdpbmUuVmVjdG9yMyhwaWVjZS50cmFucy5sb2NhbFBvc2l0aW9uLngsIHBpZWNlLnRyYW5zLmxvY2FsUG9zaXRpb24ueSAtIDEsIHBpZWNlLnRyYW5zLmxvY2FsUG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLnBvcy55LS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvQ2xlYXIuUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2VuUmFuZG9tQmxvY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGUoKSB7XHJcbiAgICAgICAgc3VwZXIuVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgT25EZXN0b3J5KCkge1xyXG4gICAgICAgIHN1cGVyLk9uRGVzdG9yeSgpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5nYW1lVGljayk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgbmFtZXNwYWNlIHRldHJpc0RhdGEge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSB0ZXRyaXNQaWVjZSB7XHJcbiAgICAgICAgeDogbnVtYmVyLFxyXG4gICAgICAgIHk6IG51bWJlcixcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIHRldHJpc0N1YmUge1xyXG4gICAgICAgIHNwaW5zOiB0ZXRyaXNQaWVjZVtdW11cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY29uc3QgdGV0cmlzQ29sb3I6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyW10gfSA9IHtcclxuICAgICAgICBbMF06IFswLCAxNjYsIDI1NSwgMjU1XSxcclxuICAgICAgICBbMV06IFsyNTUsIDE2NiwgMCwgMjU1XSxcclxuICAgICAgICBbMl06IFsxNjYsIDI1NSwgMCwgMjU1XSxcclxuICAgICAgICBbM106IFsyNTUsIDAsIDE2NiwgMjU1XSxcclxuICAgICAgICBbNF06IFsyNTUsIDAsIDAsIDI1NV0sXHJcbiAgICAgICAgWzVdOiBbMTIwLCAyNTUsIDI1NSwgMjU1XSxcclxuICAgICAgICBbNl06IFsyNTUsIDI1NSwgMjU1LCAyNTVdLFxyXG4gICAgfVxyXG5cclxuICAgIGxldCB0ZXRyaXNBcnJEYXRhOiB7XHJcbiAgICAgICAgYW5jaG9yOiBudW1iZXJbXSxcclxuICAgICAgICBhcnI6IG51bWJlcltdW11bXSxcclxuICAgIH1bXSA9IFtdO1xyXG5cclxuICAgIHRldHJpc0FyckRhdGFbMF0gPSB7XHJcbiAgICAgICAgYW5jaG9yOiBbMSwgMV0sXHJcbiAgICAgICAgYXJyOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSwgICAgLy8g4piQ4pao4piQXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMV0sICAgIC8vIOKWqOKWqOKWqFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDBdICAgICAvLyDimJDimJDimJBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLCAgICAvLyDimJDilqjimJBcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxXSwgICAgLy8g4piQ4pao4paoXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0gICAgIC8vIOKYkOKWqOKYkFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMF0sICAgIC8vIOKYkOKYkOKYkFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDFdLCAgICAvLyDilqjilqjilqhcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSAgICAgLy8g4piQ4pao4piQXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSwgICAgLy8g4piQ4pao4piQXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMF0sICAgIC8vIOKWqOKWqOKYkFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLCAgICAvLyDimJDilqjimJBcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICB0ZXRyaXNBcnJEYXRhWzFdID0ge1xyXG4gICAgICAgIGFuY2hvcjogWzEsIDFdLFxyXG4gICAgICAgIGFycjogW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMF0sICAgIC8vIOKWqOKWqOKYkFxyXG4gICAgICAgICAgICAgICAgWzEsIDAsIDBdLCAgICAvLyDilqjimJDimJBcclxuICAgICAgICAgICAgICAgIFsxLCAwLCAwXSAgICAgLy8g4pao4piQ4piQXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwXSwgICAgLy8g4piQ4piQ4piQXHJcbiAgICAgICAgICAgICAgICBbMSwgMCwgMF0sICAgIC8vIOKWqOKYkOKYkFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDFdICAgICAvLyDilqjilqjilqhcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDFdLCAgICAvLyDimJDimJDilqhcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxXSwgICAgLy8g4piQ4piQ4paoXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMV0gICAgIC8vIOKYkOKWqOKWqFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMV0sICAgIC8vIOKWqOKWqOKWqFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDFdLCAgICAvLyDimJDimJDilqhcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwXSwgICAgLy8g4piQ4piQ4piQXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgdGV0cmlzQXJyRGF0YVsyXSA9IHtcclxuICAgICAgICBhbmNob3I6IFsxLCAxXSxcclxuICAgICAgICBhcnI6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzEsIDAsIDBdLCAgICAvLyDilqjimJDimJBcclxuICAgICAgICAgICAgICAgIFsxLCAwLCAwXSwgICAgLy8g4pao4piQ4piQXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMF0gICAgIC8vIOKWqOKWqOKYkFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMF0sICAgIC8vIOKYkOKYkOKYkFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDFdLCAgICAvLyDimJDimJDilqhcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAxXSAgICAgLy8g4pao4pao4paoXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxXSwgICAgLy8g4piQ4pao4paoXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMV0sICAgIC8vIOKYkOKYkOKWqFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDFdICAgICAvLyDimJDimJDilqhcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDFdLCAgICAvLyDilqjilqjilqhcclxuICAgICAgICAgICAgICAgIFsxLCAwLCAwXSwgICAgLy8g4pao4piQ4piQXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMF0sICAgIC8vIOKYkOKYkOKYkFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHRldHJpc0FyckRhdGFbM10gPSB7XHJcbiAgICAgICAgYW5jaG9yOiBbMSwgMV0sXHJcbiAgICAgICAgYXJyOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSwgICAgLy8g4piQ4pao4piQXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMF0sICAgIC8vIOKWqOKWqOKYkFxyXG4gICAgICAgICAgICAgICAgWzEsIDAsIDBdICAgICAvLyDilqjimJDimJBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDBdLCAgICAvLyDilqjilqjimJBcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxXSwgICAgLy8g4piQ4pao4paoXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMF0gICAgIC8vIOKYkOKYkOKYkFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICB0ZXRyaXNBcnJEYXRhWzRdID0ge1xyXG4gICAgICAgIGFuY2hvcjogWzEsIDFdLFxyXG4gICAgICAgIGFycjogW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMCwgMF0sICAgIC8vIOKWqOKYkOKYkFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDBdLCAgICAvLyDilqjilqjimJBcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSAgICAgLy8g4piQ4pao4piQXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxXSwgICAgLy8g4piQ4pao4paoXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMF0sICAgIC8vIOKWqOKWqOKYkFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDBdICAgICAvLyDimJDimJDimJBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgdGV0cmlzQXJyRGF0YVs1XSA9IHtcclxuICAgICAgICBhbmNob3I6IFswLCAwXSxcclxuICAgICAgICBhcnI6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzEsIDFdLCAgICAgICAvLyDilqjilqhcclxuICAgICAgICAgICAgICAgIFsxLCAxXSwgICAgICAgLy8g4pao4paoXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHRldHJpc0FyckRhdGFbNl0gPSB7XHJcbiAgICAgICAgYW5jaG9yOiBbMSwgMl0sXHJcbiAgICAgICAgYXJyOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSwgLy8g4piQ4piQ4piQ4piQXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMSwgMV0sIC8vIOKWqOKWqOKWqOKWqFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDBdLCAvLyDimJDimJDimJDimJBcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSAgLy8g4piQ4piQ4piQ4piQXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAwXSwgLy8g4piQ4piQ4pao4piQXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMF0sIC8vIOKYkOKYkOKWqOKYkFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDBdLCAvLyDimJDimJDilqjimJBcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAwXSAgLy8g4piQ4piQ4pao4piQXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBsZXQgY3ViZURhdGE6IHRldHJpc0N1YmVbXSA9IFtdO1xyXG5cclxuICAgIHRldHJpc0FyckRhdGEuZm9yRWFjaCgoYXJyRGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICBsZXQgdGV0cmlzQ3ViZTogdGV0cmlzQ3ViZSA9IHtcclxuICAgICAgICAgICAgc3BpbnM6IFtdLFxyXG4gICAgICAgIH1cclxuICAgICAgICBhcnJEYXRhLmFyci5mb3JFYWNoKHNwaW5BcnIgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3BpbjogdGV0cmlzUGllY2VbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHNwaW5BcnIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogaW4gc3BpbkFycltpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBzcGluQXJyW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV0cmlzUGllY2U6IHRldHJpc1BpZWNlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogcGFyc2VJbnQoaSkgLSBhcnJEYXRhLmFuY2hvclswXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHBhcnNlSW50KGopIC0gYXJyRGF0YS5hbmNob3JbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bpbi5wdXNoKHRldHJpc1BpZWNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV0cmlzQ3ViZS5zcGlucy5wdXNoKHNwaW4pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY3ViZURhdGEucHVzaCh0ZXRyaXNDdWJlKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IEVWVCwgZ2xvYmFsRXZlbnQgfSBmcm9tIFwiLi9nbG9iYWxFdmVudFwiO1xyXG5pbXBvcnQgeyBjb21wb25lbnRNZ3IgfSBmcm9tIFwiLi9jb21wb25lbnRNZ3JcIjtcclxuaW1wb3J0IHsgSnNCZWhhdmlvdXIsIFVuaXR5RW5naW5lIH0gZnJvbSBcImNzaGFycFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIGNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgY3JlYXRlKG1vbm86IEpzQmVoYXZpb3VyKSB7XHJcbiAgICAgICAgbmV3IHRoaXMobW9ubyk7XHJcbiAgICB9XHJcblxyXG4gICAgX21vbm86IEpzQmVoYXZpb3VyID0gbnVsbDtcclxuICAgIF91cGRhdGVMaXN0ZW5lciA9IG51bGw7XHJcblxyXG4gICAgZ2V0IGdhbWVPYmplY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbm8gPT0gbnVsbCA/IG51bGwgOiB0aGlzLl9tb25vLmdhbWVPYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRyYW5zZm9ybSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9ubyA9PSBudWxsID8gbnVsbCA6IHRoaXMuX21vbm8udHJhbnNmb3JtO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vbm86IEpzQmVoYXZpb3VyKSB7XHJcbiAgICAgICAgdGhpcy5fbW9ubyA9IG1vbm87XHJcbiAgICAgICAgdGhpcy5fbW9uby5Kc1N0YXJ0ID0gKCkgPT4gdGhpcy5TdGFydCgpO1xyXG4gICAgICAgIHRoaXMuX21vbm8uSnNPbkRlc3Ryb3kgPSAoKSA9PiB0aGlzLk9uRGVzdG9yeSgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lT2JqZWN0ID09IG51bGwpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZU9iamVjdC5hY3RpdmVJbkhpZXJhcmNoeSA9PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLlVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2xvYmFsRXZlbnQuZW1pdHRlci5vbihFVlQuVVBEQVRFX1RJQ0ssIHRoaXMuX3VwZGF0ZUxpc3RlbmVyKTtcclxuICAgICAgICBjb21wb25lbnRNZ3IuaW5zLmFkZCh0aGlzLmdhbWVPYmplY3QuR2V0SGFzaENvZGUoKSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgT25EZXN0b3J5KCkge1xyXG4gICAgICAgIGdsb2JhbEV2ZW50LmVtaXR0ZXIub2ZmKEVWVC5VUERBVEVfVElDSywgdGhpcy5fdXBkYXRlTGlzdGVuZXIpO1xyXG4gICAgICAgIGNvbXBvbmVudE1nci5pbnMuZGVsKHRoaXMuZ2FtZU9iamVjdC5HZXRIYXNoQ29kZSgpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9tb25vID0gbnVsbDtcclxuICAgICAgICB0aGlzLl91cGRhdGVMaXN0ZW5lciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgSW5zdGFudGlhdGUgPSBVbml0eUVuZ2luZS5HYW1lT2JqZWN0Lkluc3RhbnRpYXRlO1xyXG5cclxuICAgIFN0YXJ0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBVbml0eUVuZ2luZSB9IGZyb20gXCJjc2hhcnBcIjtcclxuaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgY29tcG9uZW50TWdyIHtcclxuICAgIHN0YXRpYyBpbnM6IGNvbXBvbmVudE1nciA9IG5ldyBjb21wb25lbnRNZ3IoKTtcclxuXHJcbiAgICBtYXA6IHsgW2tleTogbnVtYmVyXTogY29tcG9uZW50W10gfSA9IHt9O1xyXG5cclxuICAgIGFkZChoYXNoQ29kZTogbnVtYmVyLCBjb21wOiBjb21wb25lbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5tYXBbaGFzaENvZGVdID09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMubWFwW2hhc2hDb2RlXSA9IFtdO1xyXG4gICAgICAgIHRoaXMubWFwW2hhc2hDb2RlXS5wdXNoKGNvbXApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbChoYXNoQ29kZTogbnVtYmVyLCBjb21wOiBjb21wb25lbnQpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdGhpcy5tYXBbaGFzaENvZGVdLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcFtoYXNoQ29kZV1baV0gPT0gY29tcCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMubWFwW2hhc2hDb2RlXVtpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwW2hhc2hDb2RlXVtpXSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tcG9uZW50PFQgZXh0ZW5kcyBjb21wb25lbnQ+KGdvOiBVbml0eUVuZ2luZS5HYW1lT2JqZWN0IHwgVW5pdHlFbmdpbmUuVHJhbnNmb3JtLCBjb21wVHlwZTogeyBwcm90b3R5cGU6IFQgfSk6IFQge1xyXG4gICAgICAgIGlmIChnbyBpbnN0YW5jZW9mIFVuaXR5RW5naW5lLlRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICBnbyA9IGdvLmdhbWVPYmplY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5nZXRDb21wb25lbnRzKGdvLCBjb21wVHlwZSk7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudHMubGVuZ3RoIDw9IDApIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiA8VD5jb21wb25lbnRzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbXBvbmVudHM8VCBleHRlbmRzIGNvbXBvbmVudD4oZ286IFVuaXR5RW5naW5lLkdhbWVPYmplY3QgfCBVbml0eUVuZ2luZS5UcmFuc2Zvcm0sIGNvbXBUeXBlOiB7IHByb3RvdHlwZTogVCB9KTogVFtdIHtcclxuICAgICAgICBsZXQgaGFzaENvZGUgPSBnby5HZXRIYXNoQ29kZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hcFtoYXNoQ29kZV0gPT0gbnVsbCB8fCB0aGlzLm1hcFtoYXNoQ29kZV0ubGVuZ3RoIDw9IDApIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5tYXBbaGFzaENvZGVdLmZpbHRlcihjb21wID0+IGNvbXAgaW5zdGFuY2VvZiA8dHlwZW9mIGNvbXBvbmVudD48dW5rbm93bj5jb21wVHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIDxUW10+Y29tcG9uZW50cztcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIGV2ZW50cyBmcm9tICdldmVudHMnO1xyXG5cclxuZXhwb3J0IGVudW0gRVZUIHtcclxuICAgIFVQREFURV9USUNLID0gJ3VwZGF0ZVRpY2snLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgZ2xvYmFsRXZlbnQge1xyXG4gICAgc3RhdGljIGVtaXR0ZXI6IGV2ZW50cy5FdmVudEVtaXR0ZXIgPSBuZXcgZXZlbnRzLkV2ZW50RW1pdHRlcigpO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3NoYXJwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInB1ZXJ0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9