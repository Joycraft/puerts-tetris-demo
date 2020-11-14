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
        this._spinIndex = value;
        if (this._spinIndex >= this.allData.length || this._spinIndex < 0)
            this._spinIndex = 0;
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
                cube.transform.localPosition = new csharp_1.UnityEngine.Vector3(pieceData.x, pieceData.y, 0);
                cube.transform.SetParent(this.transform);
                this.cubeList.push(cube.transform);
                this.transform.localPosition = csharp_1.UnityEngine.Vector3.zero;
            });
            return;
        }
        else {
            for (let i in this.data) {
                this.cubeList[i].localPosition = new csharp_1.UnityEngine.Vector3(this.data[i].x, this.data[i].y);
            }
        }
    }
    checkBound(dir) {
        for (let i in this.data) {
            let piece = this.data[i];
            let boundPiece = null;
            switch (dir) {
                case DIR.DOWN:
                    boundPiece = { x: this.transform.localPosition.x + piece.x, y: this.transform.localPosition.y + piece.y - 1 };
                    if (boundPiece.y <= 0)
                        return true;
                    break;
                case DIR.LEFT:
                    boundPiece = { x: this.transform.localPosition.x + piece.x - 1, y: this.transform.localPosition.y + piece.y };
                    if (boundPiece.x <= this.tetrisLogic.width / 2)
                        return true;
                    break;
                case DIR.RIGHT:
                    boundPiece = { x: this.transform.localPosition.x + piece.x + 1, y: this.transform.localPosition.y + piece.y };
                    if (boundPiece.x >= this.tetrisLogic.width / 2)
                        return true;
                    break;
            }
            if (this.tetrisLogic.checkExist(boundPiece.x, boundPiece.y) == true) {
                return true;
            }
        }
    }
    move(dir) {
        if (this.checkBound(dir)) {
            if (dir == DIR.DOWN)
                this.tetrisLogic.settle();
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
        this.content = null;
        this.block = null;
        this.curBlock = null;
        //UI
        this.btnSpin = null;
        this.btnLeft = null;
        this.btnRight = null;
        this.settlePieces = [];
        this.width = 20;
        this.height = 30;
        this.gameTick = null;
        this.content = this.transform.Find('content');
        this.block = this.transform.Find('block');
        this.btnSpin = this.transform.Find('/Canvas/Button').GetComponent(puerts_1.$typeof(csharp_1.UnityEngine.UI.Button));
        this.btnLeft = this.transform.Find('/Canvas/Left').GetComponent(puerts_1.$typeof(csharp_1.UnityEngine.UI.Button));
        this.btnRight = this.transform.Find('/Canvas/Right').GetComponent(puerts_1.$typeof(csharp_1.UnityEngine.UI.Button));
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
    genBlock(cubeType, spinIndex = 0) {
        let blockComp = componentMgr_1.componentMgr.ins.getComponent(this.Instantiate(this.block), tetrisBlock);
        blockComp.type = cubeType;
        blockComp.spinIndex = spinIndex;
        blockComp.transform.SetParent(this.content);
        this.curBlock = blockComp;
        this.curBlock.transform.localPosition = new csharp_1.UnityEngine.Vector3(0, this.height + 5, 0);
    }
    checkExist(posx, posy) {
        return (this.settlePieces[posx] != null && this.settlePieces[posx][posy] != null);
    }
    settle() {
        this.curBlock.cubeList.forEach(cube => {
            if (this.settlePieces[cube.position.x] == null)
                this.settlePieces[cube.position.x] = [];
            cube.SetParent(this.content);
            this.settlePieces[cube.position.x][cube.position.y] = cube;
        });
        csharp_1.UnityEngine.GameObject.Destroy(this.curBlock.gameObject);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZU1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21tb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvcm90YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3RldHJpcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS90ZXRyaXNEYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9wdWVydHMvY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wdWVydHMvY29tcG9uZW50TWdyLnRzIiwid2VicGFjazovLy8uL3NyYy9wdWVydHMvZ2xvYmFsRXZlbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3NoYXJwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHVlcnRzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFLLE1BQU07YUFDdkI7WUFDRDtnQkFDSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNaO1NBQ0o7S0FDSjtJQUVELGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRztRQUNmLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZCxHQUFHLEVBQUU7WUFDRDtnQkFDSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFLLE1BQU07YUFDdkI7WUFDRDtnQkFDSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFLLE1BQU07YUFDdkI7WUFDRDtnQkFDSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFLLE1BQU07YUFDdkI7WUFDRDtnQkFDSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNaO1NBQ0o7S0FDSjtJQUVELGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRztRQUNmLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZCxHQUFHLEVBQUU7WUFDRDtnQkFDSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFLLE1BQU07YUFDdkI7WUFDRDtnQkFDSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFLLE1BQU07YUFDdkI7WUFDRDtnQkFDSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFLLE1BQU07YUFDdkI7WUFDRDtnQkFDSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNaO1NBQ0o7S0FDSjtJQUVELGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRztRQUNmLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZCxHQUFHLEVBQUU7WUFDRDtnQkFDSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFLLE1BQU07YUFDdkI7WUFDRDtnQkFDSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxD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SUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQzlFLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxZQUF1QyxRQUFRLENBQUMsQ0FBQztRQUN4RyxPQUFZLFVBQVUsQ0FBQztJQUMzQixDQUFDOztBQW5DTCxvQ0FvQ0M7QUFuQ1UsZ0JBQUcsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0psRCxvRkFBaUM7QUFFakMsSUFBWSxHQUVYO0FBRkQsV0FBWSxHQUFHO0lBQ1gsaUNBQTBCO0FBQzlCLENBQUMsRUFGVyxHQUFHLEdBQUgsV0FBRyxLQUFILFdBQUcsUUFFZDtBQUVELE1BQWEsV0FBVzs7QUFBeEIsa0NBRUM7QUFEVSxtQkFBTyxHQUF3QixJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7O0FDUHBFLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0dhbWVNYWluLnRzXCIpO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzLm9uY2UgPSBvbmNlO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gb25jZShlbWl0dGVyLCBuYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgIGlmIChlcnJvckxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xuICAgIHZhciBlcnJvckxpc3RlbmVyO1xuXG4gICAgLy8gQWRkaW5nIGFuIGVycm9yIGxpc3RlbmVyIGlzIG5vdCBvcHRpb25hbCBiZWNhdXNlXG4gICAgLy8gaWYgYW4gZXJyb3IgaXMgdGhyb3duIG9uIGFuIGV2ZW50IGVtaXR0ZXIgd2UgY2Fubm90XG4gICAgLy8gZ3VhcmFudGVlIHRoYXQgdGhlIGFjdHVhbCBldmVudCB3ZSBhcmUgd2FpdGluZyB3aWxsXG4gICAgLy8gYmUgZmlyZWQuIFRoZSByZXN1bHQgY291bGQgYmUgYSBzaWxlbnQgd2F5IHRvIGNyZWF0ZVxuICAgIC8vIG1lbW9yeSBvciBmaWxlIGRlc2NyaXB0b3IgbGVha3MsIHdoaWNoIGlzIHNvbWV0aGluZ1xuICAgIC8vIHdlIHNob3VsZCBhdm9pZC5cbiAgICBpZiAobmFtZSAhPT0gJ2Vycm9yJykge1xuICAgICAgZXJyb3JMaXN0ZW5lciA9IGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIobmFtZSwgZXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfTtcblxuICAgICAgZW1pdHRlci5vbmNlKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIGVtaXR0ZXIub25jZShuYW1lLCBldmVudExpc3RlbmVyKTtcbiAgfSk7XG59XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgeyBKc01hbmFnZXIgfSBmcm9tICdjc2hhcnAnO1xyXG5pbXBvcnQgeyBFVlQsIGdsb2JhbEV2ZW50IH0gZnJvbSAnLi9wdWVydHMvZ2xvYmFsRXZlbnQnO1xyXG5yZXF1aXJlKCcuL2dhbWUvcm90YXRlJyk7XHJcbnJlcXVpcmUoJy4vZ2FtZS90ZXRyaXMnKTtcclxuXHJcbmNsYXNzIEdhbWVNYWluIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIEpzTWFuYWdlci5JbnN0YW5jZS5Kc09uQXBwbGljYXRpb25RdWl0ID0gKCkgPT4gdGhpcy5vbkFwcGxpY2F0aW9uUXVpdCgpO1xyXG4gICAgICAgIEpzTWFuYWdlci5JbnN0YW5jZS5Kc09uRGlzcG9zZSA9ICgpID0+IHRoaXMub25EaXNwb3NlKCk7XHJcbiAgICAgICAgSnNNYW5hZ2VyLkluc3RhbmNlLkpzT25VcGRhdGUgPSAoKSA9PiB0aGlzLm9uVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIGdsb2JhbEV2ZW50LmVtaXR0ZXIuZW1pdChFVlQuVVBEQVRFX1RJQ0spO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkFwcGxpY2F0aW9uUXVpdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgb25BcHBsaWNhdGlvblF1aXQgaW4gSlMuLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRpc3Bvc2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHYW1lIG9uRGlzcG9zZSBpbiBKUy4uLi5cIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmdsb2JhbFsnR2FtZU1haW4nXSA9IG5ldyBHYW1lTWFpbigpOyIsImV4cG9ydCBjbGFzcyBjb21tb24ge1xyXG4gICAgc3RhdGljIHRpbWVQcm9taXNlKHRpbWUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSwgdGltZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGdsb2JhbE9iamVjdCgpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgICAgIGdsb2JhbFt0YXJnZXQucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWVdID0gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gXCIuLi9wdWVydHMvY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEpzQmVoYXZpb3VyLCBVbml0eUVuZ2luZSB9IGZyb20gXCJjc2hhcnBcIjtcclxuaW1wb3J0IHsgY29tbW9uIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb25cIjtcclxuXHJcbmNvbnN0IHNwZWVkID0gNTA7XHJcblxyXG5AY29tbW9uLmdsb2JhbE9iamVjdFxyXG5leHBvcnQgY2xhc3Mgcm90YXRlIGV4dGVuZHMgY29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKG1vbm86IEpzQmVoYXZpb3VyKSB7XHJcbiAgICAgICAgc3VwZXIobW9ubyk7XHJcbiAgICB9XHJcblxyXG4gICAgU3RhcnQoKSB7XHJcbiAgICAgICAgc3VwZXIuU3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGUoKSB7XHJcbiAgICAgICAgc3VwZXIuVXBkYXRlKCk7XHJcbiAgICAgICAgbGV0IHIgPSBVbml0eUVuZ2luZS5WZWN0b3IzLm9wX011bHRpcGx5KFVuaXR5RW5naW5lLlZlY3RvcjMudXAsIFVuaXR5RW5naW5lLlRpbWUuZGVsdGFUaW1lICogc3BlZWQpO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtLlJvdGF0ZShyKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkRlc3RvcnkoKSB7XHJcbiAgICAgICAgc3VwZXIuT25EZXN0b3J5KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjb21wb25lbnRNZ3IgfSBmcm9tIFwiLi4vcHVlcnRzL2NvbXBvbmVudE1nclwiO1xyXG5pbXBvcnQgeyBKc0JlaGF2aW91ciwgVW5pdHlFbmdpbmUgfSBmcm9tIFwiY3NoYXJwXCI7XHJcbmltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gXCIuLi9wdWVydHMvY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGNvbW1vbiB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uXCI7XHJcbmltcG9ydCB7IHRldHJpc0RhdGEgfSBmcm9tIFwiLi90ZXRyaXNEYXRhXCI7XHJcbmltcG9ydCB7ICR0eXBlb2YgfSBmcm9tIFwicHVlcnRzXCI7XHJcblxyXG5lbnVtIERJUiB7XHJcbiAgICBMRUZULFxyXG4gICAgUklHSFQsXHJcbiAgICBET1dOLFxyXG59XHJcblxyXG5AY29tbW9uLmdsb2JhbE9iamVjdFxyXG5leHBvcnQgY2xhc3MgdGV0cmlzQmxvY2sgZXh0ZW5kcyBjb21wb25lbnQge1xyXG4gICAgY3ViZTogVW5pdHlFbmdpbmUuVHJhbnNmb3JtID0gbnVsbDtcclxuXHJcbiAgICBjdWJlTGlzdDogVW5pdHlFbmdpbmUuVHJhbnNmb3JtW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF90eXBlOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHVibGljIGdldCB0eXBlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5fdHlwZSA+PSB0ZXRyaXNEYXRhLmN1YmVEYXRhLmxlbmd0aCB8fCB0aGlzLl90eXBlIDwgMClcclxuICAgICAgICAgICAgdGhpcy5fdHlwZSA9IDA7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc3BpbkluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGdldCBzcGluSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3BpbkluZGV4O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBzcGluSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NwaW5JbmRleCA9IHZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLl9zcGluSW5kZXggPj0gdGhpcy5hbGxEYXRhLmxlbmd0aCB8fCB0aGlzLl9zcGluSW5kZXggPCAwKVxyXG4gICAgICAgICAgICB0aGlzLl9zcGluSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbGxEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0ZXRyaXNEYXRhLmN1YmVEYXRhW3RoaXMudHlwZV0uc3BpbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRldHJpc0RhdGEuY3ViZURhdGFbdGhpcy50eXBlXS5zcGluc1t0aGlzLnNwaW5JbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdGV0cmlzTG9naWM6IHRldHJpcyA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IHRldHJpc0xvZ2ljKCk6IHRldHJpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RldHJpc0xvZ2ljID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGV0cmlzTG9naWMgPSBjb21wb25lbnRNZ3IuaW5zLmdldENvbXBvbmVudCh0aGlzLnRyYW5zZm9ybS5GaW5kKFwiL1RldHJpc1wiKSwgdGV0cmlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RldHJpc0xvZ2ljO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vbm86IEpzQmVoYXZpb3VyKSB7XHJcbiAgICAgICAgc3VwZXIobW9ubyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RldHJpcyBibG9jayBjcmVhdGUnKTtcclxuICAgICAgICB0aGlzLmN1YmUgPSB0aGlzLnRyYW5zZm9ybS5GaW5kKFwiL1RldHJpcy9jdWJlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFN0YXJ0KCkge1xyXG4gICAgICAgIHN1cGVyLlN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZHJhdyBibG9jaycpO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmN1YmVMaXN0Lmxlbmd0aCAhPSB0aGlzLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3ViZUxpc3QuZm9yRWFjaChjdWJlID0+IFVuaXR5RW5naW5lLkdhbWVPYmplY3QuRGVzdHJveShjdWJlKSlcclxuICAgICAgICAgICAgdGhpcy5jdWJlTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaChwaWVjZURhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1YmUgPSA8VW5pdHlFbmdpbmUuR2FtZU9iamVjdD50aGlzLkluc3RhbnRpYXRlKHRoaXMuY3ViZSk7XHJcbiAgICAgICAgICAgICAgICBjdWJlLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uID0gbmV3IFVuaXR5RW5naW5lLlZlY3RvcjMocGllY2VEYXRhLngsIHBpZWNlRGF0YS55LCAwKTtcclxuICAgICAgICAgICAgICAgIGN1YmUudHJhbnNmb3JtLlNldFBhcmVudCh0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1YmVMaXN0LnB1c2goY3ViZS50cmFuc2Zvcm0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbiA9IFVuaXR5RW5naW5lLlZlY3RvcjMuemVybztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1YmVMaXN0W2ldLmxvY2FsUG9zaXRpb24gPSBuZXcgVW5pdHlFbmdpbmUuVmVjdG9yMyh0aGlzLmRhdGFbaV0ueCwgdGhpcy5kYXRhW2ldLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQm91bmQoZGlyOiBESVIpIHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgcGllY2UgPSB0aGlzLmRhdGFbaV07XHJcblxyXG4gICAgICAgICAgICBsZXQgYm91bmRQaWVjZTogdGV0cmlzRGF0YS50ZXRyaXNQaWVjZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGRpcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBESVIuRE9XTjpcclxuICAgICAgICAgICAgICAgICAgICBib3VuZFBpZWNlID0geyB4OiB0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnggKyBwaWVjZS54LCB5OiB0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnkgKyBwaWVjZS55IC0gMSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib3VuZFBpZWNlLnkgPD0gMCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIERJUi5MRUZUOlxyXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kUGllY2UgPSB7IHg6IHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24ueCArIHBpZWNlLnggLSAxLCB5OiB0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnkgKyBwaWVjZS55IH07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvdW5kUGllY2UueCA8PSB0aGlzLnRldHJpc0xvZ2ljLndpZHRoIC8gMikgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIERJUi5SSUdIVDpcclxuICAgICAgICAgICAgICAgICAgICBib3VuZFBpZWNlID0geyB4OiB0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnggKyBwaWVjZS54ICsgMSwgeTogdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi55ICsgcGllY2UueSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib3VuZFBpZWNlLnggPj0gdGhpcy50ZXRyaXNMb2dpYy53aWR0aCAvIDIpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50ZXRyaXNMb2dpYy5jaGVja0V4aXN0KGJvdW5kUGllY2UueCwgYm91bmRQaWVjZS55KSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKGRpcjogRElSKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tCb3VuZChkaXIpKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXIgPT0gRElSLkRPV04pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRldHJpc0xvZ2ljLnNldHRsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGRpcikge1xyXG4gICAgICAgICAgICBjYXNlIERJUi5ET1dOOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbiA9IG5ldyBVbml0eUVuZ2luZS5WZWN0b3IzKHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi55IC0gMSwgdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERJUi5MRUZUOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbiA9IG5ldyBVbml0eUVuZ2luZS5WZWN0b3IzKHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24ueCAtIDEsIHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24ueSwgdGhpcy50cmFuc2Zvcm0ubG9jYWxQb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERJUi5SSUdIVDpcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24gPSBuZXcgVW5pdHlFbmdpbmUuVmVjdG9yMyh0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnggKyAxLCB0aGlzLnRyYW5zZm9ybS5sb2NhbFBvc2l0aW9uLnksIHRoaXMudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlKCkge1xyXG4gICAgICAgIHN1cGVyLlVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uRGVzdG9yeSgpIHtcclxuICAgICAgICBzdXBlci5PbkRlc3RvcnkoKTtcclxuICAgIH1cclxufVxyXG5cclxuQGNvbW1vbi5nbG9iYWxPYmplY3RcclxuZXhwb3J0IGNsYXNzIHRldHJpcyBleHRlbmRzIGNvbXBvbmVudCB7XHJcbiAgICBjb250ZW50OiBVbml0eUVuZ2luZS5UcmFuc2Zvcm0gPSBudWxsO1xyXG4gICAgYmxvY2s6IFVuaXR5RW5naW5lLlRyYW5zZm9ybSA9IG51bGw7XHJcbiAgICBjdXJCbG9jazogdGV0cmlzQmxvY2sgPSBudWxsO1xyXG5cclxuICAgIC8vVUlcclxuICAgIGJ0blNwaW46IFVuaXR5RW5naW5lLlVJLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBidG5MZWZ0OiBVbml0eUVuZ2luZS5VSS5CdXR0b24gPSBudWxsO1xyXG4gICAgYnRuUmlnaHQ6IFVuaXR5RW5naW5lLlVJLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgc2V0dGxlUGllY2VzOiBVbml0eUVuZ2luZS5UcmFuc2Zvcm1bXVtdID0gW107XHJcbiAgICB3aWR0aDogbnVtYmVyID0gMjA7XHJcbiAgICBoZWlnaHQ6IG51bWJlciA9IDMwO1xyXG5cclxuICAgIGdhbWVUaWNrOiBOb2RlSlMuVGltZW91dCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IobW9ubzogSnNCZWhhdmlvdXIpIHtcclxuICAgICAgICBzdXBlcihtb25vKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnRyYW5zZm9ybS5GaW5kKCdjb250ZW50Jyk7XHJcbiAgICAgICAgdGhpcy5ibG9jayA9IHRoaXMudHJhbnNmb3JtLkZpbmQoJ2Jsb2NrJyk7XHJcbiAgICAgICAgdGhpcy5idG5TcGluID0gdGhpcy50cmFuc2Zvcm0uRmluZCgnL0NhbnZhcy9CdXR0b24nKS5HZXRDb21wb25lbnQoJHR5cGVvZihVbml0eUVuZ2luZS5VSS5CdXR0b24pKSBhcyBVbml0eUVuZ2luZS5VSS5CdXR0b247XHJcbiAgICAgICAgdGhpcy5idG5MZWZ0ID0gdGhpcy50cmFuc2Zvcm0uRmluZCgnL0NhbnZhcy9MZWZ0JykuR2V0Q29tcG9uZW50KCR0eXBlb2YoVW5pdHlFbmdpbmUuVUkuQnV0dG9uKSkgYXMgVW5pdHlFbmdpbmUuVUkuQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuYnRuUmlnaHQgPSB0aGlzLnRyYW5zZm9ybS5GaW5kKCcvQ2FudmFzL1JpZ2h0JykuR2V0Q29tcG9uZW50KCR0eXBlb2YoVW5pdHlFbmdpbmUuVUkuQnV0dG9uKSkgYXMgVW5pdHlFbmdpbmUuVUkuQnV0dG9uO1xyXG5cclxuICAgICAgICB0aGlzLmJ0blNwaW4ub25DbGljay5BZGRMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1ckJsb2NrKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJCbG9jay5zcGluSW5kZXgrKztcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuYnRuTGVmdC5vbkNsaWNrLkFkZExpc3RlbmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyQmxvY2spXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckJsb2NrLm1vdmUoRElSLkxFRlQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5idG5SaWdodC5vbkNsaWNrLkFkZExpc3RlbmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyQmxvY2spXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckJsb2NrLm1vdmUoRElSLlJJR0hUKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXRyaXMgZ2FtZUxvZ2ljIHN0YXJ0LicpO1xyXG4gICAgICAgIHN1cGVyLlN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5nZW5CbG9jaygxKTtcclxuICAgICAgICB0aGlzLmdhbWVUaWNrID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2FtZVRpY2snKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyQmxvY2spXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckJsb2NrLm1vdmUoRElSLkRPV04pO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuQmxvY2soY3ViZVR5cGU6IG51bWJlciwgc3BpbkluZGV4OiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgbGV0IGJsb2NrQ29tcCA9IGNvbXBvbmVudE1nci5pbnMuZ2V0Q29tcG9uZW50KDxVbml0eUVuZ2luZS5HYW1lT2JqZWN0PnRoaXMuSW5zdGFudGlhdGUodGhpcy5ibG9jayksIHRldHJpc0Jsb2NrKTtcclxuICAgICAgICBibG9ja0NvbXAudHlwZSA9IGN1YmVUeXBlO1xyXG4gICAgICAgIGJsb2NrQ29tcC5zcGluSW5kZXggPSBzcGluSW5kZXg7XHJcbiAgICAgICAgYmxvY2tDb21wLnRyYW5zZm9ybS5TZXRQYXJlbnQodGhpcy5jb250ZW50KTtcclxuICAgICAgICB0aGlzLmN1ckJsb2NrID0gYmxvY2tDb21wO1xyXG4gICAgICAgIHRoaXMuY3VyQmxvY2sudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24gPSBuZXcgVW5pdHlFbmdpbmUuVmVjdG9yMygwLCB0aGlzLmhlaWdodCArIDUsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRXhpc3QocG9zeDogbnVtYmVyLCBwb3N5OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuc2V0dGxlUGllY2VzW3Bvc3hdICE9IG51bGwgJiYgdGhpcy5zZXR0bGVQaWVjZXNbcG9zeF1bcG9zeV0gIT0gbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dGxlKCkge1xyXG4gICAgICAgIHRoaXMuY3VyQmxvY2suY3ViZUxpc3QuZm9yRWFjaChjdWJlID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGxlUGllY2VzW2N1YmUucG9zaXRpb24ueF0gPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGxlUGllY2VzW2N1YmUucG9zaXRpb24ueF0gPSBbXTtcclxuICAgICAgICAgICAgY3ViZS5TZXRQYXJlbnQodGhpcy5jb250ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5zZXR0bGVQaWVjZXNbY3ViZS5wb3NpdGlvbi54XVtjdWJlLnBvc2l0aW9uLnldID0gY3ViZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFVuaXR5RW5naW5lLkdhbWVPYmplY3QuRGVzdHJveSh0aGlzLmN1ckJsb2NrLmdhbWVPYmplY3QpO1xyXG4gICAgICAgIHRoaXMuY3VyQmxvY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZ2VuQmxvY2soMCk7XHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlKCkge1xyXG4gICAgICAgIHN1cGVyLlVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uRGVzdG9yeSgpIHtcclxuICAgICAgICBzdXBlci5PbkRlc3RvcnkoKTtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZ2FtZVRpY2spO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IG5hbWVzcGFjZSB0ZXRyaXNEYXRhIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgdGV0cmlzUGllY2Uge1xyXG4gICAgICAgIHg6IG51bWJlcixcclxuICAgICAgICB5OiBudW1iZXIsXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSB0ZXRyaXNDdWJlIHtcclxuICAgICAgICBzcGluczogdGV0cmlzUGllY2VbXVtdXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRldHJpc0FyckRhdGE6IHtcclxuICAgICAgICBhbmNob3I6IG51bWJlcltdLFxyXG4gICAgICAgIGFycjogbnVtYmVyW11bXVtdLFxyXG4gICAgfVtdID0gW107XHJcblxyXG4gICAgdGV0cmlzQXJyRGF0YVswXSA9IHtcclxuICAgICAgICBhbmNob3I6IFsxLCAxXSxcclxuICAgICAgICBhcnI6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLCAgICAvLyDimJDilqjimJBcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAxXSwgICAgLy8g4pao4pao4paoXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMF0gICAgIC8vIOKYkOKYkOKYkFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sICAgIC8vIOKYkOKWqOKYkFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDFdLCAgICAvLyDimJDilqjilqhcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSAgICAgLy8g4piQ4pao4piQXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwXSwgICAgLy8g4piQ4piQ4piQXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMV0sICAgIC8vIOKWqOKWqOKWqFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdICAgICAvLyDimJDilqjimJBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLCAgICAvLyDimJDilqjimJBcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAwXSwgICAgLy8g4pao4pao4piQXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sICAgIC8vIOKYkOKWqOKYkFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHRldHJpc0FyckRhdGFbMV0gPSB7XHJcbiAgICAgICAgYW5jaG9yOiBbMSwgMV0sXHJcbiAgICAgICAgYXJyOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAwXSwgICAgLy8g4pao4pao4piQXHJcbiAgICAgICAgICAgICAgICBbMSwgMCwgMF0sICAgIC8vIOKWqOKYkOKYkFxyXG4gICAgICAgICAgICAgICAgWzEsIDAsIDBdICAgICAvLyDilqjimJDimJBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDBdLCAgICAvLyDimJDimJDimJBcclxuICAgICAgICAgICAgICAgIFsxLCAwLCAwXSwgICAgLy8g4pao4piQ4piQXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMV0gICAgIC8vIOKWqOKWqOKWqFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMV0sICAgIC8vIOKYkOKYkOKWqFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDFdLCAgICAvLyDimJDimJDilqhcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxXSAgICAgLy8g4piQ4pao4paoXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAxXSwgICAgLy8g4pao4pao4paoXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMV0sICAgIC8vIOKYkOKYkOKWqFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDBdLCAgICAvLyDimJDimJDimJBcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICB0ZXRyaXNBcnJEYXRhWzJdID0ge1xyXG4gICAgICAgIGFuY2hvcjogWzEsIDFdLFxyXG4gICAgICAgIGFycjogW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMCwgMF0sICAgIC8vIOKWqOKYkOKYkFxyXG4gICAgICAgICAgICAgICAgWzEsIDAsIDBdLCAgICAvLyDilqjimJDimJBcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAwXSAgICAgLy8g4pao4pao4piQXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwXSwgICAgLy8g4piQ4piQ4piQXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMV0sICAgIC8vIOKYkOKYkOKWqFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDFdICAgICAvLyDilqjilqjilqhcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDFdLCAgICAvLyDimJDilqjilqhcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxXSwgICAgLy8g4piQ4piQ4paoXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMV0gICAgIC8vIOKYkOKYkOKWqFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMV0sICAgIC8vIOKWqOKWqOKWqFxyXG4gICAgICAgICAgICAgICAgWzEsIDAsIDBdLCAgICAvLyDilqjimJDimJBcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwXSwgICAgLy8g4piQ4piQ4piQXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgdGV0cmlzQXJyRGF0YVszXSA9IHtcclxuICAgICAgICBhbmNob3I6IFsxLCAxXSxcclxuICAgICAgICBhcnI6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLCAgICAvLyDimJDilqjimJBcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAwXSwgICAgLy8g4pao4pao4piQXHJcbiAgICAgICAgICAgICAgICBbMSwgMCwgMF0gICAgIC8vIOKWqOKYkOKYkFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMF0sICAgIC8vIOKWqOKWqOKYkFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDFdLCAgICAvLyDimJDilqjilqhcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwXSAgICAgLy8g4piQ4piQ4piQXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHRldHJpc0FyckRhdGFbNF0gPSB7XHJcbiAgICAgICAgYW5jaG9yOiBbMSwgMV0sXHJcbiAgICAgICAgYXJyOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFsxLCAwLCAwXSwgICAgLy8g4pao4piQ4piQXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMF0sICAgIC8vIOKWqOKWqOKYkFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdICAgICAvLyDimJDilqjimJBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDFdLCAgICAvLyDimJDilqjilqhcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAwXSwgICAgLy8g4pao4pao4piQXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMF0gICAgIC8vIOKYkOKYkOKYkFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICB0ZXRyaXNBcnJEYXRhWzVdID0ge1xyXG4gICAgICAgIGFuY2hvcjogWzAsIDBdLFxyXG4gICAgICAgIGFycjogW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMV0sICAgICAgIC8vIOKWqOKWqFxyXG4gICAgICAgICAgICAgICAgWzEsIDFdLCAgICAgICAvLyDilqjilqhcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgdGV0cmlzQXJyRGF0YVs2XSA9IHtcclxuICAgICAgICBhbmNob3I6IFsxLCAyXSxcclxuICAgICAgICBhcnI6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDBdLCAvLyDimJDimJDimJDimJBcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAxLCAxXSwgLy8g4pao4pao4pao4paoXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMF0sIC8vIOKYkOKYkOKYkOKYkFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDBdICAvLyDimJDimJDimJDimJBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDBdLCAvLyDimJDimJDilqjimJBcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAwXSwgLy8g4piQ4piQ4pao4piQXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMF0sIC8vIOKYkOKYkOKWqOKYkFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDBdICAvLyDimJDimJDilqjimJBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGxldCBjdWJlRGF0YTogdGV0cmlzQ3ViZVtdID0gW107XHJcblxyXG4gICAgdGV0cmlzQXJyRGF0YS5mb3JFYWNoKChhcnJEYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCB0ZXRyaXNDdWJlOiB0ZXRyaXNDdWJlID0ge1xyXG4gICAgICAgICAgICBzcGluczogW10sXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyckRhdGEuYXJyLmZvckVhY2goc3BpbkFyciA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzcGluOiB0ZXRyaXNQaWVjZVtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gc3BpbkFycikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiBpbiBzcGluQXJyW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHNwaW5BcnJbaV1bal07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXRyaXNQaWVjZTogdGV0cmlzUGllY2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBwYXJzZUludChpKSAtIGFyckRhdGEuYW5jaG9yWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogcGFyc2VJbnQoaikgLSBhcnJEYXRhLmFuY2hvclsxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGluLnB1c2godGV0cmlzUGllY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZXRyaXNDdWJlLnNwaW5zLnB1c2goc3Bpbik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjdWJlRGF0YS5wdXNoKHRldHJpc0N1YmUpO1xyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgRVZULCBnbG9iYWxFdmVudCB9IGZyb20gXCIuL2dsb2JhbEV2ZW50XCI7XHJcbmltcG9ydCB7IGNvbXBvbmVudE1nciB9IGZyb20gXCIuL2NvbXBvbmVudE1nclwiO1xyXG5pbXBvcnQgeyBKc0JlaGF2aW91ciwgVW5pdHlFbmdpbmUgfSBmcm9tIFwiY3NoYXJwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgY29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBjcmVhdGUobW9ubzogSnNCZWhhdmlvdXIpIHtcclxuICAgICAgICBuZXcgdGhpcyhtb25vKTtcclxuICAgIH1cclxuXHJcbiAgICBfbW9ubzogSnNCZWhhdmlvdXIgPSBudWxsO1xyXG4gICAgX3VwZGF0ZUxpc3RlbmVyID0gbnVsbDtcclxuXHJcbiAgICBnZXQgZ2FtZU9iamVjdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9ubyA9PSBudWxsID8gbnVsbCA6IHRoaXMuX21vbm8uZ2FtZU9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdHJhbnNmb3JtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb25vID09IG51bGwgPyBudWxsIDogdGhpcy5fbW9uby50cmFuc2Zvcm07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobW9ubzogSnNCZWhhdmlvdXIpIHtcclxuICAgICAgICB0aGlzLl9tb25vID0gbW9ubztcclxuICAgICAgICB0aGlzLl9tb25vLkpzU3RhcnQgPSAoKSA9PiB0aGlzLlN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5fbW9uby5Kc09uRGVzdHJveSA9ICgpID0+IHRoaXMuT25EZXN0b3J5KCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVPYmplY3QgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lT2JqZWN0LmFjdGl2ZUluSGllcmFyY2h5ID09IGZhbHNlKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBnbG9iYWxFdmVudC5lbWl0dGVyLm9uKEVWVC5VUERBVEVfVElDSywgdGhpcy5fdXBkYXRlTGlzdGVuZXIpO1xyXG4gICAgICAgIGNvbXBvbmVudE1nci5pbnMuYWRkKHRoaXMuZ2FtZU9iamVjdC5HZXRIYXNoQ29kZSgpLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkRlc3RvcnkoKSB7XHJcbiAgICAgICAgZ2xvYmFsRXZlbnQuZW1pdHRlci5vZmYoRVZULlVQREFURV9USUNLLCB0aGlzLl91cGRhdGVMaXN0ZW5lcik7XHJcbiAgICAgICAgY29tcG9uZW50TWdyLmlucy5kZWwodGhpcy5nYW1lT2JqZWN0LkdldEhhc2hDb2RlKCksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX21vbm8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBJbnN0YW50aWF0ZSA9IFVuaXR5RW5naW5lLkdhbWVPYmplY3QuSW5zdGFudGlhdGU7XHJcblxyXG4gICAgU3RhcnQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlKCkge1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IFVuaXR5RW5naW5lIH0gZnJvbSBcImNzaGFycFwiO1xyXG5pbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBjb21wb25lbnRNZ3Ige1xyXG4gICAgc3RhdGljIGluczogY29tcG9uZW50TWdyID0gbmV3IGNvbXBvbmVudE1ncigpO1xyXG5cclxuICAgIG1hcDogeyBba2V5OiBudW1iZXJdOiBjb21wb25lbnRbXSB9ID0ge307XHJcblxyXG4gICAgYWRkKGhhc2hDb2RlOiBudW1iZXIsIGNvbXA6IGNvbXBvbmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1hcFtoYXNoQ29kZV0gPT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5tYXBbaGFzaENvZGVdID0gW107XHJcbiAgICAgICAgdGhpcy5tYXBbaGFzaENvZGVdLnB1c2goY29tcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsKGhhc2hDb2RlOiBudW1iZXIsIGNvbXA6IGNvbXBvbmVudCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSB0aGlzLm1hcFtoYXNoQ29kZV0ubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWFwW2hhc2hDb2RlXVtpXSA9PSBjb21wKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5tYXBbaGFzaENvZGVdW2ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbaGFzaENvZGVdW2ldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wb25lbnQ8VCBleHRlbmRzIGNvbXBvbmVudD4oZ286IFVuaXR5RW5naW5lLkdhbWVPYmplY3QgfCBVbml0eUVuZ2luZS5UcmFuc2Zvcm0sIGNvbXBUeXBlOiB7IHByb3RvdHlwZTogVCB9KTogVCB7XHJcbiAgICAgICAgaWYgKGdvIGluc3RhbmNlb2YgVW5pdHlFbmdpbmUuVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIGdvID0gZ28uZ2FtZU9iamVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudHMgPSB0aGlzLmdldENvbXBvbmVudHMoZ28sIGNvbXBUeXBlKTtcclxuICAgICAgICBpZiAoY29tcG9uZW50cy5sZW5ndGggPD0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIDxUPmNvbXBvbmVudHNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tcG9uZW50czxUIGV4dGVuZHMgY29tcG9uZW50PihnbzogVW5pdHlFbmdpbmUuR2FtZU9iamVjdCB8IFVuaXR5RW5naW5lLlRyYW5zZm9ybSwgY29tcFR5cGU6IHsgcHJvdG90eXBlOiBUIH0pOiBUW10ge1xyXG4gICAgICAgIGxldCBoYXNoQ29kZSA9IGdvLkdldEhhc2hDb2RlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMubWFwW2hhc2hDb2RlXSA9PSBudWxsIHx8IHRoaXMubWFwW2hhc2hDb2RlXS5sZW5ndGggPD0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudHMgPSB0aGlzLm1hcFtoYXNoQ29kZV0uZmlsdGVyKGNvbXAgPT4gY29tcCBpbnN0YW5jZW9mIDx0eXBlb2YgY29tcG9uZW50Pjx1bmtub3duPmNvbXBUeXBlKTtcclxuICAgICAgICByZXR1cm4gPFRbXT5jb21wb25lbnRzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgZXZlbnRzIGZyb20gJ2V2ZW50cyc7XHJcblxyXG5leHBvcnQgZW51bSBFVlQge1xyXG4gICAgVVBEQVRFX1RJQ0sgPSAndXBkYXRlVGljaycsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBnbG9iYWxFdmVudCB7XHJcbiAgICBzdGF0aWMgZW1pdHRlcjogZXZlbnRzLkV2ZW50RW1pdHRlciA9IG5ldyBldmVudHMuRXZlbnRFbWl0dGVyKCk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjc2hhcnBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHVlcnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=