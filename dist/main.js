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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mobx/lib/mobx.module.js":
/*!**********************************************!*\
  !*** ./node_modules/mobx/lib/mobx.module.js ***!
  \**********************************************/
/*! exports provided: $mobx, IDerivationState, ObservableMap, ObservableSet, Reaction, _allowStateChanges, _allowStateChangesInsideComputed, _endAction, _getAdministration, _getGlobalState, _interceptReads, _isComputingDerivation, _resetGlobalState, _startAction, action, autorun, comparer, computed, configure, createAtom, decorate, entries, extendObservable, flow, get, getAtom, getDebugName, getDependencyTree, getObserverTree, has, intercept, isAction, isArrayLike, isBoxedObservable, isComputed, isComputedProp, isObservable, isObservableArray, isObservableMap, isObservableObject, isObservableProp, isObservableSet, keys, observable, observe, onBecomeObserved, onBecomeUnobserved, onReactionError, reaction, remove, runInAction, set, spy, toJS, trace, transaction, untracked, values, when */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mobx", function() { return $mobx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDerivationState", function() { return IDerivationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMap", function() { return ObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableSet", function() { return ObservableSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reaction", function() { return Reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChanges", function() { return allowStateChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChangesInsideComputed", function() { return allowStateChangesInsideComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_endAction", function() { return _endAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getAdministration", function() { return getAdministration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getGlobalState", function() { return getGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interceptReads", function() { return interceptReads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isComputingDerivation", function() { return isComputingDerivation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_resetGlobalState", function() { return resetGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_startAction", function() { return _startAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return autorun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparer", function() { return comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAtom", function() { return createAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorate", function() { return decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return extendObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAtom", function() { return getAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebugName", function() { return getDebugName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependencyTree", function() { return getDependencyTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObserverTree", function() { return getObserverTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intercept", function() { return intercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return isAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxedObservable", function() { return isObservableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputed", function() { return isComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputedProp", function() { return isComputedProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableArray", function() { return isObservableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableMap", function() { return isObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableObject", function() { return isObservableObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableProp", function() { return isObservableProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableSet", function() { return isObservableSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeObserved", function() { return onBecomeObserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeUnobserved", function() { return onBecomeUnobserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onReactionError", function() { return onReactionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInAction", function() { return runInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spy", function() { return spy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untracked", function() { return untracked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when; });
/** MobX - (c) Michel Weststrate 2015 - 2019 - MIT Licensed */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message) {
    invariant(false, message);
    throw "X"; // unreachable
}
function invariant(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg, thing) {
    if (false)
        {}
    if (thing) {
        return deprecated("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    if ( true && !isPropertyConfigurable(object, prop))
        fail("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isES6Map(thing) {
    return thing instanceof Map;
}
function isES6Set(thing) {
    return thing instanceof Set;
}
/**
 * Returns the following: own keys, prototype keys & own symbol keys, if they are enumerable.
 */
function getPlainObjectKeys(object) {
    var enumerables = new Set();
    for (var key in object)
        enumerables.add(key); // *all* enumerables
    Object.getOwnPropertySymbols(object).forEach(function (k) {
        if (Object.getOwnPropertyDescriptor(object, k).enumerable)
            enumerables.add(k);
    }); // *own* symbols
    // Note: this implementation is missing enumerable, inherited, symbolic property names! That would however pretty expensive to add,
    // as there is no efficient iterator that returns *all* properties
    return Array.from(enumerables);
}
function stringifyKey(key) {
    if (key && key.toString)
        return key.toString();
    else
        return new String(key).toString();
}
function getMapLikeKeys(map) {
    if (isPlainObject(map))
        return Object.keys(map);
    if (Array.isArray(map))
        return map.map(function (_a) {
            var _b = __read(_a, 1), key = _b[0];
            return key;
        });
    if (isES6Map(map) || isObservableMap(map))
        return Array.from(map.keys());
    return fail("Cannot get keys from '" + map + "'");
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}

var $mobx = Symbol("mobx administration");
var Atom = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    Atom.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    Atom.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom.prototype.reportObserved = function () {
        return reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    Atom.prototype.toString = function () {
        return this.name;
    };
    return Atom;
}());
var isAtom = createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
    var atom = new Atom(name);
    // default `noop` listener will not initialize the hook Set
    if (onBecomeObservedHandler !== noop) {
        onBecomeObserved(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop) {
        onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function shallowComparer(a, b) {
    return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
    return Object.is(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer,
    shallow: shallowComparer
};

var mobxDidRunLazyInitializersSymbol = Symbol("mobx did run lazy initializers");
var mobxPendingDecorators = Symbol("mobx pending decorators");
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance(target) {
    if (target[mobxDidRunLazyInitializersSymbol] === true)
        return;
    var decorators = target[mobxPendingDecorators];
    if (decorators) {
        addHiddenProp(target, mobxDidRunLazyInitializersSymbol, true);
        for (var key in decorators) {
            var d = decorators[key];
            d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
        }
    }
}
function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if ( true && !quacksLikeADecorator(arguments))
                fail("This function is a decorator, but it wasn't invoked like a decorator");
            if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators)) {
                var inheritedDecorators = target[mobxPendingDecorators];
                addHiddenProp(target, mobxPendingDecorators, __assign({}, inheritedDecorators));
            }
            target[mobxPendingDecorators][prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator(args) {
    return (((args.length === 2 || args.length === 3) && typeof args[1] === "string") ||
        (args.length === 4 && args[3] === true));
}

function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, { name: name });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name });
    if (isES6Map(v))
        return observable.map(v, { name: name });
    if (isES6Set(v))
        return observable.set(v, { name: name });
    return v;
}
function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v))
        return v;
    if (Array.isArray(v))
        return observable.array(v, { name: name, deep: false });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name, deep: false });
    if (isES6Map(v))
        return observable.map(v, { name: name, deep: false });
    if (isES6Set(v))
        return observable.set(v, { name: name, deep: false });
    return fail( true &&
        "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer(v, oldValue, name) {
    if ( true && isObservable(v))
        throw "observable.struct should not be used with observable values";
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

function createDecoratorForEnhancer(enhancer) {
    invariant(enhancer);
    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (true) {
            invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + stringifyKey(propertyName) + "\"), use @computed instead.");
        }
        var initialValue = descriptor
            ? descriptor.initializer
                ? descriptor.initializer.call(target)
                : descriptor.value
            : undefined;
        asObservableObject(target).addObservableProp(propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && process.env && "development" !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function assertValidOption(key) {
    if (!/^(deep|name|equals|defaultDecorator|proxy)$/.test(key))
        fail("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions;
    if (typeof thing === "string")
        return { name: thing, deep: true, proxy: true };
    if (true) {
        if (typeof thing !== "object")
            return fail("expected options object");
        Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
}
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false
            ? referenceEnhancer
            : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string") {
        return deepDecorator.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject(v)
        ? observable.object(v, arg2, arg3)
        : Array.isArray(v)
            ? observable.array(v, arg2)
            : isES6Map(v)
                ? observable.map(v, arg2)
                : isES6Set(v)
                    ? observable.set(v, arg2)
                    : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail( true &&
        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions(options);
        return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions(options);
        return createObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions(options);
        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("set");
        var o = asCreateObservableOptions(options);
        return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions(options);
        if (o.proxy === false) {
            return extendObservable({}, props, decorators, o);
        }
        else {
            var defaultDecorator = getDefaultDecoratorFromObjectOptions(o);
            var base = extendObservable({}, undefined, undefined, o);
            var proxy = createDynamicObservableObject(base);
            extendObservableObjectWithProperties(proxy, props, decorators, defaultDecorator);
            return proxy;
        }
    },
    ref: refDecorator,
    shallow: shallowDecorator,
    deep: deepDecorator,
    struct: refStructDecorator
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    var get = descriptor.get, set = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    // Forcing instance now, fixes hot reloadig issues on React Native:
    var options = decoratorArgs[0] || {};
    asObservableObject(instance).addComputedProp(instance, propertyName, __assign({ get: get,
        set: set, context: instance }, options));
});
var computedStructDecorator = computedDecorator({ equals: comparer.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator.apply(null, arguments);
    }
    // computed(expr, options?)
    if (true) {
        invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
        invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
    }
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue(opts);
};
computed.struct = computedStructDecorator;

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode;
(function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = /** @class */ (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    if (globalState.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd(prevUntracked);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            return false;
        }
    }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers = atom.observers.size > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers)
        fail( true &&
            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict"))
        fail( true &&
            (globalState.enforceActions
                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
                atom.name);
}
function checkIfStateReadsAreAllowed(observable) {
    if ( true &&
        !globalState.allowStateReads &&
        globalState.observableRequiresReaction) {
        console.warn("[mobx] Observable " + observable.name + " being read outside a reactive context");
    }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    if (globalState.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException(e);
        }
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
    if (false)
        {}
    if (derivation.observing.length !== 0)
        return;
    if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
        console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
    }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    try {
        return action();
    }
    finally {
        untrackedEnd(prev);
    }
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
}
function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

// we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions
var currentActionId = 0;
var nextActionId = 1;
function createAction(actionName, fn, ref) {
    if (true) {
        invariant(typeof fn === "function", "`action` can only be invoked on functions");
        if (typeof actionName !== "string" || !actionName)
            fail("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function () {
        return executeAction(actionName, fn, ref || this, arguments);
    };
    res.isMobxAction = true;
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = _startAction(actionName, scope, args);
    try {
        return fn.apply(scope, args);
    }
    catch (err) {
        runInfo.error = err;
        throw err;
    }
    finally {
        _endAction(runInfo);
    }
}
function _startAction(actionName, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy && "development" !== "production") {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    var prevAllowStateReads = allowStateReadsStart(true);
    var runInfo = {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        prevAllowStateReads: prevAllowStateReads,
        notifySpy: notifySpy,
        startTime: startTime,
        actionId: nextActionId++,
        parentActionId: currentActionId
    };
    currentActionId = runInfo.actionId;
    return runInfo;
}
function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId) {
        fail("invalid action stack. did you forget to finish an action?");
    }
    currentActionId = runInfo.parentActionId;
    if (runInfo.error !== undefined) {
        globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    allowStateReadsEnd(runInfo.prevAllowStateReads);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy && "development" !== "production") {
        spyReportEnd({ time: Date.now() - runInfo.startTime });
    }
    globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}
function allowStateChangesInsideComputed(func) {
    var prev = globalState.computationDepth;
    globalState.computationDepth = 0;
    var res;
    try {
        res = func();
    }
    finally {
        globalState.computationDepth = prev;
    }
    return res;
}

var ObservableValue = /** @class */ (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy, equals) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        if (equals === void 0) { equals = comparer.default; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.name = name;
        _this.equals = equals;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled() && "development" !== "production") {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy && "development" !== "production") {
                spyReportStart({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return globalState.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ObservableValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ObservableValue;
}(Atom));
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode.NONE;
        if ( true && !options.get)
            throw "[mobx] missing option for computed: get";
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId();
        if (options.set)
            this.setter = createAction(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer.structural
                    : comparer.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        if (this.isComputing)
            fail("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
            if (shouldCompute(this)) {
                this.warnAboutUntrackedRead();
                startBatch(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch();
            }
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false,  true &&
                "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled() && "development" !== "production") {
            spyReport({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            if (globalState.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException(e);
                }
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.suspend = function () {
        if (!this.keepAlive) {
            clearObserving(this);
            this.value = undefined; // don't hold on to computed value!
        }
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.warnAboutUntrackedRead = function () {
        if (false)
            {}
        if (this.requiresReaction === true) {
            fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ComputedValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ComputedValue;
}());
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

/**
 * These values will persist if global state is reset
 */
var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "allowStateReads",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED"
];
var MobXGlobals = /** @class */ (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * globally unique token to signal unchanged
         */
        this.UNCHANGED = {};
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * Is it allowed to read observables at this point?
         * Used to hold the state needed for `observableRequiresReaction`
         */
        this.allowStateReads = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /**
         * (Experimental)
         * Warn if you try to create to derivation / reactive context without accessing any observable.
         */
        this.reactionRequiresObservable = false;
        /**
         * (Experimental)
         * Warn if observables are accessed outside a reactive context
         */
        this.observableRequiresReaction = false;
        /**
         * Allows overwriting of computed properties, useful in tests but not prod as it can cause
         * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
         */
        this.computedConfigurable = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
        /*
         * If true, we are already handling an exception in an action. Any errors in reactions should be suppressed, as
         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
         */
        this.suppressReactionErrors = false;
    }
    return MobXGlobals;
}());
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = (function () {
    var global = getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED)
            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals());
    }
})();
function isolateGlobalState() {
    if (globalState.pendingReactions.length ||
        globalState.inBatch ||
        globalState.isRunningReactions)
        fail("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal().__mobxInstanceCount === 0)
            getGlobal().__mobxGlobals = undefined;
        globalState = new MobXGlobals();
    }
}
function getGlobalState() {
    return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.enforceActions;
}
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    return mockGlobal;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.size > 0;
}
function getObservers(observable) {
    return observable.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable.observers.add(node);
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable.observers.delete(node);
    if (observable.observers.size === 0) {
        // deleting last observer
        queueForUnobservation(observable);
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.size === 0) {
                if (observable.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable.isBeingObserved = false;
                    observable.onBecomeUnobserved();
                }
                if (observable instanceof ComputedValue) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observabe of another, etc..
                    observable.suspend();
                }
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    checkIfStateReadsAreAllowed(observable);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
            if (!observable.isBeingObserved) {
                observable.isBeingObserved = true;
                observable.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable.observers.size === 0 && globalState.inBatch > 0) {
        queueForUnobservation(observable);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    });
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    });
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
    });
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
    if (derivation.isTracing === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var Reaction = /** @class */ (function () {
    function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        if (requiresObservable === void 0) { requiresObservable = false; }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.requiresObservable = requiresObservable;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode.NONE;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending &&
                        isSpyEnabled() &&
                        "development" !== "production") {
                        // onInvalidate didn't trigger track right away..
                        spyReport({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        if (this.isDisposed) {
            return;
            // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
        }
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify && "development" !== "production") {
            startTime = Date.now();
            spyReportStart({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify && "development" !== "production") {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (globalState.suppressReactionErrors) {
            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
        }
        else {
            console.error(message, error);
            /** If debugging brought you here, please, read the above message :-). Tnx! */
        }
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r[$mobx] = this;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace(this, enterBreakPoint);
    };
    return Reaction;
}());
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function isSpyEnabled() {
    return  true && !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (false)
        {} // dead code elimination can do the rest
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    if (false)
        {}
    var change = __assign({}, event, { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (false)
        {}
    if (change)
        spyReport(__assign({}, change, { spyReportEnd: true }));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    if (false) {}
    else {
        globalState.spyListeners.push(listener);
        return once(function () {
            globalState.spyListeners = globalState.spyListeners.filter(function (l) { return l !== listener; });
        });
    }
}

function dontReassignFields() {
    fail( true && "@action fields are not reassignable");
}
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if ( true && descriptor.get !== undefined) {
                return fail("@action cannot be used with getters");
            }
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function () {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function actionFieldDecorator(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function () {
                return undefined;
            },
            set: function (value) {
                addHiddenProp(this, prop, action(name, value));
            }
        });
    };
}
function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function (v) {
            defineBoundAction(this, propertyName, v);
        },
        get: function () {
            return undefined;
        }
    };
}

var action = function action(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        addHiddenProp(arg1, arg2, createAction(arg1.name || arg2, arg3.value, this));
    }
    else {
        return namedActionDecorator(arg2).apply(null, arguments);
    }
};
action.bound = boundActionDecorator;
function runInAction(arg1, arg2) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    if (true) {
        invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
        if (typeof actionName !== "string" || !actionName)
            fail("actions should have valid names, got: '" + actionName + "'");
    }
    return executeAction(actionName, fn, this, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (true) {
        invariant(typeof view === "function", "Autorun expects a function as first argument");
        invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) {
        // normal autorun
        reaction = new Reaction(name, function () {
            this.track(reactionRunner);
        }, opts.onError, opts.requiresObservable);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction = new Reaction(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction.isDisposed)
                        reaction.track(reactionRunner);
                });
            }
        }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay
            ? function (f) { return setTimeout(f, opts.delay); }
            : run;
}
function reaction(expression, effect, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (true) {
        invariant(typeof expression === "function", "First argument to reaction should be a function");
        invariant(typeof opts === "object", "Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId();
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural
        ? comparer.structural
        : opts.equals || comparer.default;
    var r = new Reaction(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effectAction(value, r);
        if (!firstTime && changed === true)
            effectAction(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        }
        catch (e) {
            errorHandler.call(this, e);
        }
    };
}

function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = typeof arg3 === "function" ? arg3 : arg2;
    var listenersKey = hook + "Listeners";
    if (atom[listenersKey]) {
        atom[listenersKey].add(cb);
    }
    else {
        atom[listenersKey] = new Set([cb]);
    }
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail( true && "Not an atom that can be (un)observed");
    return function () {
        var hookListeners = atom[listenersKey];
        if (hookListeners) {
            hookListeners.delete(cb);
            if (hookListeners.size === 0) {
                delete atom[listenersKey];
            }
        }
    };
}

function configure(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, computedConfigurable = options.computedConfigurable, disableErrorBoundaries = options.disableErrorBoundaries, reactionScheduler = options.reactionScheduler, reactionRequiresObservable = options.reactionRequiresObservable, observableRequiresReaction = options.observableRequiresReaction;
    if (options.isolateGlobalState === true) {
        isolateGlobalState();
    }
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState.enforceActions = ea;
        globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (reactionRequiresObservable !== undefined) {
        globalState.reactionRequiresObservable = !!reactionRequiresObservable;
    }
    if (observableRequiresReaction !== undefined) {
        globalState.observableRequiresReaction = !!observableRequiresReaction;
        globalState.allowStateReads = !globalState.observableRequiresReaction;
    }
    if (computedConfigurable !== undefined) {
        globalState.computedConfigurable = !!computedConfigurable;
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
        globalState.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (reactionScheduler) {
        setReactionScheduler(reactionScheduler);
    }
}

function decorate(thing, decorators) {
     true &&
        invariant(isPlainObject(decorators), "Decorators should be a key value map");
    var target = typeof thing === "function" ? thing.prototype : thing;
    var _loop_1 = function (prop) {
        var propertyDecorators = decorators[prop];
        if (!Array.isArray(propertyDecorators)) {
            propertyDecorators = [propertyDecorators];
        }
         true &&
            invariant(propertyDecorators.every(function (decorator) { return typeof decorator === "function"; }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
        if (newDescriptor)
            Object.defineProperty(target, prop, newDescriptor);
    };
    for (var prop in decorators) {
        _loop_1(prop);
    }
    return thing;
}

function extendObservable(target, properties, decorators, options) {
    if (true) {
        invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
        invariant(typeof target === "object", "'extendObservable' expects an object as first argument");
        invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
    }
    options = asCreateObservableOptions(options);
    var defaultDecorator = getDefaultDecoratorFromObjectOptions(options);
    initializeInstance(target); // Fixes #1740
    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    if (properties)
        extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator);
    return target;
}
function getDefaultDecoratorFromObjectOptions(options) {
    return options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
}
function extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator) {
    var e_1, _a, e_2, _b;
    if (true) {
        invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
        if (decorators) {
            var keys = getPlainObjectKeys(decorators);
            try {
                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var key = keys_1_1.value;
                    if (!(key in properties))
                        fail("Trying to declare a decorator for unspecified property '" + stringifyKey(key) + "'");
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    startBatch();
    try {
        var keys = getPlainObjectKeys(properties);
        try {
            for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                var key = keys_2_1.value;
                var descriptor = Object.getOwnPropertyDescriptor(properties, key);
                if (true) {
                    if (!isPlainObject(properties))
                        fail("'extendObservabe' only accepts plain objects as second argument");
                    if (Object.getOwnPropertyDescriptor(target, key))
                        fail("'extendObservable' can only be used to introduce new properties. Use 'set' or 'decorate' instead. The property '" + stringifyKey(key) + "' already exists on '" + target + "'");
                    if (isComputed(descriptor.value))
                        fail("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
                }
                var decorator = decorators && key in decorators
                    ? decorators[key]
                    : descriptor.get
                        ? computedDecorator
                        : defaultDecorator;
                if ( true && typeof decorator !== "function")
                    fail("Not a valid decorator for '" + stringifyKey(key) + "', got: " + decorator);
                var resultDescriptor = decorator(target, key, descriptor, true);
                if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
                )
                    Object.defineProperty(target, key, resultDescriptor);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys_2_1 && !keys_2_1.done && (_b = keys_2.return)) _b.call(keys_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    finally {
        endBatch();
    }
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
    return result;
}

var generatorId = 0;
function flow(generator) {
    if (arguments.length !== 1)
        fail( true && "Flow expects one 1 argument and cannot be used as decorator");
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function () {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var promise = new Promise(function (resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (ret && typeof ret.then === "function") {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done)
                    return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
            try {
                if (pendingPromise)
                    cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var res = gen.return();
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(res.value);
                yieldedPromise.then(noop, noop);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new Error("FLOW_CANCELLED"));
            }
            catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return promise;
    };
}
function cancelPromise(promise) {
    if (typeof promise.cancel === "function")
        promise.cancel();
}

function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    }
    else if (isObservableObject(thing)) {
        if (typeof propOrHandler !== "string")
            return fail( true &&
                "InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration(thing, propOrHandler);
    }
    else {
        return fail( true &&
            "Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail( true && "An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

function _isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        if (!value[$mobx].values.has(property))
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}
function isComputed(value) {
    if (arguments.length > 1)
        return fail( true &&
            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed(value);
}
function isComputedProp(value, propName) {
    if (typeof propName !== "string")
        return fail( true &&
            "isComputed expected a property name as second argument");
    return _isComputed(value, propName);
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if ( true &&
            (isObservableMap(value) || isObservableArray(value)))
            return fail("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject(value)) {
            return value[$mobx].values.has(property);
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject(value) ||
        !!value[$mobx] ||
        isAtom(value) ||
        isReaction(value) ||
        isComputedValue(value));
}
function isObservable(value) {
    if (arguments.length !== 1)
        fail( true &&
            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}
function isObservableProp(value, propName) {
    if (typeof propName !== "string")
        return fail( true && "expected a property name as second argument");
    return _isObservable(value, propName);
}

function keys(obj) {
    if (isObservableObject(obj)) {
        return obj[$mobx].getKeys();
    }
    if (isObservableMap(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (_, index) { return index; });
    }
    return fail( true &&
        "'keys()' can only be used on observable objects, arrays, sets and maps");
}
function values(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return obj[key]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return obj.get(key); });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.values());
    }
    if (isObservableArray(obj)) {
        return obj.slice();
    }
    return fail( true &&
        "'values()' can only be used on observable objects, arrays, sets and maps");
}
function entries(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return [key, obj[key]]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return [key, obj.get(key)]; });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.entries());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (key, index) { return [index, key]; });
    }
    return fail( true &&
        "'entries()' can only be used on observable objects, arrays and maps");
}
function set(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
        startBatch();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch();
        }
        return;
    }
    if (isObservableObject(obj)) {
        var adm = obj[$mobx];
        var existingObservable = adm.values.get(key);
        if (existingObservable) {
            adm.write(key, value);
        }
        else {
            adm.addObservableProp(key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap(obj)) {
        obj.set(key, value);
    }
    else if (isObservableSet(obj)) {
        obj.add(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        startBatch();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch();
    }
    else {
        return fail( true &&
            "'set()' can only be used on observable objects, arrays and maps");
    }
}
function remove(obj, key) {
    if (isObservableObject(obj)) {
        obj[$mobx].remove(key);
    }
    else if (isObservableMap(obj)) {
        obj.delete(key);
    }
    else if (isObservableSet(obj)) {
        obj.delete(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        obj.splice(key, 1);
    }
    else {
        return fail( true &&
            "'remove()' can only be used on observable objects, arrays and maps");
    }
}
function has(obj, key) {
    if (isObservableObject(obj)) {
        // return keys(obj).indexOf(key) >= 0
        var adm = getAdministration(obj);
        return adm.has(key);
    }
    else if (isObservableMap(obj)) {
        return obj.has(key);
    }
    else if (isObservableSet(obj)) {
        return obj.has(key);
    }
    else if (isObservableArray(obj)) {
        return key >= 0 && key < obj.length;
    }
    else {
        return fail( true &&
            "'has()' can only be used on observable objects, arrays and maps");
    }
}
function get(obj, key) {
    if (!has(obj, key))
        return undefined;
    if (isObservableObject(obj)) {
        return obj[key];
    }
    else if (isObservableMap(obj)) {
        return obj.get(key);
    }
    else if (isObservableArray(obj)) {
        return obj[key];
    }
    else {
        return fail( true &&
            "'get()' can only be used on observable objects, arrays and maps");
    }
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true,
    recurseEverything: false
};
function cache(map, key, value, options) {
    if (options.detectCycles)
        map.set(key, value);
    return value;
}
function toJSHelper(source, options, __alreadySeen) {
    if (!options.recurseEverything && !isObservable(source))
        return source;
    if (typeof source !== "object")
        return source;
    // Directly return null if source is null
    if (source === null)
        return null;
    // Directly return the Date object itself if contained in the observable
    if (source instanceof Date)
        return source;
    if (isObservableValue(source))
        return toJSHelper(source.get(), options, __alreadySeen);
    // make sure we track the keys of the object
    if (isObservable(source))
        keys(source);
    var detectCycles = options.detectCycles === true;
    if (detectCycles && source !== null && __alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray(source) || Array.isArray(source)) {
        var res_1 = cache(__alreadySeen, source, [], options);
        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
        res_1.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++)
            res_1[i] = toAdd[i];
        return res_1;
    }
    if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_2 = cache(__alreadySeen, source, new Set(), options);
            source.forEach(function (value) {
                res_2.add(toJSHelper(value, options, __alreadySeen));
            });
            return res_2;
        }
        else {
            var res_3 = cache(__alreadySeen, source, [], options);
            source.forEach(function (value) {
                res_3.push(toJSHelper(value, options, __alreadySeen));
            });
            return res_3;
        }
    }
    if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_4 = cache(__alreadySeen, source, new Map(), options);
            source.forEach(function (value, key) {
                res_4.set(key, toJSHelper(value, options, __alreadySeen));
            });
            return res_4;
        }
        else {
            var res_5 = cache(__alreadySeen, source, {}, options);
            source.forEach(function (value, key) {
                res_5[key] = toJSHelper(value, options, __alreadySeen);
            });
            return res_5;
        }
    }
    // Fallback to the situation that source is an ObservableObject or a plain object
    var res = cache(__alreadySeen, source, {}, options);
    getPlainObjectKeys(source).forEach(function (key) {
        res[key] = toJSHelper(source[key], options, __alreadySeen);
    });
    return res;
}
function toJS(source, options) {
    // backward compatibility
    if (typeof options === "boolean")
        options = { detectCycles: options };
    if (!options)
        options = defaultOptions;
    options.detectCycles =
        options.detectCycles === undefined
            ? options.recurseEverything === true
            : options.detectCycles === true;
    var __alreadySeen;
    if (options.detectCycles)
        __alreadySeen = new Map();
    return toJSHelper(source, options, __alreadySeen);
}

function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail( true &&
            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        endBatch();
    }
}

function when(predicate, arg1, arg2) {
    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
        return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        timeoutHandle = setTimeout(function () {
            if (!disposer[$mobx].isDisposed) {
                disposer();
                var error = new Error("WHEN_TIMEOUT");
                if (opts.onError)
                    opts.onError(error);
                else
                    throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId();
    var effectAction = createAction(opts.name + "-effect", effect);
    var disposer = autorun(function (r) {
        if (predicate()) {
            r.dispose();
            if (timeoutHandle)
                clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    if ( true && opts && opts.onError)
        return fail("the options 'onError' and 'promise' cannot be combined");
    var cancel;
    var res = new Promise(function (resolve, reject) {
        var disposer = _when(predicate, resolve, __assign({}, opts, { onError: reject }));
        cancel = function () {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}

function getAdm(target) {
    return target[$mobx];
}
function isPropertyKey(val) {
    return typeof val === "string" || typeof val === "number" || typeof val === "symbol";
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
    has: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return true;
        var adm = getAdm(target);
        // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
        // TODO: check performance stats!
        // if (adm.values.get(name as string)) return true
        if (isPropertyKey(name))
            return adm.has(name);
        return name in target;
    },
    get: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return target[name];
        var adm = getAdm(target);
        var observable = adm.values.get(name);
        if (observable instanceof Atom) {
            var result = observable.get();
            if (result === undefined) {
                // This fixes #1796, because deleting a prop that has an
                // undefined value won't retrigger a observer (no visible effect),
                // the autorun wouldn't subscribe to future key changes (see also next comment)
                adm.has(name);
            }
            return result;
        }
        // make sure we start listening to future keys
        // note that we only do this here for optimization
        if (isPropertyKey(name))
            adm.has(name);
        return target[name];
    },
    set: function (target, name, value) {
        if (!isPropertyKey(name))
            return false;
        set(target, name, value);
        return true;
    },
    deleteProperty: function (target, name) {
        if (!isPropertyKey(name))
            return false;
        var adm = getAdm(target);
        adm.remove(name);
        return true;
    },
    ownKeys: function (target) {
        var adm = getAdm(target);
        adm.keysAtom.reportObserved();
        return Reflect.ownKeys(target);
    },
    preventExtensions: function (target) {
        fail("Dynamic observable objects cannot be frozen");
        return false;
    }
};
function createDynamicObservableObject(base) {
    var proxy = new Proxy(base, objectProxyTraps);
    base[$mobx].proxy = proxy;
    return proxy;
}

function hasInterceptors(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
        var interceptors = __spread((interceptable.interceptors || []));
        for (var i = 0, l = interceptors.length; i < l; i++) {
            change = interceptors[i](change);
            invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
            if (!change)
                break;
        }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
    get: function (target, name) {
        if (name === $mobx)
            return target[$mobx];
        if (name === "length")
            return target[$mobx].getArrayLength();
        if (typeof name === "number") {
            return arrayExtensions.get.call(target, name);
        }
        if (typeof name === "string" && !isNaN(name)) {
            return arrayExtensions.get.call(target, parseInt(name));
        }
        if (arrayExtensions.hasOwnProperty(name)) {
            return arrayExtensions[name];
        }
        return target[name];
    },
    set: function (target, name, value) {
        if (name === "length") {
            target[$mobx].setArrayLength(value);
        }
        if (typeof name === "number") {
            arrayExtensions.set.call(target, name, value);
        }
        if (typeof name === "symbol" || isNaN(name)) {
            target[name] = value;
        }
        else {
            // numeric string
            arrayExtensions.set.call(target, parseInt(name), value);
        }
        return true;
    },
    preventExtensions: function (target) {
        fail("Observable arrays cannot be frozen");
        return false;
    }
};
function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) { name = "ObservableArray@" + getNextId(); }
    if (owned === void 0) { owned = false; }
    var adm = new ObservableArrayAdministration(name, enhancer, owned);
    addHiddenFinalProp(adm.values, $mobx, adm);
    var proxy = new Proxy(adm.values, arrayTraps);
    adm.proxy = proxy;
    if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart(true);
        adm.spliceWithArray(0, 0, initialValues);
        allowStateChangesEnd(prev);
    }
    return proxy;
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, owned) {
        this.owned = owned;
        this.values = [];
        this.proxy = undefined;
        this.lastKnownLength = 0;
        this.atom = new Atom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined && values.length > 0)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.proxy,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
        this.lastKnownLength += delta;
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        if (true) {
            var lengthDelta = newItems.length - deleteCount;
            this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
        }
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var arrayExtensions = {
    intercept: function (handler) {
        return this[$mobx].intercept(handler);
    },
    observe: function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        var adm = this[$mobx];
        return adm.observe(listener, fireImmediately);
    },
    clear: function () {
        return this.splice(0);
    },
    replace: function (newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(0, adm.values.length, newItems);
    },
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    toJS: function () {
        return this.slice();
    },
    toJSON: function () {
        // Used by JSON.stringify
        return this.toJS();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        var adm = this[$mobx];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray(index);
            case 2:
                return adm.spliceWithArray(index, deleteCount);
        }
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    spliceWithArray: function (index, deleteCount, newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    push: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    },
    pop: function () {
        return this.splice(Math.max(this[$mobx].values.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    },
    reverse: function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        if (true) {
            console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
        }
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    },
    sort: function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        if (true) {
            console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
        }
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    },
    remove: function (value) {
        var adm = this[$mobx];
        var idx = adm.dehanceValues(adm.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    },
    get: function (index) {
        var adm = this[$mobx];
        if (adm) {
            if (index < adm.values.length) {
                adm.atom.reportObserved();
                return adm.dehanceValue(adm.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    },
    set: function (index, newValue) {
        var adm = this[$mobx];
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: adm.proxy,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    }
};
[
    "concat",
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    arrayExtensions[funcName] = function () {
        var adm = this[$mobx];
        adm.atom.reportObserved();
        var res = adm.dehanceValues(adm.values);
        return res[funcName].apply(res, arguments);
    };
});
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _a;
var ObservableMapMarker = {};
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
var ObservableMap = /** @class */ (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this[_a] = ObservableMapMarker;
        this._keysAtom = createAtom(this.name + ".keys()");
        this[Symbol.toStringTag] = "Map";
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap.prototype.has = function (key) {
        var _this = this;
        if (!globalState.trackingDerivation)
            return this._has(key);
        var entry = this._hasMap.get(key);
        if (!entry) {
            // todo: replace with atom (breaking change)
            var newEntry = (entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false));
            this._hasMap.set(key, newEntry);
            onBecomeUnobserved(newEntry, function () { return _this._hasMap.delete(key); });
        }
        return entry.get();
    };
    ObservableMap.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign({}, change, { name: this.name, key: key }));
            transaction(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable = _this._data.get(key);
                observable.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
    };
    ObservableMap.prototype._updateValue = function (key, newValue) {
        var observable = this._data.get(key);
        newValue = observable.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign({}, change, { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        transaction(function () {
            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
            _this._data.set(key, observable);
            newValue = observable.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign({}, change, { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap.prototype.values = function () {
        var self = this;
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        return makeIterable({
            next: function () {
                return nextIndex < keys.length
                    ? { value: self.get(keys[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableMap.prototype.entries = function () {
        var self = this;
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        return makeIterable({
            next: function () {
                if (nextIndex < keys.length) {
                    var key = keys[nextIndex++];
                    return {
                        value: [key, self.get(key)],
                        done: false
                    };
                }
                return { done: true };
            }
        });
    };
    ObservableMap.prototype[(_a = $mobx, Symbol.iterator)] = function () {
        return this.entries();
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var e_1, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                callback.call(thisArg, value, key, this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (isPlainObject(other))
                getPlainObjectKeys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_a) {
                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
                    return _this.set(key, value);
                });
            else if (isES6Map(other)) {
                if (other.constructor !== Map)
                    fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
                other.forEach(function (value, key) { return _this.set(key, value); });
            }
            else if (other !== null && other !== undefined)
                fail("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_2, _a;
                try {
                    for (var _b = __values(_this.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        _this.delete(key);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        transaction(function () {
            // grab all the keys that are present in the new map but not present in the current map
            // and delete them from the map, then merge the new map
            // this will cause reactions only on changed values
            var newKeys = getMapLikeKeys(values);
            var oldKeys = Array.from(_this.keys());
            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
            missingKeys.forEach(function (k) { return _this.delete(k); });
            _this.merge(values);
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap.prototype.toPOJO = function () {
        var e_3, _a;
        var res = {};
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                // We lie about symbol key types due to https://github.com/Microsoft/TypeScript/issues/1863
                res[typeof key === "symbol" ? key : stringifyKey(key)] = value;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            Array.from(this.keys())
                .map(function (key) { return stringifyKey(key) + ": " + ("" + _this.get(key)); })
                .join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var _a$1;
var ObservableSetMarker = {};
var ObservableSet = /** @class */ (function () {
    function ObservableSet(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableSet@" + getNextId(); }
        this.name = name;
        this[_a$1] = ObservableSetMarker;
        this._data = new Set();
        this._atom = createAtom(this.name);
        this[Symbol.toStringTag] = "Set";
        if (typeof Set !== "function") {
            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        }
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name); };
        if (initialData) {
            this.replace(initialData);
        }
    }
    ObservableSet.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableSet.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_1, _a;
                try {
                    for (var _b = __values(_this._data.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var value = _c.value;
                        _this.delete(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        });
    };
    ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
        var e_2, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                callbackFn.call(thisArg, value, value, this);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(ObservableSet.prototype, "size", {
        get: function () {
            this._atom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableSet.prototype.add = function (value) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._atom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "add",
                object: this,
                newValue: value
            });
            if (!change)
                return this;
            // TODO: ideally, value = change.value would be done here, so that values can be
            // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction(function () {
                _this._data.add(_this.enhancer(value, undefined));
                _this._atom.reportChanged();
            });
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "add",
                    object: this,
                    newValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(change);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
        return this;
    };
    ObservableSet.prototype.delete = function (value) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                oldValue: value
            });
            if (!change)
                return false;
        }
        if (this.has(value)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign({}, change, { name: this.name }));
            transaction(function () {
                _this._atom.reportChanged();
                _this._data.delete(value);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableSet.prototype.has = function (value) {
        this._atom.reportObserved();
        return this._data.has(this.dehanceValue(value));
    };
    ObservableSet.prototype.entries = function () {
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        var values = Array.from(this.values());
        return makeIterable({
            next: function () {
                var index = nextIndex;
                nextIndex += 1;
                return index < values.length
                    ? { value: [keys[index], values[index]], done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.keys = function () {
        return this.values();
    };
    ObservableSet.prototype.values = function () {
        this._atom.reportObserved();
        var self = this;
        var nextIndex = 0;
        var observableValues = Array.from(this._data.values());
        return makeIterable({
            next: function () {
                return nextIndex < observableValues.length
                    ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.replace = function (other) {
        var _this = this;
        if (isObservableSet(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (Array.isArray(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (isES6Set(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (other !== null && other !== undefined) {
                fail("Cannot initialize set from " + other);
            }
        });
        return this;
    };
    ObservableSet.prototype.observe = function (listener, fireImmediately) {
        // TODO 'fireImmediately' can be true?
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
        return registerListener(this, listener);
    };
    ObservableSet.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableSet.prototype.toJS = function () {
        return new Set(this);
    };
    ObservableSet.prototype.toString = function () {
        return this.name + "[ " + Array.from(this).join(", ") + " ]";
    };
    ObservableSet.prototype[(_a$1 = $mobx, Symbol.iterator)] = function () {
        return this.values();
    };
    return ObservableSet;
}());
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);

var ObservableObjectAdministration = /** @class */ (function () {
    function ObservableObjectAdministration(target, values, name, defaultEnhancer) {
        if (values === void 0) { values = new Map(); }
        this.target = target;
        this.values = values;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.keysAtom = new Atom(name + ".keys");
    }
    ObservableObjectAdministration.prototype.read = function (key) {
        return this.values.get(key).get();
    };
    ObservableObjectAdministration.prototype.write = function (key, newValue) {
        var instance = this.target;
        var observable = this.values.get(key);
        if (observable instanceof ComputedValue) {
            observable.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "update",
                object: this.proxy || instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== globalState.UNCHANGED) {
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this.proxy || instance,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign({}, change, { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableObjectAdministration.prototype.has = function (key) {
        var map = this.pendingKeys || (this.pendingKeys = new Map());
        var entry = map.get(key);
        if (entry)
            return entry.get();
        else {
            var exists = !!this.values.get(key);
            // Possible optimization: Don't have a separate map for non existing keys,
            // but store them in the values map instead, using a special symbol to denote "not existing"
            entry = new ObservableValue(exists, referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);
            map.set(key, entry);
            return entry.get(); // read to subscribe
        }
    };
    ObservableObjectAdministration.prototype.addObservableProp = function (propName, newValue, enhancer) {
        if (enhancer === void 0) { enhancer = this.defaultEnhancer; }
        var target = this.target;
        assertPropertyConfigurable(target, propName);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: propName,
                type: "add",
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        var observable = new ObservableValue(newValue, enhancer, this.name + "." + stringifyKey(propName), false);
        this.values.set(propName, observable);
        newValue = observable.value; // observableValue might have changed it
        Object.defineProperty(target, propName, generateObservablePropConfig(propName));
        this.notifyPropertyAddition(propName, newValue);
    };
    ObservableObjectAdministration.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
    propName, options) {
        var target = this.target;
        options.name = options.name || this.name + "." + stringifyKey(propName);
        this.values.set(propName, new ComputedValue(options));
        if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName))
            Object.defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
    };
    ObservableObjectAdministration.prototype.remove = function (key) {
        if (!this.values.has(key))
            return;
        var target = this.target;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch();
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var oldObservable = this.values.get(key);
            var oldValue = oldObservable && oldObservable.get();
            oldObservable && oldObservable.set(undefined);
            // notify key and keyset listeners
            this.keysAtom.reportChanged();
            this.values.delete(key);
            if (this.pendingKeys) {
                var entry = this.pendingKeys.get(key);
                if (entry)
                    entry.set(false);
            }
            // delete the prop
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: this.proxy || target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign({}, change, { name: this.name, key: key }));
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
        finally {
            endBatch();
        }
    };
    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableObjectAdministration.prototype.notifyPropertyAddition = function (key, newValue) {
        var notify = hasListeners(this);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this.proxy || this.target,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign({}, change, { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
        if (this.pendingKeys) {
            var entry = this.pendingKeys.get(key);
            if (entry)
                entry.set(true);
        }
        this.keysAtom.reportChanged();
    };
    ObservableObjectAdministration.prototype.getKeys = function () {
        var e_1, _a;
        this.keysAtom.reportObserved();
        // return Reflect.ownKeys(this.values) as any
        var res = [];
        try {
            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                if (value instanceof ObservableValue)
                    res.push(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer; }
    if (Object.prototype.hasOwnProperty.call(target, $mobx))
        return target[$mobx];
     true &&
        invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, new Map(), stringifyKey(name), defaultEnhancer);
    addHiddenProp(target, $mobx, adm);
    return adm;
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this[$mobx].read(propName);
            },
            set: function (v) {
                this[$mobx].write(propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner[$mobx];
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance(owner);
        return owner[$mobx];
    }
    return adm;
}
function generateComputedPropConfig(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: globalState.computedConfigurable,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(propName, v);
            }
        }));
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        return isObservableObjectAdministration(thing[$mobx]);
    }
    return false;
}

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            if (property !== undefined)
                fail( true &&
                    "It is not possible to get index atoms from arrays");
            return thing[$mobx].atom;
        }
        if (isObservableSet(thing)) {
            return thing[$mobx];
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return anyThing._keysAtom;
            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable)
                fail( true &&
                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        if (property && !thing[$mobx])
            thing[property]; // See #1072
        if (isObservableObject(thing)) {
            if (!property)
                return fail( true && "please specify a property");
            var observable = thing[$mobx].values.get(property);
            if (!observable)
                fail( true &&
                    "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing[$mobx])) {
            // disposer function
            return thing[$mobx];
        }
    }
    return fail( true && "Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    if (!thing)
        fail("Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing) || isObservableSet(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    if (thing[$mobx])
        return thing[$mobx];
    fail( true && "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual(a, b, depth) {
    if (depth === void 0) { depth = -1; }
    return eq(a, b, depth);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, depth, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
    }
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    if (depth === 0) {
        return false;
    }
    else if (depth < 0) {
        depth = -1;
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], depth - 1, aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys = Object.keys(a);
        var key = void 0;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(has$1(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a))
        return a.slice();
    if (isES6Map(a) || isObservableMap(a))
        return Array.from(a.entries());
    if (isES6Set(a) || isObservableSet(a))
        return Array.from(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
}
function getSelf() {
    return this;
}

/*
The only reason for this file to exist is pure horror:
Without it rollup can make the bundling fail at any point in time; when it rolls up the files in the wrong order
it will cause undefined errors (for example because super classes or local variables not being hoisted).
With this file that will still happen,
but at least in this file we can magically reorder the imports with trial and error until the build succeeds again.
*/

/**
 * (c) Michel Weststrate 2015 - 2018
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    "development";
}
catch (e) {
    var g = getGlobal();
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}
(function () {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        "development" !== "production" &&
        process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
        // trick so it doesn't get replaced
        var varName = ["process", "env", "NODE_ENV"].join(".");
        console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy,
        extras: {
            getDebugName: getDebugName
        },
        $mobx: $mobx
    });
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var str = mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].box('str');
var num = mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].box(20);
var bool = mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].box(false);
console.log(str.get());
console.log(num.get());

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vYngvbGliL21vYngubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsic3RyIiwib2JzZXJ2YWJsZSIsImJveCIsIm51bSIsImJvb2wiLCJjb25zb2xlIiwibG9nIiwiZ2V0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYseUJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTSxnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDO0FBQzdDLFFBQVEsRUFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOEJBQThCO0FBQzVEO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsbUJBQW1CLEVBQUU7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsbUJBQW1CLEVBQUU7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSw2Q0FBNkMsZ0NBQWdD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QSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0MsUUFBUSxFQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtSUFBbUksMkJBQTJCO0FBQzlKO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQSxvREFBb0QsOENBQThD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dkU7QUFDQTtBQUNBLDZDQUE2Qyw0QkFBNEIsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHFCQUFxQixFQUFFO0FBQ3JFO0FBQ0EsZ0JBQWdCLEtBQXFDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixLQUFxQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEtBQXFDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEtBQXFDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEtBQXFDO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxrREFBa0QsRUFBRTtBQUNyRztBQUNBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsS0FBcUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxTQUFTLGtCQUFrQjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEtBQXFDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBb0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLFFBQVEsYUFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRW04Qjs7Ozs7Ozs7Ozs7OztBQ3Y2SW44QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFFQSxJQUFJQSxHQUFHLEdBQUdDLCtDQUFVLENBQUNDLEdBQVgsQ0FBZSxLQUFmLENBQVY7QUFDQSxJQUFJQyxHQUFHLEdBQUdGLCtDQUFVLENBQUNDLEdBQVgsQ0FBZSxFQUFmLENBQVY7QUFDQSxJQUFJRSxJQUFJLEdBQUdILCtDQUFVLENBQUNDLEdBQVgsQ0FBZSxLQUFmLENBQVg7QUFFQUcsT0FBTyxDQUFDQyxHQUFSLENBQVlOLEdBQUcsQ0FBQ08sR0FBSixFQUFaO0FBQ0FGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFHLENBQUNJLEdBQUosRUFBWixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKiBNb2JYIC0gKGMpIE1pY2hlbCBXZXN0c3RyYXRlIDIwMTUgLSAyMDE5IC0gTUlUIExpY2Vuc2VkICovXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxuXG52YXIgT0JGVVNDQVRFRF9FUlJPUiA9IFwiQW4gaW52YXJpYW50IGZhaWxlZCwgaG93ZXZlciB0aGUgZXJyb3IgaXMgb2JmdXNjYXRlZCBiZWNhdXNlIHRoaXMgaXMgYW4gcHJvZHVjdGlvbiBidWlsZC5cIjtcclxudmFyIEVNUFRZX0FSUkFZID0gW107XHJcbk9iamVjdC5mcmVlemUoRU1QVFlfQVJSQVkpO1xyXG52YXIgRU1QVFlfT0JKRUNUID0ge307XHJcbk9iamVjdC5mcmVlemUoRU1QVFlfT0JKRUNUKTtcclxuZnVuY3Rpb24gZ2V0TmV4dElkKCkge1xyXG4gICAgcmV0dXJuICsrZ2xvYmFsU3RhdGUubW9ieEd1aWQ7XHJcbn1cclxuZnVuY3Rpb24gZmFpbChtZXNzYWdlKSB7XHJcbiAgICBpbnZhcmlhbnQoZmFsc2UsIG1lc3NhZ2UpO1xyXG4gICAgdGhyb3cgXCJYXCI7IC8vIHVucmVhY2hhYmxlXHJcbn1cclxuZnVuY3Rpb24gaW52YXJpYW50KGNoZWNrLCBtZXNzYWdlKSB7XHJcbiAgICBpZiAoIWNoZWNrKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4XSBcIiArIChtZXNzYWdlIHx8IE9CRlVTQ0FURURfRVJST1IpKTtcclxufVxyXG4vKipcclxuICogUHJpbnRzIGEgZGVwcmVjYXRpb24gbWVzc2FnZSwgYnV0IG9ubHkgb25lIHRpbWUuXHJcbiAqIFJldHVybnMgZmFsc2UgaWYgdGhlIGRlcHJlY2F0ZWQgbWVzc2FnZSB3YXMgYWxyZWFkeSBwcmludGVkIGJlZm9yZVxyXG4gKi9cclxudmFyIGRlcHJlY2F0ZWRNZXNzYWdlcyA9IFtdO1xyXG5mdW5jdGlvbiBkZXByZWNhdGVkKG1zZywgdGhpbmcpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKHRoaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlcHJlY2F0ZWQoXCInXCIgKyBtc2cgKyBcIicsIHVzZSAnXCIgKyB0aGluZyArIFwiJyBpbnN0ZWFkLlwiKTtcclxuICAgIH1cclxuICAgIGlmIChkZXByZWNhdGVkTWVzc2FnZXMuaW5kZXhPZihtc2cpICE9PSAtMSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBkZXByZWNhdGVkTWVzc2FnZXMucHVzaChtc2cpO1xyXG4gICAgY29uc29sZS5lcnJvcihcIlttb2J4XSBEZXByZWNhdGVkOiBcIiArIG1zZyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG4vKipcclxuICogTWFrZXMgc3VyZSB0aGF0IHRoZSBwcm92aWRlZCBmdW5jdGlvbiBpcyBpbnZva2VkIGF0IG1vc3Qgb25jZS5cclxuICovXHJcbmZ1bmN0aW9uIG9uY2UoZnVuYykge1xyXG4gICAgdmFyIGludm9rZWQgPSBmYWxzZTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGludm9rZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpbnZva2VkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxufVxyXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHsgfTtcclxuZnVuY3Rpb24gdW5pcXVlKGxpc3QpIHtcclxuICAgIHZhciByZXMgPSBbXTtcclxuICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGlmIChyZXMuaW5kZXhPZihpdGVtKSA9PT0gLTEpXHJcbiAgICAgICAgICAgIHJlcy5wdXNoKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiO1xyXG59XHJcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcclxuICAgIHJldHVybiBwcm90byA9PT0gT2JqZWN0LnByb3RvdHlwZSB8fCBwcm90byA9PT0gbnVsbDtcclxufVxyXG5mdW5jdGlvbiBhZGRIaWRkZW5Qcm9wKG9iamVjdCwgcHJvcE5hbWUsIHZhbHVlKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wTmFtZSwge1xyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEhpZGRlbkZpbmFsUHJvcChvYmplY3QsIHByb3BOYW1lLCB2YWx1ZSkge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcE5hbWUsIHtcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gaXNQcm9wZXJ0eUNvbmZpZ3VyYWJsZShvYmplY3QsIHByb3ApIHtcclxuICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3ApO1xyXG4gICAgcmV0dXJuICFkZXNjcmlwdG9yIHx8IChkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSAhPT0gZmFsc2UgJiYgZGVzY3JpcHRvci53cml0YWJsZSAhPT0gZmFsc2UpO1xyXG59XHJcbmZ1bmN0aW9uIGFzc2VydFByb3BlcnR5Q29uZmlndXJhYmxlKG9iamVjdCwgcHJvcCkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhaXNQcm9wZXJ0eUNvbmZpZ3VyYWJsZShvYmplY3QsIHByb3ApKVxyXG4gICAgICAgIGZhaWwoXCJDYW5ub3QgbWFrZSBwcm9wZXJ0eSAnXCIgKyBwcm9wLnRvU3RyaW5nKCkgKyBcIicgb2JzZXJ2YWJsZSwgaXQgaXMgbm90IGNvbmZpZ3VyYWJsZSBhbmQgd3JpdGFibGUgaW4gdGhlIHRhcmdldCBvYmplY3RcIik7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShuYW1lLCBjbGF6eikge1xyXG4gICAgdmFyIHByb3BOYW1lID0gXCJpc01vYlhcIiArIG5hbWU7XHJcbiAgICBjbGF6ei5wcm90b3R5cGVbcHJvcE5hbWVdID0gdHJ1ZTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHJldHVybiBpc09iamVjdCh4KSAmJiB4W3Byb3BOYW1lXSA9PT0gdHJ1ZTtcclxuICAgIH07XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgYXJndW1lbnQgaXMgYW4gYXJyYXksIGRpc3JlZ2FyZGluZyBvYnNlcnZhYmlsaXR5LlxyXG4gKi9cclxuZnVuY3Rpb24gaXNBcnJheUxpa2UoeCkge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoeCkgfHwgaXNPYnNlcnZhYmxlQXJyYXkoeCk7XHJcbn1cclxuZnVuY3Rpb24gaXNFUzZNYXAodGhpbmcpIHtcclxuICAgIHJldHVybiB0aGluZyBpbnN0YW5jZW9mIE1hcDtcclxufVxyXG5mdW5jdGlvbiBpc0VTNlNldCh0aGluZykge1xyXG4gICAgcmV0dXJuIHRoaW5nIGluc3RhbmNlb2YgU2V0O1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBmb2xsb3dpbmc6IG93biBrZXlzLCBwcm90b3R5cGUga2V5cyAmIG93biBzeW1ib2wga2V5cywgaWYgdGhleSBhcmUgZW51bWVyYWJsZS5cclxuICovXHJcbmZ1bmN0aW9uIGdldFBsYWluT2JqZWN0S2V5cyhvYmplY3QpIHtcclxuICAgIHZhciBlbnVtZXJhYmxlcyA9IG5ldyBTZXQoKTtcclxuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpXHJcbiAgICAgICAgZW51bWVyYWJsZXMuYWRkKGtleSk7IC8vICphbGwqIGVudW1lcmFibGVzXHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgaykuZW51bWVyYWJsZSlcclxuICAgICAgICAgICAgZW51bWVyYWJsZXMuYWRkKGspO1xyXG4gICAgfSk7IC8vICpvd24qIHN5bWJvbHNcclxuICAgIC8vIE5vdGU6IHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbWlzc2luZyBlbnVtZXJhYmxlLCBpbmhlcml0ZWQsIHN5bWJvbGljIHByb3BlcnR5IG5hbWVzISBUaGF0IHdvdWxkIGhvd2V2ZXIgcHJldHR5IGV4cGVuc2l2ZSB0byBhZGQsXHJcbiAgICAvLyBhcyB0aGVyZSBpcyBubyBlZmZpY2llbnQgaXRlcmF0b3IgdGhhdCByZXR1cm5zICphbGwqIHByb3BlcnRpZXNcclxuICAgIHJldHVybiBBcnJheS5mcm9tKGVudW1lcmFibGVzKTtcclxufVxyXG5mdW5jdGlvbiBzdHJpbmdpZnlLZXkoa2V5KSB7XHJcbiAgICBpZiAoa2V5ICYmIGtleS50b1N0cmluZylcclxuICAgICAgICByZXR1cm4ga2V5LnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmcoa2V5KS50b1N0cmluZygpO1xyXG59XHJcbmZ1bmN0aW9uIGdldE1hcExpa2VLZXlzKG1hcCkge1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3QobWFwKSlcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KG1hcCkpXHJcbiAgICAgICAgcmV0dXJuIG1hcC5tYXAoZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHZhciBfYiA9IF9fcmVhZChfYSwgMSksIGtleSA9IF9iWzBdO1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgaWYgKGlzRVM2TWFwKG1hcCkgfHwgaXNPYnNlcnZhYmxlTWFwKG1hcCkpXHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obWFwLmtleXMoKSk7XHJcbiAgICByZXR1cm4gZmFpbChcIkNhbm5vdCBnZXQga2V5cyBmcm9tICdcIiArIG1hcCArIFwiJ1wiKTtcclxufVxyXG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsID8gbnVsbCA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiA/IFwiXCIgKyB2YWx1ZSA6IHZhbHVlO1xyXG59XG5cbnZhciAkbW9ieCA9IFN5bWJvbChcIm1vYnggYWRtaW5pc3RyYXRpb25cIik7XHJcbnZhciBBdG9tID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgYXRvbS4gRm9yIGRlYnVnZ2luZyBwdXJwb3NlcyBpdCBpcyByZWNvbW1lbmRlZCB0byBnaXZlIGl0IGEgbmFtZS5cclxuICAgICAqIFRoZSBvbkJlY29tZU9ic2VydmVkIGFuZCBvbkJlY29tZVVub2JzZXJ2ZWQgY2FsbGJhY2tzIGNhbiBiZSB1c2VkIGZvciByZXNvdXJjZSBtYW5hZ2VtZW50LlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBBdG9tKG5hbWUpIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIkF0b21AXCIgKyBnZXROZXh0SWQoKTsgfVxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pc1BlbmRpbmdVbm9ic2VydmF0aW9uID0gZmFsc2U7IC8vIGZvciBlZmZlY3RpdmUgdW5vYnNlcnZpbmcuIEJhc2VBdG9tIGhhcyB0cnVlLCBmb3IgZXh0cmEgb3B0aW1pemF0aW9uLCBzbyBpdHMgb25CZWNvbWVVbm9ic2VydmVkIG5ldmVyIGdldHMgY2FsbGVkLCBiZWNhdXNlIGl0J3Mgbm90IG5lZWRlZFxyXG4gICAgICAgIHRoaXMuaXNCZWluZ09ic2VydmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdGhpcy5kaWZmVmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdEFjY2Vzc2VkQnkgPSAwO1xyXG4gICAgICAgIHRoaXMubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HO1xyXG4gICAgfVxyXG4gICAgQXRvbS5wcm90b3R5cGUub25CZWNvbWVPYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5vbkJlY29tZU9ic2VydmVkTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25CZWNvbWVPYnNlcnZlZExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIoKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEF0b20ucHJvdG90eXBlLm9uQmVjb21lVW5vYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5vbkJlY29tZVVub2JzZXJ2ZWRMaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkJlY29tZVVub2JzZXJ2ZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKCk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEludm9rZSB0aGlzIG1ldGhvZCB0byBub3RpZnkgbW9ieCB0aGF0IHlvdXIgYXRvbSBoYXMgYmVlbiB1c2VkIHNvbWVob3cuXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlcmUgaXMgY3VycmVudGx5IGEgcmVhY3RpdmUgY29udGV4dC5cclxuICAgICAqL1xyXG4gICAgQXRvbS5wcm90b3R5cGUucmVwb3J0T2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9ydE9ic2VydmVkKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIF9hZnRlcl8gdGhpcyBtZXRob2QgaGFzIGNoYW5nZWQgdG8gc2lnbmFsIG1vYnggdGhhdCBhbGwgaXRzIG9ic2VydmVycyBzaG91bGQgaW52YWxpZGF0ZS5cclxuICAgICAqL1xyXG4gICAgQXRvbS5wcm90b3R5cGUucmVwb3J0Q2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzdGFydEJhdGNoKCk7XHJcbiAgICAgICAgcHJvcGFnYXRlQ2hhbmdlZCh0aGlzKTtcclxuICAgICAgICBlbmRCYXRjaCgpO1xyXG4gICAgfTtcclxuICAgIEF0b20ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEF0b207XHJcbn0oKSk7XHJcbnZhciBpc0F0b20gPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiQXRvbVwiLCBBdG9tKTtcclxuZnVuY3Rpb24gY3JlYXRlQXRvbShuYW1lLCBvbkJlY29tZU9ic2VydmVkSGFuZGxlciwgb25CZWNvbWVVbm9ic2VydmVkSGFuZGxlcikge1xyXG4gICAgaWYgKG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyID09PSB2b2lkIDApIHsgb25CZWNvbWVPYnNlcnZlZEhhbmRsZXIgPSBub29wOyB9XHJcbiAgICBpZiAob25CZWNvbWVVbm9ic2VydmVkSGFuZGxlciA9PT0gdm9pZCAwKSB7IG9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIgPSBub29wOyB9XHJcbiAgICB2YXIgYXRvbSA9IG5ldyBBdG9tKG5hbWUpO1xyXG4gICAgLy8gZGVmYXVsdCBgbm9vcGAgbGlzdGVuZXIgd2lsbCBub3QgaW5pdGlhbGl6ZSB0aGUgaG9vayBTZXRcclxuICAgIGlmIChvbkJlY29tZU9ic2VydmVkSGFuZGxlciAhPT0gbm9vcCkge1xyXG4gICAgICAgIG9uQmVjb21lT2JzZXJ2ZWQoYXRvbSwgb25CZWNvbWVPYnNlcnZlZEhhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgaWYgKG9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIgIT09IG5vb3ApIHtcclxuICAgICAgICBvbkJlY29tZVVub2JzZXJ2ZWQoYXRvbSwgb25CZWNvbWVVbm9ic2VydmVkSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXRvbTtcclxufVxuXG5mdW5jdGlvbiBpZGVudGl0eUNvbXBhcmVyKGEsIGIpIHtcclxuICAgIHJldHVybiBhID09PSBiO1xyXG59XHJcbmZ1bmN0aW9uIHN0cnVjdHVyYWxDb21wYXJlcihhLCBiKSB7XHJcbiAgICByZXR1cm4gZGVlcEVxdWFsKGEsIGIpO1xyXG59XHJcbmZ1bmN0aW9uIHNoYWxsb3dDb21wYXJlcihhLCBiKSB7XHJcbiAgICByZXR1cm4gZGVlcEVxdWFsKGEsIGIsIDEpO1xyXG59XHJcbmZ1bmN0aW9uIGRlZmF1bHRDb21wYXJlcihhLCBiKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmlzKGEsIGIpO1xyXG59XHJcbnZhciBjb21wYXJlciA9IHtcclxuICAgIGlkZW50aXR5OiBpZGVudGl0eUNvbXBhcmVyLFxyXG4gICAgc3RydWN0dXJhbDogc3RydWN0dXJhbENvbXBhcmVyLFxyXG4gICAgZGVmYXVsdDogZGVmYXVsdENvbXBhcmVyLFxyXG4gICAgc2hhbGxvdzogc2hhbGxvd0NvbXBhcmVyXHJcbn07XG5cbnZhciBtb2J4RGlkUnVuTGF6eUluaXRpYWxpemVyc1N5bWJvbCA9IFN5bWJvbChcIm1vYnggZGlkIHJ1biBsYXp5IGluaXRpYWxpemVyc1wiKTtcclxudmFyIG1vYnhQZW5kaW5nRGVjb3JhdG9ycyA9IFN5bWJvbChcIm1vYnggcGVuZGluZyBkZWNvcmF0b3JzXCIpO1xyXG52YXIgZW51bWVyYWJsZURlc2NyaXB0b3JDYWNoZSA9IHt9O1xyXG52YXIgbm9uRW51bWVyYWJsZURlc2NyaXB0b3JDYWNoZSA9IHt9O1xyXG5mdW5jdGlvbiBjcmVhdGVQcm9wZXJ0eUluaXRpYWxpemVyRGVzY3JpcHRvcihwcm9wLCBlbnVtZXJhYmxlKSB7XHJcbiAgICB2YXIgY2FjaGUgPSBlbnVtZXJhYmxlID8gZW51bWVyYWJsZURlc2NyaXB0b3JDYWNoZSA6IG5vbkVudW1lcmFibGVEZXNjcmlwdG9yQ2FjaGU7XHJcbiAgICByZXR1cm4gKGNhY2hlW3Byb3BdIHx8XHJcbiAgICAgICAgKGNhY2hlW3Byb3BdID0ge1xyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGVudW1lcmFibGUsXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZUluc3RhbmNlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbcHJvcF07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplSW5zdGFuY2UodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzW3Byb3BdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbn1cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZUluc3RhbmNlKHRhcmdldCkge1xyXG4gICAgaWYgKHRhcmdldFttb2J4RGlkUnVuTGF6eUluaXRpYWxpemVyc1N5bWJvbF0gPT09IHRydWUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgdmFyIGRlY29yYXRvcnMgPSB0YXJnZXRbbW9ieFBlbmRpbmdEZWNvcmF0b3JzXTtcclxuICAgIGlmIChkZWNvcmF0b3JzKSB7XHJcbiAgICAgICAgYWRkSGlkZGVuUHJvcCh0YXJnZXQsIG1vYnhEaWRSdW5MYXp5SW5pdGlhbGl6ZXJzU3ltYm9sLCB0cnVlKTtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVjb3JhdG9ycykge1xyXG4gICAgICAgICAgICB2YXIgZCA9IGRlY29yYXRvcnNba2V5XTtcclxuICAgICAgICAgICAgZC5wcm9wZXJ0eUNyZWF0b3IodGFyZ2V0LCBkLnByb3AsIGQuZGVzY3JpcHRvciwgZC5kZWNvcmF0b3JUYXJnZXQsIGQuZGVjb3JhdG9yQXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlUHJvcERlY29yYXRvcihwcm9wZXJ0eUluaXRpYWxseUVudW1lcmFibGUsIHByb3BlcnR5Q3JlYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvckZhY3RvcnkoKSB7XHJcbiAgICAgICAgdmFyIGRlY29yYXRvckFyZ3VtZW50cztcclxuICAgICAgICB2YXIgZGVjb3JhdG9yID0gZnVuY3Rpb24gZGVjb3JhdGUodGFyZ2V0LCBwcm9wLCBkZXNjcmlwdG9yLCBhcHBseUltbWVkaWF0ZWx5XHJcbiAgICAgICAgLy8gVGhpcyBpcyBhIHNwZWNpYWwgcGFyYW1ldGVyIHRvIHNpZ25hbCB0aGUgZGlyZWN0IGFwcGxpY2F0aW9uIG9mIGEgZGVjb3JhdG9yLCBhbGxvdyBleHRlbmRPYnNlcnZhYmxlIHRvIHNraXAgdGhlIGVudGlyZSB0eXBlIGRlY29yYXRpb24gcGFydCxcclxuICAgICAgICAvLyBhcyB0aGUgaW5zdGFuY2UgdG8gYXBwbHkgdGhlIGRlY29yYXRvciB0byBlcXVhbHMgdGhlIHRhcmdldFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoYXBwbHlJbW1lZGlhdGVseSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlDcmVhdG9yKHRhcmdldCwgcHJvcCwgZGVzY3JpcHRvciwgdGFyZ2V0LCBkZWNvcmF0b3JBcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhcXVhY2tzTGlrZUFEZWNvcmF0b3IoYXJndW1lbnRzKSlcclxuICAgICAgICAgICAgICAgIGZhaWwoXCJUaGlzIGZ1bmN0aW9uIGlzIGEgZGVjb3JhdG9yLCBidXQgaXQgd2Fzbid0IGludm9rZWQgbGlrZSBhIGRlY29yYXRvclwiKTtcclxuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBtb2J4UGVuZGluZ0RlY29yYXRvcnMpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5oZXJpdGVkRGVjb3JhdG9ycyA9IHRhcmdldFttb2J4UGVuZGluZ0RlY29yYXRvcnNdO1xyXG4gICAgICAgICAgICAgICAgYWRkSGlkZGVuUHJvcCh0YXJnZXQsIG1vYnhQZW5kaW5nRGVjb3JhdG9ycywgX19hc3NpZ24oe30sIGluaGVyaXRlZERlY29yYXRvcnMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YXJnZXRbbW9ieFBlbmRpbmdEZWNvcmF0b3JzXVtwcm9wXSA9IHtcclxuICAgICAgICAgICAgICAgIHByb3A6IHByb3AsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUNyZWF0b3I6IHByb3BlcnR5Q3JlYXRvcixcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3I6IGRlc2NyaXB0b3IsXHJcbiAgICAgICAgICAgICAgICBkZWNvcmF0b3JUYXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgIGRlY29yYXRvckFyZ3VtZW50czogZGVjb3JhdG9yQXJndW1lbnRzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQcm9wZXJ0eUluaXRpYWxpemVyRGVzY3JpcHRvcihwcm9wLCBwcm9wZXJ0eUluaXRpYWxseUVudW1lcmFibGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHF1YWNrc0xpa2VBRGVjb3JhdG9yKGFyZ3VtZW50cykpIHtcclxuICAgICAgICAgICAgLy8gQGRlY29yYXRvclxyXG4gICAgICAgICAgICBkZWNvcmF0b3JBcmd1bWVudHMgPSBFTVBUWV9BUlJBWTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlY29yYXRvci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQGRlY29yYXRvcihhcmdzKVxyXG4gICAgICAgICAgICBkZWNvcmF0b3JBcmd1bWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVjb3JhdG9yO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gcXVhY2tzTGlrZUFEZWNvcmF0b3IoYXJncykge1xyXG4gICAgcmV0dXJuICgoKGFyZ3MubGVuZ3RoID09PSAyIHx8IGFyZ3MubGVuZ3RoID09PSAzKSAmJiB0eXBlb2YgYXJnc1sxXSA9PT0gXCJzdHJpbmdcIikgfHxcclxuICAgICAgICAoYXJncy5sZW5ndGggPT09IDQgJiYgYXJnc1szXSA9PT0gdHJ1ZSkpO1xyXG59XG5cbmZ1bmN0aW9uIGRlZXBFbmhhbmNlcih2LCBfLCBuYW1lKSB7XHJcbiAgICAvLyBpdCBpcyBhbiBvYnNlcnZhYmxlIGFscmVhZHksIGRvbmVcclxuICAgIGlmIChpc09ic2VydmFibGUodikpXHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAvLyBzb21ldGhpbmcgdGhhdCBjYW4gYmUgY29udmVydGVkIGFuZCBtdXRhdGVkP1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodikpXHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuYXJyYXkodiwgeyBuYW1lOiBuYW1lIH0pO1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3QodikpXHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUub2JqZWN0KHYsIHVuZGVmaW5lZCwgeyBuYW1lOiBuYW1lIH0pO1xyXG4gICAgaWYgKGlzRVM2TWFwKHYpKVxyXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLm1hcCh2LCB7IG5hbWU6IG5hbWUgfSk7XHJcbiAgICBpZiAoaXNFUzZTZXQodikpXHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuc2V0KHYsIHsgbmFtZTogbmFtZSB9KTtcclxuICAgIHJldHVybiB2O1xyXG59XHJcbmZ1bmN0aW9uIHNoYWxsb3dFbmhhbmNlcih2LCBfLCBuYW1lKSB7XHJcbiAgICBpZiAodiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHYpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KHYpIHx8IGlzT2JzZXJ2YWJsZU1hcCh2KSB8fCBpc09ic2VydmFibGVTZXQodikpXHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2KSlcclxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5hcnJheSh2LCB7IG5hbWU6IG5hbWUsIGRlZXA6IGZhbHNlIH0pO1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3QodikpXHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUub2JqZWN0KHYsIHVuZGVmaW5lZCwgeyBuYW1lOiBuYW1lLCBkZWVwOiBmYWxzZSB9KTtcclxuICAgIGlmIChpc0VTNk1hcCh2KSlcclxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5tYXAodiwgeyBuYW1lOiBuYW1lLCBkZWVwOiBmYWxzZSB9KTtcclxuICAgIGlmIChpc0VTNlNldCh2KSlcclxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5zZXQodiwgeyBuYW1lOiBuYW1lLCBkZWVwOiBmYWxzZSB9KTtcclxuICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgIFwiVGhlIHNoYWxsb3cgbW9kaWZpZXIgLyBkZWNvcmF0b3IgY2FuIG9ubHkgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIGFycmF5cywgb2JqZWN0cywgbWFwcyBhbmQgc2V0c1wiKTtcclxufVxyXG5mdW5jdGlvbiByZWZlcmVuY2VFbmhhbmNlcihuZXdWYWx1ZSkge1xyXG4gICAgLy8gbmV2ZXIgdHVybiBpbnRvIGFuIG9ic2VydmFibGVcclxuICAgIHJldHVybiBuZXdWYWx1ZTtcclxufVxyXG5mdW5jdGlvbiByZWZTdHJ1Y3RFbmhhbmNlcih2LCBvbGRWYWx1ZSwgbmFtZSkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc09ic2VydmFibGUodikpXHJcbiAgICAgICAgdGhyb3cgXCJvYnNlcnZhYmxlLnN0cnVjdCBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCBvYnNlcnZhYmxlIHZhbHVlc1wiO1xyXG4gICAgaWYgKGRlZXBFcXVhbCh2LCBvbGRWYWx1ZSkpXHJcbiAgICAgICAgcmV0dXJuIG9sZFZhbHVlO1xyXG4gICAgcmV0dXJuIHY7XHJcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIoZW5oYW5jZXIpIHtcclxuICAgIGludmFyaWFudChlbmhhbmNlcik7XHJcbiAgICB2YXIgZGVjb3JhdG9yID0gY3JlYXRlUHJvcERlY29yYXRvcih0cnVlLCBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IsIF9kZWNvcmF0b3JUYXJnZXQsIGRlY29yYXRvckFyZ3MpIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGludmFyaWFudCghZGVzY3JpcHRvciB8fCAhZGVzY3JpcHRvci5nZXQsIFwiQG9ic2VydmFibGUgY2Fubm90IGJlIHVzZWQgb24gZ2V0dGVyIChwcm9wZXJ0eSBcXFwiXCIgKyBzdHJpbmdpZnlLZXkocHJvcGVydHlOYW1lKSArIFwiXFxcIiksIHVzZSBAY29tcHV0ZWQgaW5zdGVhZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbml0aWFsVmFsdWUgPSBkZXNjcmlwdG9yXHJcbiAgICAgICAgICAgID8gZGVzY3JpcHRvci5pbml0aWFsaXplclxyXG4gICAgICAgICAgICAgICAgPyBkZXNjcmlwdG9yLmluaXRpYWxpemVyLmNhbGwodGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgOiBkZXNjcmlwdG9yLnZhbHVlXHJcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIGFzT2JzZXJ2YWJsZU9iamVjdCh0YXJnZXQpLmFkZE9ic2VydmFibGVQcm9wKHByb3BlcnR5TmFtZSwgaW5pdGlhbFZhbHVlLCBlbmhhbmNlcik7XHJcbiAgICB9KTtcclxuICAgIHZhciByZXMgPSBcclxuICAgIC8vIEV4dHJhIHByb2Nlc3MgY2hlY2tzLCBhcyB0aGlzIGhhcHBlbnMgZHVyaW5nIG1vZHVsZSBpbml0aWFsaXphdGlvblxyXG4gICAgdHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgICAgPyBmdW5jdGlvbiBvYnNlcnZhYmxlRGVjb3JhdG9yKCkge1xyXG4gICAgICAgICAgICAvLyBUaGlzIHdyYXBwZXIgZnVuY3Rpb24gaXMganVzdCB0byBkZXRlY3QgaWxsZWdhbCBkZWNvcmF0b3IgaW52b2NhdGlvbnMsIGRlcHJlY2F0ZSBpbiBhIG5leHQgdmVyc2lvblxyXG4gICAgICAgICAgICAvLyBhbmQgc2ltcGx5IHJldHVybiB0aGUgY3JlYXRlZCBwcm9wIGRlY29yYXRvclxyXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFpbChcIkluY29ycmVjdCBkZWNvcmF0b3IgaW52b2NhdGlvbi4gQG9ic2VydmFibGUgZGVjb3JhdG9yIGRvZXNuJ3QgZXhwZWN0IGFueSBhcmd1bWVudHNcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWNvcmF0b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgOiBkZWNvcmF0b3I7XHJcbiAgICByZXMuZW5oYW5jZXIgPSBlbmhhbmNlcjtcclxuICAgIHJldHVybiByZXM7XHJcbn1cblxuLy8gUHJlZGVmaW5lZCBiYWdzIG9mIGNyZWF0ZSBvYnNlcnZhYmxlIG9wdGlvbnMsIHRvIGF2b2lkIGFsbG9jYXRpbmcgdGVtcG9yYXJpbHkgb3B0aW9uIG9iamVjdHNcclxuLy8gaW4gdGhlIG1ham9yaXR5IG9mIGNhc2VzXHJcbnZhciBkZWZhdWx0Q3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMgPSB7XHJcbiAgICBkZWVwOiB0cnVlLFxyXG4gICAgbmFtZTogdW5kZWZpbmVkLFxyXG4gICAgZGVmYXVsdERlY29yYXRvcjogdW5kZWZpbmVkLFxyXG4gICAgcHJveHk6IHRydWVcclxufTtcclxuT2JqZWN0LmZyZWV6ZShkZWZhdWx0Q3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMpO1xyXG5mdW5jdGlvbiBhc3NlcnRWYWxpZE9wdGlvbihrZXkpIHtcclxuICAgIGlmICghL14oZGVlcHxuYW1lfGVxdWFsc3xkZWZhdWx0RGVjb3JhdG9yfHByb3h5KSQvLnRlc3Qoa2V5KSlcclxuICAgICAgICBmYWlsKFwiaW52YWxpZCBvcHRpb24gZm9yIChleHRlbmQpb2JzZXJ2YWJsZTogXCIgKyBrZXkpO1xyXG59XHJcbmZ1bmN0aW9uIGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnModGhpbmcpIHtcclxuICAgIGlmICh0aGluZyA9PT0gbnVsbCB8fCB0aGluZyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHJldHVybiBkZWZhdWx0Q3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnM7XHJcbiAgICBpZiAodHlwZW9mIHRoaW5nID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB7IG5hbWU6IHRoaW5nLCBkZWVwOiB0cnVlLCBwcm94eTogdHJ1ZSB9O1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpbmcgIT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWlsKFwiZXhwZWN0ZWQgb3B0aW9ucyBvYmplY3RcIik7XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpbmcpLmZvckVhY2goYXNzZXJ0VmFsaWRPcHRpb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaW5nO1xyXG59XHJcbnZhciBkZWVwRGVjb3JhdG9yID0gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIoZGVlcEVuaGFuY2VyKTtcclxudmFyIHNoYWxsb3dEZWNvcmF0b3IgPSBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlcihzaGFsbG93RW5oYW5jZXIpO1xyXG52YXIgcmVmRGVjb3JhdG9yID0gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIocmVmZXJlbmNlRW5oYW5jZXIpO1xyXG52YXIgcmVmU3RydWN0RGVjb3JhdG9yID0gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIocmVmU3RydWN0RW5oYW5jZXIpO1xyXG5mdW5jdGlvbiBnZXRFbmhhbmNlckZyb21PcHRpb25zKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zLmRlZmF1bHREZWNvcmF0b3JcclxuICAgICAgICA/IG9wdGlvbnMuZGVmYXVsdERlY29yYXRvci5lbmhhbmNlclxyXG4gICAgICAgIDogb3B0aW9ucy5kZWVwID09PSBmYWxzZVxyXG4gICAgICAgICAgICA/IHJlZmVyZW5jZUVuaGFuY2VyXHJcbiAgICAgICAgICAgIDogZGVlcEVuaGFuY2VyO1xyXG59XHJcbi8qKlxyXG4gKiBUdXJucyBhbiBvYmplY3QsIGFycmF5IG9yIGZ1bmN0aW9uIGludG8gYSByZWFjdGl2ZSBzdHJ1Y3R1cmUuXHJcbiAqIEBwYXJhbSB2IHRoZSB2YWx1ZSB3aGljaCBzaG91bGQgYmVjb21lIG9ic2VydmFibGUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZhYmxlKHYsIGFyZzIsIGFyZzMpIHtcclxuICAgIC8vIEBvYnNlcnZhYmxlIHNvbWVQcm9wO1xyXG4gICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gZGVlcERlY29yYXRvci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gICAgLy8gaXQgaXMgYW4gb2JzZXJ2YWJsZSBhbHJlYWR5LCBkb25lXHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlKHYpKVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgLy8gc29tZXRoaW5nIHRoYXQgY2FuIGJlIGNvbnZlcnRlZCBhbmQgbXV0YXRlZD9cclxuICAgIHZhciByZXMgPSBpc1BsYWluT2JqZWN0KHYpXHJcbiAgICAgICAgPyBvYnNlcnZhYmxlLm9iamVjdCh2LCBhcmcyLCBhcmczKVxyXG4gICAgICAgIDogQXJyYXkuaXNBcnJheSh2KVxyXG4gICAgICAgICAgICA/IG9ic2VydmFibGUuYXJyYXkodiwgYXJnMilcclxuICAgICAgICAgICAgOiBpc0VTNk1hcCh2KVxyXG4gICAgICAgICAgICAgICAgPyBvYnNlcnZhYmxlLm1hcCh2LCBhcmcyKVxyXG4gICAgICAgICAgICAgICAgOiBpc0VTNlNldCh2KVxyXG4gICAgICAgICAgICAgICAgICAgID8gb2JzZXJ2YWJsZS5zZXQodiwgYXJnMilcclxuICAgICAgICAgICAgICAgICAgICA6IHY7XHJcbiAgICAvLyB0aGlzIHZhbHVlIGNvdWxkIGJlIGNvbnZlcnRlZCB0byBhIG5ldyBvYnNlcnZhYmxlIGRhdGEgc3RydWN0dXJlLCByZXR1cm4gaXRcclxuICAgIGlmIChyZXMgIT09IHYpXHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIC8vIG90aGVyd2lzZSwganVzdCBib3ggaXRcclxuICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgXCJUaGUgcHJvdmlkZWQgdmFsdWUgY291bGQgbm90IGJlIGNvbnZlcnRlZCBpbnRvIGFuIG9ic2VydmFibGUuIElmIHlvdSB3YW50IGp1c3QgY3JlYXRlIGFuIG9ic2VydmFibGUgcmVmZXJlbmNlIHRvIHRoZSBvYmplY3QgdXNlICdvYnNlcnZhYmxlLmJveCh2YWx1ZSknXCIpO1xyXG59XHJcbnZhciBvYnNlcnZhYmxlRmFjdG9yaWVzID0ge1xyXG4gICAgYm94OiBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpXHJcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwiYm94XCIpO1xyXG4gICAgICAgIHZhciBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGVWYWx1ZSh2YWx1ZSwgZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyhvKSwgby5uYW1lLCB0cnVlLCBvLmVxdWFscyk7XHJcbiAgICB9LFxyXG4gICAgYXJyYXk6IGZ1bmN0aW9uIChpbml0aWFsVmFsdWVzLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKVxyXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcImFycmF5XCIpO1xyXG4gICAgICAgIHZhciBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gY3JlYXRlT2JzZXJ2YWJsZUFycmF5KGluaXRpYWxWYWx1ZXMsIGdldEVuaGFuY2VyRnJvbU9wdGlvbnMobyksIG8ubmFtZSk7XHJcbiAgICB9LFxyXG4gICAgbWFwOiBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlcywgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcclxuICAgICAgICAgICAgaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IoXCJtYXBcIik7XHJcbiAgICAgICAgdmFyIG8gPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZU1hcChpbml0aWFsVmFsdWVzLCBnZXRFbmhhbmNlckZyb21PcHRpb25zKG8pLCBvLm5hbWUpO1xyXG4gICAgfSxcclxuICAgIHNldDogZnVuY3Rpb24gKGluaXRpYWxWYWx1ZXMsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpXHJcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwic2V0XCIpO1xyXG4gICAgICAgIHZhciBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGVTZXQoaW5pdGlhbFZhbHVlcywgZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyhvKSwgby5uYW1lKTtcclxuICAgIH0sXHJcbiAgICBvYmplY3Q6IGZ1bmN0aW9uIChwcm9wcywgZGVjb3JhdG9ycywgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcIm9iamVjdFwiKTtcclxuICAgICAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKG8ucHJveHkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbmRPYnNlcnZhYmxlKHt9LCBwcm9wcywgZGVjb3JhdG9ycywgbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgZGVmYXVsdERlY29yYXRvciA9IGdldERlZmF1bHREZWNvcmF0b3JGcm9tT2JqZWN0T3B0aW9ucyhvKTtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSBleHRlbmRPYnNlcnZhYmxlKHt9LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgbyk7XHJcbiAgICAgICAgICAgIHZhciBwcm94eSA9IGNyZWF0ZUR5bmFtaWNPYnNlcnZhYmxlT2JqZWN0KGJhc2UpO1xyXG4gICAgICAgICAgICBleHRlbmRPYnNlcnZhYmxlT2JqZWN0V2l0aFByb3BlcnRpZXMocHJveHksIHByb3BzLCBkZWNvcmF0b3JzLCBkZWZhdWx0RGVjb3JhdG9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWY6IHJlZkRlY29yYXRvcixcclxuICAgIHNoYWxsb3c6IHNoYWxsb3dEZWNvcmF0b3IsXHJcbiAgICBkZWVwOiBkZWVwRGVjb3JhdG9yLFxyXG4gICAgc3RydWN0OiByZWZTdHJ1Y3REZWNvcmF0b3JcclxufTtcclxudmFyIG9ic2VydmFibGUgPSBjcmVhdGVPYnNlcnZhYmxlO1xyXG4vLyB3ZWlyZCB0cmljayB0byBrZWVwIG91ciB0eXBpbmdzIG5pY2VseSB3aXRoIG91ciBmdW5jcywgYW5kIHN0aWxsIGV4dGVuZCB0aGUgb2JzZXJ2YWJsZSBmdW5jdGlvblxyXG5PYmplY3Qua2V5cyhvYnNlcnZhYmxlRmFjdG9yaWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiAob2JzZXJ2YWJsZVtuYW1lXSA9IG9ic2VydmFibGVGYWN0b3JpZXNbbmFtZV0pOyB9KTtcclxuZnVuY3Rpb24gaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IobWV0aG9kTmFtZSkge1xyXG4gICAgZmFpbChcclxuICAgIC8vIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgXCJFeHBlY3RlZCBvbmUgb3IgdHdvIGFyZ3VtZW50cyB0byBvYnNlcnZhYmxlLlwiICsgbWV0aG9kTmFtZSArIFwiLiBEaWQgeW91IGFjY2lkZW50YWxseSB0cnkgdG8gdXNlIG9ic2VydmFibGUuXCIgKyBtZXRob2ROYW1lICsgXCIgYXMgZGVjb3JhdG9yP1wiKTtcclxufVxuXG52YXIgY29tcHV0ZWREZWNvcmF0b3IgPSBjcmVhdGVQcm9wRGVjb3JhdG9yKGZhbHNlLCBmdW5jdGlvbiAoaW5zdGFuY2UsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvciwgZGVjb3JhdG9yVGFyZ2V0LCBkZWNvcmF0b3JBcmdzKSB7XHJcbiAgICB2YXIgZ2V0ID0gZGVzY3JpcHRvci5nZXQsIHNldCA9IGRlc2NyaXB0b3Iuc2V0OyAvLyBpbml0aWFsVmFsdWUgaXMgdGhlIGRlc2NyaXB0b3IgZm9yIGdldCAvIHNldCBwcm9wc1xyXG4gICAgLy8gT3B0aW1pemF0aW9uOiBmYXN0ZXIgb24gZGVjb3JhdG9yIHRhcmdldCBvciBpbnN0YW5jZT8gQXNzdW1pbmcgdGFyZ2V0XHJcbiAgICAvLyBPcHRpbWl6YXRpb246IGZpbmQgb3V0IGlmIGRlY2xhcmluZyBvbiBpbnN0YW5jZSBpc24ndCBqdXN0IGZhc3Rlci4gKGFsc28gbWFrZXMgdGhlIHByb3BlcnR5IGRlc2NyaXB0b3Igc2ltcGxlcikuIEJ1dCwgbW9yZSBtZW1vcnkgdXNhZ2UuLlxyXG4gICAgLy8gRm9yY2luZyBpbnN0YW5jZSBub3csIGZpeGVzIGhvdCByZWxvYWRpZyBpc3N1ZXMgb24gUmVhY3QgTmF0aXZlOlxyXG4gICAgdmFyIG9wdGlvbnMgPSBkZWNvcmF0b3JBcmdzWzBdIHx8IHt9O1xyXG4gICAgYXNPYnNlcnZhYmxlT2JqZWN0KGluc3RhbmNlKS5hZGRDb21wdXRlZFByb3AoaW5zdGFuY2UsIHByb3BlcnR5TmFtZSwgX19hc3NpZ24oeyBnZXQ6IGdldCxcclxuICAgICAgICBzZXQ6IHNldCwgY29udGV4dDogaW5zdGFuY2UgfSwgb3B0aW9ucykpO1xyXG59KTtcclxudmFyIGNvbXB1dGVkU3RydWN0RGVjb3JhdG9yID0gY29tcHV0ZWREZWNvcmF0b3IoeyBlcXVhbHM6IGNvbXBhcmVyLnN0cnVjdHVyYWwgfSk7XHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZm9yIGNsYXNzIHByb3BlcnRpZXM6IEBjb21wdXRlZCBnZXQgdmFsdWUoKSB7IHJldHVybiBleHByOyB9LlxyXG4gKiBGb3IgbGVnYWN5IHB1cnBvc2VzIGFsc28gaW52b2thYmxlIGFzIEVTNSBvYnNlcnZhYmxlIGNyZWF0ZWQ6IGBjb21wdXRlZCgoKSA9PiBleHByKWA7XHJcbiAqL1xyXG52YXIgY29tcHV0ZWQgPSBmdW5jdGlvbiBjb21wdXRlZChhcmcxLCBhcmcyLCBhcmczKSB7XHJcbiAgICBpZiAodHlwZW9mIGFyZzIgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAvLyBAY29tcHV0ZWRcclxuICAgICAgICByZXR1cm4gY29tcHV0ZWREZWNvcmF0b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIGlmIChhcmcxICE9PSBudWxsICYmIHR5cGVvZiBhcmcxID09PSBcIm9iamVjdFwiICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAvLyBAY29tcHV0ZWQoeyBvcHRpb25zIH0pXHJcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVkRGVjb3JhdG9yLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgICAvLyBjb21wdXRlZChleHByLCBvcHRpb25zPylcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICBpbnZhcmlhbnQodHlwZW9mIGFyZzEgPT09IFwiZnVuY3Rpb25cIiwgXCJGaXJzdCBhcmd1bWVudCB0byBgY29tcHV0ZWRgIHNob3VsZCBiZSBhbiBleHByZXNzaW9uLlwiKTtcclxuICAgICAgICBpbnZhcmlhbnQoYXJndW1lbnRzLmxlbmd0aCA8IDMsIFwiQ29tcHV0ZWQgdGFrZXMgb25lIG9yIHR3byBhcmd1bWVudHMgaWYgdXNlZCBhcyBmdW5jdGlvblwiKTtcclxuICAgIH1cclxuICAgIHZhciBvcHRzID0gdHlwZW9mIGFyZzIgPT09IFwib2JqZWN0XCIgPyBhcmcyIDoge307XHJcbiAgICBvcHRzLmdldCA9IGFyZzE7XHJcbiAgICBvcHRzLnNldCA9IHR5cGVvZiBhcmcyID09PSBcImZ1bmN0aW9uXCIgPyBhcmcyIDogb3B0cy5zZXQ7XHJcbiAgICBvcHRzLm5hbWUgPSBvcHRzLm5hbWUgfHwgYXJnMS5uYW1lIHx8IFwiXCI7IC8qIGZvciBnZW5lcmF0ZWQgbmFtZSAqL1xyXG4gICAgcmV0dXJuIG5ldyBDb21wdXRlZFZhbHVlKG9wdHMpO1xyXG59O1xyXG5jb21wdXRlZC5zdHJ1Y3QgPSBjb21wdXRlZFN0cnVjdERlY29yYXRvcjtcblxudmFyIElEZXJpdmF0aW9uU3RhdGU7XHJcbihmdW5jdGlvbiAoSURlcml2YXRpb25TdGF0ZSkge1xyXG4gICAgLy8gYmVmb3JlIGJlaW5nIHJ1biBvciAob3V0c2lkZSBiYXRjaCBhbmQgbm90IGJlaW5nIG9ic2VydmVkKVxyXG4gICAgLy8gYXQgdGhpcyBwb2ludCBkZXJpdmF0aW9uIGlzIG5vdCBob2xkaW5nIGFueSBkYXRhIGFib3V0IGRlcGVuZGVuY3kgdHJlZVxyXG4gICAgSURlcml2YXRpb25TdGF0ZVtJRGVyaXZhdGlvblN0YXRlW1wiTk9UX1RSQUNLSU5HXCJdID0gLTFdID0gXCJOT1RfVFJBQ0tJTkdcIjtcclxuICAgIC8vIG5vIHNoYWxsb3cgZGVwZW5kZW5jeSBjaGFuZ2VkIHNpbmNlIGxhc3QgY29tcHV0YXRpb25cclxuICAgIC8vIHdvbid0IHJlY2FsY3VsYXRlIGRlcml2YXRpb25cclxuICAgIC8vIHRoaXMgaXMgd2hhdCBtYWtlcyBtb2J4IGZhc3RcclxuICAgIElEZXJpdmF0aW9uU3RhdGVbSURlcml2YXRpb25TdGF0ZVtcIlVQX1RPX0RBVEVcIl0gPSAwXSA9IFwiVVBfVE9fREFURVwiO1xyXG4gICAgLy8gc29tZSBkZWVwIGRlcGVuZGVuY3kgY2hhbmdlZCwgYnV0IGRvbid0IGtub3cgaWYgc2hhbGxvdyBkZXBlbmRlbmN5IGNoYW5nZWRcclxuICAgIC8vIHdpbGwgcmVxdWlyZSB0byBjaGVjayBmaXJzdCBpZiBVUF9UT19EQVRFIG9yIFBPU1NJQkxZX1NUQUxFXHJcbiAgICAvLyBjdXJyZW50bHkgb25seSBDb21wdXRlZFZhbHVlIHdpbGwgcHJvcGFnYXRlIFBPU1NJQkxZX1NUQUxFXHJcbiAgICAvL1xyXG4gICAgLy8gaGF2aW5nIHRoaXMgc3RhdGUgaXMgc2Vjb25kIGJpZyBvcHRpbWl6YXRpb246XHJcbiAgICAvLyBkb24ndCBoYXZlIHRvIHJlY29tcHV0ZSBvbiBldmVyeSBkZXBlbmRlbmN5IGNoYW5nZSwgYnV0IG9ubHkgd2hlbiBpdCdzIG5lZWRlZFxyXG4gICAgSURlcml2YXRpb25TdGF0ZVtJRGVyaXZhdGlvblN0YXRlW1wiUE9TU0lCTFlfU1RBTEVcIl0gPSAxXSA9IFwiUE9TU0lCTFlfU1RBTEVcIjtcclxuICAgIC8vIEEgc2hhbGxvdyBkZXBlbmRlbmN5IGhhcyBjaGFuZ2VkIHNpbmNlIGxhc3QgY29tcHV0YXRpb24gYW5kIHRoZSBkZXJpdmF0aW9uXHJcbiAgICAvLyB3aWxsIG5lZWQgdG8gcmVjb21wdXRlIHdoZW4gaXQncyBuZWVkZWQgbmV4dC5cclxuICAgIElEZXJpdmF0aW9uU3RhdGVbSURlcml2YXRpb25TdGF0ZVtcIlNUQUxFXCJdID0gMl0gPSBcIlNUQUxFXCI7XHJcbn0pKElEZXJpdmF0aW9uU3RhdGUgfHwgKElEZXJpdmF0aW9uU3RhdGUgPSB7fSkpO1xyXG52YXIgVHJhY2VNb2RlO1xyXG4oZnVuY3Rpb24gKFRyYWNlTW9kZSkge1xyXG4gICAgVHJhY2VNb2RlW1RyYWNlTW9kZVtcIk5PTkVcIl0gPSAwXSA9IFwiTk9ORVwiO1xyXG4gICAgVHJhY2VNb2RlW1RyYWNlTW9kZVtcIkxPR1wiXSA9IDFdID0gXCJMT0dcIjtcclxuICAgIFRyYWNlTW9kZVtUcmFjZU1vZGVbXCJCUkVBS1wiXSA9IDJdID0gXCJCUkVBS1wiO1xyXG59KShUcmFjZU1vZGUgfHwgKFRyYWNlTW9kZSA9IHt9KSk7XHJcbnZhciBDYXVnaHRFeGNlcHRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYXVnaHRFeGNlcHRpb24oY2F1c2UpIHtcclxuICAgICAgICB0aGlzLmNhdXNlID0gY2F1c2U7XHJcbiAgICAgICAgLy8gRW1wdHlcclxuICAgIH1cclxuICAgIHJldHVybiBDYXVnaHRFeGNlcHRpb247XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIGlzQ2F1Z2h0RXhjZXB0aW9uKGUpIHtcclxuICAgIHJldHVybiBlIGluc3RhbmNlb2YgQ2F1Z2h0RXhjZXB0aW9uO1xyXG59XHJcbi8qKlxyXG4gKiBGaW5kcyBvdXQgd2hldGhlciBhbnkgZGVwZW5kZW5jeSBvZiB0aGUgZGVyaXZhdGlvbiBoYXMgYWN0dWFsbHkgY2hhbmdlZC5cclxuICogSWYgZGVwZW5kZW5jaWVzU3RhdGUgaXMgMSB0aGVuIGl0IHdpbGwgcmVjYWxjdWxhdGUgZGVwZW5kZW5jaWVzLFxyXG4gKiBpZiBhbnkgZGVwZW5kZW5jeSBjaGFuZ2VkIGl0IHdpbGwgcHJvcGFnYXRlIGl0IGJ5IGNoYW5naW5nIGRlcGVuZGVuY2llc1N0YXRlIHRvIDIuXHJcbiAqXHJcbiAqIEJ5IGl0ZXJhdGluZyBvdmVyIHRoZSBkZXBlbmRlbmNpZXMgaW4gdGhlIHNhbWUgb3JkZXIgdGhhdCB0aGV5IHdlcmUgcmVwb3J0ZWQgYW5kXHJcbiAqIHN0b3BwaW5nIG9uIHRoZSBmaXJzdCBjaGFuZ2UsIGFsbCB0aGUgcmVjYWxjdWxhdGlvbnMgYXJlIG9ubHkgY2FsbGVkIGZvciBDb21wdXRlZFZhbHVlc1xyXG4gKiB0aGF0IHdpbGwgYmUgdHJhY2tlZCBieSBkZXJpdmF0aW9uLiBUaGF0IGlzIGJlY2F1c2Ugd2UgYXNzdW1lIHRoYXQgaWYgdGhlIGZpcnN0IHhcclxuICogZGVwZW5kZW5jaWVzIG9mIHRoZSBkZXJpdmF0aW9uIGRvZXNuJ3QgY2hhbmdlIHRoZW4gdGhlIGRlcml2YXRpb24gc2hvdWxkIHJ1biB0aGUgc2FtZSB3YXlcclxuICogdXAgdW50aWwgYWNjZXNzaW5nIHgtdGggZGVwZW5kZW5jeS5cclxuICovXHJcbmZ1bmN0aW9uIHNob3VsZENvbXB1dGUoZGVyaXZhdGlvbikge1xyXG4gICAgc3dpdGNoIChkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlKSB7XHJcbiAgICAgICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEU6XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBjYXNlIElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HOlxyXG4gICAgICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZS5TVEFMRTpcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlLlBPU1NJQkxZX1NUQUxFOiB7XHJcbiAgICAgICAgICAgIHZhciBwcmV2VW50cmFja2VkID0gdW50cmFja2VkU3RhcnQoKTsgLy8gbm8gbmVlZCBmb3IgdGhvc2UgY29tcHV0ZWRzIHRvIGJlIHJlcG9ydGVkLCB0aGV5IHdpbGwgYmUgcGlja2VkIHVwIGluIHRyYWNrRGVyaXZlZEZ1bmN0aW9uLlxyXG4gICAgICAgICAgICB2YXIgb2JzID0gZGVyaXZhdGlvbi5vYnNlcnZpbmcsIGwgPSBvYnMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IG9ic1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0NvbXB1dGVkVmFsdWUob2JqKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnbG9iYWxTdGF0ZS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5nZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouZ2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGFyZSBub3QgaW50ZXJlc3RlZCBpbiB0aGUgdmFsdWUgKm9yKiBleGNlcHRpb24gYXQgdGhpcyBtb21lbnQsIGJ1dCBpZiB0aGVyZSBpcyBvbmUsIG5vdGlmeSBhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVudHJhY2tlZEVuZChwcmV2VW50cmFja2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIENvbXB1dGVkVmFsdWUgYG9iamAgYWN0dWFsbHkgY2hhbmdlZCBpdCB3aWxsIGJlIGNvbXB1dGVkIGFuZCBwcm9wYWdhdGVkIHRvIGl0cyBvYnNlcnZlcnMuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGBkZXJpdmF0aW9uYCBpcyBhbiBvYnNlcnZlciBvZiBgb2JqYFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludmFyaWFudFNob3VsZENvbXB1dGUoZGVyaXZhdGlvbilcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5TVEFMRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bnRyYWNrZWRFbmQocHJldlVudHJhY2tlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaGFuZ2VEZXBlbmRlbmNpZXNTdGF0ZVRvMChkZXJpdmF0aW9uKTtcclxuICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVbnRyYWNrZWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIGZ1bmN0aW9uIGludmFyaWFudFNob3VsZENvbXB1dGUoZGVyaXZhdGlvbjogSURlcml2YXRpb24pIHtcclxuLy8gICAgIGNvbnN0IG5ld0RlcFN0YXRlID0gKGRlcml2YXRpb24gYXMgYW55KS5kZXBlbmRlbmNpZXNTdGF0ZVxyXG4vLyAgICAgaWYgKFxyXG4vLyAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4vLyAgICAgICAgIChuZXdEZXBTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5QT1NTSUJMWV9TVEFMRSB8fFxyXG4vLyAgICAgICAgICAgICBuZXdEZXBTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkcpXHJcbi8vICAgICApXHJcbi8vICAgICAgICAgZmFpbChcIklsbGVnYWwgZGVwZW5kZW5jeSBzdGF0ZVwiKVxyXG4vLyB9XHJcbmZ1bmN0aW9uIGlzQ29tcHV0aW5nRGVyaXZhdGlvbigpIHtcclxuICAgIHJldHVybiBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gIT09IG51bGw7IC8vIGZpbHRlciBvdXQgYWN0aW9ucyBpbnNpZGUgY29tcHV0YXRpb25zXHJcbn1cclxuZnVuY3Rpb24gY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQoYXRvbSkge1xyXG4gICAgdmFyIGhhc09ic2VydmVycyA9IGF0b20ub2JzZXJ2ZXJzLnNpemUgPiAwO1xyXG4gICAgLy8gU2hvdWxkIG5ldmVyIGJlIHBvc3NpYmxlIHRvIGNoYW5nZSBhbiBvYnNlcnZlZCBvYnNlcnZhYmxlIGZyb20gaW5zaWRlIGNvbXB1dGVkLCBzZWUgIzc5OFxyXG4gICAgaWYgKGdsb2JhbFN0YXRlLmNvbXB1dGF0aW9uRGVwdGggPiAwICYmIGhhc09ic2VydmVycylcclxuICAgICAgICBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICBcIkNvbXB1dGVkIHZhbHVlcyBhcmUgbm90IGFsbG93ZWQgdG8gY2F1c2Ugc2lkZSBlZmZlY3RzIGJ5IGNoYW5naW5nIG9ic2VydmFibGVzIHRoYXQgYXJlIGFscmVhZHkgYmVpbmcgb2JzZXJ2ZWQuIFRyaWVkIHRvIG1vZGlmeTogXCIgKyBhdG9tLm5hbWUpO1xyXG4gICAgLy8gU2hvdWxkIG5vdCBiZSBwb3NzaWJsZSB0byBjaGFuZ2Ugb2JzZXJ2ZWQgc3RhdGUgb3V0c2lkZSBzdHJpY3QgbW9kZSwgZXhjZXB0IGR1cmluZyBpbml0aWFsaXphdGlvbiwgc2VlICM1NjNcclxuICAgIGlmICghZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgJiYgKGhhc09ic2VydmVycyB8fCBnbG9iYWxTdGF0ZS5lbmZvcmNlQWN0aW9ucyA9PT0gXCJzdHJpY3RcIikpXHJcbiAgICAgICAgZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgKGdsb2JhbFN0YXRlLmVuZm9yY2VBY3Rpb25zXHJcbiAgICAgICAgICAgICAgICA/IFwiU2luY2Ugc3RyaWN0LW1vZGUgaXMgZW5hYmxlZCwgY2hhbmdpbmcgb2JzZXJ2ZWQgb2JzZXJ2YWJsZSB2YWx1ZXMgb3V0c2lkZSBhY3Rpb25zIGlzIG5vdCBhbGxvd2VkLiBQbGVhc2Ugd3JhcCB0aGUgY29kZSBpbiBhbiBgYWN0aW9uYCBpZiB0aGlzIGNoYW5nZSBpcyBpbnRlbmRlZC4gVHJpZWQgdG8gbW9kaWZ5OiBcIlxyXG4gICAgICAgICAgICAgICAgOiBcIlNpZGUgZWZmZWN0cyBsaWtlIGNoYW5naW5nIHN0YXRlIGFyZSBub3QgYWxsb3dlZCBhdCB0aGlzIHBvaW50LiBBcmUgeW91IHRyeWluZyB0byBtb2RpZnkgc3RhdGUgZnJvbSwgZm9yIGV4YW1wbGUsIHRoZSByZW5kZXIgZnVuY3Rpb24gb2YgYSBSZWFjdCBjb21wb25lbnQ/IFRyaWVkIHRvIG1vZGlmeTogXCIpICtcclxuICAgICAgICAgICAgICAgIGF0b20ubmFtZSk7XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tJZlN0YXRlUmVhZHNBcmVBbGxvd2VkKG9ic2VydmFibGUpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAhZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZVJlYWRzICYmXHJcbiAgICAgICAgZ2xvYmFsU3RhdGUub2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb24pIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gT2JzZXJ2YWJsZSBcIiArIG9ic2VydmFibGUubmFtZSArIFwiIGJlaW5nIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHRcIik7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBgZmAgYW5kIHRyYWNrcyB3aGljaCBvYnNlcnZhYmxlcyBhcmUgYmVpbmcgYWNjZXNzZWQuXHJcbiAqIFRoZSB0cmFja2luZyBpbmZvcm1hdGlvbiBpcyBzdG9yZWQgb24gdGhlIGBkZXJpdmF0aW9uYCBvYmplY3QgYW5kIHRoZSBkZXJpdmF0aW9uIGlzIHJlZ2lzdGVyZWRcclxuICogYXMgb2JzZXJ2ZXIgb2YgYW55IG9mIHRoZSBhY2Nlc3NlZCBvYnNlcnZhYmxlcy5cclxuICovXHJcbmZ1bmN0aW9uIHRyYWNrRGVyaXZlZEZ1bmN0aW9uKGRlcml2YXRpb24sIGYsIGNvbnRleHQpIHtcclxuICAgIHZhciBwcmV2QWxsb3dTdGF0ZVJlYWRzID0gYWxsb3dTdGF0ZVJlYWRzU3RhcnQodHJ1ZSk7XHJcbiAgICAvLyBwcmUgYWxsb2NhdGUgYXJyYXkgYWxsb2NhdGlvbiArIHJvb20gZm9yIHZhcmlhdGlvbiBpbiBkZXBzXHJcbiAgICAvLyBhcnJheSB3aWxsIGJlIHRyaW1tZWQgYnkgYmluZERlcGVuZGVuY2llc1xyXG4gICAgY2hhbmdlRGVwZW5kZW5jaWVzU3RhdGVUbzAoZGVyaXZhdGlvbik7XHJcbiAgICBkZXJpdmF0aW9uLm5ld09ic2VydmluZyA9IG5ldyBBcnJheShkZXJpdmF0aW9uLm9ic2VydmluZy5sZW5ndGggKyAxMDApO1xyXG4gICAgZGVyaXZhdGlvbi51bmJvdW5kRGVwc0NvdW50ID0gMDtcclxuICAgIGRlcml2YXRpb24ucnVuSWQgPSArK2dsb2JhbFN0YXRlLnJ1bklkO1xyXG4gICAgdmFyIHByZXZUcmFja2luZyA9IGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbjtcclxuICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbiA9IGRlcml2YXRpb247XHJcbiAgICB2YXIgcmVzdWx0O1xyXG4gICAgaWYgKGdsb2JhbFN0YXRlLmRpc2FibGVFcnJvckJvdW5kYXJpZXMgPT09IHRydWUpIHtcclxuICAgICAgICByZXN1bHQgPSBmLmNhbGwoY29udGV4dCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBmLmNhbGwoY29udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBDYXVnaHRFeGNlcHRpb24oZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID0gcHJldlRyYWNraW5nO1xyXG4gICAgYmluZERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKTtcclxuICAgIHdhcm5BYm91dERlcml2YXRpb25XaXRob3V0RGVwZW5kZW5jaWVzKGRlcml2YXRpb24pO1xyXG4gICAgYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZBbGxvd1N0YXRlUmVhZHMpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiB3YXJuQWJvdXREZXJpdmF0aW9uV2l0aG91dERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGlmIChkZXJpdmF0aW9uLm9ic2VydmluZy5sZW5ndGggIT09IDApXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgaWYgKGdsb2JhbFN0YXRlLnJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlIHx8IGRlcml2YXRpb24ucmVxdWlyZXNPYnNlcnZhYmxlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnhdIERlcml2YXRpb24gXCIgKyBkZXJpdmF0aW9uLm5hbWUgKyBcIiBpcyBjcmVhdGVkL3VwZGF0ZWQgd2l0aG91dCByZWFkaW5nIGFueSBvYnNlcnZhYmxlIHZhbHVlXCIpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBkaWZmcyBuZXdPYnNlcnZpbmcgd2l0aCBvYnNlcnZpbmcuXHJcbiAqIHVwZGF0ZSBvYnNlcnZpbmcgdG8gYmUgbmV3T2JzZXJ2aW5nIHdpdGggdW5pcXVlIG9ic2VydmFibGVzXHJcbiAqIG5vdGlmeSBvYnNlcnZlcnMgdGhhdCBiZWNvbWUgb2JzZXJ2ZWQvdW5vYnNlcnZlZFxyXG4gKi9cclxuZnVuY3Rpb24gYmluZERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKSB7XHJcbiAgICAvLyBpbnZhcmlhbnQoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkcsIFwiSU5URVJOQUwgRVJST1IgYmluZERlcGVuZGVuY2llcyBleHBlY3RzIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgIT09IC0xXCIpO1xyXG4gICAgdmFyIHByZXZPYnNlcnZpbmcgPSBkZXJpdmF0aW9uLm9ic2VydmluZztcclxuICAgIHZhciBvYnNlcnZpbmcgPSAoZGVyaXZhdGlvbi5vYnNlcnZpbmcgPSBkZXJpdmF0aW9uLm5ld09ic2VydmluZyk7XHJcbiAgICB2YXIgbG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xyXG4gICAgLy8gR28gdGhyb3VnaCBhbGwgbmV3IG9ic2VydmFibGVzIGFuZCBjaGVjayBkaWZmVmFsdWU6ICh0aGlzIGxpc3QgY2FuIGNvbnRhaW4gZHVwbGljYXRlcyk6XHJcbiAgICAvLyAgIDA6IGZpcnN0IG9jY3VycmVuY2UsIGNoYW5nZSB0byAxIGFuZCBrZWVwIGl0XHJcbiAgICAvLyAgIDE6IGV4dHJhIG9jY3VycmVuY2UsIGRyb3AgaXRcclxuICAgIHZhciBpMCA9IDAsIGwgPSBkZXJpdmF0aW9uLnVuYm91bmREZXBzQ291bnQ7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIHZhciBkZXAgPSBvYnNlcnZpbmdbaV07XHJcbiAgICAgICAgaWYgKGRlcC5kaWZmVmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgZGVwLmRpZmZWYWx1ZSA9IDE7XHJcbiAgICAgICAgICAgIGlmIChpMCAhPT0gaSlcclxuICAgICAgICAgICAgICAgIG9ic2VydmluZ1tpMF0gPSBkZXA7XHJcbiAgICAgICAgICAgIGkwKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFVwY2FzdCBpcyAnc2FmZScgaGVyZSwgYmVjYXVzZSBpZiBkZXAgaXMgSU9ic2VydmFibGUsIGBkZXBlbmRlbmNpZXNTdGF0ZWAgd2lsbCBiZSB1bmRlZmluZWQsXHJcbiAgICAgICAgLy8gbm90IGhpdHRpbmcgdGhlIGNvbmRpdGlvblxyXG4gICAgICAgIGlmIChkZXAuZGVwZW5kZW5jaWVzU3RhdGUgPiBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUpIHtcclxuICAgICAgICAgICAgbG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlID0gZGVwLmRlcGVuZGVuY2llc1N0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9ic2VydmluZy5sZW5ndGggPSBpMDtcclxuICAgIGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nID0gbnVsbDsgLy8gbmV3T2JzZXJ2aW5nIHNob3VsZG4ndCBiZSBuZWVkZWQgb3V0c2lkZSB0cmFja2luZyAoc3RhdGVtZW50IG1vdmVkIGRvd24gdG8gd29yayBhcm91bmQgRkYgYnVnLCBzZWUgIzYxNClcclxuICAgIC8vIEdvIHRocm91Z2ggYWxsIG9sZCBvYnNlcnZhYmxlcyBhbmQgY2hlY2sgZGlmZlZhbHVlOiAoaXQgaXMgdW5pcXVlIGFmdGVyIGxhc3QgYmluZERlcGVuZGVuY2llcylcclxuICAgIC8vICAgMDogaXQncyBub3QgaW4gbmV3IG9ic2VydmFibGVzLCB1bm9ic2VydmUgaXRcclxuICAgIC8vICAgMTogaXQga2VlcHMgYmVpbmcgb2JzZXJ2ZWQsIGRvbid0IHdhbnQgdG8gbm90aWZ5IGl0LiBjaGFuZ2UgdG8gMFxyXG4gICAgbCA9IHByZXZPYnNlcnZpbmcubGVuZ3RoO1xyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHZhciBkZXAgPSBwcmV2T2JzZXJ2aW5nW2xdO1xyXG4gICAgICAgIGlmIChkZXAuZGlmZlZhbHVlID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZU9ic2VydmVyKGRlcCwgZGVyaXZhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlcC5kaWZmVmFsdWUgPSAwO1xyXG4gICAgfVxyXG4gICAgLy8gR28gdGhyb3VnaCBhbGwgbmV3IG9ic2VydmFibGVzIGFuZCBjaGVjayBkaWZmVmFsdWU6IChub3cgaXQgc2hvdWxkIGJlIHVuaXF1ZSlcclxuICAgIC8vICAgMDogaXQgd2FzIHNldCB0byAwIGluIGxhc3QgbG9vcC4gZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZy5cclxuICAgIC8vICAgMTogaXQgd2Fzbid0IG9ic2VydmVkLCBsZXQncyBvYnNlcnZlIGl0LiBzZXQgYmFjayB0byAwXHJcbiAgICB3aGlsZSAoaTAtLSkge1xyXG4gICAgICAgIHZhciBkZXAgPSBvYnNlcnZpbmdbaTBdO1xyXG4gICAgICAgIGlmIChkZXAuZGlmZlZhbHVlID09PSAxKSB7XHJcbiAgICAgICAgICAgIGRlcC5kaWZmVmFsdWUgPSAwO1xyXG4gICAgICAgICAgICBhZGRPYnNlcnZlcihkZXAsIGRlcml2YXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFNvbWUgbmV3IG9ic2VydmVkIGRlcml2YXRpb25zIG1heSBiZWNvbWUgc3RhbGUgZHVyaW5nIHRoaXMgZGVyaXZhdGlvbiBjb21wdXRhdGlvblxyXG4gICAgLy8gc28gdGhleSBoYXZlIGhhZCBubyBjaGFuY2UgdG8gcHJvcGFnYXRlIHN0YWxlbmVzcyAoIzkxNilcclxuICAgIGlmIChsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUgIT09IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURSkge1xyXG4gICAgICAgIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgPSBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGU7XHJcbiAgICAgICAgZGVyaXZhdGlvbi5vbkJlY29tZVN0YWxlKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJPYnNlcnZpbmcoZGVyaXZhdGlvbikge1xyXG4gICAgLy8gaW52YXJpYW50KGdsb2JhbFN0YXRlLmluQmF0Y2ggPiAwLCBcIklOVEVSTkFMIEVSUk9SIGNsZWFyT2JzZXJ2aW5nIHNob3VsZCBiZSBjYWxsZWQgb25seSBpbnNpZGUgYmF0Y2hcIik7XHJcbiAgICB2YXIgb2JzID0gZGVyaXZhdGlvbi5vYnNlcnZpbmc7XHJcbiAgICBkZXJpdmF0aW9uLm9ic2VydmluZyA9IFtdO1xyXG4gICAgdmFyIGkgPSBvYnMubGVuZ3RoO1xyXG4gICAgd2hpbGUgKGktLSlcclxuICAgICAgICByZW1vdmVPYnNlcnZlcihvYnNbaV0sIGRlcml2YXRpb24pO1xyXG4gICAgZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HO1xyXG59XHJcbmZ1bmN0aW9uIHVudHJhY2tlZChhY3Rpb24pIHtcclxuICAgIHZhciBwcmV2ID0gdW50cmFja2VkU3RhcnQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdW50cmFja2VkRW5kKHByZXYpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHVudHJhY2tlZFN0YXJ0KCkge1xyXG4gICAgdmFyIHByZXYgPSBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb247XHJcbiAgICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBudWxsO1xyXG4gICAgcmV0dXJuIHByZXY7XHJcbn1cclxuZnVuY3Rpb24gdW50cmFja2VkRW5kKHByZXYpIHtcclxuICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbiA9IHByZXY7XHJcbn1cclxuZnVuY3Rpb24gYWxsb3dTdGF0ZVJlYWRzU3RhcnQoYWxsb3dTdGF0ZVJlYWRzKSB7XHJcbiAgICB2YXIgcHJldiA9IGdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcztcclxuICAgIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcyA9IGFsbG93U3RhdGVSZWFkcztcclxuICAgIHJldHVybiBwcmV2O1xyXG59XHJcbmZ1bmN0aW9uIGFsbG93U3RhdGVSZWFkc0VuZChwcmV2KSB7XHJcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHMgPSBwcmV2O1xyXG59XHJcbi8qKlxyXG4gKiBuZWVkZWQgdG8ga2VlcCBgbG93ZXN0T2JzZXJ2ZXJTdGF0ZWAgY29ycmVjdC4gd2hlbiBjaGFuZ2luZyBmcm9tICgyIG9yIDEpIHRvIDBcclxuICpcclxuICovXHJcbmZ1bmN0aW9uIGNoYW5nZURlcGVuZGVuY2llc1N0YXRlVG8wKGRlcml2YXRpb24pIHtcclxuICAgIGlmIChkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURTtcclxuICAgIHZhciBvYnMgPSBkZXJpdmF0aW9uLm9ic2VydmluZztcclxuICAgIHZhciBpID0gb2JzLmxlbmd0aDtcclxuICAgIHdoaWxlIChpLS0pXHJcbiAgICAgICAgb2JzW2ldLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEU7XHJcbn1cblxuLy8gd2UgZG9uJ3QgdXNlIGdsb2JhbFN0YXRlIGZvciB0aGVzZSBpbiBvcmRlciB0byBhdm9pZCBwb3NzaWJsZSBpc3N1ZXMgd2l0aCBtdWx0aXBsZVxyXG4vLyBtb2J4IHZlcnNpb25zXHJcbnZhciBjdXJyZW50QWN0aW9uSWQgPSAwO1xyXG52YXIgbmV4dEFjdGlvbklkID0gMTtcclxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uKGFjdGlvbk5hbWUsIGZuLCByZWYpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICBpbnZhcmlhbnQodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIsIFwiYGFjdGlvbmAgY2FuIG9ubHkgYmUgaW52b2tlZCBvbiBmdW5jdGlvbnNcIik7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb25OYW1lICE9PSBcInN0cmluZ1wiIHx8ICFhY3Rpb25OYW1lKVxyXG4gICAgICAgICAgICBmYWlsKFwiYWN0aW9ucyBzaG91bGQgaGF2ZSB2YWxpZCBuYW1lcywgZ290OiAnXCIgKyBhY3Rpb25OYW1lICsgXCInXCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZXhlY3V0ZUFjdGlvbihhY3Rpb25OYW1lLCBmbiwgcmVmIHx8IHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG4gICAgcmVzLmlzTW9ieEFjdGlvbiA9IHRydWU7XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbmZ1bmN0aW9uIGV4ZWN1dGVBY3Rpb24oYWN0aW9uTmFtZSwgZm4sIHNjb3BlLCBhcmdzKSB7XHJcbiAgICB2YXIgcnVuSW5mbyA9IF9zdGFydEFjdGlvbihhY3Rpb25OYW1lLCBzY29wZSwgYXJncyk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBmbi5hcHBseShzY29wZSwgYXJncyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcnVuSW5mby5lcnJvciA9IGVycjtcclxuICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICBfZW5kQWN0aW9uKHJ1bkluZm8pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIF9zdGFydEFjdGlvbihhY3Rpb25OYW1lLCBzY29wZSwgYXJncykge1xyXG4gICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpICYmICEhYWN0aW9uTmFtZTtcclxuICAgIHZhciBzdGFydFRpbWUgPSAwO1xyXG4gICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHZhciBsID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpIHx8IDA7XHJcbiAgICAgICAgdmFyIGZsYXR0ZW5kQXJncyA9IG5ldyBBcnJheShsKTtcclxuICAgICAgICBpZiAobCA+IDApXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgZmxhdHRlbmRBcmdzW2ldID0gYXJnc1tpXTtcclxuICAgICAgICBzcHlSZXBvcnRTdGFydCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiYWN0aW9uXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IGFjdGlvbk5hbWUsXHJcbiAgICAgICAgICAgIG9iamVjdDogc2NvcGUsXHJcbiAgICAgICAgICAgIGFyZ3VtZW50czogZmxhdHRlbmRBcmdzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgcHJldkRlcml2YXRpb24gPSB1bnRyYWNrZWRTdGFydCgpO1xyXG4gICAgc3RhcnRCYXRjaCgpO1xyXG4gICAgdmFyIHByZXZBbGxvd1N0YXRlQ2hhbmdlcyA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQodHJ1ZSk7XHJcbiAgICB2YXIgcHJldkFsbG93U3RhdGVSZWFkcyA9IGFsbG93U3RhdGVSZWFkc1N0YXJ0KHRydWUpO1xyXG4gICAgdmFyIHJ1bkluZm8gPSB7XHJcbiAgICAgICAgcHJldkRlcml2YXRpb246IHByZXZEZXJpdmF0aW9uLFxyXG4gICAgICAgIHByZXZBbGxvd1N0YXRlQ2hhbmdlczogcHJldkFsbG93U3RhdGVDaGFuZ2VzLFxyXG4gICAgICAgIHByZXZBbGxvd1N0YXRlUmVhZHM6IHByZXZBbGxvd1N0YXRlUmVhZHMsXHJcbiAgICAgICAgbm90aWZ5U3B5OiBub3RpZnlTcHksXHJcbiAgICAgICAgc3RhcnRUaW1lOiBzdGFydFRpbWUsXHJcbiAgICAgICAgYWN0aW9uSWQ6IG5leHRBY3Rpb25JZCsrLFxyXG4gICAgICAgIHBhcmVudEFjdGlvbklkOiBjdXJyZW50QWN0aW9uSWRcclxuICAgIH07XHJcbiAgICBjdXJyZW50QWN0aW9uSWQgPSBydW5JbmZvLmFjdGlvbklkO1xyXG4gICAgcmV0dXJuIHJ1bkluZm87XHJcbn1cclxuZnVuY3Rpb24gX2VuZEFjdGlvbihydW5JbmZvKSB7XHJcbiAgICBpZiAoY3VycmVudEFjdGlvbklkICE9PSBydW5JbmZvLmFjdGlvbklkKSB7XHJcbiAgICAgICAgZmFpbChcImludmFsaWQgYWN0aW9uIHN0YWNrLiBkaWQgeW91IGZvcmdldCB0byBmaW5pc2ggYW4gYWN0aW9uP1wiKTtcclxuICAgIH1cclxuICAgIGN1cnJlbnRBY3Rpb25JZCA9IHJ1bkluZm8ucGFyZW50QWN0aW9uSWQ7XHJcbiAgICBpZiAocnVuSW5mby5lcnJvciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUuc3VwcHJlc3NSZWFjdGlvbkVycm9ycyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZChydW5JbmZvLnByZXZBbGxvd1N0YXRlQ2hhbmdlcyk7XHJcbiAgICBhbGxvd1N0YXRlUmVhZHNFbmQocnVuSW5mby5wcmV2QWxsb3dTdGF0ZVJlYWRzKTtcclxuICAgIGVuZEJhdGNoKCk7XHJcbiAgICB1bnRyYWNrZWRFbmQocnVuSW5mby5wcmV2RGVyaXZhdGlvbik7XHJcbiAgICBpZiAocnVuSW5mby5ub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgc3B5UmVwb3J0RW5kKHsgdGltZTogRGF0ZS5ub3coKSAtIHJ1bkluZm8uc3RhcnRUaW1lIH0pO1xyXG4gICAgfVxyXG4gICAgZ2xvYmFsU3RhdGUuc3VwcHJlc3NSZWFjdGlvbkVycm9ycyA9IGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzKGFsbG93U3RhdGVDaGFuZ2VzLCBmdW5jKSB7XHJcbiAgICB2YXIgcHJldiA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQoYWxsb3dTdGF0ZUNoYW5nZXMpO1xyXG4gICAgdmFyIHJlcztcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVzID0gZnVuYygpO1xyXG4gICAgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgYWxsb3dTdGF0ZUNoYW5nZXNFbmQocHJldik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbmZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQoYWxsb3dTdGF0ZUNoYW5nZXMpIHtcclxuICAgIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXM7XHJcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IGFsbG93U3RhdGVDaGFuZ2VzO1xyXG4gICAgcmV0dXJuIHByZXY7XHJcbn1cclxuZnVuY3Rpb24gYWxsb3dTdGF0ZUNoYW5nZXNFbmQocHJldikge1xyXG4gICAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgPSBwcmV2O1xyXG59XHJcbmZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzSW5zaWRlQ29tcHV0ZWQoZnVuYykge1xyXG4gICAgdmFyIHByZXYgPSBnbG9iYWxTdGF0ZS5jb21wdXRhdGlvbkRlcHRoO1xyXG4gICAgZ2xvYmFsU3RhdGUuY29tcHV0YXRpb25EZXB0aCA9IDA7XHJcbiAgICB2YXIgcmVzO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXMgPSBmdW5jKCk7XHJcbiAgICB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICBnbG9iYWxTdGF0ZS5jb21wdXRhdGlvbkRlcHRoID0gcHJldjtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn1cblxudmFyIE9ic2VydmFibGVWYWx1ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhPYnNlcnZhYmxlVmFsdWUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlVmFsdWUodmFsdWUsIGVuaGFuY2VyLCBuYW1lLCBub3RpZnlTcHksIGVxdWFscykge1xyXG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZVZhbHVlQFwiICsgZ2V0TmV4dElkKCk7IH1cclxuICAgICAgICBpZiAobm90aWZ5U3B5ID09PSB2b2lkIDApIHsgbm90aWZ5U3B5ID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChlcXVhbHMgPT09IHZvaWQgMCkgeyBlcXVhbHMgPSBjb21wYXJlci5kZWZhdWx0OyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbmFtZSkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5lbmhhbmNlciA9IGVuaGFuY2VyO1xyXG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIF90aGlzLmVxdWFscyA9IGVxdWFscztcclxuICAgICAgICBfdGhpcy5oYXNVbnJlcG9ydGVkQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgX3RoaXMudmFsdWUgPSBlbmhhbmNlcih2YWx1ZSwgdW5kZWZpbmVkLCBuYW1lKTtcclxuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIGlzU3B5RW5hYmxlZCgpICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICAvLyBvbmx5IG5vdGlmeSBzcHkgaWYgdGhpcyBpcyBhIHN0YW5kLWFsb25lIG9ic2VydmFibGVcclxuICAgICAgICAgICAgc3B5UmVwb3J0KHsgdHlwZTogXCJjcmVhdGVcIiwgbmFtZTogX3RoaXMubmFtZSwgbmV3VmFsdWU6IFwiXCIgKyBfdGhpcy52YWx1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5kZWhhbmNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJlcGFyZU5ld1ZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICBpZiAobmV3VmFsdWUgIT09IGdsb2JhbFN0YXRlLlVOQ0hBTkdFRCkge1xyXG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUucHJlcGFyZU5ld1ZhbHVlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcyk7XHJcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdsb2JhbFN0YXRlLlVOQ0hBTkdFRDtcclxuICAgICAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGFwcGx5IG1vZGlmaWVyXHJcbiAgICAgICAgbmV3VmFsdWUgPSB0aGlzLmVuaGFuY2VyKG5ld1ZhbHVlLCB0aGlzLnZhbHVlLCB0aGlzLm5hbWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVxdWFscyh0aGlzLnZhbHVlLCBuZXdWYWx1ZSkgPyBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQgOiBuZXdWYWx1ZTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnNldE5ld1ZhbHVlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgdGhpcy5yZXBvcnRDaGFuZ2VkKCk7XHJcbiAgICAgICAgaWYgKGhhc0xpc3RlbmVycyh0aGlzKSkge1xyXG4gICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcclxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yZXBvcnRPYnNlcnZlZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcclxuICAgICAgICBpZiAoZmlyZUltbWVkaWF0ZWx5KVxyXG4gICAgICAgICAgICBsaXN0ZW5lcih7XHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGxpc3RlbmVyKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIltcIiArIHRoaXMudmFsdWUgKyBcIl1cIjtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvUHJpbWl0aXZlKHRoaXMuZ2V0KCkpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGVbU3ltYm9sLnRvUHJpbWl0aXZlXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGVWYWx1ZTtcclxufShBdG9tKSk7XHJcbnZhciBpc09ic2VydmFibGVWYWx1ZSA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlVmFsdWVcIiwgT2JzZXJ2YWJsZVZhbHVlKTtcblxuLyoqXHJcbiAqIEEgbm9kZSBpbiB0aGUgc3RhdGUgZGVwZW5kZW5jeSByb290IHRoYXQgb2JzZXJ2ZXMgb3RoZXIgbm9kZXMsIGFuZCBjYW4gYmUgb2JzZXJ2ZWQgaXRzZWxmLlxyXG4gKlxyXG4gKiBDb21wdXRlZFZhbHVlIHdpbGwgcmVtZW1iZXIgdGhlIHJlc3VsdCBvZiB0aGUgY29tcHV0YXRpb24gZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgYmF0Y2gsIG9yXHJcbiAqIHdoaWxlIGJlaW5nIG9ic2VydmVkLlxyXG4gKlxyXG4gKiBEdXJpbmcgdGhpcyB0aW1lIGl0IHdpbGwgcmVjb21wdXRlIG9ubHkgd2hlbiBvbmUgb2YgaXRzIGRpcmVjdCBkZXBlbmRlbmNpZXMgY2hhbmdlZCxcclxuICogYnV0IG9ubHkgd2hlbiBpdCBpcyBiZWluZyBhY2Nlc3NlZCB3aXRoIGBDb21wdXRlZFZhbHVlLmdldCgpYC5cclxuICpcclxuICogSW1wbGVtZW50YXRpb24gZGVzY3JpcHRpb246XHJcbiAqIDEuIEZpcnN0IHRpbWUgaXQncyBiZWluZyBhY2Nlc3NlZCBpdCB3aWxsIGNvbXB1dGUgYW5kIHJlbWVtYmVyIHJlc3VsdFxyXG4gKiAgICBnaXZlIGJhY2sgcmVtZW1iZXJlZCByZXN1bHQgdW50aWwgMi4gaGFwcGVuc1xyXG4gKiAyLiBGaXJzdCB0aW1lIGFueSBkZWVwIGRlcGVuZGVuY3kgY2hhbmdlLCBwcm9wYWdhdGUgUE9TU0lCTFlfU1RBTEUgdG8gYWxsIG9ic2VydmVycywgd2FpdCBmb3IgMy5cclxuICogMy4gV2hlbiBpdCdzIGJlaW5nIGFjY2Vzc2VkLCByZWNvbXB1dGUgaWYgYW55IHNoYWxsb3cgZGVwZW5kZW5jeSBjaGFuZ2VkLlxyXG4gKiAgICBpZiByZXN1bHQgY2hhbmdlZDogcHJvcGFnYXRlIFNUQUxFIHRvIGFsbCBvYnNlcnZlcnMsIHRoYXQgd2VyZSBQT1NTSUJMWV9TVEFMRSBmcm9tIHRoZSBsYXN0IHN0ZXAuXHJcbiAqICAgIGdvIHRvIHN0ZXAgMi4gZWl0aGVyIHdheVxyXG4gKlxyXG4gKiBJZiBhdCBhbnkgcG9pbnQgaXQncyBvdXRzaWRlIGJhdGNoIGFuZCBpdCBpc24ndCBvYnNlcnZlZDogcmVzZXQgZXZlcnl0aGluZyBhbmQgZ28gdG8gMS5cclxuICovXHJcbnZhciBDb21wdXRlZFZhbHVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgY29tcHV0ZWQgdmFsdWUgYmFzZWQgb24gYSBmdW5jdGlvbiBleHByZXNzaW9uLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBgbmFtZWAgcHJvcGVydHkgaXMgZm9yIGRlYnVnIHB1cnBvc2VzIG9ubHkuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIGBlcXVhbHNgIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgY29tcGFyZXIgZnVuY3Rpb24gdG8gdXNlIHRvIGRldGVybWluZSBpZiBhIG5ld2x5IHByb2R1Y2VkXHJcbiAgICAgKiB2YWx1ZSBkaWZmZXJzIGZyb20gdGhlIHByZXZpb3VzIHZhbHVlLiBUd28gY29tcGFyZXJzIGFyZSBwcm92aWRlZCBpbiB0aGUgbGlicmFyeTsgYGRlZmF1bHRDb21wYXJlcmBcclxuICAgICAqIGNvbXBhcmVzIGJhc2VkIG9uIGlkZW50aXR5IGNvbXBhcmlzb24gKD09PSksIGFuZCBgc3RydWN0dWFsQ29tcGFyZXJgIGRlZXBseSBjb21wYXJlcyB0aGUgc3RydWN0dXJlLlxyXG4gICAgICogU3RydWN0dXJhbCBjb21wYXJpc29uIGNhbiBiZSBjb252ZW5pZW50IGlmIHlvdSBhbHdheXMgcHJvZHVjZSBhIG5ldyBhZ2dyZWdhdGVkIG9iamVjdCBhbmRcclxuICAgICAqIGRvbid0IHdhbnQgdG8gbm90aWZ5IG9ic2VydmVycyBpZiBpdCBpcyBzdHJ1Y3R1cmFsbHkgdGhlIHNhbWUuXHJcbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3Igd29ya2luZyB3aXRoIHZlY3RvcnMsIG1vdXNlIGNvb3JkaW5hdGVzIGV0Yy5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gQ29tcHV0ZWRWYWx1ZShvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2aW5nID0gW107IC8vIG5vZGVzIHdlIGFyZSBsb29raW5nIGF0LiBPdXIgdmFsdWUgZGVwZW5kcyBvbiB0aGVzZSBub2Rlc1xyXG4gICAgICAgIHRoaXMubmV3T2JzZXJ2aW5nID0gbnVsbDsgLy8gZHVyaW5nIHRyYWNraW5nIGl0J3MgYW4gYXJyYXkgd2l0aCBuZXcgb2JzZXJ2ZWQgb2JzZXJ2ZXJzXHJcbiAgICAgICAgdGhpcy5pc0JlaW5nT2JzZXJ2ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICB0aGlzLmRpZmZWYWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5ydW5JZCA9IDA7XHJcbiAgICAgICAgdGhpcy5sYXN0QWNjZXNzZWRCeSA9IDA7XHJcbiAgICAgICAgdGhpcy5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xyXG4gICAgICAgIHRoaXMudW5ib3VuZERlcHNDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5fX21hcGlkID0gXCIjXCIgKyBnZXROZXh0SWQoKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3IENhdWdodEV4Y2VwdGlvbihudWxsKTtcclxuICAgICAgICB0aGlzLmlzQ29tcHV0aW5nID0gZmFsc2U7IC8vIHRvIGNoZWNrIGZvciBjeWNsZXNcclxuICAgICAgICB0aGlzLmlzUnVubmluZ1NldHRlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNUcmFjaW5nID0gVHJhY2VNb2RlLk5PTkU7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhb3B0aW9ucy5nZXQpXHJcbiAgICAgICAgICAgIHRocm93IFwiW21vYnhdIG1pc3Npbmcgb3B0aW9uIGZvciBjb21wdXRlZDogZ2V0XCI7XHJcbiAgICAgICAgdGhpcy5kZXJpdmF0aW9uID0gb3B0aW9ucy5nZXQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IFwiQ29tcHV0ZWRWYWx1ZUBcIiArIGdldE5leHRJZCgpO1xyXG4gICAgICAgIGlmIChvcHRpb25zLnNldClcclxuICAgICAgICAgICAgdGhpcy5zZXR0ZXIgPSBjcmVhdGVBY3Rpb24odGhpcy5uYW1lICsgXCItc2V0dGVyXCIsIG9wdGlvbnMuc2V0KTtcclxuICAgICAgICB0aGlzLmVxdWFscyA9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZXF1YWxzIHx8XHJcbiAgICAgICAgICAgICAgICAob3B0aW9ucy5jb21wYXJlU3RydWN0dXJhbCB8fCBvcHRpb25zLnN0cnVjdFxyXG4gICAgICAgICAgICAgICAgICAgID8gY29tcGFyZXIuc3RydWN0dXJhbFxyXG4gICAgICAgICAgICAgICAgICAgIDogY29tcGFyZXIuZGVmYXVsdCk7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IG9wdGlvbnMuY29udGV4dDtcclxuICAgICAgICB0aGlzLnJlcXVpcmVzUmVhY3Rpb24gPSAhIW9wdGlvbnMucmVxdWlyZXNSZWFjdGlvbjtcclxuICAgICAgICB0aGlzLmtlZXBBbGl2ZSA9ICEhb3B0aW9ucy5rZWVwQWxpdmU7XHJcbiAgICB9XHJcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5vbkJlY29tZVN0YWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHByb3BhZ2F0ZU1heWJlQ2hhbmdlZCh0aGlzKTtcclxuICAgIH07XHJcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5vbkJlY29tZU9ic2VydmVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9uQmVjb21lT2JzZXJ2ZWRMaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkJlY29tZU9ic2VydmVkTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBsaXN0ZW5lcigpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUub25CZWNvbWVVbm9ic2VydmVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9uQmVjb21lVW5vYnNlcnZlZExpc3RlbmVycykge1xyXG4gICAgICAgICAgICB0aGlzLm9uQmVjb21lVW5vYnNlcnZlZExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIoKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGlzIGNvbXB1dGVkIHZhbHVlLlxyXG4gICAgICogV2lsbCBldmFsdWF0ZSBpdHMgY29tcHV0YXRpb24gZmlyc3QgaWYgbmVlZGVkLlxyXG4gICAgICovXHJcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb21wdXRpbmcpXHJcbiAgICAgICAgICAgIGZhaWwoXCJDeWNsZSBkZXRlY3RlZCBpbiBjb21wdXRhdGlvbiBcIiArIHRoaXMubmFtZSArIFwiOiBcIiArIHRoaXMuZGVyaXZhdGlvbik7XHJcbiAgICAgICAgaWYgKGdsb2JhbFN0YXRlLmluQmF0Y2ggPT09IDAgJiYgdGhpcy5vYnNlcnZlcnMuc2l6ZSA9PT0gMCAmJiAhdGhpcy5rZWVwQWxpdmUpIHtcclxuICAgICAgICAgICAgaWYgKHNob3VsZENvbXB1dGUodGhpcykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FybkFib3V0VW50cmFja2VkUmVhZCgpO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRCYXRjaCgpOyAvLyBTZWUgcGVyZiB0ZXN0ICdjb21wdXRlZCBtZW1vaXphdGlvbidcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmNvbXB1dGVWYWx1ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBlbmRCYXRjaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXBvcnRPYnNlcnZlZCh0aGlzKTtcclxuICAgICAgICAgICAgaWYgKHNob3VsZENvbXB1dGUodGhpcykpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cmFja0FuZENvbXB1dGUoKSlcclxuICAgICAgICAgICAgICAgICAgICBwcm9wYWdhdGVDaGFuZ2VDb25maXJtZWQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmIChpc0NhdWdodEV4Y2VwdGlvbihyZXN1bHQpKVxyXG4gICAgICAgICAgICB0aHJvdyByZXN1bHQuY2F1c2U7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZXMgPSB0aGlzLmNvbXB1dGVWYWx1ZShmYWxzZSk7XHJcbiAgICAgICAgaWYgKGlzQ2F1Z2h0RXhjZXB0aW9uKHJlcykpXHJcbiAgICAgICAgICAgIHRocm93IHJlcy5jYXVzZTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfTtcclxuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnNldHRlcikge1xyXG4gICAgICAgICAgICBpbnZhcmlhbnQoIXRoaXMuaXNSdW5uaW5nU2V0dGVyLCBcIlRoZSBzZXR0ZXIgb2YgY29tcHV0ZWQgdmFsdWUgJ1wiICsgdGhpcy5uYW1lICsgXCInIGlzIHRyeWluZyB0byB1cGRhdGUgaXRzZWxmLiBEaWQgeW91IGludGVuZCB0byB1cGRhdGUgYW4gX29ic2VydmFibGVfIHZhbHVlLCBpbnN0ZWFkIG9mIHRoZSBjb21wdXRlZCBwcm9wZXJ0eT9cIik7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaW5nU2V0dGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGVyLmNhbGwodGhpcy5zY29wZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1J1bm5pbmdTZXR0ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGludmFyaWFudChmYWxzZSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgICAgICBcIltDb21wdXRlZFZhbHVlICdcIiArIHRoaXMubmFtZSArIFwiJ10gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGFzc2lnbiBhIG5ldyB2YWx1ZSB0byBhIGNvbXB1dGVkIHZhbHVlLlwiKTtcclxuICAgIH07XHJcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS50cmFja0FuZENvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGlzU3B5RW5hYmxlZCgpICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICBzcHlSZXBvcnQoe1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnNjb3BlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJjb21wdXRlXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgdmFyIHdhc1N1c3BlbmRlZCA9IFxyXG4gICAgICAgIC8qIHNlZSAjMTIwOCAqLyB0aGlzLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORztcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLmNvbXB1dGVWYWx1ZSh0cnVlKTtcclxuICAgICAgICB2YXIgY2hhbmdlZCA9IHdhc1N1c3BlbmRlZCB8fFxyXG4gICAgICAgICAgICBpc0NhdWdodEV4Y2VwdGlvbihvbGRWYWx1ZSkgfHxcclxuICAgICAgICAgICAgaXNDYXVnaHRFeGNlcHRpb24obmV3VmFsdWUpIHx8XHJcbiAgICAgICAgICAgICF0aGlzLmVxdWFscyhvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoYW5nZWQ7XHJcbiAgICB9O1xyXG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUuY29tcHV0ZVZhbHVlID0gZnVuY3Rpb24gKHRyYWNrKSB7XHJcbiAgICAgICAgdGhpcy5pc0NvbXB1dGluZyA9IHRydWU7XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUuY29tcHV0YXRpb25EZXB0aCsrO1xyXG4gICAgICAgIHZhciByZXM7XHJcbiAgICAgICAgaWYgKHRyYWNrKSB7XHJcbiAgICAgICAgICAgIHJlcyA9IHRyYWNrRGVyaXZlZEZ1bmN0aW9uKHRoaXMsIHRoaXMuZGVyaXZhdGlvbiwgdGhpcy5zY29wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsU3RhdGUuZGlzYWJsZUVycm9yQm91bmRhcmllcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gdGhpcy5kZXJpdmF0aW9uLmNhbGwodGhpcy5zY29wZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IHRoaXMuZGVyaXZhdGlvbi5jYWxsKHRoaXMuc2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBuZXcgQ2F1Z2h0RXhjZXB0aW9uKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdsb2JhbFN0YXRlLmNvbXB1dGF0aW9uRGVwdGgtLTtcclxuICAgICAgICB0aGlzLmlzQ29tcHV0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH07XHJcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5zdXNwZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5rZWVwQWxpdmUpIHtcclxuICAgICAgICAgICAgY2xlYXJPYnNlcnZpbmcodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7IC8vIGRvbid0IGhvbGQgb24gdG8gY29tcHV0ZWQgdmFsdWUhXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGZpcnN0VGltZSA9IHRydWU7XHJcbiAgICAgICAgdmFyIHByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gYXV0b3J1bihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IF90aGlzLmdldCgpO1xyXG4gICAgICAgICAgICBpZiAoIWZpcnN0VGltZSB8fCBmaXJlSW1tZWRpYXRlbHkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcmV2VSA9IHVudHJhY2tlZFN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcih7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IF90aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogcHJldlZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHVudHJhY2tlZEVuZChwcmV2VSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlyc3RUaW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHByZXZWYWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLndhcm5BYm91dFVudHJhY2tlZFJlYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnJlcXVpcmVzUmVhY3Rpb24gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgZmFpbChcIlttb2J4XSBDb21wdXRlZCB2YWx1ZSBcIiArIHRoaXMubmFtZSArIFwiIGlzIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzVHJhY2luZyAhPT0gVHJhY2VNb2RlLk5PTkUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbbW9ieC50cmFjZV0gJ1wiICsgdGhpcy5uYW1lICsgXCInIGlzIGJlaW5nIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHQuIERvaW5nIGEgZnVsbCByZWNvbXB1dGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnbG9iYWxTdGF0ZS5jb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24pIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnhdIENvbXB1dGVkIHZhbHVlIFwiICsgdGhpcy5uYW1lICsgXCIgaXMgYmVpbmcgcmVhZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dC4gRG9pbmcgYSBmdWxsIHJlY29tcHV0ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldCgpO1xyXG4gICAgfTtcclxuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIltcIiArIHRoaXMuZGVyaXZhdGlvbi50b1N0cmluZygpICsgXCJdXCI7XHJcbiAgICB9O1xyXG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdG9QcmltaXRpdmUodGhpcy5nZXQoKSk7XHJcbiAgICB9O1xyXG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGVbU3ltYm9sLnRvUHJpbWl0aXZlXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbXB1dGVkVmFsdWU7XHJcbn0oKSk7XHJcbnZhciBpc0NvbXB1dGVkVmFsdWUgPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiQ29tcHV0ZWRWYWx1ZVwiLCBDb21wdXRlZFZhbHVlKTtcblxuLyoqXHJcbiAqIFRoZXNlIHZhbHVlcyB3aWxsIHBlcnNpc3QgaWYgZ2xvYmFsIHN0YXRlIGlzIHJlc2V0XHJcbiAqL1xyXG52YXIgcGVyc2lzdGVudEtleXMgPSBbXHJcbiAgICBcIm1vYnhHdWlkXCIsXHJcbiAgICBcInNweUxpc3RlbmVyc1wiLFxyXG4gICAgXCJlbmZvcmNlQWN0aW9uc1wiLFxyXG4gICAgXCJjb21wdXRlZFJlcXVpcmVzUmVhY3Rpb25cIixcclxuICAgIFwicmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGVcIixcclxuICAgIFwib2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb25cIixcclxuICAgIFwiYWxsb3dTdGF0ZVJlYWRzXCIsXHJcbiAgICBcImRpc2FibGVFcnJvckJvdW5kYXJpZXNcIixcclxuICAgIFwicnVuSWRcIixcclxuICAgIFwiVU5DSEFOR0VEXCJcclxuXTtcclxudmFyIE1vYlhHbG9iYWxzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTW9iWEdsb2JhbHMoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTW9iWEdsb2JhbHMgdmVyc2lvbi5cclxuICAgICAgICAgKiBNb2JYIGNvbXBhdGlibGl0eSB3aXRoIG90aGVyIHZlcnNpb25zIGxvYWRlZCBpbiBtZW1vcnkgYXMgbG9uZyBhcyB0aGlzIHZlcnNpb24gbWF0Y2hlcy5cclxuICAgICAgICAgKiBJdCBpbmRpY2F0ZXMgdGhhdCB0aGUgZ2xvYmFsIHN0YXRlIHN0aWxsIHN0b3JlcyBzaW1pbGFyIGluZm9ybWF0aW9uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBOLkI6IHRoaXMgdmVyc2lvbiBpcyB1bnJlbGF0ZWQgdG8gdGhlIHBhY2thZ2UgdmVyc2lvbiBvZiBNb2JYLCBhbmQgaXMgb25seSB0aGUgdmVyc2lvbiBvZiB0aGVcclxuICAgICAgICAgKiBpbnRlcm5hbCBzdGF0ZSBzdG9yYWdlIG9mIE1vYlgsIGFuZCBjYW4gYmUgdGhlIHNhbWUgYWNyb3NzIG1hbnkgZGlmZmVyZW50IHBhY2thZ2UgdmVyc2lvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnZlcnNpb24gPSA1O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGdsb2JhbGx5IHVuaXF1ZSB0b2tlbiB0byBzaWduYWwgdW5jaGFuZ2VkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5VTkNIQU5HRUQgPSB7fTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDdXJyZW50bHkgcnVubmluZyBkZXJpdmF0aW9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy50cmFja2luZ0Rlcml2YXRpb24gPSBudWxsO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFyZSB3ZSBydW5uaW5nIGEgY29tcHV0YXRpb24gY3VycmVudGx5PyAobm90IGEgcmVhY3Rpb24pXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jb21wdXRhdGlvbkRlcHRoID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFYWNoIHRpbWUgYSBkZXJpdmF0aW9uIGlzIHRyYWNrZWQsIGl0IGlzIGFzc2lnbmVkIGEgdW5pcXVlIHJ1bi1pZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucnVuSWQgPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICdndWlkJyBmb3IgZ2VuZXJhbCBwdXJwb3NlLiBXaWxsIGJlIHBlcnNpc3RlZCBhbW9uZ3N0IHJlc2V0cy5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm1vYnhHdWlkID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBcmUgd2UgaW4gYSBiYXRjaCBibG9jaz8gKGFuZCBob3cgbWFueSBvZiB0aGVtKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuaW5CYXRjaCA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogT2JzZXJ2YWJsZXMgdGhhdCBkb24ndCBoYXZlIG9ic2VydmVycyBhbnltb3JlLCBhbmQgYXJlIGFib3V0IHRvIGJlXHJcbiAgICAgICAgICogc3VzcGVuZGVkLCB1bmxlc3Mgc29tZWJvZHkgZWxzZSBhY2Nlc3NlcyBpdCBpbiB0aGUgc2FtZSBiYXRjaFxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge0lPYnNlcnZhYmxlW119XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5wZW5kaW5nVW5vYnNlcnZhdGlvbnMgPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBMaXN0IG9mIHNjaGVkdWxlZCwgbm90IHlldCBleGVjdXRlZCwgcmVhY3Rpb25zLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucGVuZGluZ1JlYWN0aW9ucyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFyZSB3ZSBjdXJyZW50bHkgcHJvY2Vzc2luZyByZWFjdGlvbnM/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmdSZWFjdGlvbnMgPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJcyBpdCBhbGxvd2VkIHRvIGNoYW5nZSBvYnNlcnZhYmxlcyBhdCB0aGlzIHBvaW50P1xyXG4gICAgICAgICAqIEluIGdlbmVyYWwsIE1vYlggZG9lc24ndCBhbGxvdyB0aGF0IHdoZW4gcnVubmluZyBjb21wdXRhdGlvbnMgYW5kIFJlYWN0LnJlbmRlci5cclxuICAgICAgICAgKiBUbyBlbnN1cmUgdGhhdCB0aG9zZSBmdW5jdGlvbnMgc3RheSBwdXJlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYWxsb3dTdGF0ZUNoYW5nZXMgPSB0cnVlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElzIGl0IGFsbG93ZWQgdG8gcmVhZCBvYnNlcnZhYmxlcyBhdCB0aGlzIHBvaW50P1xyXG4gICAgICAgICAqIFVzZWQgdG8gaG9sZCB0aGUgc3RhdGUgbmVlZGVkIGZvciBgb2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb25gXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5hbGxvd1N0YXRlUmVhZHMgPSB0cnVlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElmIHN0cmljdCBtb2RlIGlzIGVuYWJsZWQsIHN0YXRlIGNoYW5nZXMgYXJlIGJ5IGRlZmF1bHQgbm90IGFsbG93ZWRcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmVuZm9yY2VBY3Rpb25zID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3B5IGNhbGxiYWNrc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuc3B5TGlzdGVuZXJzID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2xvYmFsbHkgYXR0YWNoZWQgZXJyb3IgaGFuZGxlcnMgdGhhdCByZWFjdCBzcGVjaWZpY2FsbHkgdG8gZXJyb3JzIGluIHJlYWN0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogV2FybiBpZiBjb21wdXRlZCB2YWx1ZXMgYXJlIGFjY2Vzc2VkIG91dHNpZGUgYSByZWFjdGl2ZSBjb250ZXh0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAoRXhwZXJpbWVudGFsKVxyXG4gICAgICAgICAqIFdhcm4gaWYgeW91IHRyeSB0byBjcmVhdGUgdG8gZGVyaXZhdGlvbiAvIHJlYWN0aXZlIGNvbnRleHQgd2l0aG91dCBhY2Nlc3NpbmcgYW55IG9ic2VydmFibGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5yZWFjdGlvblJlcXVpcmVzT2JzZXJ2YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIChFeHBlcmltZW50YWwpXHJcbiAgICAgICAgICogV2FybiBpZiBvYnNlcnZhYmxlcyBhcmUgYWNjZXNzZWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHRcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWxsb3dzIG92ZXJ3cml0aW5nIG9mIGNvbXB1dGVkIHByb3BlcnRpZXMsIHVzZWZ1bCBpbiB0ZXN0cyBidXQgbm90IHByb2QgYXMgaXQgY2FuIGNhdXNlXHJcbiAgICAgICAgICogbWVtb3J5IGxlYWtzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2lzc3Vlcy8xODY3XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jb21wdXRlZENvbmZpZ3VyYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogRG9uJ3QgY2F0Y2ggYW5kIHJldGhyb3cgZXhjZXB0aW9ucy4gVGhpcyBpcyB1c2VmdWwgZm9yIGluc3BlY3RpbmcgdGhlIHN0YXRlIG9mXHJcbiAgICAgICAgICogdGhlIHN0YWNrIHdoZW4gYW4gZXhjZXB0aW9uIG9jY3VycyB3aGlsZSBkZWJ1Z2dpbmcuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzID0gZmFsc2U7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBJZiB0cnVlLCB3ZSBhcmUgYWxyZWFkeSBoYW5kbGluZyBhbiBleGNlcHRpb24gaW4gYW4gYWN0aW9uLiBBbnkgZXJyb3JzIGluIHJlYWN0aW9ucyBzaG91bGQgYmUgc3VwcHJlc3NlZCwgYXNcclxuICAgICAgICAgKiB0aGV5IGFyZSBub3QgdGhlIGNhdXNlLCBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb2J4anMvbW9ieC9pc3N1ZXMvMTgzNlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuc3VwcHJlc3NSZWFjdGlvbkVycm9ycyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1vYlhHbG9iYWxzO1xyXG59KCkpO1xyXG52YXIgY2FuTWVyZ2VHbG9iYWxTdGF0ZSA9IHRydWU7XHJcbnZhciBpc29sYXRlQ2FsbGVkID0gZmFsc2U7XHJcbnZhciBnbG9iYWxTdGF0ZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZ2xvYmFsID0gZ2V0R2xvYmFsKCk7XHJcbiAgICBpZiAoZ2xvYmFsLl9fbW9ieEluc3RhbmNlQ291bnQgPiAwICYmICFnbG9iYWwuX19tb2J4R2xvYmFscylcclxuICAgICAgICBjYW5NZXJnZUdsb2JhbFN0YXRlID0gZmFsc2U7XHJcbiAgICBpZiAoZ2xvYmFsLl9fbW9ieEdsb2JhbHMgJiYgZ2xvYmFsLl9fbW9ieEdsb2JhbHMudmVyc2lvbiAhPT0gbmV3IE1vYlhHbG9iYWxzKCkudmVyc2lvbilcclxuICAgICAgICBjYW5NZXJnZUdsb2JhbFN0YXRlID0gZmFsc2U7XHJcbiAgICBpZiAoIWNhbk1lcmdlR2xvYmFsU3RhdGUpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFpc29sYXRlQ2FsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBmYWlsKFwiVGhlcmUgYXJlIG11bHRpcGxlLCBkaWZmZXJlbnQgdmVyc2lvbnMgb2YgTW9iWCBhY3RpdmUuIE1ha2Ugc3VyZSBNb2JYIGlzIGxvYWRlZCBvbmx5IG9uY2Ugb3IgdXNlIGBjb25maWd1cmUoeyBpc29sYXRlR2xvYmFsU3RhdGU6IHRydWUgfSlgXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNb2JYR2xvYmFscygpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZ2xvYmFsLl9fbW9ieEdsb2JhbHMpIHtcclxuICAgICAgICBnbG9iYWwuX19tb2J4SW5zdGFuY2VDb3VudCArPSAxO1xyXG4gICAgICAgIGlmICghZ2xvYmFsLl9fbW9ieEdsb2JhbHMuVU5DSEFOR0VEKVxyXG4gICAgICAgICAgICBnbG9iYWwuX19tb2J4R2xvYmFscy5VTkNIQU5HRUQgPSB7fTsgLy8gbWFrZSBtZXJnZSBiYWNrd2FyZCBjb21wYXRpYmxlXHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbC5fX21vYnhHbG9iYWxzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZ2xvYmFsLl9fbW9ieEluc3RhbmNlQ291bnQgPSAxO1xyXG4gICAgICAgIHJldHVybiAoZ2xvYmFsLl9fbW9ieEdsb2JhbHMgPSBuZXcgTW9iWEdsb2JhbHMoKSk7XHJcbiAgICB9XHJcbn0pKCk7XHJcbmZ1bmN0aW9uIGlzb2xhdGVHbG9iYWxTdGF0ZSgpIHtcclxuICAgIGlmIChnbG9iYWxTdGF0ZS5wZW5kaW5nUmVhY3Rpb25zLmxlbmd0aCB8fFxyXG4gICAgICAgIGdsb2JhbFN0YXRlLmluQmF0Y2ggfHxcclxuICAgICAgICBnbG9iYWxTdGF0ZS5pc1J1bm5pbmdSZWFjdGlvbnMpXHJcbiAgICAgICAgZmFpbChcImlzb2xhdGVHbG9iYWxTdGF0ZSBzaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBNb2JYIGlzIHJ1bm5pbmcgYW55IHJlYWN0aW9uc1wiKTtcclxuICAgIGlzb2xhdGVDYWxsZWQgPSB0cnVlO1xyXG4gICAgaWYgKGNhbk1lcmdlR2xvYmFsU3RhdGUpIHtcclxuICAgICAgICBpZiAoLS1nZXRHbG9iYWwoKS5fX21vYnhJbnN0YW5jZUNvdW50ID09PSAwKVxyXG4gICAgICAgICAgICBnZXRHbG9iYWwoKS5fX21vYnhHbG9iYWxzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGdsb2JhbFN0YXRlID0gbmV3IE1vYlhHbG9iYWxzKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0R2xvYmFsU3RhdGUoKSB7XHJcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGU7XHJcbn1cclxuLyoqXHJcbiAqIEZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHk7IHRoaXMgd2lsbCBicmVhayB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgZXhpc3Rpbmcgb2JzZXJ2YWJsZXMsXHJcbiAqIGJ1dCBjYW4gYmUgdXNlZCB0byBnZXQgYmFjayBhdCBhIHN0YWJsZSBzdGF0ZSBhZnRlciB0aHJvd2luZyBlcnJvcnNcclxuICovXHJcbmZ1bmN0aW9uIHJlc2V0R2xvYmFsU3RhdGUoKSB7XHJcbiAgICB2YXIgZGVmYXVsdEdsb2JhbHMgPSBuZXcgTW9iWEdsb2JhbHMoKTtcclxuICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0R2xvYmFscylcclxuICAgICAgICBpZiAocGVyc2lzdGVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSlcclxuICAgICAgICAgICAgZ2xvYmFsU3RhdGVba2V5XSA9IGRlZmF1bHRHbG9iYWxzW2tleV07XHJcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9ICFnbG9iYWxTdGF0ZS5lbmZvcmNlQWN0aW9ucztcclxufVxyXG52YXIgbW9ja0dsb2JhbCA9IHt9O1xyXG5mdW5jdGlvbiBnZXRHbG9iYWwoKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3c7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9ja0dsb2JhbDtcclxufVxuXG5mdW5jdGlvbiBoYXNPYnNlcnZlcnMob2JzZXJ2YWJsZSkge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGUub2JzZXJ2ZXJzICYmIG9ic2VydmFibGUub2JzZXJ2ZXJzLnNpemUgPiAwO1xyXG59XHJcbmZ1bmN0aW9uIGdldE9ic2VydmVycyhvYnNlcnZhYmxlKSB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5vYnNlcnZlcnM7XHJcbn1cclxuLy8gZnVuY3Rpb24gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGU6IElPYnNlcnZhYmxlKSB7XHJcbi8vICAgICBjb25zdCBsaXN0ID0gb2JzZXJ2YWJsZS5vYnNlcnZlcnNcclxuLy8gICAgIGNvbnN0IG1hcCA9IG9ic2VydmFibGUub2JzZXJ2ZXJzSW5kZXhlc1xyXG4vLyAgICAgY29uc3QgbCA9IGxpc3QubGVuZ3RoXHJcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xyXG4vLyAgICAgICAgIGNvbnN0IGlkID0gbGlzdFtpXS5fX21hcGlkXHJcbi8vICAgICAgICAgaWYgKGkpIHtcclxuLy8gICAgICAgICAgICAgaW52YXJpYW50KG1hcFtpZF0gPT09IGksIFwiSU5URVJOQUwgRVJST1IgbWFwcyBkZXJpdmF0aW9uLl9fbWFwaWQgdG8gaW5kZXggaW4gbGlzdFwiKSAvLyBmb3IgcGVyZm9ybWFuY2VcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICBpbnZhcmlhbnQoIShpZCBpbiBtYXApLCBcIklOVEVSTkFMIEVSUk9SIG9ic2VydmVyIG9uIGluZGV4IDAgc2hvdWxkbid0IGJlIGhlbGQgaW4gbWFwLlwiKSAvLyBmb3IgcGVyZm9ybWFuY2VcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBpbnZhcmlhbnQoXHJcbi8vICAgICAgICAgbGlzdC5sZW5ndGggPT09IDAgfHwgT2JqZWN0LmtleXMobWFwKS5sZW5ndGggPT09IGxpc3QubGVuZ3RoIC0gMSxcclxuLy8gICAgICAgICBcIklOVEVSTkFMIEVSUk9SIHRoZXJlIGlzIG5vIGp1bmsgaW4gbWFwXCJcclxuLy8gICAgIClcclxuLy8gfVxyXG5mdW5jdGlvbiBhZGRPYnNlcnZlcihvYnNlcnZhYmxlLCBub2RlKSB7XHJcbiAgICAvLyBpbnZhcmlhbnQobm9kZS5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gLTEsIFwiSU5URVJOQUwgRVJST1IsIGNhbiBhZGQgb25seSBkZXBlbmRlbmNpZXNTdGF0ZSAhPT0gLTFcIik7XHJcbiAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmluZGV4T2Yobm9kZSkgPT09IC0xLCBcIklOVEVSTkFMIEVSUk9SIGFkZCBhbHJlYWR5IGFkZGVkIG5vZGVcIik7XHJcbiAgICAvLyBpbnZhcmlhbnRPYnNlcnZlcnMob2JzZXJ2YWJsZSk7XHJcbiAgICBvYnNlcnZhYmxlLm9ic2VydmVycy5hZGQobm9kZSk7XHJcbiAgICBpZiAob2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID4gbm9kZS5kZXBlbmRlbmNpZXNTdGF0ZSlcclxuICAgICAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBub2RlLmRlcGVuZGVuY2llc1N0YXRlO1xyXG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xyXG4gICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpICE9PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiBkaWRuJ3QgYWRkIG5vZGVcIik7XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2YWJsZSwgbm9kZSkge1xyXG4gICAgLy8gaW52YXJpYW50KGdsb2JhbFN0YXRlLmluQmF0Y2ggPiAwLCBcIklOVEVSTkFMIEVSUk9SLCByZW1vdmUgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGluc2lkZSBiYXRjaFwiKTtcclxuICAgIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSAhPT0gLTEsIFwiSU5URVJOQUwgRVJST1IgcmVtb3ZlIGFscmVhZHkgcmVtb3ZlZCBub2RlXCIpO1xyXG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xyXG4gICAgb2JzZXJ2YWJsZS5vYnNlcnZlcnMuZGVsZXRlKG5vZGUpO1xyXG4gICAgaWYgKG9ic2VydmFibGUub2JzZXJ2ZXJzLnNpemUgPT09IDApIHtcclxuICAgICAgICAvLyBkZWxldGluZyBsYXN0IG9ic2VydmVyXHJcbiAgICAgICAgcXVldWVGb3JVbm9ic2VydmF0aW9uKG9ic2VydmFibGUpO1xyXG4gICAgfVxyXG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xyXG4gICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpID09PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiByZW1vdmUgYWxyZWFkeSByZW1vdmVkIG5vZGUyXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHF1ZXVlRm9yVW5vYnNlcnZhdGlvbihvYnNlcnZhYmxlKSB7XHJcbiAgICBpZiAob2JzZXJ2YWJsZS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uID09PSBmYWxzZSkge1xyXG4gICAgICAgIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMubGVuZ3RoID09PSAwLCBcIklOVEVSTkFMIEVSUk9SLCBzaG91bGQgb25seSBxdWV1ZSBmb3IgdW5vYnNlcnZhdGlvbiB1bm9ic2VydmVkIG9ic2VydmFibGVzXCIpO1xyXG4gICAgICAgIG9ic2VydmFibGUuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUucGVuZGluZ1Vub2JzZXJ2YXRpb25zLnB1c2gob2JzZXJ2YWJsZSk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEJhdGNoIHN0YXJ0cyBhIHRyYW5zYWN0aW9uLCBhdCBsZWFzdCBmb3IgcHVycG9zZXMgb2YgbWVtb2l6aW5nIENvbXB1dGVkVmFsdWVzIHdoZW4gbm90aGluZyBlbHNlIGRvZXMuXHJcbiAqIER1cmluZyBhIGJhdGNoIGBvbkJlY29tZVVub2JzZXJ2ZWRgIHdpbGwgYmUgY2FsbGVkIGF0IG1vc3Qgb25jZSBwZXIgb2JzZXJ2YWJsZS5cclxuICogQXZvaWRzIHVubmVjZXNzYXJ5IHJlY2FsY3VsYXRpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gc3RhcnRCYXRjaCgpIHtcclxuICAgIGdsb2JhbFN0YXRlLmluQmF0Y2grKztcclxufVxyXG5mdW5jdGlvbiBlbmRCYXRjaCgpIHtcclxuICAgIGlmICgtLWdsb2JhbFN0YXRlLmluQmF0Y2ggPT09IDApIHtcclxuICAgICAgICBydW5SZWFjdGlvbnMoKTtcclxuICAgICAgICAvLyB0aGUgYmF0Y2ggaXMgYWN0dWFsbHkgYWJvdXQgdG8gZmluaXNoLCBhbGwgdW5vYnNlcnZpbmcgc2hvdWxkIGhhcHBlbiBoZXJlLlxyXG4gICAgICAgIHZhciBsaXN0ID0gZ2xvYmFsU3RhdGUucGVuZGluZ1Vub2JzZXJ2YXRpb25zO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2YWJsZS5vYnNlcnZlcnMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBvYnNlcnZhYmxlIGhhZCByZWFjdGl2ZSBvYnNlcnZlcnMsIHRyaWdnZXIgdGhlIGhvb2tzXHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZS5pc0JlaW5nT2JzZXJ2ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZhYmxlLm9uQmVjb21lVW5vYnNlcnZlZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmFibGUgaW5zdGFuY2VvZiBDb21wdXRlZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29tcHV0ZWQgdmFsdWVzIGFyZSBhdXRvbWF0aWNhbGx5IHRlYXJlZCBkb3duIHdoZW4gdGhlIGxhc3Qgb2JzZXJ2ZXIgbGVhdmVzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBwcm9jZXNzIGhhcHBlbnMgcmVjdXJzaXZlbHksIHRoaXMgY29tcHV0ZWQgbWlnaHQgYmUgdGhlIGxhc3Qgb2JzZXJ2YWJlIG9mIGFub3RoZXIsIGV0Yy4uXHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZS5zdXNwZW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUucGVuZGluZ1Vub2JzZXJ2YXRpb25zID0gW107XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVwb3J0T2JzZXJ2ZWQob2JzZXJ2YWJsZSkge1xyXG4gICAgY2hlY2tJZlN0YXRlUmVhZHNBcmVBbGxvd2VkKG9ic2VydmFibGUpO1xyXG4gICAgdmFyIGRlcml2YXRpb24gPSBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb247XHJcbiAgICBpZiAoZGVyaXZhdGlvbiAhPT0gbnVsbCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNpbXBsZSBvcHRpbWl6YXRpb24sIGdpdmUgZWFjaCBkZXJpdmF0aW9uIHJ1biBhbiB1bmlxdWUgaWQgKHJ1bklkKVxyXG4gICAgICAgICAqIENoZWNrIGlmIGxhc3QgdGltZSB0aGlzIG9ic2VydmFibGUgd2FzIGFjY2Vzc2VkIHRoZSBzYW1lIHJ1bklkIGlzIHVzZWRcclxuICAgICAgICAgKiBpZiB0aGlzIGlzIHRoZSBjYXNlLCB0aGUgcmVsYXRpb24gaXMgYWxyZWFkeSBrbm93blxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmIChkZXJpdmF0aW9uLnJ1bklkICE9PSBvYnNlcnZhYmxlLmxhc3RBY2Nlc3NlZEJ5KSB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUubGFzdEFjY2Vzc2VkQnkgPSBkZXJpdmF0aW9uLnJ1bklkO1xyXG4gICAgICAgICAgICAvLyBUcmllZCBzdG9yaW5nIG5ld09ic2VydmluZywgb3Igb2JzZXJ2aW5nLCBvciBib3RoIGFzIFNldCwgYnV0IHBlcmZvcm1hbmNlIGRpZG4ndCBjb21lIGNsb3NlLi4uXHJcbiAgICAgICAgICAgIGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nW2Rlcml2YXRpb24udW5ib3VuZERlcHNDb3VudCsrXSA9IG9ic2VydmFibGU7XHJcbiAgICAgICAgICAgIGlmICghb2JzZXJ2YWJsZS5pc0JlaW5nT2JzZXJ2ZWQpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG9ic2VydmFibGUub25CZWNvbWVPYnNlcnZlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAob2JzZXJ2YWJsZS5vYnNlcnZlcnMuc2l6ZSA9PT0gMCAmJiBnbG9iYWxTdGF0ZS5pbkJhdGNoID4gMCkge1xyXG4gICAgICAgIHF1ZXVlRm9yVW5vYnNlcnZhdGlvbihvYnNlcnZhYmxlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4vLyBmdW5jdGlvbiBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZTogSU9ic2VydmFibGUsIG1zZzogc3RyaW5nKSB7XHJcbi8vICAgICAvLyBpdCdzIGV4cGVuc2l2ZSBzbyBiZXR0ZXIgbm90IHJ1biBpdCBpbiBwcm9kdWNpdG9uLiBidXQgdGVtcG9yYXJpbHkgaGVscGZ1bCBmb3IgdGVzdGluZ1xyXG4vLyAgICAgY29uc3QgbWluID0gZ2V0T2JzZXJ2ZXJzKG9ic2VydmFibGUpLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5taW4oYSwgYi5kZXBlbmRlbmNpZXNTdGF0ZSksIDIpXHJcbi8vICAgICBpZiAobWluID49IG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSkgcmV0dXJuIC8vIDwtIHRoZSBvbmx5IGFzc3VtcHRpb24gYWJvdXQgYGxvd2VzdE9ic2VydmVyU3RhdGVgXHJcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbi8vICAgICAgICAgXCJsb3dlc3RPYnNlcnZlclN0YXRlIGlzIHdyb25nIGZvciBcIiArXHJcbi8vICAgICAgICAgICAgIG1zZyArXHJcbi8vICAgICAgICAgICAgIFwiIGJlY2F1c2UgXCIgK1xyXG4vLyAgICAgICAgICAgICBtaW4gK1xyXG4vLyAgICAgICAgICAgICBcIiA8IFwiICtcclxuLy8gICAgICAgICAgICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlXHJcbi8vICAgICApXHJcbi8vIH1cclxuLyoqXHJcbiAqIE5PVEU6IGN1cnJlbnQgcHJvcGFnYXRpb24gbWVjaGFuaXNtIHdpbGwgaW4gY2FzZSBvZiBzZWxmIHJlcnVuaW5nIGF1dG9ydW5zIGJlaGF2ZSB1bmV4cGVjdGVkbHlcclxuICogSXQgd2lsbCBwcm9wYWdhdGUgY2hhbmdlcyB0byBvYnNlcnZlcnMgZnJvbSBwcmV2aW91cyBydW5cclxuICogSXQncyBoYXJkIG9yIG1heWJlIGltcG9zc2libGUgKHdpdGggcmVhc29uYWJsZSBwZXJmKSB0byBnZXQgaXQgcmlnaHQgd2l0aCBjdXJyZW50IGFwcHJvYWNoXHJcbiAqIEhvcGVmdWxseSBzZWxmIHJlcnVuaW5nIGF1dG9ydW5zIGFyZW4ndCBhIGZlYXR1cmUgcGVvcGxlIHNob3VsZCBkZXBlbmQgb25cclxuICogQWxzbyBtb3N0IGJhc2ljIHVzZSBjYXNlcyBzaG91bGQgYmUgb2tcclxuICovXHJcbi8vIENhbGxlZCBieSBBdG9tIHdoZW4gaXRzIHZhbHVlIGNoYW5nZXNcclxuZnVuY3Rpb24gcHJvcGFnYXRlQ2hhbmdlZChvYnNlcnZhYmxlKSB7XHJcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjaGFuZ2VkIHN0YXJ0XCIpO1xyXG4gICAgaWYgKG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5TVEFMRSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFO1xyXG4gICAgLy8gSWRlYWxseSB3ZSB1c2UgZm9yLi5vZiBoZXJlLCBidXQgdGhlIGRvd25jb21waWxlZCB2ZXJzaW9uIGlzIHJlYWxseSBzbG93Li4uXHJcbiAgICBvYnNlcnZhYmxlLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgaWYgKGQuZGVwZW5kZW5jaWVzU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURSkge1xyXG4gICAgICAgICAgICBpZiAoZC5pc1RyYWNpbmcgIT09IFRyYWNlTW9kZS5OT05FKSB7XHJcbiAgICAgICAgICAgICAgICBsb2dUcmFjZUluZm8oZCwgb2JzZXJ2YWJsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZC5vbkJlY29tZVN0YWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGQuZGVwZW5kZW5jaWVzU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFO1xyXG4gICAgfSk7XHJcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjaGFuZ2VkIGVuZFwiKTtcclxufVxyXG4vLyBDYWxsZWQgYnkgQ29tcHV0ZWRWYWx1ZSB3aGVuIGl0IHJlY2FsY3VsYXRlIGFuZCBpdHMgdmFsdWUgY2hhbmdlZFxyXG5mdW5jdGlvbiBwcm9wYWdhdGVDaGFuZ2VDb25maXJtZWQob2JzZXJ2YWJsZSkge1xyXG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY29uZmlybWVkIHN0YXJ0XCIpO1xyXG4gICAgaWYgKG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5TVEFMRSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFO1xyXG4gICAgb2JzZXJ2YWJsZS5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlBPU1NJQkxZX1NUQUxFKVxyXG4gICAgICAgICAgICBkLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5TVEFMRTtcclxuICAgICAgICBlbHNlIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEUgLy8gdGhpcyBoYXBwZW5zIGR1cmluZyBjb21wdXRpbmcgb2YgYGRgLCBqdXN0IGtlZXAgbG93ZXN0T2JzZXJ2ZXJTdGF0ZSB1cCB0byBkYXRlLlxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xyXG4gICAgfSk7XHJcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjb25maXJtZWQgZW5kXCIpO1xyXG59XHJcbi8vIFVzZWQgYnkgY29tcHV0ZWQgd2hlbiBpdHMgZGVwZW5kZW5jeSBjaGFuZ2VkLCBidXQgd2UgZG9uJ3Qgd2FuJ3QgdG8gaW1tZWRpYXRlbHkgcmVjb21wdXRlLlxyXG5mdW5jdGlvbiBwcm9wYWdhdGVNYXliZUNoYW5nZWQob2JzZXJ2YWJsZSkge1xyXG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwibWF5YmUgc3RhcnRcIik7XHJcbiAgICBpZiAob2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlICE9PSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5QT1NTSUJMWV9TVEFMRTtcclxuICAgIG9ic2VydmFibGUub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKSB7XHJcbiAgICAgICAgICAgIGQuZGVwZW5kZW5jaWVzU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlBPU1NJQkxZX1NUQUxFO1xyXG4gICAgICAgICAgICBpZiAoZC5pc1RyYWNpbmcgIT09IFRyYWNlTW9kZS5OT05FKSB7XHJcbiAgICAgICAgICAgICAgICBsb2dUcmFjZUluZm8oZCwgb2JzZXJ2YWJsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZC5vbkJlY29tZVN0YWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJtYXliZSBlbmRcIik7XHJcbn1cclxuZnVuY3Rpb24gbG9nVHJhY2VJbmZvKGRlcml2YXRpb24sIG9ic2VydmFibGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiW21vYngudHJhY2VdICdcIiArIGRlcml2YXRpb24ubmFtZSArIFwiJyBpcyBpbnZhbGlkYXRlZCBkdWUgdG8gYSBjaGFuZ2UgaW46ICdcIiArIG9ic2VydmFibGUubmFtZSArIFwiJ1wiKTtcclxuICAgIGlmIChkZXJpdmF0aW9uLmlzVHJhY2luZyA9PT0gVHJhY2VNb2RlLkJSRUFLKSB7XHJcbiAgICAgICAgdmFyIGxpbmVzID0gW107XHJcbiAgICAgICAgcHJpbnREZXBUcmVlKGdldERlcGVuZGVuY3lUcmVlKGRlcml2YXRpb24pLCBsaW5lcywgMSk7XHJcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgbmV3IEZ1bmN0aW9uKFwiZGVidWdnZXI7XFxuLypcXG5UcmFjaW5nICdcIiArIGRlcml2YXRpb24ubmFtZSArIFwiJ1xcblxcbllvdSBhcmUgZW50ZXJpbmcgdGhpcyBicmVhayBwb2ludCBiZWNhdXNlIGRlcml2YXRpb24gJ1wiICsgZGVyaXZhdGlvbi5uYW1lICsgXCInIGlzIGJlaW5nIHRyYWNlZCBhbmQgJ1wiICsgb2JzZXJ2YWJsZS5uYW1lICsgXCInIGlzIG5vdyBmb3JjaW5nIGl0IHRvIHVwZGF0ZS5cXG5KdXN0IGZvbGxvdyB0aGUgc3RhY2t0cmFjZSB5b3Ugc2hvdWxkIG5vdyBzZWUgaW4gdGhlIGRldnRvb2xzIHRvIHNlZSBwcmVjaXNlbHkgd2hhdCBwaWVjZSBvZiB5b3VyIGNvZGUgaXMgY2F1c2luZyB0aGlzIHVwZGF0ZVxcblRoZSBzdGFja2ZyYW1lIHlvdSBhcmUgbG9va2luZyBmb3IgaXMgYXQgbGVhc3QgfjYtOCBzdGFjay1mcmFtZXMgdXAuXFxuXFxuXCIgKyAoZGVyaXZhdGlvbiBpbnN0YW5jZW9mIENvbXB1dGVkVmFsdWUgPyBkZXJpdmF0aW9uLmRlcml2YXRpb24udG9TdHJpbmcoKS5yZXBsYWNlKC9bKl1cXC8vZywgXCIvXCIpIDogXCJcIikgKyBcIlxcblxcblRoZSBkZXBlbmRlbmNpZXMgZm9yIHRoaXMgZGVyaXZhdGlvbiBhcmU6XFxuXFxuXCIgKyBsaW5lcy5qb2luKFwiXFxuXCIpICsgXCJcXG4qL1xcbiAgICBcIikoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBwcmludERlcFRyZWUodHJlZSwgbGluZXMsIGRlcHRoKSB7XHJcbiAgICBpZiAobGluZXMubGVuZ3RoID49IDEwMDApIHtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiKGFuZCBtYW55IG1vcmUpXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxpbmVzLnB1c2goXCJcIiArIG5ldyBBcnJheShkZXB0aCkuam9pbihcIlxcdFwiKSArIHRyZWUubmFtZSk7IC8vIE1XRTogbm90IHRoZSBmYXN0ZXN0LCBidXQgdGhlIGVhc2llc3Qgd2F5IDopXHJcbiAgICBpZiAodHJlZS5kZXBlbmRlbmNpZXMpXHJcbiAgICAgICAgdHJlZS5kZXBlbmRlbmNpZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIHByaW50RGVwVHJlZShjaGlsZCwgbGluZXMsIGRlcHRoICsgMSk7IH0pO1xyXG59XG5cbnZhciBSZWFjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlYWN0aW9uKG5hbWUsIG9uSW52YWxpZGF0ZSwgZXJyb3JIYW5kbGVyLCByZXF1aXJlc09ic2VydmFibGUpIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIlJlYWN0aW9uQFwiICsgZ2V0TmV4dElkKCk7IH1cclxuICAgICAgICBpZiAocmVxdWlyZXNPYnNlcnZhYmxlID09PSB2b2lkIDApIHsgcmVxdWlyZXNPYnNlcnZhYmxlID0gZmFsc2U7IH1cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMub25JbnZhbGlkYXRlID0gb25JbnZhbGlkYXRlO1xyXG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyID0gZXJyb3JIYW5kbGVyO1xyXG4gICAgICAgIHRoaXMucmVxdWlyZXNPYnNlcnZhYmxlID0gcmVxdWlyZXNPYnNlcnZhYmxlO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2aW5nID0gW107IC8vIG5vZGVzIHdlIGFyZSBsb29raW5nIGF0LiBPdXIgdmFsdWUgZGVwZW5kcyBvbiB0aGVzZSBub2Rlc1xyXG4gICAgICAgIHRoaXMubmV3T2JzZXJ2aW5nID0gW107XHJcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HO1xyXG4gICAgICAgIHRoaXMuZGlmZlZhbHVlID0gMDtcclxuICAgICAgICB0aGlzLnJ1bklkID0gMDtcclxuICAgICAgICB0aGlzLnVuYm91bmREZXBzQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX19tYXBpZCA9IFwiI1wiICsgZ2V0TmV4dElkKCk7XHJcbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5faXNTY2hlZHVsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9pc1RyYWNrUGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2lzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNUcmFjaW5nID0gVHJhY2VNb2RlLk5PTkU7XHJcbiAgICB9XHJcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUub25CZWNvbWVTdGFsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCk7XHJcbiAgICB9O1xyXG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNTY2hlZHVsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5faXNTY2hlZHVsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBnbG9iYWxTdGF0ZS5wZW5kaW5nUmVhY3Rpb25zLnB1c2godGhpcyk7XHJcbiAgICAgICAgICAgIHJ1blJlYWN0aW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUuaXNTY2hlZHVsZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2NoZWR1bGVkO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogaW50ZXJuYWwsIHVzZSBzY2hlZHVsZSgpIGlmIHlvdSBpbnRlbmQgdG8ga2ljayBvZmYgYSByZWFjdGlvblxyXG4gICAgICovXHJcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUucnVuUmVhY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgc3RhcnRCYXRjaCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9pc1NjaGVkdWxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29tcHV0ZSh0aGlzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNUcmFja1BlbmRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSW52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc1RyYWNrUGVuZGluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NweUVuYWJsZWQoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25JbnZhbGlkYXRlIGRpZG4ndCB0cmlnZ2VyIHRyYWNrIHJpZ2h0IGF3YXkuLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHlSZXBvcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzY2hlZHVsZWQtcmVhY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVuZEJhdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlYWN0aW9uLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uIChmbikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oXCJSZWFjdGlvbiBhbHJlYWR5IGRpc3Bvc2VkXCIpIC8vIE5vdGU6IE5vdCBhIHdhcm5pbmcgLyBlcnJvciBpbiBtb2J4IDQgZWl0aGVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXJ0QmF0Y2goKTtcclxuICAgICAgICB2YXIgbm90aWZ5ID0gaXNTcHlFbmFibGVkKCk7XHJcbiAgICAgICAgdmFyIHN0YXJ0VGltZTtcclxuICAgICAgICBpZiAobm90aWZ5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInJlYWN0aW9uXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2lzUnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRyYWNrRGVyaXZlZEZ1bmN0aW9uKHRoaXMsIGZuLCB1bmRlZmluZWQpO1xyXG4gICAgICAgIHRoaXMuX2lzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2lzVHJhY2tQZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xyXG4gICAgICAgICAgICAvLyBkaXNwb3NlZCBkdXJpbmcgbGFzdCBydW4uIENsZWFuIHVwIGV2ZXJ5dGhpbmcgdGhhdCB3YXMgYm91bmQgYWZ0ZXIgdGhlIGRpc3Bvc2UgY2FsbC5cclxuICAgICAgICAgICAgY2xlYXJPYnNlcnZpbmcodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0NhdWdodEV4Y2VwdGlvbihyZXN1bHQpKVxyXG4gICAgICAgICAgICB0aGlzLnJlcG9ydEV4Y2VwdGlvbkluRGVyaXZhdGlvbihyZXN1bHQuY2F1c2UpO1xyXG4gICAgICAgIGlmIChub3RpZnkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHNweVJlcG9ydEVuZCh7XHJcbiAgICAgICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpIC0gc3RhcnRUaW1lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbmRCYXRjaCgpO1xyXG4gICAgfTtcclxuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5yZXBvcnRFeGNlcHRpb25JbkRlcml2YXRpb24gPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLmVycm9ySGFuZGxlcikge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlcihlcnJvciwgdGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdsb2JhbFN0YXRlLmRpc2FibGVFcnJvckJvdW5kYXJpZXMpXHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gXCJbbW9ieF0gRW5jb3VudGVyZWQgYW4gdW5jYXVnaHQgZXhjZXB0aW9uIHRoYXQgd2FzIHRocm93biBieSBhIHJlYWN0aW9uIG9yIG9ic2VydmVyIGNvbXBvbmVudCwgaW46ICdcIiArIHRoaXMgKyBcIidcIjtcclxuICAgICAgICBpZiAoZ2xvYmFsU3RhdGUuc3VwcHJlc3NSZWFjdGlvbkVycm9ycykge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gKGVycm9yIGluIHJlYWN0aW9uICdcIiArIHRoaXMubmFtZSArIFwiJyBzdXBwcmVzc2VkLCBmaXggZXJyb3Igb2YgY2F1c2luZyBhY3Rpb24gYmVsb3cpXCIpOyAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSwgZXJyb3IpO1xyXG4gICAgICAgICAgICAvKiogSWYgZGVidWdnaW5nIGJyb3VnaHQgeW91IGhlcmUsIHBsZWFzZSwgcmVhZCB0aGUgYWJvdmUgbWVzc2FnZSA6LSkuIFRueCEgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzU3B5RW5hYmxlZCgpKSB7XHJcbiAgICAgICAgICAgIHNweVJlcG9ydCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCIgKyBlcnJvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYoZXJyb3IsIF90aGlzKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9pc1J1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIGRpc3Bvc2VkIHdoaWxlIHJ1bm5pbmcsIGNsZWFuIHVwIGxhdGVyLiBNYXliZSBub3Qgb3B0aW1hbCwgYnV0IHJhcmUgY2FzZVxyXG4gICAgICAgICAgICAgICAgc3RhcnRCYXRjaCgpO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJPYnNlcnZpbmcodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBlbmRCYXRjaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5nZXREaXNwb3NlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgciA9IHRoaXMuZGlzcG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHJbJG1vYnhdID0gdGhpcztcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH07XHJcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiUmVhY3Rpb25bXCIgKyB0aGlzLm5hbWUgKyBcIl1cIjtcclxuICAgIH07XHJcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUudHJhY2UgPSBmdW5jdGlvbiAoZW50ZXJCcmVha1BvaW50KSB7XHJcbiAgICAgICAgaWYgKGVudGVyQnJlYWtQb2ludCA9PT0gdm9pZCAwKSB7IGVudGVyQnJlYWtQb2ludCA9IGZhbHNlOyB9XHJcbiAgICAgICAgdHJhY2UodGhpcywgZW50ZXJCcmVha1BvaW50KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVhY3Rpb247XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIG9uUmVhY3Rpb25FcnJvcihoYW5kbGVyKSB7XHJcbiAgICBnbG9iYWxTdGF0ZS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMucHVzaChoYW5kbGVyKTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGlkeCA9IGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xyXG4gICAgICAgIGlmIChpZHggPj0gMClcclxuICAgICAgICAgICAgZ2xvYmFsU3RhdGUuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogTWFnaWMgbnVtYmVyIGFsZXJ0IVxyXG4gKiBEZWZpbmVzIHdpdGhpbiBob3cgbWFueSB0aW1lcyBhIHJlYWN0aW9uIGlzIGFsbG93ZWQgdG8gcmUtdHJpZ2dlciBpdHNlbGZcclxuICogdW50aWwgaXQgaXMgYXNzdW1lZCB0aGF0IHRoaXMgaXMgZ29ubmEgYmUgYSBuZXZlciBlbmRpbmcgbG9vcC4uLlxyXG4gKi9cclxudmFyIE1BWF9SRUFDVElPTl9JVEVSQVRJT05TID0gMTAwO1xyXG52YXIgcmVhY3Rpb25TY2hlZHVsZXIgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZigpOyB9O1xyXG5mdW5jdGlvbiBydW5SZWFjdGlvbnMoKSB7XHJcbiAgICAvLyBUcmFtcG9saW5pbmcsIGlmIHJ1blJlYWN0aW9ucyBhcmUgYWxyZWFkeSBydW5uaW5nLCBuZXcgcmVhY3Rpb25zIHdpbGwgYmUgcGlja2VkIHVwXHJcbiAgICBpZiAoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAgfHwgZ2xvYmFsU3RhdGUuaXNSdW5uaW5nUmVhY3Rpb25zKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIHJlYWN0aW9uU2NoZWR1bGVyKHJ1blJlYWN0aW9uc0hlbHBlcik7XHJcbn1cclxuZnVuY3Rpb24gcnVuUmVhY3Rpb25zSGVscGVyKCkge1xyXG4gICAgZ2xvYmFsU3RhdGUuaXNSdW5uaW5nUmVhY3Rpb25zID0gdHJ1ZTtcclxuICAgIHZhciBhbGxSZWFjdGlvbnMgPSBnbG9iYWxTdGF0ZS5wZW5kaW5nUmVhY3Rpb25zO1xyXG4gICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xyXG4gICAgLy8gV2hpbGUgcnVubmluZyByZWFjdGlvbnMsIG5ldyByZWFjdGlvbnMgbWlnaHQgYmUgdHJpZ2dlcmVkLlxyXG4gICAgLy8gSGVuY2Ugd2Ugd29yayB3aXRoIHR3byB2YXJpYWJsZXMgYW5kIGNoZWNrIHdoZXRoZXJcclxuICAgIC8vIHdlIGNvbnZlcmdlIHRvIG5vIHJlbWFpbmluZyByZWFjdGlvbnMgYWZ0ZXIgYSB3aGlsZS5cclxuICAgIHdoaWxlIChhbGxSZWFjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmICgrK2l0ZXJhdGlvbnMgPT09IE1BWF9SRUFDVElPTl9JVEVSQVRJT05TKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWFjdGlvbiBkb2Vzbid0IGNvbnZlcmdlIHRvIGEgc3RhYmxlIHN0YXRlIGFmdGVyIFwiICsgTUFYX1JFQUNUSU9OX0lURVJBVElPTlMgKyBcIiBpdGVyYXRpb25zLlwiICtcclxuICAgICAgICAgICAgICAgIChcIiBQcm9iYWJseSB0aGVyZSBpcyBhIGN5Y2xlIGluIHRoZSByZWFjdGl2ZSBmdW5jdGlvbjogXCIgKyBhbGxSZWFjdGlvbnNbMF0pKTtcclxuICAgICAgICAgICAgYWxsUmVhY3Rpb25zLnNwbGljZSgwKTsgLy8gY2xlYXIgcmVhY3Rpb25zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZW1haW5pbmdSZWFjdGlvbnMgPSBhbGxSZWFjdGlvbnMuc3BsaWNlKDApO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcmVtYWluaW5nUmVhY3Rpb25zLmxlbmd0aDsgaSA8IGw7IGkrKylcclxuICAgICAgICAgICAgcmVtYWluaW5nUmVhY3Rpb25zW2ldLnJ1blJlYWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBnbG9iYWxTdGF0ZS5pc1J1bm5pbmdSZWFjdGlvbnMgPSBmYWxzZTtcclxufVxyXG52YXIgaXNSZWFjdGlvbiA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJSZWFjdGlvblwiLCBSZWFjdGlvbik7XHJcbmZ1bmN0aW9uIHNldFJlYWN0aW9uU2NoZWR1bGVyKGZuKSB7XHJcbiAgICB2YXIgYmFzZVNjaGVkdWxlciA9IHJlYWN0aW9uU2NoZWR1bGVyO1xyXG4gICAgcmVhY3Rpb25TY2hlZHVsZXIgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZm4oZnVuY3Rpb24gKCkgeyByZXR1cm4gYmFzZVNjaGVkdWxlcihmKTsgfSk7IH07XHJcbn1cblxuZnVuY3Rpb24gaXNTcHlFbmFibGVkKCkge1xyXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhIWdsb2JhbFN0YXRlLnNweUxpc3RlbmVycy5sZW5ndGg7XHJcbn1cclxuZnVuY3Rpb24gc3B5UmVwb3J0KGV2ZW50KSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgIHJldHVybjsgLy8gZGVhZCBjb2RlIGVsaW1pbmF0aW9uIGNhbiBkbyB0aGUgcmVzdFxyXG4gICAgaWYgKCFnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIHZhciBsaXN0ZW5lcnMgPSBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnM7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspXHJcbiAgICAgICAgbGlzdGVuZXJzW2ldKGV2ZW50KTtcclxufVxyXG5mdW5jdGlvbiBzcHlSZXBvcnRTdGFydChldmVudCkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICByZXR1cm47XHJcbiAgICB2YXIgY2hhbmdlID0gX19hc3NpZ24oe30sIGV2ZW50LCB7IHNweVJlcG9ydFN0YXJ0OiB0cnVlIH0pO1xyXG4gICAgc3B5UmVwb3J0KGNoYW5nZSk7XHJcbn1cclxudmFyIEVORF9FVkVOVCA9IHsgc3B5UmVwb3J0RW5kOiB0cnVlIH07XHJcbmZ1bmN0aW9uIHNweVJlcG9ydEVuZChjaGFuZ2UpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgaWYgKGNoYW5nZSlcclxuICAgICAgICBzcHlSZXBvcnQoX19hc3NpZ24oe30sIGNoYW5nZSwgeyBzcHlSZXBvcnRFbmQ6IHRydWUgfSkpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHNweVJlcG9ydChFTkRfRVZFTlQpO1xyXG59XHJcbmZ1bmN0aW9uIHNweShsaXN0ZW5lcikge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4LnNweV0gSXMgYSBuby1vcCBpbiBwcm9kdWN0aW9uIGJ1aWxkc1wiKTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgIHJldHVybiBvbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzID0gZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobCkgeyByZXR1cm4gbCAhPT0gbGlzdGVuZXI7IH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIGRvbnRSZWFzc2lnbkZpZWxkcygpIHtcclxuICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiQGFjdGlvbiBmaWVsZHMgYXJlIG5vdCByZWFzc2lnbmFibGVcIik7XHJcbn1cclxuZnVuY3Rpb24gbmFtZWRBY3Rpb25EZWNvcmF0b3IobmFtZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3AsIGRlc2NyaXB0b3IpIHtcclxuICAgICAgICBpZiAoZGVzY3JpcHRvcikge1xyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGRlc2NyaXB0b3IuZ2V0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKFwiQGFjdGlvbiBjYW5ub3QgYmUgdXNlZCB3aXRoIGdldHRlcnNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gYmFiZWwgLyB0eXBlc2NyaXB0XHJcbiAgICAgICAgICAgIC8vIEBhY3Rpb24gbWV0aG9kKCkgeyB9XHJcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0eXBlc2NyaXB0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjcmVhdGVBY3Rpb24obmFtZSwgZGVzY3JpcHRvci52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlIC8vIGZvciB0eXBlc2NyaXB0LCB0aGlzIG11c3QgYmUgd3JpdGFibGUsIG90aGVyd2lzZSBpdCBjYW5ub3QgaW5oZXJpdCA6LyAoc2VlIGluaGVyaXRhYmxlIGFjdGlvbnMgdGVzdClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gYmFiZWwgb25seTogQGFjdGlvbiBtZXRob2QgPSAoKSA9PiB7fVxyXG4gICAgICAgICAgICB2YXIgaW5pdGlhbGl6ZXJfMSA9IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOLkI6IHdlIGNhbid0IGltbWVkaWF0ZWx5IGludm9rZSBpbml0aWFsaXplcjsgdGhpcyB3b3VsZCBiZSB3cm9uZ1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24obmFtZSwgaW5pdGlhbGl6ZXJfMS5jYWxsKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYm91bmQgaW5zdGFuY2UgbWV0aG9kc1xyXG4gICAgICAgIHJldHVybiBhY3Rpb25GaWVsZERlY29yYXRvcihuYW1lKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBhY3Rpb25GaWVsZERlY29yYXRvcihuYW1lKSB7XHJcbiAgICAvLyBTaW1wbGUgcHJvcGVydHkgdGhhdCB3cml0ZXMgb24gZmlyc3QgaW52b2NhdGlvbiB0byB0aGUgY3VycmVudCBpbnN0YW5jZVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3AsIGRlc2NyaXB0b3IpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wLCB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGFkZEhpZGRlblByb3AodGhpcywgcHJvcCwgYWN0aW9uKG5hbWUsIHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gYm91bmRBY3Rpb25EZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IsIGFwcGx5VG9JbnN0YW5jZSkge1xyXG4gICAgaWYgKGFwcGx5VG9JbnN0YW5jZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGRlZmluZUJvdW5kQWN0aW9uKHRhcmdldCwgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yLnZhbHVlKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChkZXNjcmlwdG9yKSB7XHJcbiAgICAgICAgLy8gaWYgKGRlc2NyaXB0b3IudmFsdWUpXHJcbiAgICAgICAgLy8gVHlwZXNjcmlwdCAvIEJhYmVsOiBAYWN0aW9uLmJvdW5kIG1ldGhvZCgpIHsgfVxyXG4gICAgICAgIC8vIGFsc286IGJhYmVsIEBhY3Rpb24uYm91bmQgbWV0aG9kID0gKCkgPT4ge31cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRlZmluZUJvdW5kQWN0aW9uKHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvci52YWx1ZSB8fCBkZXNjcmlwdG9yLmluaXRpYWxpemVyLmNhbGwodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbcHJvcGVydHlOYW1lXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBkb250UmVhc3NpZ25GaWVsZHNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gZmllbGQgZGVjb3JhdG9yIFR5cGVzY3JpcHQgQGFjdGlvbi5ib3VuZCBtZXRob2QgPSAoKSA9PiB7fVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICBkZWZpbmVCb3VuZEFjdGlvbih0aGlzLCBwcm9wZXJ0eU5hbWUsIHYpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxuXG52YXIgYWN0aW9uID0gZnVuY3Rpb24gYWN0aW9uKGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQpIHtcclxuICAgIC8vIGFjdGlvbihmbigpIHt9KVxyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZzEgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICByZXR1cm4gY3JlYXRlQWN0aW9uKGFyZzEubmFtZSB8fCBcIjx1bm5hbWVkIGFjdGlvbj5cIiwgYXJnMSk7XHJcbiAgICAvLyBhY3Rpb24oXCJuYW1lXCIsIGZuKCkge30pXHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgYXJnMiA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24oYXJnMSwgYXJnMik7XHJcbiAgICAvLyBAYWN0aW9uKFwibmFtZVwiKSBmbigpIHt9XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnMSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gbmFtZWRBY3Rpb25EZWNvcmF0b3IoYXJnMSk7XHJcbiAgICAvLyBAYWN0aW9uIGZuKCkge31cclxuICAgIGlmIChhcmc0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgLy8gYXBwbHkgdG8gaW5zdGFuY2UgaW1tZWRpYXRlbHlcclxuICAgICAgICBhZGRIaWRkZW5Qcm9wKGFyZzEsIGFyZzIsIGNyZWF0ZUFjdGlvbihhcmcxLm5hbWUgfHwgYXJnMiwgYXJnMy52YWx1ZSwgdGhpcykpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWVkQWN0aW9uRGVjb3JhdG9yKGFyZzIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbn07XHJcbmFjdGlvbi5ib3VuZCA9IGJvdW5kQWN0aW9uRGVjb3JhdG9yO1xyXG5mdW5jdGlvbiBydW5JbkFjdGlvbihhcmcxLCBhcmcyKSB7XHJcbiAgICB2YXIgYWN0aW9uTmFtZSA9IHR5cGVvZiBhcmcxID09PSBcInN0cmluZ1wiID8gYXJnMSA6IGFyZzEubmFtZSB8fCBcIjx1bm5hbWVkIGFjdGlvbj5cIjtcclxuICAgIHZhciBmbiA9IHR5cGVvZiBhcmcxID09PSBcImZ1bmN0aW9uXCIgPyBhcmcxIDogYXJnMjtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICBpbnZhcmlhbnQodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIgJiYgZm4ubGVuZ3RoID09PSAwLCBcImBydW5JbkFjdGlvbmAgZXhwZWN0cyBhIGZ1bmN0aW9uIHdpdGhvdXQgYXJndW1lbnRzXCIpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uTmFtZSAhPT0gXCJzdHJpbmdcIiB8fCAhYWN0aW9uTmFtZSlcclxuICAgICAgICAgICAgZmFpbChcImFjdGlvbnMgc2hvdWxkIGhhdmUgdmFsaWQgbmFtZXMsIGdvdDogJ1wiICsgYWN0aW9uTmFtZSArIFwiJ1wiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBleGVjdXRlQWN0aW9uKGFjdGlvbk5hbWUsIGZuLCB0aGlzLCB1bmRlZmluZWQpO1xyXG59XHJcbmZ1bmN0aW9uIGlzQWN0aW9uKHRoaW5nKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSBcImZ1bmN0aW9uXCIgJiYgdGhpbmcuaXNNb2J4QWN0aW9uID09PSB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIGRlZmluZUJvdW5kQWN0aW9uKHRhcmdldCwgcHJvcGVydHlOYW1lLCBmbikge1xyXG4gICAgYWRkSGlkZGVuUHJvcCh0YXJnZXQsIHByb3BlcnR5TmFtZSwgY3JlYXRlQWN0aW9uKHByb3BlcnR5TmFtZSwgZm4uYmluZCh0YXJnZXQpKSk7XHJcbn1cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuYW1lZCByZWFjdGl2ZSB2aWV3IGFuZCBrZWVwcyBpdCBhbGl2ZSwgc28gdGhhdCB0aGUgdmlldyBpcyBhbHdheXNcclxuICogdXBkYXRlZCBpZiBvbmUgb2YgdGhlIGRlcGVuZGVuY2llcyBjaGFuZ2VzLCBldmVuIHdoZW4gdGhlIHZpZXcgaXMgbm90IGZ1cnRoZXIgdXNlZCBieSBzb21ldGhpbmcgZWxzZS5cclxuICogQHBhcmFtIHZpZXcgVGhlIHJlYWN0aXZlIHZpZXdcclxuICogQHJldHVybnMgZGlzcG9zZXIgZnVuY3Rpb24sIHdoaWNoIGNhbiBiZSB1c2VkIHRvIHN0b3AgdGhlIHZpZXcgZnJvbSBiZWluZyB1cGRhdGVkIGluIHRoZSBmdXR1cmUuXHJcbiAqL1xyXG5mdW5jdGlvbiBhdXRvcnVuKHZpZXcsIG9wdHMpIHtcclxuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IEVNUFRZX09CSkVDVDsgfVxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgdmlldyA9PT0gXCJmdW5jdGlvblwiLCBcIkF1dG9ydW4gZXhwZWN0cyBhIGZ1bmN0aW9uIGFzIGZpcnN0IGFyZ3VtZW50XCIpO1xyXG4gICAgICAgIGludmFyaWFudChpc0FjdGlvbih2aWV3KSA9PT0gZmFsc2UsIFwiQXV0b3J1biBkb2VzIG5vdCBhY2NlcHQgYWN0aW9ucyBzaW5jZSBhY3Rpb25zIGFyZSB1bnRyYWNrYWJsZVwiKTtcclxuICAgIH1cclxuICAgIHZhciBuYW1lID0gKG9wdHMgJiYgb3B0cy5uYW1lKSB8fCB2aWV3Lm5hbWUgfHwgXCJBdXRvcnVuQFwiICsgZ2V0TmV4dElkKCk7XHJcbiAgICB2YXIgcnVuU3luYyA9ICFvcHRzLnNjaGVkdWxlciAmJiAhb3B0cy5kZWxheTtcclxuICAgIHZhciByZWFjdGlvbjtcclxuICAgIGlmIChydW5TeW5jKSB7XHJcbiAgICAgICAgLy8gbm9ybWFsIGF1dG9ydW5cclxuICAgICAgICByZWFjdGlvbiA9IG5ldyBSZWFjdGlvbihuYW1lLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhY2socmVhY3Rpb25SdW5uZXIpO1xyXG4gICAgICAgIH0sIG9wdHMub25FcnJvciwgb3B0cy5yZXF1aXJlc09ic2VydmFibGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIHNjaGVkdWxlcl8xID0gY3JlYXRlU2NoZWR1bGVyRnJvbU9wdGlvbnMob3B0cyk7XHJcbiAgICAgICAgLy8gZGVib3VuY2VkIGF1dG9ydW5cclxuICAgICAgICB2YXIgaXNTY2hlZHVsZWRfMSA9IGZhbHNlO1xyXG4gICAgICAgIHJlYWN0aW9uID0gbmV3IFJlYWN0aW9uKG5hbWUsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFpc1NjaGVkdWxlZF8xKSB7XHJcbiAgICAgICAgICAgICAgICBpc1NjaGVkdWxlZF8xID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNjaGVkdWxlcl8xKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1NjaGVkdWxlZF8xID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWFjdGlvbi5pc0Rpc3Bvc2VkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdGlvbi50cmFjayhyZWFjdGlvblJ1bm5lcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIG9wdHMub25FcnJvciwgb3B0cy5yZXF1aXJlc09ic2VydmFibGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVhY3Rpb25SdW5uZXIoKSB7XHJcbiAgICAgICAgdmlldyhyZWFjdGlvbik7XHJcbiAgICB9XHJcbiAgICByZWFjdGlvbi5zY2hlZHVsZSgpO1xyXG4gICAgcmV0dXJuIHJlYWN0aW9uLmdldERpc3Bvc2VyKCk7XHJcbn1cclxudmFyIHJ1biA9IGZ1bmN0aW9uIChmKSB7IHJldHVybiBmKCk7IH07XHJcbmZ1bmN0aW9uIGNyZWF0ZVNjaGVkdWxlckZyb21PcHRpb25zKG9wdHMpIHtcclxuICAgIHJldHVybiBvcHRzLnNjaGVkdWxlclxyXG4gICAgICAgID8gb3B0cy5zY2hlZHVsZXJcclxuICAgICAgICA6IG9wdHMuZGVsYXlcclxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoZikgeyByZXR1cm4gc2V0VGltZW91dChmLCBvcHRzLmRlbGF5KTsgfVxyXG4gICAgICAgICAgICA6IHJ1bjtcclxufVxyXG5mdW5jdGlvbiByZWFjdGlvbihleHByZXNzaW9uLCBlZmZlY3QsIG9wdHMpIHtcclxuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IEVNUFRZX09CSkVDVDsgfVxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJmdW5jdGlvblwiLCBcIkZpcnN0IGFyZ3VtZW50IHRvIHJlYWN0aW9uIHNob3VsZCBiZSBhIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgIGludmFyaWFudCh0eXBlb2Ygb3B0cyA9PT0gXCJvYmplY3RcIiwgXCJUaGlyZCBhcmd1bWVudCBvZiByZWFjdGlvbnMgc2hvdWxkIGJlIGFuIG9iamVjdFwiKTtcclxuICAgIH1cclxuICAgIHZhciBuYW1lID0gb3B0cy5uYW1lIHx8IFwiUmVhY3Rpb25AXCIgKyBnZXROZXh0SWQoKTtcclxuICAgIHZhciBlZmZlY3RBY3Rpb24gPSBhY3Rpb24obmFtZSwgb3B0cy5vbkVycm9yID8gd3JhcEVycm9ySGFuZGxlcihvcHRzLm9uRXJyb3IsIGVmZmVjdCkgOiBlZmZlY3QpO1xyXG4gICAgdmFyIHJ1blN5bmMgPSAhb3B0cy5zY2hlZHVsZXIgJiYgIW9wdHMuZGVsYXk7XHJcbiAgICB2YXIgc2NoZWR1bGVyID0gY3JlYXRlU2NoZWR1bGVyRnJvbU9wdGlvbnMob3B0cyk7XHJcbiAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcclxuICAgIHZhciBpc1NjaGVkdWxlZCA9IGZhbHNlO1xyXG4gICAgdmFyIHZhbHVlO1xyXG4gICAgdmFyIGVxdWFscyA9IG9wdHMuY29tcGFyZVN0cnVjdHVyYWxcclxuICAgICAgICA/IGNvbXBhcmVyLnN0cnVjdHVyYWxcclxuICAgICAgICA6IG9wdHMuZXF1YWxzIHx8IGNvbXBhcmVyLmRlZmF1bHQ7XHJcbiAgICB2YXIgciA9IG5ldyBSZWFjdGlvbihuYW1lLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGZpcnN0VGltZSB8fCBydW5TeW5jKSB7XHJcbiAgICAgICAgICAgIHJlYWN0aW9uUnVubmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFpc1NjaGVkdWxlZCkge1xyXG4gICAgICAgICAgICBpc1NjaGVkdWxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHNjaGVkdWxlcihyZWFjdGlvblJ1bm5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgb3B0cy5vbkVycm9yLCBvcHRzLnJlcXVpcmVzT2JzZXJ2YWJsZSk7XHJcbiAgICBmdW5jdGlvbiByZWFjdGlvblJ1bm5lcigpIHtcclxuICAgICAgICBpc1NjaGVkdWxlZCA9IGZhbHNlOyAvLyBROiBtb3ZlIGludG8gcmVhY3Rpb24gcnVubmVyP1xyXG4gICAgICAgIGlmIChyLmlzRGlzcG9zZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIHIudHJhY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbmV4dFZhbHVlID0gZXhwcmVzc2lvbihyKTtcclxuICAgICAgICAgICAgY2hhbmdlZCA9IGZpcnN0VGltZSB8fCAhZXF1YWxzKHZhbHVlLCBuZXh0VmFsdWUpO1xyXG4gICAgICAgICAgICB2YWx1ZSA9IG5leHRWYWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZmlyc3RUaW1lICYmIG9wdHMuZmlyZUltbWVkaWF0ZWx5KVxyXG4gICAgICAgICAgICBlZmZlY3RBY3Rpb24odmFsdWUsIHIpO1xyXG4gICAgICAgIGlmICghZmlyc3RUaW1lICYmIGNoYW5nZWQgPT09IHRydWUpXHJcbiAgICAgICAgICAgIGVmZmVjdEFjdGlvbih2YWx1ZSwgcik7XHJcbiAgICAgICAgaWYgKGZpcnN0VGltZSlcclxuICAgICAgICAgICAgZmlyc3RUaW1lID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByLnNjaGVkdWxlKCk7XHJcbiAgICByZXR1cm4gci5nZXREaXNwb3NlcigpO1xyXG59XHJcbmZ1bmN0aW9uIHdyYXBFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyLCBiYXNlRm4pIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJhc2VGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBlcnJvckhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XG5cbmZ1bmN0aW9uIG9uQmVjb21lT2JzZXJ2ZWQodGhpbmcsIGFyZzIsIGFyZzMpIHtcclxuICAgIHJldHVybiBpbnRlcmNlcHRIb29rKFwib25CZWNvbWVPYnNlcnZlZFwiLCB0aGluZywgYXJnMiwgYXJnMyk7XHJcbn1cclxuZnVuY3Rpb24gb25CZWNvbWVVbm9ic2VydmVkKHRoaW5nLCBhcmcyLCBhcmczKSB7XHJcbiAgICByZXR1cm4gaW50ZXJjZXB0SG9vayhcIm9uQmVjb21lVW5vYnNlcnZlZFwiLCB0aGluZywgYXJnMiwgYXJnMyk7XHJcbn1cclxuZnVuY3Rpb24gaW50ZXJjZXB0SG9vayhob29rLCB0aGluZywgYXJnMiwgYXJnMykge1xyXG4gICAgdmFyIGF0b20gPSB0eXBlb2YgYXJnMyA9PT0gXCJmdW5jdGlvblwiID8gZ2V0QXRvbSh0aGluZywgYXJnMikgOiBnZXRBdG9tKHRoaW5nKTtcclxuICAgIHZhciBjYiA9IHR5cGVvZiBhcmczID09PSBcImZ1bmN0aW9uXCIgPyBhcmczIDogYXJnMjtcclxuICAgIHZhciBsaXN0ZW5lcnNLZXkgPSBob29rICsgXCJMaXN0ZW5lcnNcIjtcclxuICAgIGlmIChhdG9tW2xpc3RlbmVyc0tleV0pIHtcclxuICAgICAgICBhdG9tW2xpc3RlbmVyc0tleV0uYWRkKGNiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGF0b21bbGlzdGVuZXJzS2V5XSA9IG5ldyBTZXQoW2NiXSk7XHJcbiAgICB9XHJcbiAgICB2YXIgb3JpZyA9IGF0b21baG9va107XHJcbiAgICBpZiAodHlwZW9mIG9yaWcgIT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgXCJOb3QgYW4gYXRvbSB0aGF0IGNhbiBiZSAodW4pb2JzZXJ2ZWRcIik7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBob29rTGlzdGVuZXJzID0gYXRvbVtsaXN0ZW5lcnNLZXldO1xyXG4gICAgICAgIGlmIChob29rTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIGhvb2tMaXN0ZW5lcnMuZGVsZXRlKGNiKTtcclxuICAgICAgICAgICAgaWYgKGhvb2tMaXN0ZW5lcnMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGF0b21bbGlzdGVuZXJzS2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cblxuZnVuY3Rpb24gY29uZmlndXJlKG9wdGlvbnMpIHtcclxuICAgIHZhciBlbmZvcmNlQWN0aW9ucyA9IG9wdGlvbnMuZW5mb3JjZUFjdGlvbnMsIGNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbiA9IG9wdGlvbnMuY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uLCBjb21wdXRlZENvbmZpZ3VyYWJsZSA9IG9wdGlvbnMuY29tcHV0ZWRDb25maWd1cmFibGUsIGRpc2FibGVFcnJvckJvdW5kYXJpZXMgPSBvcHRpb25zLmRpc2FibGVFcnJvckJvdW5kYXJpZXMsIHJlYWN0aW9uU2NoZWR1bGVyID0gb3B0aW9ucy5yZWFjdGlvblNjaGVkdWxlciwgcmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGUgPSBvcHRpb25zLnJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlLCBvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbiA9IG9wdGlvbnMub2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb247XHJcbiAgICBpZiAob3B0aW9ucy5pc29sYXRlR2xvYmFsU3RhdGUgPT09IHRydWUpIHtcclxuICAgICAgICBpc29sYXRlR2xvYmFsU3RhdGUoKTtcclxuICAgIH1cclxuICAgIGlmIChlbmZvcmNlQWN0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBlbmZvcmNlQWN0aW9ucyA9PT0gXCJib29sZWFuXCIgfHwgZW5mb3JjZUFjdGlvbnMgPT09IFwic3RyaWN0XCIpXHJcbiAgICAgICAgICAgIGRlcHJlY2F0ZWQoXCJEZXByZWNhdGVkIHZhbHVlIGZvciAnZW5mb3JjZUFjdGlvbnMnLCB1c2UgJ2ZhbHNlJyA9PiAnXFxcIm5ldmVyXFxcIicsICd0cnVlJyA9PiAnXFxcIm9ic2VydmVkXFxcIicsICdcXFwic3RyaWN0XFxcIicgPT4gXFxcIidhbHdheXMnXFxcIiBpbnN0ZWFkXCIpO1xyXG4gICAgICAgIHZhciBlYSA9IHZvaWQgMDtcclxuICAgICAgICBzd2l0Y2ggKGVuZm9yY2VBY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgY2FzZSBcIm9ic2VydmVkXCI6XHJcbiAgICAgICAgICAgICAgICBlYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgY2FzZSBcIm5ldmVyXCI6XHJcbiAgICAgICAgICAgICAgICBlYSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdHJpY3RcIjpcclxuICAgICAgICAgICAgY2FzZSBcImFsd2F5c1wiOlxyXG4gICAgICAgICAgICAgICAgZWEgPSBcInN0cmljdFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBmYWlsKFwiSW52YWxpZCB2YWx1ZSBmb3IgJ2VuZm9yY2VBY3Rpb25zJzogJ1wiICsgZW5mb3JjZUFjdGlvbnMgKyBcIicsIGV4cGVjdGVkICduZXZlcicsICdhbHdheXMnIG9yICdvYnNlcnZlZCdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdsb2JhbFN0YXRlLmVuZm9yY2VBY3Rpb25zID0gZWE7XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgPSBlYSA9PT0gdHJ1ZSB8fCBlYSA9PT0gXCJzdHJpY3RcIiA/IGZhbHNlIDogdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChjb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGdsb2JhbFN0YXRlLmNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbiA9ICEhY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBnbG9iYWxTdGF0ZS5yZWFjdGlvblJlcXVpcmVzT2JzZXJ2YWJsZSA9ICEhcmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGU7XHJcbiAgICB9XHJcbiAgICBpZiAob2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGdsb2JhbFN0YXRlLm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uID0gISFvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbjtcclxuICAgICAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHMgPSAhZ2xvYmFsU3RhdGUub2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb247XHJcbiAgICB9XHJcbiAgICBpZiAoY29tcHV0ZWRDb25maWd1cmFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGdsb2JhbFN0YXRlLmNvbXB1dGVkQ29uZmlndXJhYmxlID0gISFjb21wdXRlZENvbmZpZ3VyYWJsZTtcclxuICAgIH1cclxuICAgIGlmIChkaXNhYmxlRXJyb3JCb3VuZGFyaWVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoZGlzYWJsZUVycm9yQm91bmRhcmllcyA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV0FSTklORzogRGVidWcgZmVhdHVyZSBvbmx5LiBNb2JYIHdpbGwgTk9UIHJlY292ZXIgZnJvbSBlcnJvcnMgd2hlbiBgZGlzYWJsZUVycm9yQm91bmRhcmllc2AgaXMgZW5hYmxlZC5cIik7XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUuZGlzYWJsZUVycm9yQm91bmRhcmllcyA9ICEhZGlzYWJsZUVycm9yQm91bmRhcmllcztcclxuICAgIH1cclxuICAgIGlmIChyZWFjdGlvblNjaGVkdWxlcikge1xyXG4gICAgICAgIHNldFJlYWN0aW9uU2NoZWR1bGVyKHJlYWN0aW9uU2NoZWR1bGVyKTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBkZWNvcmF0ZSh0aGluZywgZGVjb3JhdG9ycykge1xyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgaW52YXJpYW50KGlzUGxhaW5PYmplY3QoZGVjb3JhdG9ycyksIFwiRGVjb3JhdG9ycyBzaG91bGQgYmUgYSBrZXkgdmFsdWUgbWFwXCIpO1xyXG4gICAgdmFyIHRhcmdldCA9IHR5cGVvZiB0aGluZyA9PT0gXCJmdW5jdGlvblwiID8gdGhpbmcucHJvdG90eXBlIDogdGhpbmc7XHJcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgdmFyIHByb3BlcnR5RGVjb3JhdG9ycyA9IGRlY29yYXRvcnNbcHJvcF07XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BlcnR5RGVjb3JhdG9ycykpIHtcclxuICAgICAgICAgICAgcHJvcGVydHlEZWNvcmF0b3JzID0gW3Byb3BlcnR5RGVjb3JhdG9yc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICBpbnZhcmlhbnQocHJvcGVydHlEZWNvcmF0b3JzLmV2ZXJ5KGZ1bmN0aW9uIChkZWNvcmF0b3IpIHsgcmV0dXJuIHR5cGVvZiBkZWNvcmF0b3IgPT09IFwiZnVuY3Rpb25cIjsgfSksIFwiRGVjb3JhdGU6IGV4cGVjdGVkIGEgZGVjb3JhdG9yIGZ1bmN0aW9uIG9yIGFycmF5IG9mIGRlY29yYXRvciBmdW5jdGlvbnMgZm9yICdcIiArIHByb3AgKyBcIidcIik7XHJcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcCk7XHJcbiAgICAgICAgdmFyIG5ld0Rlc2NyaXB0b3IgPSBwcm9wZXJ0eURlY29yYXRvcnMucmVkdWNlKGZ1bmN0aW9uIChhY2NEZXNjcmlwdG9yLCBkZWNvcmF0b3IpIHsgcmV0dXJuIGRlY29yYXRvcih0YXJnZXQsIHByb3AsIGFjY0Rlc2NyaXB0b3IpOyB9LCBkZXNjcmlwdG9yKTtcclxuICAgICAgICBpZiAobmV3RGVzY3JpcHRvcilcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcCwgbmV3RGVzY3JpcHRvcik7XHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIgcHJvcCBpbiBkZWNvcmF0b3JzKSB7XHJcbiAgICAgICAgX2xvb3BfMShwcm9wKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGluZztcclxufVxuXG5mdW5jdGlvbiBleHRlbmRPYnNlcnZhYmxlKHRhcmdldCwgcHJvcGVydGllcywgZGVjb3JhdG9ycywgb3B0aW9ucykge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGludmFyaWFudChhcmd1bWVudHMubGVuZ3RoID49IDIgJiYgYXJndW1lbnRzLmxlbmd0aCA8PSA0LCBcIidleHRlbmRPYnNlcnZhYmxlJyBleHBlY3RlZCAyLTQgYXJndW1lbnRzXCIpO1xyXG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgdGFyZ2V0ID09PSBcIm9iamVjdFwiLCBcIidleHRlbmRPYnNlcnZhYmxlJyBleHBlY3RzIGFuIG9iamVjdCBhcyBmaXJzdCBhcmd1bWVudFwiKTtcclxuICAgICAgICBpbnZhcmlhbnQoIWlzT2JzZXJ2YWJsZU1hcCh0YXJnZXQpLCBcIidleHRlbmRPYnNlcnZhYmxlJyBzaG91bGQgbm90IGJlIHVzZWQgb24gbWFwcywgdXNlIG1hcC5tZXJnZSBpbnN0ZWFkXCIpO1xyXG4gICAgfVxyXG4gICAgb3B0aW9ucyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB2YXIgZGVmYXVsdERlY29yYXRvciA9IGdldERlZmF1bHREZWNvcmF0b3JGcm9tT2JqZWN0T3B0aW9ucyhvcHRpb25zKTtcclxuICAgIGluaXRpYWxpemVJbnN0YW5jZSh0YXJnZXQpOyAvLyBGaXhlcyAjMTc0MFxyXG4gICAgYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCwgb3B0aW9ucy5uYW1lLCBkZWZhdWx0RGVjb3JhdG9yLmVuaGFuY2VyKTsgLy8gbWFrZSBzdXJlIG9iamVjdCBpcyBvYnNlcnZhYmxlLCBldmVuIHdpdGhvdXQgaW5pdGlhbCBwcm9wc1xyXG4gICAgaWYgKHByb3BlcnRpZXMpXHJcbiAgICAgICAgZXh0ZW5kT2JzZXJ2YWJsZU9iamVjdFdpdGhQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcGVydGllcywgZGVjb3JhdG9ycywgZGVmYXVsdERlY29yYXRvcik7XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcbmZ1bmN0aW9uIGdldERlZmF1bHREZWNvcmF0b3JGcm9tT2JqZWN0T3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucy5kZWZhdWx0RGVjb3JhdG9yIHx8IChvcHRpb25zLmRlZXAgPT09IGZhbHNlID8gcmVmRGVjb3JhdG9yIDogZGVlcERlY29yYXRvcik7XHJcbn1cclxuZnVuY3Rpb24gZXh0ZW5kT2JzZXJ2YWJsZU9iamVjdFdpdGhQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcGVydGllcywgZGVjb3JhdG9ycywgZGVmYXVsdERlY29yYXRvcikge1xyXG4gICAgdmFyIGVfMSwgX2EsIGVfMiwgX2I7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgaW52YXJpYW50KCFpc09ic2VydmFibGUocHJvcGVydGllcyksIFwiRXh0ZW5kaW5nIGFuIG9iamVjdCB3aXRoIGFub3RoZXIgb2JzZXJ2YWJsZSAob2JqZWN0KSBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgY29uc3RydWN0IGFuIGV4cGxpY2l0IHByb3BlcnR5bWFwLCB1c2luZyBgdG9KU2AgaWYgbmVlZC4gU2VlIGlzc3VlICM1NDBcIik7XHJcbiAgICAgICAgaWYgKGRlY29yYXRvcnMpIHtcclxuICAgICAgICAgICAgdmFyIGtleXMgPSBnZXRQbGFpbk9iamVjdEtleXMoZGVjb3JhdG9ycyk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXlzXzEgPSBfX3ZhbHVlcyhrZXlzKSwga2V5c18xXzEgPSBrZXlzXzEubmV4dCgpOyAha2V5c18xXzEuZG9uZTsga2V5c18xXzEgPSBrZXlzXzEubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNfMV8xLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBwcm9wZXJ0aWVzKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbChcIlRyeWluZyB0byBkZWNsYXJlIGEgZGVjb3JhdG9yIGZvciB1bnNwZWNpZmllZCBwcm9wZXJ0eSAnXCIgKyBzdHJpbmdpZnlLZXkoa2V5KSArIFwiJ1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleXNfMV8xICYmICFrZXlzXzFfMS5kb25lICYmIChfYSA9IGtleXNfMS5yZXR1cm4pKSBfYS5jYWxsKGtleXNfMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydEJhdGNoKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBrZXlzID0gZ2V0UGxhaW5PYmplY3RLZXlzKHByb3BlcnRpZXMpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleXNfMiA9IF9fdmFsdWVzKGtleXMpLCBrZXlzXzJfMSA9IGtleXNfMi5uZXh0KCk7ICFrZXlzXzJfMS5kb25lOyBrZXlzXzJfMSA9IGtleXNfMi5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzXzJfMS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm9wZXJ0aWVzLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNQbGFpbk9iamVjdChwcm9wZXJ0aWVzKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbChcIidleHRlbmRPYnNlcnZhYmUnIG9ubHkgYWNjZXB0cyBwbGFpbiBvYmplY3RzIGFzIHNlY29uZCBhcmd1bWVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwoXCInZXh0ZW5kT2JzZXJ2YWJsZScgY2FuIG9ubHkgYmUgdXNlZCB0byBpbnRyb2R1Y2UgbmV3IHByb3BlcnRpZXMuIFVzZSAnc2V0JyBvciAnZGVjb3JhdGUnIGluc3RlYWQuIFRoZSBwcm9wZXJ0eSAnXCIgKyBzdHJpbmdpZnlLZXkoa2V5KSArIFwiJyBhbHJlYWR5IGV4aXN0cyBvbiAnXCIgKyB0YXJnZXQgKyBcIidcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcHV0ZWQoZGVzY3JpcHRvci52YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwoXCJQYXNzaW5nIGEgJ2NvbXB1dGVkJyBhcyBpbml0aWFsIHByb3BlcnR5IHZhbHVlIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgYnkgZXh0ZW5kT2JzZXJ2YWJsZS4gVXNlIGEgZ2V0dGVyIG9yIGRlY29yYXRvciBpbnN0ZWFkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGRlY29yYXRvciA9IGRlY29yYXRvcnMgJiYga2V5IGluIGRlY29yYXRvcnNcclxuICAgICAgICAgICAgICAgICAgICA/IGRlY29yYXRvcnNba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgIDogZGVzY3JpcHRvci5nZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjb21wdXRlZERlY29yYXRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHREZWNvcmF0b3I7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHR5cGVvZiBkZWNvcmF0b3IgIT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgICAgICBmYWlsKFwiTm90IGEgdmFsaWQgZGVjb3JhdG9yIGZvciAnXCIgKyBzdHJpbmdpZnlLZXkoa2V5KSArIFwiJywgZ290OiBcIiArIGRlY29yYXRvcik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0RGVzY3JpcHRvciA9IGRlY29yYXRvcih0YXJnZXQsIGtleSwgZGVzY3JpcHRvciwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0RGVzY3JpcHRvciAvLyBvdGhlcndpc2UsIGFzc3VtZSBhbHJlYWR5IGFwcGxpZWQsIGR1ZSB0byBgYXBwbHlUb0luc3RhbmNlYFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgcmVzdWx0RGVzY3JpcHRvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXlzXzJfMSAmJiAha2V5c18yXzEuZG9uZSAmJiAoX2IgPSBrZXlzXzIucmV0dXJuKSkgX2IuY2FsbChrZXlzXzIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICBlbmRCYXRjaCgpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIGdldERlcGVuZGVuY3lUcmVlKHRoaW5nLCBwcm9wZXJ0eSkge1xyXG4gICAgcmV0dXJuIG5vZGVUb0RlcGVuZGVuY3lUcmVlKGdldEF0b20odGhpbmcsIHByb3BlcnR5KSk7XHJcbn1cclxuZnVuY3Rpb24gbm9kZVRvRGVwZW5kZW5jeVRyZWUobm9kZSkge1xyXG4gICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICBuYW1lOiBub2RlLm5hbWVcclxuICAgIH07XHJcbiAgICBpZiAobm9kZS5vYnNlcnZpbmcgJiYgbm9kZS5vYnNlcnZpbmcubGVuZ3RoID4gMClcclxuICAgICAgICByZXN1bHQuZGVwZW5kZW5jaWVzID0gdW5pcXVlKG5vZGUub2JzZXJ2aW5nKS5tYXAobm9kZVRvRGVwZW5kZW5jeVRyZWUpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBnZXRPYnNlcnZlclRyZWUodGhpbmcsIHByb3BlcnR5KSB7XHJcbiAgICByZXR1cm4gbm9kZVRvT2JzZXJ2ZXJUcmVlKGdldEF0b20odGhpbmcsIHByb3BlcnR5KSk7XHJcbn1cclxuZnVuY3Rpb24gbm9kZVRvT2JzZXJ2ZXJUcmVlKG5vZGUpIHtcclxuICAgIHZhciByZXN1bHQgPSB7XHJcbiAgICAgICAgbmFtZTogbm9kZS5uYW1lXHJcbiAgICB9O1xyXG4gICAgaWYgKGhhc09ic2VydmVycyhub2RlKSlcclxuICAgICAgICByZXN1bHQub2JzZXJ2ZXJzID0gQXJyYXkuZnJvbShnZXRPYnNlcnZlcnMobm9kZSkpLm1hcChub2RlVG9PYnNlcnZlclRyZWUpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxuXG52YXIgZ2VuZXJhdG9ySWQgPSAwO1xyXG5mdW5jdGlvbiBmbG93KGdlbmVyYXRvcikge1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDEpXHJcbiAgICAgICAgZmFpbCghIXByb2Nlc3MuZW52Lk5PREVfRU5WICYmIFwiRmxvdyBleHBlY3RzIG9uZSAxIGFyZ3VtZW50IGFuZCBjYW5ub3QgYmUgdXNlZCBhcyBkZWNvcmF0b3JcIik7XHJcbiAgICB2YXIgbmFtZSA9IGdlbmVyYXRvci5uYW1lIHx8IFwiPHVubmFtZWQgZmxvdz5cIjtcclxuICAgIC8vIEltcGxlbWVudGF0aW9uIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS90ai9jby9ibG9iL21hc3Rlci9pbmRleC5qc1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3R4ID0gdGhpcztcclxuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICB2YXIgcnVuSWQgPSArK2dlbmVyYXRvcklkO1xyXG4gICAgICAgIHZhciBnZW4gPSBhY3Rpb24obmFtZSArIFwiIC0gcnVuaWQ6IFwiICsgcnVuSWQgKyBcIiAtIGluaXRcIiwgZ2VuZXJhdG9yKS5hcHBseShjdHgsIGFyZ3MpO1xyXG4gICAgICAgIHZhciByZWplY3RvcjtcclxuICAgICAgICB2YXIgcGVuZGluZ1Byb21pc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciBzdGVwSWQgPSAwO1xyXG4gICAgICAgICAgICByZWplY3RvciA9IHJlamVjdDtcclxuICAgICAgICAgICAgZnVuY3Rpb24gb25GdWxmaWxsZWQocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nUHJvbWlzZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHZhciByZXQ7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGFjdGlvbihuYW1lICsgXCIgLSBydW5pZDogXCIgKyBydW5JZCArIFwiIC0geWllbGQgXCIgKyBzdGVwSWQrKywgZ2VuLm5leHQpLmNhbGwoZ2VuLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV4dChyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uUmVqZWN0ZWQoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nUHJvbWlzZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHZhciByZXQ7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGFjdGlvbihuYW1lICsgXCIgLSBydW5pZDogXCIgKyBydW5JZCArIFwiIC0geWllbGQgXCIgKyBzdGVwSWQrKywgZ2VuLnRocm93KS5jYWxsKGdlbiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5leHQocmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBuZXh0KHJldCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJldCAmJiB0eXBlb2YgcmV0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuIGFzeW5jIGl0ZXJhdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0LnRoZW4obmV4dCwgcmVqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocmV0LmRvbmUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHBlbmRpbmdQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHJldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVuZGluZ1Byb21pc2UudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25GdWxmaWxsZWQodW5kZWZpbmVkKTsgLy8ga2ljayBvZmYgdGhlIHByb2Nlc3NcclxuICAgICAgICB9KTtcclxuICAgICAgICBwcm9taXNlLmNhbmNlbCA9IGFjdGlvbihuYW1lICsgXCIgLSBydW5pZDogXCIgKyBydW5JZCArIFwiIC0gY2FuY2VsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nUHJvbWlzZSlcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxQcm9taXNlKHBlbmRpbmdQcm9taXNlKTtcclxuICAgICAgICAgICAgICAgIC8vIEZpbmFsbHkgYmxvY2sgY2FuIHJldHVybiAob3IgeWllbGQpIHN0dWZmLi5cclxuICAgICAgICAgICAgICAgIHZhciByZXMgPSBnZW4ucmV0dXJuKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBlYXQgYW55dGhpbmcgdGhhdCBwcm9taXNlIHdvdWxkIGRvLCBpdCdzIGNhbmNlbGxlZCFcclxuICAgICAgICAgICAgICAgIHZhciB5aWVsZGVkUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShyZXMudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgeWllbGRlZFByb21pc2UudGhlbihub29wLCBub29wKTtcclxuICAgICAgICAgICAgICAgIGNhbmNlbFByb21pc2UoeWllbGRlZFByb21pc2UpOyAvLyBtYXliZSBpdCBjYW4gYmUgY2FuY2VsbGVkIDopXHJcbiAgICAgICAgICAgICAgICAvLyByZWplY3Qgb3VyIG9yaWdpbmFsIHByb21pc2VcclxuICAgICAgICAgICAgICAgIHJlamVjdG9yKG5ldyBFcnJvcihcIkZMT1dfQ0FOQ0VMTEVEXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0b3IoZSk7IC8vIHRoZXJlIGNvdWxkIGJlIGEgdGhyb3dpbmcgZmluYWxseSBibG9ja1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGNhbmNlbFByb21pc2UocHJvbWlzZSkge1xyXG4gICAgaWYgKHR5cGVvZiBwcm9taXNlLmNhbmNlbCA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIHByb21pc2UuY2FuY2VsKCk7XHJcbn1cblxuZnVuY3Rpb24gaW50ZXJjZXB0UmVhZHModGhpbmcsIHByb3BPckhhbmRsZXIsIGhhbmRsZXIpIHtcclxuICAgIHZhciB0YXJnZXQ7XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKHRoaW5nKSB8fCBpc09ic2VydmFibGVBcnJheSh0aGluZykgfHwgaXNPYnNlcnZhYmxlVmFsdWUodGhpbmcpKSB7XHJcbiAgICAgICAgdGFyZ2V0ID0gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcHJvcE9ySGFuZGxlciAhPT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgICAgICBcIkludGVyY2VwdFJlYWRzIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBhIHNwZWNpZmljIHByb3BlcnR5LCBub3Qgd2l0aCBhbiBvYmplY3QgaW4gZ2VuZXJhbFwiKTtcclxuICAgICAgICB0YXJnZXQgPSBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcE9ySGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgXCJFeHBlY3RlZCBvYnNlcnZhYmxlIG1hcCwgb2JqZWN0IG9yIGFycmF5IGFzIGZpcnN0IGFycmF5XCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRhcmdldC5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBcIkFuIGludGVyY2VwdCByZWFkZXIgd2FzIGFscmVhZHkgZXN0YWJsaXNoZWRcIik7XHJcbiAgICB0YXJnZXQuZGVoYW5jZXIgPSB0eXBlb2YgcHJvcE9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiID8gcHJvcE9ySGFuZGxlciA6IGhhbmRsZXI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRhcmdldC5kZWhhbmNlciA9IHVuZGVmaW5lZDtcclxuICAgIH07XHJcbn1cblxuZnVuY3Rpb24gaW50ZXJjZXB0KHRoaW5nLCBwcm9wT3JIYW5kbGVyLCBoYW5kbGVyKSB7XHJcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICByZXR1cm4gaW50ZXJjZXB0UHJvcGVydHkodGhpbmcsIHByb3BPckhhbmRsZXIsIGhhbmRsZXIpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBpbnRlcmNlcHRJbnRlcmNlcHRhYmxlKHRoaW5nLCBwcm9wT3JIYW5kbGVyKTtcclxufVxyXG5mdW5jdGlvbiBpbnRlcmNlcHRJbnRlcmNlcHRhYmxlKHRoaW5nLCBoYW5kbGVyKSB7XHJcbiAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcpLmludGVyY2VwdChoYW5kbGVyKTtcclxufVxyXG5mdW5jdGlvbiBpbnRlcmNlcHRQcm9wZXJ0eSh0aGluZywgcHJvcGVydHksIGhhbmRsZXIpIHtcclxuICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpLmludGVyY2VwdChoYW5kbGVyKTtcclxufVxuXG5mdW5jdGlvbiBfaXNDb21wdXRlZCh2YWx1ZSwgcHJvcGVydHkpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh2YWx1ZSkgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF2YWx1ZVskbW9ieF0udmFsdWVzLmhhcyhwcm9wZXJ0eSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgYXRvbSA9IGdldEF0b20odmFsdWUsIHByb3BlcnR5KTtcclxuICAgICAgICByZXR1cm4gaXNDb21wdXRlZFZhbHVlKGF0b20pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzQ29tcHV0ZWRWYWx1ZSh2YWx1ZSk7XHJcbn1cclxuZnVuY3Rpb24gaXNDb21wdXRlZCh2YWx1ZSkge1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG4gICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICBcImlzQ29tcHV0ZWQgZXhwZWN0cyBvbmx5IDEgYXJndW1lbnQuIFVzZSBpc09ic2VydmFibGVQcm9wIHRvIGluc3BlY3QgdGhlIG9ic2VydmFiaWxpdHkgb2YgYSBwcm9wZXJ0eVwiKTtcclxuICAgIHJldHVybiBfaXNDb21wdXRlZCh2YWx1ZSk7XHJcbn1cclxuZnVuY3Rpb24gaXNDb21wdXRlZFByb3AodmFsdWUsIHByb3BOYW1lKSB7XHJcbiAgICBpZiAodHlwZW9mIHByb3BOYW1lICE9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICBcImlzQ29tcHV0ZWQgZXhwZWN0ZWQgYSBwcm9wZXJ0eSBuYW1lIGFzIHNlY29uZCBhcmd1bWVudFwiKTtcclxuICAgIHJldHVybiBfaXNDb21wdXRlZCh2YWx1ZSwgcHJvcE5hbWUpO1xyXG59XG5cbmZ1bmN0aW9uIF9pc09ic2VydmFibGUodmFsdWUsIHByb3BlcnR5KSB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgKGlzT2JzZXJ2YWJsZU1hcCh2YWx1ZSkgfHwgaXNPYnNlcnZhYmxlQXJyYXkodmFsdWUpKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhaWwoXCJpc09ic2VydmFibGUob2JqZWN0LCBwcm9wZXJ0eU5hbWUpIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIGFycmF5cyBhbmQgbWFwcy4gVXNlIG1hcC5oYXMgb3IgYXJyYXkubGVuZ3RoIGluc3RlYWQuXCIpO1xyXG4gICAgICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVskbW9ieF0udmFsdWVzLmhhcyhwcm9wZXJ0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIEZvciBmaXJzdCBjaGVjaywgc2VlICM3MDFcclxuICAgIHJldHVybiAoaXNPYnNlcnZhYmxlT2JqZWN0KHZhbHVlKSB8fFxyXG4gICAgICAgICEhdmFsdWVbJG1vYnhdIHx8XHJcbiAgICAgICAgaXNBdG9tKHZhbHVlKSB8fFxyXG4gICAgICAgIGlzUmVhY3Rpb24odmFsdWUpIHx8XHJcbiAgICAgICAgaXNDb21wdXRlZFZhbHVlKHZhbHVlKSk7XHJcbn1cclxuZnVuY3Rpb24gaXNPYnNlcnZhYmxlKHZhbHVlKSB7XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gMSlcclxuICAgICAgICBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICBcImlzT2JzZXJ2YWJsZSBleHBlY3RzIG9ubHkgMSBhcmd1bWVudC4gVXNlIGlzT2JzZXJ2YWJsZVByb3AgdG8gaW5zcGVjdCB0aGUgb2JzZXJ2YWJpbGl0eSBvZiBhIHByb3BlcnR5XCIpO1xyXG4gICAgcmV0dXJuIF9pc09ic2VydmFibGUodmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZVByb3AodmFsdWUsIHByb3BOYW1lKSB7XHJcbiAgICBpZiAodHlwZW9mIHByb3BOYW1lICE9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBcImV4cGVjdGVkIGEgcHJvcGVydHkgbmFtZSBhcyBzZWNvbmQgYXJndW1lbnRcIik7XHJcbiAgICByZXR1cm4gX2lzT2JzZXJ2YWJsZSh2YWx1ZSwgcHJvcE5hbWUpO1xyXG59XG5cbmZ1bmN0aW9uIGtleXMob2JqKSB7XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqWyRtb2J4XS5nZXRLZXlzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShvYmoua2V5cygpKTtcclxuICAgIH1cclxuICAgIGlmIChpc09ic2VydmFibGVTZXQob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG9iai5rZXlzKCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqLm1hcChmdW5jdGlvbiAoXywgaW5kZXgpIHsgcmV0dXJuIGluZGV4OyB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgIFwiJ2tleXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cywgc2V0cyBhbmQgbWFwc1wiKTtcclxufVxyXG5mdW5jdGlvbiB2YWx1ZXMob2JqKSB7XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcclxuICAgICAgICByZXR1cm4ga2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBvYmpba2V5XTsgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcclxuICAgICAgICByZXR1cm4ga2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBvYmouZ2V0KGtleSk7IH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ob2JqLnZhbHVlcygpKTtcclxuICAgIH1cclxuICAgIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iai5zbGljZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgXCIndmFsdWVzKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMsIHNldHMgYW5kIG1hcHNcIik7XHJcbn1cclxuZnVuY3Rpb24gZW50cmllcyhvYmopIHtcclxuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBrZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIFtrZXksIG9ialtrZXldXTsgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcclxuICAgICAgICByZXR1cm4ga2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBba2V5LCBvYmouZ2V0KGtleSldOyB9KTtcclxuICAgIH1cclxuICAgIGlmIChpc09ic2VydmFibGVTZXQob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG9iai5lbnRyaWVzKCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqLm1hcChmdW5jdGlvbiAoa2V5LCBpbmRleCkgeyByZXR1cm4gW2luZGV4LCBrZXldOyB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgIFwiJ2VudHJpZXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiKTtcclxufVxyXG5mdW5jdGlvbiBzZXQob2JqLCBrZXksIHZhbHVlKSB7XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiAhaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcclxuICAgICAgICBzdGFydEJhdGNoKCk7XHJcbiAgICAgICAgdmFyIHZhbHVlc18xID0ga2V5O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleV8xIGluIHZhbHVlc18xKVxyXG4gICAgICAgICAgICAgICAgc2V0KG9iaiwga2V5XzEsIHZhbHVlc18xW2tleV8xXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBlbmRCYXRjaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcclxuICAgICAgICB2YXIgYWRtID0gb2JqWyRtb2J4XTtcclxuICAgICAgICB2YXIgZXhpc3RpbmdPYnNlcnZhYmxlID0gYWRtLnZhbHVlcy5nZXQoa2V5KTtcclxuICAgICAgICBpZiAoZXhpc3RpbmdPYnNlcnZhYmxlKSB7XHJcbiAgICAgICAgICAgIGFkbS53cml0ZShrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFkbS5hZGRPYnNlcnZhYmxlUHJvcChrZXksIHZhbHVlLCBhZG0uZGVmYXVsdEVuaGFuY2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xyXG4gICAgICAgIG9iai5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVTZXQob2JqKSkge1xyXG4gICAgICAgIG9iai5hZGQoa2V5KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAga2V5ID0gcGFyc2VJbnQoa2V5LCAxMCk7XHJcbiAgICAgICAgaW52YXJpYW50KGtleSA+PSAwLCBcIk5vdCBhIHZhbGlkIGluZGV4OiAnXCIgKyBrZXkgKyBcIidcIik7XHJcbiAgICAgICAgc3RhcnRCYXRjaCgpO1xyXG4gICAgICAgIGlmIChrZXkgPj0gb2JqLmxlbmd0aClcclxuICAgICAgICAgICAgb2JqLmxlbmd0aCA9IGtleSArIDE7XHJcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICBlbmRCYXRjaCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgIFwiJ3NldCgpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZShvYmosIGtleSkge1xyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XHJcbiAgICAgICAgb2JqWyRtb2J4XS5yZW1vdmUoa2V5KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XHJcbiAgICAgICAgb2JqLmRlbGV0ZShrZXkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcclxuICAgICAgICBvYmouZGVsZXRlKGtleSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIGtleSA9IHBhcnNlSW50KGtleSwgMTApO1xyXG4gICAgICAgIGludmFyaWFudChrZXkgPj0gMCwgXCJOb3QgYSB2YWxpZCBpbmRleDogJ1wiICsga2V5ICsgXCInXCIpO1xyXG4gICAgICAgIG9iai5zcGxpY2Uoa2V5LCAxKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICBcIidyZW1vdmUoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBoYXMob2JqLCBrZXkpIHtcclxuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIC8vIHJldHVybiBrZXlzKG9iaikuaW5kZXhPZihrZXkpID49IDBcclxuICAgICAgICB2YXIgYWRtID0gZ2V0QWRtaW5pc3RyYXRpb24ob2JqKTtcclxuICAgICAgICByZXR1cm4gYWRtLmhhcyhrZXkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqLmhhcyhrZXkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqLmhhcyhrZXkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBrZXkgPj0gMCAmJiBrZXkgPCBvYmoubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgIFwiJ2hhcygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldChvYmosIGtleSkge1xyXG4gICAgaWYgKCFoYXMob2JqLCBrZXkpKVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqW2tleV07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBvYmouZ2V0KGtleSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG9ialtrZXldO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgIFwiJ2dldCgpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUodGhpbmcsIHByb3BPckNiLCBjYk9yRmlyZSwgZmlyZUltbWVkaWF0ZWx5KSB7XHJcbiAgICBpZiAodHlwZW9mIGNiT3JGaXJlID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmVPYnNlcnZhYmxlUHJvcGVydHkodGhpbmcsIHByb3BPckNiLCBjYk9yRmlyZSwgZmlyZUltbWVkaWF0ZWx5KTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gb2JzZXJ2ZU9ic2VydmFibGUodGhpbmcsIHByb3BPckNiLCBjYk9yRmlyZSk7XHJcbn1cclxuZnVuY3Rpb24gb2JzZXJ2ZU9ic2VydmFibGUodGhpbmcsIGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcclxuICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZykub2JzZXJ2ZShsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KTtcclxufVxyXG5mdW5jdGlvbiBvYnNlcnZlT2JzZXJ2YWJsZVByb3BlcnR5KHRoaW5nLCBwcm9wZXJ0eSwgbGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xyXG4gICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nLCBwcm9wZXJ0eSkub2JzZXJ2ZShsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KTtcclxufVxuXG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBkZXRlY3RDeWNsZXM6IHRydWUsXHJcbiAgICBleHBvcnRNYXBzQXNPYmplY3RzOiB0cnVlLFxyXG4gICAgcmVjdXJzZUV2ZXJ5dGhpbmc6IGZhbHNlXHJcbn07XHJcbmZ1bmN0aW9uIGNhY2hlKG1hcCwga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMuZGV0ZWN0Q3ljbGVzKVxyXG4gICAgICAgIG1hcC5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuZnVuY3Rpb24gdG9KU0hlbHBlcihzb3VyY2UsIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pIHtcclxuICAgIGlmICghb3B0aW9ucy5yZWN1cnNlRXZlcnl0aGluZyAmJiAhaXNPYnNlcnZhYmxlKHNvdXJjZSkpXHJcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcclxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSBcIm9iamVjdFwiKVxyXG4gICAgICAgIHJldHVybiBzb3VyY2U7XHJcbiAgICAvLyBEaXJlY3RseSByZXR1cm4gbnVsbCBpZiBzb3VyY2UgaXMgbnVsbFxyXG4gICAgaWYgKHNvdXJjZSA9PT0gbnVsbClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIC8vIERpcmVjdGx5IHJldHVybiB0aGUgRGF0ZSBvYmplY3QgaXRzZWxmIGlmIGNvbnRhaW5lZCBpbiB0aGUgb2JzZXJ2YWJsZVxyXG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIERhdGUpXHJcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcclxuICAgIGlmIChpc09ic2VydmFibGVWYWx1ZShzb3VyY2UpKVxyXG4gICAgICAgIHJldHVybiB0b0pTSGVscGVyKHNvdXJjZS5nZXQoKSwgb3B0aW9ucywgX19hbHJlYWR5U2Vlbik7XHJcbiAgICAvLyBtYWtlIHN1cmUgd2UgdHJhY2sgdGhlIGtleXMgb2YgdGhlIG9iamVjdFxyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZShzb3VyY2UpKVxyXG4gICAgICAgIGtleXMoc291cmNlKTtcclxuICAgIHZhciBkZXRlY3RDeWNsZXMgPSBvcHRpb25zLmRldGVjdEN5Y2xlcyA9PT0gdHJ1ZTtcclxuICAgIGlmIChkZXRlY3RDeWNsZXMgJiYgc291cmNlICE9PSBudWxsICYmIF9fYWxyZWFkeVNlZW4uaGFzKHNvdXJjZSkpIHtcclxuICAgICAgICByZXR1cm4gX19hbHJlYWR5U2Vlbi5nZXQoc291cmNlKTtcclxuICAgIH1cclxuICAgIGlmIChpc09ic2VydmFibGVBcnJheShzb3VyY2UpIHx8IEFycmF5LmlzQXJyYXkoc291cmNlKSkge1xyXG4gICAgICAgIHZhciByZXNfMSA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgW10sIG9wdGlvbnMpO1xyXG4gICAgICAgIHZhciB0b0FkZCA9IHNvdXJjZS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0b0pTSGVscGVyKHZhbHVlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKTsgfSk7XHJcbiAgICAgICAgcmVzXzEubGVuZ3RoID0gdG9BZGQubGVuZ3RoO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdG9BZGQubGVuZ3RoOyBpIDwgbDsgaSsrKVxyXG4gICAgICAgICAgICByZXNfMVtpXSA9IHRvQWRkW2ldO1xyXG4gICAgICAgIHJldHVybiByZXNfMTtcclxuICAgIH1cclxuICAgIGlmIChpc09ic2VydmFibGVTZXQoc291cmNlKSB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc291cmNlKSA9PT0gU2V0LnByb3RvdHlwZSkge1xyXG4gICAgICAgIGlmIChvcHRpb25zLmV4cG9ydE1hcHNBc09iamVjdHMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNfMiA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgbmV3IFNldCgpLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNfMi5hZGQodG9KU0hlbHBlcih2YWx1ZSwgb3B0aW9ucywgX19hbHJlYWR5U2VlbikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc18yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHJlc18zID0gY2FjaGUoX19hbHJlYWR5U2Vlbiwgc291cmNlLCBbXSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzXzMucHVzaCh0b0pTSGVscGVyKHZhbHVlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzXzM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcChzb3VyY2UpIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihzb3VyY2UpID09PSBNYXAucHJvdG90eXBlKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuZXhwb3J0TWFwc0FzT2JqZWN0cyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdmFyIHJlc180ID0gY2FjaGUoX19hbHJlYWR5U2Vlbiwgc291cmNlLCBuZXcgTWFwKCksIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmVzXzQuc2V0KGtleSwgdG9KU0hlbHBlcih2YWx1ZSwgb3B0aW9ucywgX19hbHJlYWR5U2VlbikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc180O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHJlc181ID0gY2FjaGUoX19hbHJlYWR5U2Vlbiwgc291cmNlLCB7fSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXNfNVtrZXldID0gdG9KU0hlbHBlcih2YWx1ZSwgb3B0aW9ucywgX19hbHJlYWR5U2Vlbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzXzU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRmFsbGJhY2sgdG8gdGhlIHNpdHVhdGlvbiB0aGF0IHNvdXJjZSBpcyBhbiBPYnNlcnZhYmxlT2JqZWN0IG9yIGEgcGxhaW4gb2JqZWN0XHJcbiAgICB2YXIgcmVzID0gY2FjaGUoX19hbHJlYWR5U2Vlbiwgc291cmNlLCB7fSwgb3B0aW9ucyk7XHJcbiAgICBnZXRQbGFpbk9iamVjdEtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICByZXNba2V5XSA9IHRvSlNIZWxwZXIoc291cmNlW2tleV0sIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbmZ1bmN0aW9uIHRvSlMoc291cmNlLCBvcHRpb25zKSB7XHJcbiAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiYm9vbGVhblwiKVxyXG4gICAgICAgIG9wdGlvbnMgPSB7IGRldGVjdEN5Y2xlczogb3B0aW9ucyB9O1xyXG4gICAgaWYgKCFvcHRpb25zKVxyXG4gICAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcclxuICAgIG9wdGlvbnMuZGV0ZWN0Q3ljbGVzID1cclxuICAgICAgICBvcHRpb25zLmRldGVjdEN5Y2xlcyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gb3B0aW9ucy5yZWN1cnNlRXZlcnl0aGluZyA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICA6IG9wdGlvbnMuZGV0ZWN0Q3ljbGVzID09PSB0cnVlO1xyXG4gICAgdmFyIF9fYWxyZWFkeVNlZW47XHJcbiAgICBpZiAob3B0aW9ucy5kZXRlY3RDeWNsZXMpXHJcbiAgICAgICAgX19hbHJlYWR5U2VlbiA9IG5ldyBNYXAoKTtcclxuICAgIHJldHVybiB0b0pTSGVscGVyKHNvdXJjZSwgb3B0aW9ucywgX19hbHJlYWR5U2Vlbik7XHJcbn1cblxuZnVuY3Rpb24gdHJhY2UoKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgZW50ZXJCcmVha1BvaW50ID0gZmFsc2U7XHJcbiAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gXCJib29sZWFuXCIpXHJcbiAgICAgICAgZW50ZXJCcmVha1BvaW50ID0gYXJncy5wb3AoKTtcclxuICAgIHZhciBkZXJpdmF0aW9uID0gZ2V0QXRvbUZyb21BcmdzKGFyZ3MpO1xyXG4gICAgaWYgKCFkZXJpdmF0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgIFwiJ3RyYWNlKGJyZWFrPyknIGNhbiBvbmx5IGJlIHVzZWQgaW5zaWRlIGEgdHJhY2tlZCBjb21wdXRlZCB2YWx1ZSBvciBhIFJlYWN0aW9uLiBDb25zaWRlciBwYXNzaW5nIGluIHRoZSBjb21wdXRlZCB2YWx1ZSBvciByZWFjdGlvbiBleHBsaWNpdGx5XCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRlcml2YXRpb24uaXNUcmFjaW5nID09PSBUcmFjZU1vZGUuTk9ORSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiW21vYngudHJhY2VdICdcIiArIGRlcml2YXRpb24ubmFtZSArIFwiJyB0cmFjaW5nIGVuYWJsZWRcIik7XHJcbiAgICB9XHJcbiAgICBkZXJpdmF0aW9uLmlzVHJhY2luZyA9IGVudGVyQnJlYWtQb2ludCA/IFRyYWNlTW9kZS5CUkVBSyA6IFRyYWNlTW9kZS5MT0c7XHJcbn1cclxuZnVuY3Rpb24gZ2V0QXRvbUZyb21BcmdzKGFyZ3MpIHtcclxuICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb247XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0QXRvbShhcmdzWzBdKTtcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRBdG9tKGFyZ3NbMF0sIGFyZ3NbMV0pO1xyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBEdXJpbmcgYSB0cmFuc2FjdGlvbiBubyB2aWV3cyBhcmUgdXBkYXRlZCB1bnRpbCB0aGUgZW5kIG9mIHRoZSB0cmFuc2FjdGlvbi5cclxuICogVGhlIHRyYW5zYWN0aW9uIHdpbGwgYmUgcnVuIHN5bmNocm9ub3VzbHkgbm9uZXRoZWxlc3MuXHJcbiAqXHJcbiAqIEBwYXJhbSBhY3Rpb24gYSBmdW5jdGlvbiB0aGF0IHVwZGF0ZXMgc29tZSByZWFjdGl2ZSBzdGF0ZVxyXG4gKiBAcmV0dXJucyBhbnkgdmFsdWUgdGhhdCB3YXMgcmV0dXJuZWQgYnkgdGhlICdhY3Rpb24nIHBhcmFtZXRlci5cclxuICovXHJcbmZ1bmN0aW9uIHRyYW5zYWN0aW9uKGFjdGlvbiwgdGhpc0FyZykge1xyXG4gICAgaWYgKHRoaXNBcmcgPT09IHZvaWQgMCkgeyB0aGlzQXJnID0gdW5kZWZpbmVkOyB9XHJcbiAgICBzdGFydEJhdGNoKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBhY3Rpb24uYXBwbHkodGhpc0FyZyk7XHJcbiAgICB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICBlbmRCYXRjaCgpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIHdoZW4ocHJlZGljYXRlLCBhcmcxLCBhcmcyKSB7XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSB8fCAoYXJnMSAmJiB0eXBlb2YgYXJnMSA9PT0gXCJvYmplY3RcIikpXHJcbiAgICAgICAgcmV0dXJuIHdoZW5Qcm9taXNlKHByZWRpY2F0ZSwgYXJnMSk7XHJcbiAgICByZXR1cm4gX3doZW4ocHJlZGljYXRlLCBhcmcxLCBhcmcyIHx8IHt9KTtcclxufVxyXG5mdW5jdGlvbiBfd2hlbihwcmVkaWNhdGUsIGVmZmVjdCwgb3B0cykge1xyXG4gICAgdmFyIHRpbWVvdXRIYW5kbGU7XHJcbiAgICBpZiAodHlwZW9mIG9wdHMudGltZW91dCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFkaXNwb3NlclskbW9ieF0uaXNEaXNwb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgZGlzcG9zZXIoKTtcclxuICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihcIldIRU5fVElNRU9VVFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRzLm9uRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5vbkVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIG9wdHMudGltZW91dCk7XHJcbiAgICB9XHJcbiAgICBvcHRzLm5hbWUgPSBvcHRzLm5hbWUgfHwgXCJXaGVuQFwiICsgZ2V0TmV4dElkKCk7XHJcbiAgICB2YXIgZWZmZWN0QWN0aW9uID0gY3JlYXRlQWN0aW9uKG9wdHMubmFtZSArIFwiLWVmZmVjdFwiLCBlZmZlY3QpO1xyXG4gICAgdmFyIGRpc3Bvc2VyID0gYXV0b3J1bihmdW5jdGlvbiAocikge1xyXG4gICAgICAgIGlmIChwcmVkaWNhdGUoKSkge1xyXG4gICAgICAgICAgICByLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgaWYgKHRpbWVvdXRIYW5kbGUpXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZSk7XHJcbiAgICAgICAgICAgIGVmZmVjdEFjdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIG9wdHMpO1xyXG4gICAgcmV0dXJuIGRpc3Bvc2VyO1xyXG59XHJcbmZ1bmN0aW9uIHdoZW5Qcm9taXNlKHByZWRpY2F0ZSwgb3B0cykge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBvcHRzICYmIG9wdHMub25FcnJvcilcclxuICAgICAgICByZXR1cm4gZmFpbChcInRoZSBvcHRpb25zICdvbkVycm9yJyBhbmQgJ3Byb21pc2UnIGNhbm5vdCBiZSBjb21iaW5lZFwiKTtcclxuICAgIHZhciBjYW5jZWw7XHJcbiAgICB2YXIgcmVzID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciBkaXNwb3NlciA9IF93aGVuKHByZWRpY2F0ZSwgcmVzb2x2ZSwgX19hc3NpZ24oe30sIG9wdHMsIHsgb25FcnJvcjogcmVqZWN0IH0pKTtcclxuICAgICAgICBjYW5jZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRpc3Bvc2VyKCk7XHJcbiAgICAgICAgICAgIHJlamVjdChcIldIRU5fQ0FOQ0VMTEVEXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJlcy5jYW5jZWwgPSBjYW5jZWw7XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XG5cbmZ1bmN0aW9uIGdldEFkbSh0YXJnZXQpIHtcclxuICAgIHJldHVybiB0YXJnZXRbJG1vYnhdO1xyXG59XHJcbmZ1bmN0aW9uIGlzUHJvcGVydHlLZXkodmFsKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiIHx8IHR5cGVvZiB2YWwgPT09IFwic3ltYm9sXCI7XHJcbn1cclxuLy8gT3B0aW1pemF0aW9uOiB3ZSBkb24ndCBuZWVkIHRoZSBpbnRlcm1lZGlhdGUgb2JqZWN0cyBhbmQgY291bGQgaGF2ZSBhIGNvbXBsZXRlbHkgY3VzdG9tIGFkbWluaXN0cmF0aW9uIGZvciBEeW5hbWljT2JqZWN0cyxcclxuLy8gYW5kIHNraXAgZWl0aGVyIHRoZSBpbnRlcm5hbCB2YWx1ZXMgbWFwLCBvciB0aGUgYmFzZSBvYmplY3Qgd2l0aCBpdHMgcHJvcGVydHkgZGVzY3JpcHRvcnMhXHJcbnZhciBvYmplY3RQcm94eVRyYXBzID0ge1xyXG4gICAgaGFzOiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09ICRtb2J4IHx8IG5hbWUgPT09IFwiY29uc3RydWN0b3JcIiB8fCBuYW1lID09PSBtb2J4RGlkUnVuTGF6eUluaXRpYWxpemVyc1N5bWJvbClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgdmFyIGFkbSA9IGdldEFkbSh0YXJnZXQpO1xyXG4gICAgICAgIC8vIE1XRTogc2hvdWxkIGBpbmAgb3BlcmF0b3IgYmUgcmVhY3RpdmU/IElmIG5vdCwgYmVsb3cgY29kZSBwYXRoIHdpbGwgYmUgZmFzdGVyIC8gbW9yZSBtZW1vcnkgZWZmaWNpZW50XHJcbiAgICAgICAgLy8gVE9ETzogY2hlY2sgcGVyZm9ybWFuY2Ugc3RhdHMhXHJcbiAgICAgICAgLy8gaWYgKGFkbS52YWx1ZXMuZ2V0KG5hbWUgYXMgc3RyaW5nKSkgcmV0dXJuIHRydWVcclxuICAgICAgICBpZiAoaXNQcm9wZXJ0eUtleShuYW1lKSlcclxuICAgICAgICAgICAgcmV0dXJuIGFkbS5oYXMobmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gdGFyZ2V0O1xyXG4gICAgfSxcclxuICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lID09PSAkbW9ieCB8fCBuYW1lID09PSBcImNvbnN0cnVjdG9yXCIgfHwgbmFtZSA9PT0gbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnNTeW1ib2wpXHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV07XHJcbiAgICAgICAgdmFyIGFkbSA9IGdldEFkbSh0YXJnZXQpO1xyXG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gYWRtLnZhbHVlcy5nZXQobmFtZSk7XHJcbiAgICAgICAgaWYgKG9ic2VydmFibGUgaW5zdGFuY2VvZiBBdG9tKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBvYnNlcnZhYmxlLmdldCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgZml4ZXMgIzE3OTYsIGJlY2F1c2UgZGVsZXRpbmcgYSBwcm9wIHRoYXQgaGFzIGFuXHJcbiAgICAgICAgICAgICAgICAvLyB1bmRlZmluZWQgdmFsdWUgd29uJ3QgcmV0cmlnZ2VyIGEgb2JzZXJ2ZXIgKG5vIHZpc2libGUgZWZmZWN0KSxcclxuICAgICAgICAgICAgICAgIC8vIHRoZSBhdXRvcnVuIHdvdWxkbid0IHN1YnNjcmliZSB0byBmdXR1cmUga2V5IGNoYW5nZXMgKHNlZSBhbHNvIG5leHQgY29tbWVudClcclxuICAgICAgICAgICAgICAgIGFkbS5oYXMobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIHN0YXJ0IGxpc3RlbmluZyB0byBmdXR1cmUga2V5c1xyXG4gICAgICAgIC8vIG5vdGUgdGhhdCB3ZSBvbmx5IGRvIHRoaXMgaGVyZSBmb3Igb3B0aW1pemF0aW9uXHJcbiAgICAgICAgaWYgKGlzUHJvcGVydHlLZXkobmFtZSkpXHJcbiAgICAgICAgICAgIGFkbS5oYXMobmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldFtuYW1lXTtcclxuICAgIH0sXHJcbiAgICBzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFpc1Byb3BlcnR5S2V5KG5hbWUpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgc2V0KHRhcmdldCwgbmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICAgIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgICAgaWYgKCFpc1Byb3BlcnR5S2V5KG5hbWUpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIGFkbSA9IGdldEFkbSh0YXJnZXQpO1xyXG4gICAgICAgIGFkbS5yZW1vdmUobmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgb3duS2V5czogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHZhciBhZG0gPSBnZXRBZG0odGFyZ2V0KTtcclxuICAgICAgICBhZG0ua2V5c0F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldCk7XHJcbiAgICB9LFxyXG4gICAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBmYWlsKFwiRHluYW1pYyBvYnNlcnZhYmxlIG9iamVjdHMgY2Fubm90IGJlIGZyb3plblwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn07XHJcbmZ1bmN0aW9uIGNyZWF0ZUR5bmFtaWNPYnNlcnZhYmxlT2JqZWN0KGJhc2UpIHtcclxuICAgIHZhciBwcm94eSA9IG5ldyBQcm94eShiYXNlLCBvYmplY3RQcm94eVRyYXBzKTtcclxuICAgIGJhc2VbJG1vYnhdLnByb3h5ID0gcHJveHk7XHJcbiAgICByZXR1cm4gcHJveHk7XHJcbn1cblxuZnVuY3Rpb24gaGFzSW50ZXJjZXB0b3JzKGludGVyY2VwdGFibGUpIHtcclxuICAgIHJldHVybiBpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9ycyAhPT0gdW5kZWZpbmVkICYmIGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzLmxlbmd0aCA+IDA7XHJcbn1cclxuZnVuY3Rpb24gcmVnaXN0ZXJJbnRlcmNlcHRvcihpbnRlcmNlcHRhYmxlLCBoYW5kbGVyKSB7XHJcbiAgICB2YXIgaW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnMgfHwgKGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzID0gW10pO1xyXG4gICAgaW50ZXJjZXB0b3JzLnB1c2goaGFuZGxlcik7XHJcbiAgICByZXR1cm4gb25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGlkeCA9IGludGVyY2VwdG9ycy5pbmRleE9mKGhhbmRsZXIpO1xyXG4gICAgICAgIGlmIChpZHggIT09IC0xKVxyXG4gICAgICAgICAgICBpbnRlcmNlcHRvcnMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBpbnRlcmNlcHRDaGFuZ2UoaW50ZXJjZXB0YWJsZSwgY2hhbmdlKSB7XHJcbiAgICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBJbnRlcmNlcHRvciBjYW4gbW9kaWZ5IHRoZSBhcnJheSwgY29weSBpdCB0byBhdm9pZCBjb25jdXJyZW50IG1vZGlmaWNhdGlvbiwgc2VlICMxOTUwXHJcbiAgICAgICAgdmFyIGludGVyY2VwdG9ycyA9IF9fc3ByZWFkKChpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9ycyB8fCBbXSkpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaW50ZXJjZXB0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBjaGFuZ2UgPSBpbnRlcmNlcHRvcnNbaV0oY2hhbmdlKTtcclxuICAgICAgICAgICAgaW52YXJpYW50KCFjaGFuZ2UgfHwgY2hhbmdlLnR5cGUsIFwiSW50ZXJjZXB0IGhhbmRsZXJzIHNob3VsZCByZXR1cm4gbm90aGluZyBvciBhIGNoYW5nZSBvYmplY3RcIik7XHJcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGFuZ2U7XHJcbiAgICB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB1bnRyYWNrZWRFbmQocHJldlUpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIGhhc0xpc3RlbmVycyhsaXN0ZW5hYmxlKSB7XHJcbiAgICByZXR1cm4gbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCAmJiBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycy5sZW5ndGggPiAwO1xyXG59XHJcbmZ1bmN0aW9uIHJlZ2lzdGVyTGlzdGVuZXIobGlzdGVuYWJsZSwgaGFuZGxlcikge1xyXG4gICAgdmFyIGxpc3RlbmVycyA9IGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzIHx8IChsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycyA9IFtdKTtcclxuICAgIGxpc3RlbmVycy5wdXNoKGhhbmRsZXIpO1xyXG4gICAgcmV0dXJuIG9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpZHggPSBsaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKTtcclxuICAgICAgICBpZiAoaWR4ICE9PSAtMSlcclxuICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gbm90aWZ5TGlzdGVuZXJzKGxpc3RlbmFibGUsIGNoYW5nZSkge1xyXG4gICAgdmFyIHByZXZVID0gdW50cmFja2VkU3RhcnQoKTtcclxuICAgIHZhciBsaXN0ZW5lcnMgPSBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycztcclxuICAgIGlmICghbGlzdGVuZXJzKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgpO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgbGlzdGVuZXJzW2ldKGNoYW5nZSk7XHJcbiAgICB9XHJcbiAgICB1bnRyYWNrZWRFbmQocHJldlUpO1xyXG59XG5cbnZhciBNQVhfU1BMSUNFX1NJWkUgPSAxMDAwMDsgLy8gU2VlIGUuZy4gaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2lzc3Vlcy84NTlcclxudmFyIGFycmF5VHJhcHMgPSB7XHJcbiAgICBnZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUpIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gJG1vYngpXHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbJG1vYnhdO1xyXG4gICAgICAgIGlmIChuYW1lID09PSBcImxlbmd0aFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0WyRtb2J4XS5nZXRBcnJheUxlbmd0aCgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlFeHRlbnNpb25zLmdldC5jYWxsKHRhcmdldCwgbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIiAmJiAhaXNOYU4obmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5RXh0ZW5zaW9ucy5nZXQuY2FsbCh0YXJnZXQsIHBhcnNlSW50KG5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFycmF5RXh0ZW5zaW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlFeHRlbnNpb25zW25hbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdO1xyXG4gICAgfSxcclxuICAgIHNldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJsZW5ndGhcIikge1xyXG4gICAgICAgICAgICB0YXJnZXRbJG1vYnhdLnNldEFycmF5TGVuZ3RoKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGFycmF5RXh0ZW5zaW9ucy5zZXQuY2FsbCh0YXJnZXQsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiIHx8IGlzTmFOKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbnVtZXJpYyBzdHJpbmdcclxuICAgICAgICAgICAgYXJyYXlFeHRlbnNpb25zLnNldC5jYWxsKHRhcmdldCwgcGFyc2VJbnQobmFtZSksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBmYWlsKFwiT2JzZXJ2YWJsZSBhcnJheXMgY2Fubm90IGJlIGZyb3plblwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn07XHJcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmFibGVBcnJheShpbml0aWFsVmFsdWVzLCBlbmhhbmNlciwgbmFtZSwgb3duZWQpIHtcclxuICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZUFycmF5QFwiICsgZ2V0TmV4dElkKCk7IH1cclxuICAgIGlmIChvd25lZCA9PT0gdm9pZCAwKSB7IG93bmVkID0gZmFsc2U7IH1cclxuICAgIHZhciBhZG0gPSBuZXcgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24obmFtZSwgZW5oYW5jZXIsIG93bmVkKTtcclxuICAgIGFkZEhpZGRlbkZpbmFsUHJvcChhZG0udmFsdWVzLCAkbW9ieCwgYWRtKTtcclxuICAgIHZhciBwcm94eSA9IG5ldyBQcm94eShhZG0udmFsdWVzLCBhcnJheVRyYXBzKTtcclxuICAgIGFkbS5wcm94eSA9IHByb3h5O1xyXG4gICAgaWYgKGluaXRpYWxWYWx1ZXMgJiYgaW5pdGlhbFZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgcHJldiA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQodHJ1ZSk7XHJcbiAgICAgICAgYWRtLnNwbGljZVdpdGhBcnJheSgwLCAwLCBpbml0aWFsVmFsdWVzKTtcclxuICAgICAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZChwcmV2KTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcm94eTtcclxufVxyXG52YXIgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbihuYW1lLCBlbmhhbmNlciwgb3duZWQpIHtcclxuICAgICAgICB0aGlzLm93bmVkID0gb3duZWQ7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnByb3h5ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMubGFzdEtub3duTGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmF0b20gPSBuZXcgQXRvbShuYW1lIHx8IFwiT2JzZXJ2YWJsZUFycmF5QFwiICsgZ2V0TmV4dElkKCkpO1xyXG4gICAgICAgIHRoaXMuZW5oYW5jZXIgPSBmdW5jdGlvbiAobmV3Viwgb2xkVikgeyByZXR1cm4gZW5oYW5jZXIobmV3Viwgb2xkViwgbmFtZSArIFwiWy4uXVwiKTsgfTtcclxuICAgIH1cclxuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5kZWhhbmNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5kZWhhbmNlVmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlcykge1xyXG4gICAgICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQgJiYgdmFsdWVzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMubWFwKHRoaXMuZGVoYW5jZXIpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xyXG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkgPT09IHZvaWQgMCkgeyBmaXJlSW1tZWRpYXRlbHkgPSBmYWxzZTsgfVxyXG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIoe1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzcGxpY2VcIixcclxuICAgICAgICAgICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgYWRkZWQ6IHRoaXMudmFsdWVzLnNsaWNlKCksXHJcbiAgICAgICAgICAgICAgICBhZGRlZENvdW50OiB0aGlzLnZhbHVlcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVkOiBbXSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudDogMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5nZXRBcnJheUxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5zZXRBcnJheUxlbmd0aCA9IGZ1bmN0aW9uIChuZXdMZW5ndGgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG5ld0xlbmd0aCAhPT0gXCJudW1iZXJcIiB8fCBuZXdMZW5ndGggPCAwKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieC5hcnJheV0gT3V0IG9mIHJhbmdlOiBcIiArIG5ld0xlbmd0aCk7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRMZW5ndGggPSB0aGlzLnZhbHVlcy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKG5ld0xlbmd0aCA9PT0gY3VycmVudExlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGVsc2UgaWYgKG5ld0xlbmd0aCA+IGN1cnJlbnRMZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIG5ld0l0ZW1zID0gbmV3IEFycmF5KG5ld0xlbmd0aCAtIGN1cnJlbnRMZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0xlbmd0aCAtIGN1cnJlbnRMZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIG5ld0l0ZW1zW2ldID0gdW5kZWZpbmVkOyAvLyBObyBBcnJheS5maWxsIGV2ZXJ5d2hlcmUuLi5cclxuICAgICAgICAgICAgdGhpcy5zcGxpY2VXaXRoQXJyYXkoY3VycmVudExlbmd0aCwgMCwgbmV3SXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc3BsaWNlV2l0aEFycmF5KG5ld0xlbmd0aCwgY3VycmVudExlbmd0aCAtIG5ld0xlbmd0aCk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLnVwZGF0ZUFycmF5TGVuZ3RoID0gZnVuY3Rpb24gKG9sZExlbmd0aCwgZGVsdGEpIHtcclxuICAgICAgICBpZiAob2xkTGVuZ3RoICE9PSB0aGlzLmxhc3RLbm93bkxlbmd0aClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYnhdIE1vZGlmaWNhdGlvbiBleGNlcHRpb246IHRoZSBpbnRlcm5hbCBzdHJ1Y3R1cmUgb2YgYW4gb2JzZXJ2YWJsZSBhcnJheSB3YXMgY2hhbmdlZC5cIik7XHJcbiAgICAgICAgdGhpcy5sYXN0S25vd25MZW5ndGggKz0gZGVsdGE7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLnNwbGljZVdpdGhBcnJheSA9IGZ1bmN0aW9uIChpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCh0aGlzLmF0b20pO1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLnZhbHVlcy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICBlbHNlIGlmIChpbmRleCA+IGxlbmd0aClcclxuICAgICAgICAgICAgaW5kZXggPSBsZW5ndGg7XHJcbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPCAwKVxyXG4gICAgICAgICAgICBpbmRleCA9IE1hdGgubWF4KDAsIGxlbmd0aCArIGluZGV4KTtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSlcclxuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSBsZW5ndGggLSBpbmRleDtcclxuICAgICAgICBlbHNlIGlmIChkZWxldGVDb3VudCA9PT0gdW5kZWZpbmVkIHx8IGRlbGV0ZUNvdW50ID09PSBudWxsKVxyXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGRlbGV0ZUNvdW50LCBsZW5ndGggLSBpbmRleCkpO1xyXG4gICAgICAgIGlmIChuZXdJdGVtcyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBuZXdJdGVtcyA9IEVNUFRZX0FSUkFZO1xyXG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNwbGljZVwiLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlZENvdW50OiBkZWxldGVDb3VudCxcclxuICAgICAgICAgICAgICAgIGFkZGVkOiBuZXdJdGVtc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRU1QVFlfQVJSQVk7XHJcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gY2hhbmdlLnJlbW92ZWRDb3VudDtcclxuICAgICAgICAgICAgbmV3SXRlbXMgPSBjaGFuZ2UuYWRkZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0l0ZW1zID0gbmV3SXRlbXMubGVuZ3RoID09PSAwID8gbmV3SXRlbXMgOiBuZXdJdGVtcy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIF90aGlzLmVuaGFuY2VyKHYsIHVuZGVmaW5lZCk7IH0pO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdmFyIGxlbmd0aERlbHRhID0gbmV3SXRlbXMubGVuZ3RoIC0gZGVsZXRlQ291bnQ7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXJyYXlMZW5ndGgobGVuZ3RoLCBsZW5ndGhEZWx0YSk7IC8vIGNoZWNrcyBpZiBpbnRlcm5hbCBhcnJheSB3YXNuJ3QgbW9kaWZpZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuc3BsaWNlSXRlbXNJbnRvVmFsdWVzKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpO1xyXG4gICAgICAgIGlmIChkZWxldGVDb3VudCAhPT0gMCB8fCBuZXdJdGVtcy5sZW5ndGggIT09IDApXHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5QXJyYXlTcGxpY2UoaW5kZXgsIG5ld0l0ZW1zLCByZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZXMocmVzKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuc3BsaWNlSXRlbXNJbnRvVmFsdWVzID0gZnVuY3Rpb24gKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgaWYgKG5ld0l0ZW1zLmxlbmd0aCA8IE1BWF9TUExJQ0VfU0laRSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKF9hID0gdGhpcy52YWx1ZXMpLnNwbGljZS5hcHBseShfYSwgX19zcHJlYWQoW2luZGV4LCBkZWxldGVDb3VudF0sIG5ld0l0ZW1zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy52YWx1ZXMuc2xpY2UoaW5kZXgsIGluZGV4ICsgZGVsZXRlQ291bnQpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzXHJcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KG5ld0l0ZW1zLCB0aGlzLnZhbHVlcy5zbGljZShpbmRleCArIGRlbGV0ZUNvdW50KSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5ub3RpZnlBcnJheUNoaWxkVXBkYXRlID0gZnVuY3Rpb24gKGluZGV4LCBuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICB2YXIgbm90aWZ5U3B5ID0gIXRoaXMub3duZWQgJiYgaXNTcHlFbmFibGVkKCk7XHJcbiAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcclxuICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxyXG4gICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgLy8gVGhlIHJlYXNvbiB3aHkgdGhpcyBpcyBvbiByaWdodCBoYW5kIHNpZGUgaGVyZSAoYW5kIG5vdCBhYm92ZSksIGlzIHRoaXMgd2F5IHRoZSB1Z2xpZmllciB3aWxsIGRyb3AgaXQsIGJ1dCBpdCB3b24ndFxyXG4gICAgICAgIC8vIGNhdXNlIGFueSBydW50aW1lIG92ZXJoZWFkIGluIGRldmVsb3BtZW50IG1vZGUgd2l0aG91dCBOT0RFX0VOViBzZXQsIHVubGVzcyBzcHlpbmcgaXMgZW5hYmxlZFxyXG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IG5hbWU6IHRoaXMuYXRvbS5uYW1lIH0pKTtcclxuICAgICAgICB0aGlzLmF0b20ucmVwb3J0Q2hhbmdlZCgpO1xyXG4gICAgICAgIGlmIChub3RpZnkpXHJcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xyXG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUubm90aWZ5QXJyYXlTcGxpY2UgPSBmdW5jdGlvbiAoaW5kZXgsIGFkZGVkLCByZW1vdmVkKSB7XHJcbiAgICAgICAgdmFyIG5vdGlmeVNweSA9ICF0aGlzLm93bmVkICYmIGlzU3B5RW5hYmxlZCgpO1xyXG4gICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XHJcbiAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNwbGljZVwiLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlZDogcmVtb3ZlZCxcclxuICAgICAgICAgICAgICAgIGFkZGVkOiBhZGRlZCxcclxuICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudDogcmVtb3ZlZC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBhZGRlZENvdW50OiBhZGRlZC5sZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKHt9LCBjaGFuZ2UsIHsgbmFtZTogdGhpcy5hdG9tLm5hbWUgfSkpO1xyXG4gICAgICAgIHRoaXMuYXRvbS5yZXBvcnRDaGFuZ2VkKCk7XHJcbiAgICAgICAgLy8gY29uZm9ybTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvb2JzZXJ2ZVxyXG4gICAgICAgIGlmIChub3RpZnkpXHJcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xyXG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb247XHJcbn0oKSk7XHJcbnZhciBhcnJheUV4dGVuc2lvbnMgPSB7XHJcbiAgICBpbnRlcmNlcHQ6IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJG1vYnhdLmludGVyY2VwdChoYW5kbGVyKTtcclxuICAgIH0sXHJcbiAgICBvYnNlcnZlOiBmdW5jdGlvbiAobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xyXG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkgPT09IHZvaWQgMCkgeyBmaXJlSW1tZWRpYXRlbHkgPSBmYWxzZTsgfVxyXG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcclxuICAgICAgICByZXR1cm4gYWRtLm9ic2VydmUobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGxpY2UoMCk7XHJcbiAgICB9LFxyXG4gICAgcmVwbGFjZTogZnVuY3Rpb24gKG5ld0l0ZW1zKSB7XHJcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xyXG4gICAgICAgIHJldHVybiBhZG0uc3BsaWNlV2l0aEFycmF5KDAsIGFkbS52YWx1ZXMubGVuZ3RoLCBuZXdJdGVtcyk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyB0aGlzIGFycmF5IGJhY2sgdG8gYSAoc2hhbGxvdykgamF2YXNjcmlwdCBzdHJ1Y3R1cmUuXHJcbiAgICAgKiBGb3IgYSBkZWVwIGNsb25lIHVzZSBtb2J4LnRvSlNcclxuICAgICAqL1xyXG4gICAgdG9KUzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNsaWNlKCk7XHJcbiAgICB9LFxyXG4gICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gVXNlZCBieSBKU09OLnN0cmluZ2lmeVxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvSlMoKTtcclxuICAgIH0sXHJcbiAgICAvKlxyXG4gICAgICogZnVuY3Rpb25zIHRoYXQgZG8gYWx0ZXIgdGhlIGludGVybmFsIHN0cnVjdHVyZSBvZiB0aGUgYXJyYXksIChiYXNlZCBvbiBsaWIuZXM2LmQudHMpXHJcbiAgICAgKiBzaW5jZSB0aGVzZSBmdW5jdGlvbnMgYWx0ZXIgdGhlIGlubmVyIHN0cnVjdHVyZSBvZiB0aGUgYXJyYXksIHRoZSBoYXZlIHNpZGUgZWZmZWN0cy5cclxuICAgICAqIEJlY2F1c2UgdGhlIGhhdmUgc2lkZSBlZmZlY3RzLCB0aGV5IHNob3VsZCBub3QgYmUgdXNlZCBpbiBjb21wdXRlZCBmdW5jdGlvbixcclxuICAgICAqIGFuZCBmb3IgdGhhdCByZWFzb24gdGhlIGRvIG5vdCBjYWxsIGRlcGVuZGVuY3lTdGF0ZS5ub3RpZnlPYnNlcnZlZFxyXG4gICAgICovXHJcbiAgICBzcGxpY2U6IGZ1bmN0aW9uIChpbmRleCwgZGVsZXRlQ291bnQpIHtcclxuICAgICAgICB2YXIgbmV3SXRlbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBuZXdJdGVtc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xyXG4gICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhZG0uc3BsaWNlV2l0aEFycmF5KGluZGV4KTtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXkoaW5kZXgsIGRlbGV0ZUNvdW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXkoaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcyk7XHJcbiAgICB9LFxyXG4gICAgc3BsaWNlV2l0aEFycmF5OiBmdW5jdGlvbiAoaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcykge1xyXG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcclxuICAgICAgICByZXR1cm4gYWRtLnNwbGljZVdpdGhBcnJheShpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKTtcclxuICAgIH0sXHJcbiAgICBwdXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgaXRlbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xyXG4gICAgICAgIGFkbS5zcGxpY2VXaXRoQXJyYXkoYWRtLnZhbHVlcy5sZW5ndGgsIDAsIGl0ZW1zKTtcclxuICAgICAgICByZXR1cm4gYWRtLnZhbHVlcy5sZW5ndGg7XHJcbiAgICB9LFxyXG4gICAgcG9wOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKE1hdGgubWF4KHRoaXNbJG1vYnhdLnZhbHVlcy5sZW5ndGggLSAxLCAwKSwgMSlbMF07XHJcbiAgICB9LFxyXG4gICAgc2hpZnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGxpY2UoMCwgMSlbMF07XHJcbiAgICB9LFxyXG4gICAgdW5zaGlmdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcclxuICAgICAgICBhZG0uc3BsaWNlV2l0aEFycmF5KDAsIDAsIGl0ZW1zKTtcclxuICAgICAgICByZXR1cm4gYWRtLnZhbHVlcy5sZW5ndGg7XHJcbiAgICB9LFxyXG4gICAgcmV2ZXJzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHJldmVyc2UgYnkgZGVmYXVsdCBtdXRhdGVzIGluIHBsYWNlIGJlZm9yZSByZXR1cm5pbmcgdGhlIHJlc3VsdFxyXG4gICAgICAgIC8vIHdoaWNoIG1ha2VzIGl0IGJvdGggYSAnZGVyaXZhdGlvbicgYW5kIGEgJ211dGF0aW9uJy5cclxuICAgICAgICAvLyBzbyB3ZSBkZXZpYXRlIGZyb20gdGhlIGRlZmF1bHQgYW5kIGp1c3QgbWFrZSBpdCBhbiBkZXJ2aXRhdGlvblxyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnhdIGBvYnNlcnZhYmxlQXJyYXkucmV2ZXJzZSgpYCB3aWxsIG5vdCB1cGRhdGUgdGhlIGFycmF5IGluIHBsYWNlLiBVc2UgYG9ic2VydmFibGVBcnJheS5zbGljZSgpLnJldmVyc2UoKWAgdG8gc3VwcHJlc3MgdGhpcyB3YXJuaW5nIGFuZCBwZXJmb3JtIHRoZSBvcGVyYXRpb24gb24gYSBjb3B5LCBvciBgb2JzZXJ2YWJsZUFycmF5LnJlcGxhY2Uob2JzZXJ2YWJsZUFycmF5LnNsaWNlKCkucmV2ZXJzZSgpKWAgdG8gcmV2ZXJzZSAmIHVwZGF0ZSBpbiBwbGFjZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNsb25lID0gdGhpcy5zbGljZSgpO1xyXG4gICAgICAgIHJldHVybiBjbG9uZS5yZXZlcnNlLmFwcGx5KGNsb25lLCBhcmd1bWVudHMpO1xyXG4gICAgfSxcclxuICAgIHNvcnQ6IGZ1bmN0aW9uIChjb21wYXJlRm4pIHtcclxuICAgICAgICAvLyBzb3J0IGJ5IGRlZmF1bHQgbXV0YXRlcyBpbiBwbGFjZSBiZWZvcmUgcmV0dXJuaW5nIHRoZSByZXN1bHRcclxuICAgICAgICAvLyB3aGljaCBnb2VzIGFnYWluc3QgYWxsIGdvb2QgcHJhY3RpY2VzLiBMZXQncyBub3QgY2hhbmdlIHRoZSBhcnJheSBpbiBwbGFjZSFcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4XSBgb2JzZXJ2YWJsZUFycmF5LnNvcnQoKWAgd2lsbCBub3QgdXBkYXRlIHRoZSBhcnJheSBpbiBwbGFjZS4gVXNlIGBvYnNlcnZhYmxlQXJyYXkuc2xpY2UoKS5zb3J0KClgIHRvIHN1cHByZXNzIHRoaXMgd2FybmluZyBhbmQgcGVyZm9ybSB0aGUgb3BlcmF0aW9uIG9uIGEgY29weSwgb3IgYG9ic2VydmFibGVBcnJheS5yZXBsYWNlKG9ic2VydmFibGVBcnJheS5zbGljZSgpLnNvcnQoKSlgIHRvIHNvcnQgJiB1cGRhdGUgaW4gcGxhY2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjbG9uZSA9IHRoaXMuc2xpY2UoKTtcclxuICAgICAgICByZXR1cm4gY2xvbmUuc29ydC5hcHBseShjbG9uZSwgYXJndW1lbnRzKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcclxuICAgICAgICB2YXIgaWR4ID0gYWRtLmRlaGFuY2VWYWx1ZXMoYWRtLnZhbHVlcykuaW5kZXhPZih2YWx1ZSk7XHJcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgZ2V0OiBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XHJcbiAgICAgICAgaWYgKGFkbSkge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPCBhZG0udmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgYWRtLmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhZG0uZGVoYW5jZVZhbHVlKGFkbS52YWx1ZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieC5hcnJheV0gQXR0ZW1wdCB0byByZWFkIGFuIGFycmF5IGluZGV4IChcIiArIGluZGV4ICsgXCIpIHRoYXQgaXMgb3V0IG9mIGJvdW5kcyAoXCIgKyBhZG0udmFsdWVzLmxlbmd0aCArIFwiKS4gUGxlYXNlIGNoZWNrIGxlbmd0aCBmaXJzdC4gT3V0IG9mIGJvdW5kIGluZGljZXMgd2lsbCBub3QgYmUgdHJhY2tlZCBieSBNb2JYXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuICAgIHNldDogZnVuY3Rpb24gKGluZGV4LCBuZXdWYWx1ZSkge1xyXG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcclxuICAgICAgICB2YXIgdmFsdWVzID0gYWRtLnZhbHVlcztcclxuICAgICAgICBpZiAoaW5kZXggPCB2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBhdCBpbmRleCBpbiByYW5nZVxyXG4gICAgICAgICAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZChhZG0uYXRvbSk7XHJcbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IHZhbHVlc1tpbmRleF07XHJcbiAgICAgICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnMoYWRtKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZShhZG0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogYWRtLnByb3h5LFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3VmFsdWUgPSBhZG0uZW5oYW5jZXIobmV3VmFsdWUsIG9sZFZhbHVlKTtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZWQgPSBuZXdWYWx1ZSAhPT0gb2xkVmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBhZG0ubm90aWZ5QXJyYXlDaGlsZFVwZGF0ZShpbmRleCwgbmV3VmFsdWUsIG9sZFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyBhZGQgYSBuZXcgaXRlbVxyXG4gICAgICAgICAgICBhZG0uc3BsaWNlV2l0aEFycmF5KGluZGV4LCAwLCBbbmV3VmFsdWVdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIG91dCBvZiBib3VuZHNcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYnguYXJyYXldIEluZGV4IG91dCBvZiBib3VuZHMsIFwiICsgaW5kZXggKyBcIiBpcyBsYXJnZXIgdGhhbiBcIiArIHZhbHVlcy5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuW1xyXG4gICAgXCJjb25jYXRcIixcclxuICAgIFwiZXZlcnlcIixcclxuICAgIFwiZmlsdGVyXCIsXHJcbiAgICBcImZvckVhY2hcIixcclxuICAgIFwiaW5kZXhPZlwiLFxyXG4gICAgXCJqb2luXCIsXHJcbiAgICBcImxhc3RJbmRleE9mXCIsXHJcbiAgICBcIm1hcFwiLFxyXG4gICAgXCJyZWR1Y2VcIixcclxuICAgIFwicmVkdWNlUmlnaHRcIixcclxuICAgIFwic2xpY2VcIixcclxuICAgIFwic29tZVwiLFxyXG4gICAgXCJ0b1N0cmluZ1wiLFxyXG4gICAgXCJ0b0xvY2FsZVN0cmluZ1wiXHJcbl0uZm9yRWFjaChmdW5jdGlvbiAoZnVuY05hbWUpIHtcclxuICAgIGFycmF5RXh0ZW5zaW9uc1tmdW5jTmFtZV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xyXG4gICAgICAgIGFkbS5hdG9tLnJlcG9ydE9ic2VydmVkKCk7XHJcbiAgICAgICAgdmFyIHJlcyA9IGFkbS5kZWhhbmNlVmFsdWVzKGFkbS52YWx1ZXMpO1xyXG4gICAgICAgIHJldHVybiByZXNbZnVuY05hbWVdLmFwcGx5KHJlcywgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbn0pO1xyXG52YXIgaXNPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbiA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvblwiLCBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbik7XHJcbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZUFycmF5KHRoaW5nKSB7XHJcbiAgICByZXR1cm4gaXNPYmplY3QodGhpbmcpICYmIGlzT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24odGhpbmdbJG1vYnhdKTtcclxufVxuXG52YXIgX2E7XHJcbnZhciBPYnNlcnZhYmxlTWFwTWFya2VyID0ge307XHJcbi8vIGp1c3QgZXh0ZW5kIE1hcD8gU2VlIGFsc28gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vbmVzdGhhcnVzLzEzYjRkNzRmMmVmNGEyZjQzNTdkYmQzZmMyM2MxZTU0XHJcbi8vIEJ1dDogaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2lzc3Vlcy8xNTU2XHJcbnZhciBPYnNlcnZhYmxlTWFwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZU1hcChpbml0aWFsRGF0YSwgZW5oYW5jZXIsIG5hbWUpIHtcclxuICAgICAgICBpZiAoZW5oYW5jZXIgPT09IHZvaWQgMCkgeyBlbmhhbmNlciA9IGRlZXBFbmhhbmNlcjsgfVxyXG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZU1hcEBcIiArIGdldE5leHRJZCgpOyB9XHJcbiAgICAgICAgdGhpcy5lbmhhbmNlciA9IGVuaGFuY2VyO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpc1tfYV0gPSBPYnNlcnZhYmxlTWFwTWFya2VyO1xyXG4gICAgICAgIHRoaXMuX2tleXNBdG9tID0gY3JlYXRlQXRvbSh0aGlzLm5hbWUgKyBcIi5rZXlzKClcIik7XHJcbiAgICAgICAgdGhpc1tTeW1ib2wudG9TdHJpbmdUYWddID0gXCJNYXBcIjtcclxuICAgICAgICBpZiAodHlwZW9mIE1hcCAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1vYngubWFwIHJlcXVpcmVzIE1hcCBwb2x5ZmlsbCBmb3IgdGhlIGN1cnJlbnQgYnJvd3Nlci4gQ2hlY2sgYmFiZWwtcG9seWZpbGwgb3IgY29yZS1qcy9lczYvbWFwLmpzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kYXRhID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuX2hhc01hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLm1lcmdlKGluaXRpYWxEYXRhKTtcclxuICAgIH1cclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLl9oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuaGFzKGtleSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCFnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24pXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYXMoa2V5KTtcclxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLl9oYXNNYXAuZ2V0KGtleSk7XHJcbiAgICAgICAgaWYgKCFlbnRyeSkge1xyXG4gICAgICAgICAgICAvLyB0b2RvOiByZXBsYWNlIHdpdGggYXRvbSAoYnJlYWtpbmcgY2hhbmdlKVxyXG4gICAgICAgICAgICB2YXIgbmV3RW50cnkgPSAoZW50cnkgPSBuZXcgT2JzZXJ2YWJsZVZhbHVlKHRoaXMuX2hhcyhrZXkpLCByZWZlcmVuY2VFbmhhbmNlciwgdGhpcy5uYW1lICsgXCIuXCIgKyBzdHJpbmdpZnlLZXkoa2V5KSArIFwiP1wiLCBmYWxzZSkpO1xyXG4gICAgICAgICAgICB0aGlzLl9oYXNNYXAuc2V0KGtleSwgbmV3RW50cnkpO1xyXG4gICAgICAgICAgICBvbkJlY29tZVVub2JzZXJ2ZWQobmV3RW50cnksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9oYXNNYXAuZGVsZXRlKGtleSk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZW50cnkuZ2V0KCk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgaGFzS2V5ID0gdGhpcy5faGFzKGtleSk7XHJcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGhhc0tleSA/IFwidXBkYXRlXCIgOiBcImFkZFwiLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgbmFtZToga2V5XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB2YWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGhhc0tleSkge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVWYWx1ZShrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZFZhbHVlKGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVcIixcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtleVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XHJcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XHJcbiAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRlbGV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogdGhpcy5fZGF0YS5nZXQoa2V5KS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fa2V5c0F0b20ucmVwb3J0Q2hhbmdlZCgpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX3VwZGF0ZUhhc01hcEVudHJ5KGtleSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBfdGhpcy5fZGF0YS5nZXQoa2V5KTtcclxuICAgICAgICAgICAgICAgIG9ic2VydmFibGUuc2V0TmV3VmFsdWUodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9kYXRhLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeSlcclxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLl91cGRhdGVIYXNNYXBFbnRyeSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5faGFzTWFwLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChlbnRyeSkge1xyXG4gICAgICAgICAgICBlbnRyeS5zZXROZXdWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLl91cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uIChrZXksIG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLl9kYXRhLmdldChrZXkpO1xyXG4gICAgICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZS5wcmVwYXJlTmV3VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEKSB7XHJcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcclxuICAgICAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcclxuICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvYnNlcnZhYmxlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeSlcclxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5fYWRkVmFsdWUgPSBmdW5jdGlvbiAoa2V5LCBuZXdWYWx1ZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5fa2V5c0F0b20pO1xyXG4gICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZVZhbHVlKG5ld1ZhbHVlLCBfdGhpcy5lbmhhbmNlciwgX3RoaXMubmFtZSArIFwiLlwiICsgc3RyaW5naWZ5S2V5KGtleSksIGZhbHNlKTtcclxuICAgICAgICAgICAgX3RoaXMuX2RhdGEuc2V0KGtleSwgb2JzZXJ2YWJsZSk7XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZS52YWx1ZTsgLy8gdmFsdWUgbWlnaHQgaGF2ZSBiZWVuIGNoYW5nZWRcclxuICAgICAgICAgICAgX3RoaXMuX3VwZGF0ZUhhc01hcEVudHJ5KGtleSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIF90aGlzLl9rZXlzQXRvbS5yZXBvcnRDaGFuZ2VkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xyXG4gICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XHJcbiAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFkZFwiLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xyXG4gICAgICAgIGlmIChub3RpZnkpXHJcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xyXG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzKGtleSkpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZSh0aGlzLl9kYXRhLmdldChrZXkpLmdldCgpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlVmFsdWUodW5kZWZpbmVkKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5kZWhhbmNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VyKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fa2V5c0F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5rZXlzKCk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgbmV4dEluZGV4ID0gMDtcclxuICAgICAgICB2YXIga2V5cyA9IEFycmF5LmZyb20odGhpcy5rZXlzKCkpO1xyXG4gICAgICAgIHJldHVybiBtYWtlSXRlcmFibGUoe1xyXG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dEluZGV4IDwga2V5cy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICA/IHsgdmFsdWU6IHNlbGYuZ2V0KGtleXNbbmV4dEluZGV4KytdKSwgZG9uZTogZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgIDogeyBkb25lOiB0cnVlIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgbmV4dEluZGV4ID0gMDtcclxuICAgICAgICB2YXIga2V5cyA9IEFycmF5LmZyb20odGhpcy5rZXlzKCkpO1xyXG4gICAgICAgIHJldHVybiBtYWtlSXRlcmFibGUoe1xyXG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dEluZGV4IDwga2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tuZXh0SW5kZXgrK107XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtrZXksIHNlbGYuZ2V0KGtleSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZVsoX2EgPSAkbW9ieCwgU3ltYm9sLml0ZXJhdG9yKV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcygpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHRoaXNBcmcpIHtcclxuICAgICAgICB2YXIgZV8xLCBfYTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2QgPSBfX3JlYWQoX2MudmFsdWUsIDIpLCBrZXkgPSBfZFswXSwgdmFsdWUgPSBfZFsxXTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIGtleSwgdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKiBNZXJnZSBhbm90aGVyIG9iamVjdCBpbnRvIHRoaXMgb2JqZWN0LCByZXR1cm5zIHRoaXMuICovXHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU1hcChvdGhlcikpIHtcclxuICAgICAgICAgICAgb3RoZXIgPSBvdGhlci50b0pTKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGlzUGxhaW5PYmplY3Qob3RoZXIpKVxyXG4gICAgICAgICAgICAgICAgZ2V0UGxhaW5PYmplY3RLZXlzKG90aGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIF90aGlzLnNldChrZXksIG90aGVyW2tleV0pOyB9KTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvdGhlcikpXHJcbiAgICAgICAgICAgICAgICBvdGhlci5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYiA9IF9fcmVhZChfYSwgMiksIGtleSA9IF9iWzBdLCB2YWx1ZSA9IF9iWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoaXNFUzZNYXAob3RoZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3RoZXIuY29uc3RydWN0b3IgIT09IE1hcClcclxuICAgICAgICAgICAgICAgICAgICBmYWlsKFwiQ2Fubm90IGluaXRpYWxpemUgZnJvbSBjbGFzc2VzIHRoYXQgaW5oZXJpdCBmcm9tIE1hcDogXCIgKyBvdGhlci5jb25zdHJ1Y3Rvci5uYW1lKTsgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgICAgICAgICBvdGhlci5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7IHJldHVybiBfdGhpcy5zZXQoa2V5LCB2YWx1ZSk7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG90aGVyICE9PSBudWxsICYmIG90aGVyICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBmYWlsKFwiQ2Fubm90IGluaXRpYWxpemUgbWFwIGZyb20gXCIgKyBvdGhlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZV8yLCBfYTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhfdGhpcy5rZXlzKCkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBfYy52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cclxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKHZhbHVlcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBncmFiIGFsbCB0aGUga2V5cyB0aGF0IGFyZSBwcmVzZW50IGluIHRoZSBuZXcgbWFwIGJ1dCBub3QgcHJlc2VudCBpbiB0aGUgY3VycmVudCBtYXBcclxuICAgICAgICAgICAgLy8gYW5kIGRlbGV0ZSB0aGVtIGZyb20gdGhlIG1hcCwgdGhlbiBtZXJnZSB0aGUgbmV3IG1hcFxyXG4gICAgICAgICAgICAvLyB0aGlzIHdpbGwgY2F1c2UgcmVhY3Rpb25zIG9ubHkgb24gY2hhbmdlZCB2YWx1ZXNcclxuICAgICAgICAgICAgdmFyIG5ld0tleXMgPSBnZXRNYXBMaWtlS2V5cyh2YWx1ZXMpO1xyXG4gICAgICAgICAgICB2YXIgb2xkS2V5cyA9IEFycmF5LmZyb20oX3RoaXMua2V5cygpKTtcclxuICAgICAgICAgICAgdmFyIG1pc3NpbmdLZXlzID0gb2xkS2V5cy5maWx0ZXIoZnVuY3Rpb24gKGspIHsgcmV0dXJuIG5ld0tleXMuaW5kZXhPZihrKSA9PT0gLTE7IH0pO1xyXG4gICAgICAgICAgICBtaXNzaW5nS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IHJldHVybiBfdGhpcy5kZWxldGUoayk7IH0pO1xyXG4gICAgICAgICAgICBfdGhpcy5tZXJnZSh2YWx1ZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYnNlcnZhYmxlTWFwLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5fa2V5c0F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuc2l6ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIHBsYWluIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhpcyBtYXAuXHJcbiAgICAgKiBOb3RlIHRoYXQgYWxsIHRoZSBrZXlzIGJlaW5nIHN0cmluZ2lmaWVkLlxyXG4gICAgICogSWYgdGhlcmUgYXJlIGR1cGxpY2F0aW5nIGtleXMgYWZ0ZXIgY29udmVydGluZyB0aGVtIHRvIHN0cmluZ3MsIGJlaGF2aW91ciBpcyB1bmRldGVybWluZWQuXHJcbiAgICAgKi9cclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnRvUE9KTyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZV8zLCBfYTtcclxuICAgICAgICB2YXIgcmVzID0ge307XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9kID0gX19yZWFkKF9jLnZhbHVlLCAyKSwga2V5ID0gX2RbMF0sIHZhbHVlID0gX2RbMV07XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBsaWUgYWJvdXQgc3ltYm9sIGtleSB0eXBlcyBkdWUgdG8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xODYzXHJcbiAgICAgICAgICAgICAgICByZXNbdHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IHN0cmluZ2lmeUtleShrZXkpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlXzNfMSkgeyBlXzMgPSB7IGVycm9yOiBlXzNfMSB9OyB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzMpIHRocm93IGVfMy5lcnJvcjsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIHNoYWxsb3cgbm9uIG9ic2VydmFibGUgb2JqZWN0IGNsb25lIG9mIHRoaXMgbWFwLlxyXG4gICAgICogTm90ZSB0aGF0IHRoZSB2YWx1ZXMgbWlndGggc3RpbGwgYmUgb2JzZXJ2YWJsZS4gRm9yIGEgZGVlcCBjbG9uZSB1c2UgbW9ieC50b0pTLlxyXG4gICAgICovXHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS50b0pTID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWFwKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBVc2VkIGJ5IEpTT04uc3RyaW5naWZ5XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9QT0pPKCk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gKHRoaXMubmFtZSArXHJcbiAgICAgICAgICAgIFwiW3sgXCIgK1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMua2V5cygpKVxyXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBzdHJpbmdpZnlLZXkoa2V5KSArIFwiOiBcIiArIChcIlwiICsgX3RoaXMuZ2V0KGtleSkpOyB9KVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oXCIsIFwiKSArXHJcbiAgICAgICAgICAgIFwiIH1dXCIpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2ZXMgdGhpcyBvYmplY3QuIFRyaWdnZXJzIGZvciB0aGUgZXZlbnRzICdhZGQnLCAndXBkYXRlJyBhbmQgJ2RlbGV0ZScuXHJcbiAgICAgKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9vYnNlcnZlXHJcbiAgICAgKiBmb3IgY2FsbGJhY2sgZGV0YWlsc1xyXG4gICAgICovXHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcclxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgaW52YXJpYW50KGZpcmVJbW1lZGlhdGVseSAhPT0gdHJ1ZSwgXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IGZpcmVJbW1lZGlhdGVseT10cnVlIGluIGNvbWJpbmF0aW9uIHdpdGggbWFwcy5cIik7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGVNYXA7XHJcbn0oKSk7XHJcbi8qICd2YXInIGZpeGVzIHNtYWxsLWJ1aWxkIGlzc3VlICovXHJcbnZhciBpc09ic2VydmFibGVNYXAgPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiT2JzZXJ2YWJsZU1hcFwiLCBPYnNlcnZhYmxlTWFwKTtcblxudmFyIF9hJDE7XHJcbnZhciBPYnNlcnZhYmxlU2V0TWFya2VyID0ge307XHJcbnZhciBPYnNlcnZhYmxlU2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZVNldChpbml0aWFsRGF0YSwgZW5oYW5jZXIsIG5hbWUpIHtcclxuICAgICAgICBpZiAoZW5oYW5jZXIgPT09IHZvaWQgMCkgeyBlbmhhbmNlciA9IGRlZXBFbmhhbmNlcjsgfVxyXG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZVNldEBcIiArIGdldE5leHRJZCgpOyB9XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzW19hJDFdID0gT2JzZXJ2YWJsZVNldE1hcmtlcjtcclxuICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHRoaXMuX2F0b20gPSBjcmVhdGVBdG9tKHRoaXMubmFtZSk7XHJcbiAgICAgICAgdGhpc1tTeW1ib2wudG9TdHJpbmdUYWddID0gXCJTZXRcIjtcclxuICAgICAgICBpZiAodHlwZW9mIFNldCAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1vYnguc2V0IHJlcXVpcmVzIFNldCBwb2x5ZmlsbCBmb3IgdGhlIGN1cnJlbnQgYnJvd3Nlci4gQ2hlY2sgYmFiZWwtcG9seWZpbGwgb3IgY29yZS1qcy9lczYvc2V0LmpzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuaGFuY2VyID0gZnVuY3Rpb24gKG5ld1YsIG9sZFYpIHsgcmV0dXJuIGVuaGFuY2VyKG5ld1YsIG9sZFYsIG5hbWUpOyB9O1xyXG4gICAgICAgIGlmIChpbml0aWFsRGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UoaW5pdGlhbERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLmRlaGFuY2VWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZXIodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZV8xLCBfYTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhfdGhpcy5fZGF0YS52YWx1ZXMoKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gX2MudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlbGV0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cclxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrRm4sIHRoaXNBcmcpIHtcclxuICAgICAgICB2YXIgZV8yLCBfYTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBfYy52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrRm4uY2FsbCh0aGlzQXJnLCB2YWx1ZSwgdmFsdWUsIHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuc2l6ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5fYXRvbSk7XHJcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkXCIsXHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IGlkZWFsbHksIHZhbHVlID0gY2hhbmdlLnZhbHVlIHdvdWxkIGJlIGRvbmUgaGVyZSwgc28gdGhhdCB2YWx1ZXMgY2FuIGJlXHJcbiAgICAgICAgICAgIC8vIGNoYW5nZWQgYnkgaW50ZXJjZXB0b3IuIFNhbWUgYXBwbGllcyBmb3Igb3RoZXIgU2V0IGFuZCBNYXAgYXBpJ3MuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5oYXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9kYXRhLmFkZChfdGhpcy5lbmhhbmNlcih2YWx1ZSwgdW5kZWZpbmVkKSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fYXRvbS5yZXBvcnRDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XHJcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XHJcbiAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFkZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydChjaGFuZ2UpO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5KVxyXG4gICAgICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlXCIsXHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5oYXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcclxuICAgICAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcclxuICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKHt9LCBjaGFuZ2UsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX2F0b20ucmVwb3J0Q2hhbmdlZCgpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX2RhdGEuZGVsZXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnkpXHJcbiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9hdG9tLnJlcG9ydE9ic2VydmVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuaGFzKHRoaXMuZGVoYW5jZVZhbHVlKHZhbHVlKSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbmV4dEluZGV4ID0gMDtcclxuICAgICAgICB2YXIga2V5cyA9IEFycmF5LmZyb20odGhpcy5rZXlzKCkpO1xyXG4gICAgICAgIHZhciB2YWx1ZXMgPSBBcnJheS5mcm9tKHRoaXMudmFsdWVzKCkpO1xyXG4gICAgICAgIHJldHVybiBtYWtlSXRlcmFibGUoe1xyXG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICBuZXh0SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCA8IHZhbHVlcy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICA/IHsgdmFsdWU6IFtrZXlzW2luZGV4XSwgdmFsdWVzW2luZGV4XV0sIGRvbmU6IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICA6IHsgZG9uZTogdHJ1ZSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fYXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgbmV4dEluZGV4ID0gMDtcclxuICAgICAgICB2YXIgb2JzZXJ2YWJsZVZhbHVlcyA9IEFycmF5LmZyb20odGhpcy5fZGF0YS52YWx1ZXMoKSk7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0SW5kZXggPCBvYnNlcnZhYmxlVmFsdWVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgID8geyB2YWx1ZTogc2VsZi5kZWhhbmNlVmFsdWUob2JzZXJ2YWJsZVZhbHVlc1tuZXh0SW5kZXgrK10pLCBkb25lOiBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7IGRvbmU6IHRydWUgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChpc09ic2VydmFibGVTZXQob3RoZXIpKSB7XHJcbiAgICAgICAgICAgIG90aGVyID0gb3RoZXIudG9KUygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG90aGVyKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBfdGhpcy5hZGQodmFsdWUpOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpc0VTNlNldChvdGhlcikpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICBvdGhlci5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gX3RoaXMuYWRkKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob3RoZXIgIT09IG51bGwgJiYgb3RoZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZmFpbChcIkNhbm5vdCBpbml0aWFsaXplIHNldCBmcm9tIFwiICsgb3RoZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XHJcbiAgICAgICAgLy8gVE9ETyAnZmlyZUltbWVkaWF0ZWx5JyBjYW4gYmUgdHJ1ZT9cclxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgaW52YXJpYW50KGZpcmVJbW1lZGlhdGVseSAhPT0gdHJ1ZSwgXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IGZpcmVJbW1lZGlhdGVseT10cnVlIGluIGNvbWJpbmF0aW9uIHdpdGggc2V0cy5cIik7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUudG9KUyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgXCJbIFwiICsgQXJyYXkuZnJvbSh0aGlzKS5qb2luKFwiLCBcIikgKyBcIiBdXCI7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGVbKF9hJDEgPSAkbW9ieCwgU3ltYm9sLml0ZXJhdG9yKV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGVTZXQ7XHJcbn0oKSk7XHJcbnZhciBpc09ic2VydmFibGVTZXQgPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiT2JzZXJ2YWJsZVNldFwiLCBPYnNlcnZhYmxlU2V0KTtcblxudmFyIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbih0YXJnZXQsIHZhbHVlcywgbmFtZSwgZGVmYXVsdEVuaGFuY2VyKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlcyA9PT0gdm9pZCAwKSB7IHZhbHVlcyA9IG5ldyBNYXAoKTsgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0RW5oYW5jZXIgPSBkZWZhdWx0RW5oYW5jZXI7XHJcbiAgICAgICAgdGhpcy5rZXlzQXRvbSA9IG5ldyBBdG9tKG5hbWUgKyBcIi5rZXlzXCIpO1xyXG4gICAgfVxyXG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5nZXQoa2V5KS5nZXQoKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGtleSwgbmV3VmFsdWUpIHtcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLnRhcmdldDtcclxuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMudmFsdWVzLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChvYnNlcnZhYmxlIGluc3RhbmNlb2YgQ29tcHV0ZWRWYWx1ZSkge1xyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLnNldChuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaW50ZXJjZXB0XHJcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHkgfHwgaW5zdGFuY2UsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXksXHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3VmFsdWUgPSBvYnNlcnZhYmxlLnByZXBhcmVOZXdWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgLy8gbm90aWZ5IHNweSAmIG9ic2VydmVyc1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEKSB7XHJcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcclxuICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IGluc3RhbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvYnNlcnZhYmxlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeSlcclxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICB2YXIgbWFwID0gdGhpcy5wZW5kaW5nS2V5cyB8fCAodGhpcy5wZW5kaW5nS2V5cyA9IG5ldyBNYXAoKSk7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gbWFwLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChlbnRyeSlcclxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmdldCgpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgZXhpc3RzID0gISF0aGlzLnZhbHVlcy5nZXQoa2V5KTtcclxuICAgICAgICAgICAgLy8gUG9zc2libGUgb3B0aW1pemF0aW9uOiBEb24ndCBoYXZlIGEgc2VwYXJhdGUgbWFwIGZvciBub24gZXhpc3Rpbmcga2V5cyxcclxuICAgICAgICAgICAgLy8gYnV0IHN0b3JlIHRoZW0gaW4gdGhlIHZhbHVlcyBtYXAgaW5zdGVhZCwgdXNpbmcgYSBzcGVjaWFsIHN5bWJvbCB0byBkZW5vdGUgXCJub3QgZXhpc3RpbmdcIlxyXG4gICAgICAgICAgICBlbnRyeSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUoZXhpc3RzLCByZWZlcmVuY2VFbmhhbmNlciwgdGhpcy5uYW1lICsgXCIuXCIgKyBzdHJpbmdpZnlLZXkoa2V5KSArIFwiP1wiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIG1hcC5zZXQoa2V5LCBlbnRyeSk7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5nZXQoKTsgLy8gcmVhZCB0byBzdWJzY3JpYmVcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5hZGRPYnNlcnZhYmxlUHJvcCA9IGZ1bmN0aW9uIChwcm9wTmFtZSwgbmV3VmFsdWUsIGVuaGFuY2VyKSB7XHJcbiAgICAgICAgaWYgKGVuaGFuY2VyID09PSB2b2lkIDApIHsgZW5oYW5jZXIgPSB0aGlzLmRlZmF1bHRFbmhhbmNlcjsgfVxyXG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldDtcclxuICAgICAgICBhc3NlcnRQcm9wZXJ0eUNvbmZpZ3VyYWJsZSh0YXJnZXQsIHByb3BOYW1lKTtcclxuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IHRhcmdldCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHByb3BOYW1lLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhZGRcIixcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUobmV3VmFsdWUsIGVuaGFuY2VyLCB0aGlzLm5hbWUgKyBcIi5cIiArIHN0cmluZ2lmeUtleShwcm9wTmFtZSksIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnZhbHVlcy5zZXQocHJvcE5hbWUsIG9ic2VydmFibGUpO1xyXG4gICAgICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZS52YWx1ZTsgLy8gb2JzZXJ2YWJsZVZhbHVlIG1pZ2h0IGhhdmUgY2hhbmdlZCBpdFxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BOYW1lLCBnZW5lcmF0ZU9ic2VydmFibGVQcm9wQ29uZmlnKHByb3BOYW1lKSk7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUFkZGl0aW9uKHByb3BOYW1lLCBuZXdWYWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5hZGRDb21wdXRlZFByb3AgPSBmdW5jdGlvbiAocHJvcGVydHlPd25lciwgLy8gd2hlcmUgaXMgdGhlIHByb3BlcnR5IGRlY2xhcmVkP1xyXG4gICAgcHJvcE5hbWUsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XHJcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IHRoaXMubmFtZSArIFwiLlwiICsgc3RyaW5naWZ5S2V5KHByb3BOYW1lKTtcclxuICAgICAgICB0aGlzLnZhbHVlcy5zZXQocHJvcE5hbWUsIG5ldyBDb21wdXRlZFZhbHVlKG9wdGlvbnMpKTtcclxuICAgICAgICBpZiAocHJvcGVydHlPd25lciA9PT0gdGFyZ2V0IHx8IGlzUHJvcGVydHlDb25maWd1cmFibGUocHJvcGVydHlPd25lciwgcHJvcE5hbWUpKVxyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcGVydHlPd25lciwgcHJvcE5hbWUsIGdlbmVyYXRlQ29tcHV0ZWRQcm9wQ29uZmlnKHByb3BOYW1lKSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlcy5oYXMoa2V5KSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldDtcclxuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IHRhcmdldCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwicmVtb3ZlXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzdGFydEJhdGNoKCk7XHJcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcclxuICAgICAgICAgICAgdmFyIG9sZE9ic2VydmFibGUgPSB0aGlzLnZhbHVlcy5nZXQoa2V5KTtcclxuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gb2xkT2JzZXJ2YWJsZSAmJiBvbGRPYnNlcnZhYmxlLmdldCgpO1xyXG4gICAgICAgICAgICBvbGRPYnNlcnZhYmxlICYmIG9sZE9ic2VydmFibGUuc2V0KHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIC8vIG5vdGlmeSBrZXkgYW5kIGtleXNldCBsaXN0ZW5lcnNcclxuICAgICAgICAgICAgdGhpcy5rZXlzQXRvbS5yZXBvcnRDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nS2V5cykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5wZW5kaW5nS2V5cy5nZXQoa2V5KTtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeSlcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5zZXQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgcHJvcFxyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy50YXJnZXRba2V5XTtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcclxuICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmVtb3ZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoX19hc3NpZ24oe30sIGNoYW5nZSwgeyBuYW1lOiB0aGlzLm5hbWUsIGtleToga2V5IH0pKTtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeSlcclxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZW5kQmF0Y2goKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5pbGxlZ2FsQWNjZXNzID0gZnVuY3Rpb24gKG93bmVyLCBwcm9wTmFtZSkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgaGFwcGVucyBpZiBhIHByb3BlcnR5IGlzIGFjY2Vzc2VkIHRocm91Z2ggdGhlIHByb3RvdHlwZSBjaGFpbiwgYnV0IHRoZSBwcm9wZXJ0eSB3YXNcclxuICAgICAgICAgKiBkZWNsYXJlZCBkaXJlY3RseSBhcyBvd24gcHJvcGVydHkgb24gdGhlIHByb3RvdHlwZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEUuZy46XHJcbiAgICAgICAgICogY2xhc3MgQSB7XHJcbiAgICAgICAgICogfVxyXG4gICAgICAgICAqIGV4dGVuZE9ic2VydmFibGUoQS5wcm90b3R5cGUsIHsgeDogMSB9KVxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogY2xhc3NCIGV4dGVucyBBIHtcclxuICAgICAgICAgKiB9XHJcbiAgICAgICAgICogY29uc29sZS5sb2cobmV3IEIoKS54KVxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogSXQgaXMgdW5jbGVhciB3aGV0aGVyIHRoZSBwcm9wZXJ0eSBzaG91bGQgYmUgY29uc2lkZXJlZCAnc3RhdGljJyBvciBpbmhlcml0ZWQuXHJcbiAgICAgICAgICogRWl0aGVyIHVzZSBgY29uc29sZS5sb2coQS54KWBcclxuICAgICAgICAgKiBvcjogZGVjb3JhdGUoQSwgeyB4OiBvYnNlcnZhYmxlIH0pXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBXaGVuIHVzaW5nIGRlY29yYXRlLCB0aGUgcHJvcGVydHkgd2lsbCBhbHdheXMgYmUgcmVkZWNsYXJlZCBhcyBvd24gcHJvcGVydHkgb24gdGhlIGFjdHVhbCBpbnN0YW5jZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlByb3BlcnR5ICdcIiArIHByb3BOYW1lICsgXCInIG9mICdcIiArIG93bmVyICsgXCInIHdhcyBhY2Nlc3NlZCB0aHJvdWdoIHRoZSBwcm90b3R5cGUgY2hhaW4uIFVzZSAnZGVjb3JhdGUnIGluc3RlYWQgdG8gZGVjbGFyZSB0aGUgcHJvcCBvciBhY2Nlc3MgaXQgc3RhdGljYWxseSB0aHJvdWdoIGl0J3Mgb3duZXJcIik7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZlcyB0aGlzIG9iamVjdC4gVHJpZ2dlcnMgZm9yIHRoZSBldmVudHMgJ2FkZCcsICd1cGRhdGUnIGFuZCAnZGVsZXRlJy5cclxuICAgICAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L29ic2VydmVcclxuICAgICAqIGZvciBjYWxsYmFjayBkZXRhaWxzXHJcbiAgICAgKi9cclxuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZmlyZUltbWVkaWF0ZWx5KSB7XHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgIGludmFyaWFudChmaXJlSW1tZWRpYXRlbHkgIT09IHRydWUsIFwiYG9ic2VydmVgIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgZmlyZSBpbW1lZGlhdGVseSBwcm9wZXJ0eSBmb3Igb2JzZXJ2YWJsZSBvYmplY3RzLlwiKTtcclxuICAgICAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBjYWxsYmFjayk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xyXG4gICAgICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yKHRoaXMsIGhhbmRsZXIpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUubm90aWZ5UHJvcGVydHlBZGRpdGlvbiA9IGZ1bmN0aW9uIChrZXksIG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcclxuICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XHJcbiAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFkZFwiLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IHRoaXMudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xyXG4gICAgICAgIGlmIChub3RpZnkpXHJcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xyXG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcclxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nS2V5cykge1xyXG4gICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnBlbmRpbmdLZXlzLmdldChrZXkpO1xyXG4gICAgICAgICAgICBpZiAoZW50cnkpXHJcbiAgICAgICAgICAgICAgICBlbnRyeS5zZXQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMua2V5c0F0b20ucmVwb3J0Q2hhbmdlZCgpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuZ2V0S2V5cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZV8xLCBfYTtcclxuICAgICAgICB0aGlzLmtleXNBdG9tLnJlcG9ydE9ic2VydmVkKCk7XHJcbiAgICAgICAgLy8gcmV0dXJuIFJlZmxlY3Qub3duS2V5cyh0aGlzLnZhbHVlcykgYXMgYW55XHJcbiAgICAgICAgdmFyIHJlcyA9IFtdO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy52YWx1ZXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2QgPSBfX3JlYWQoX2MudmFsdWUsIDIpLCBrZXkgPSBfZFswXSwgdmFsdWUgPSBfZFsxXTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9ic2VydmFibGVWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb247XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIGFzT2JzZXJ2YWJsZU9iamVjdCh0YXJnZXQsIG5hbWUsIGRlZmF1bHRFbmhhbmNlcikge1xyXG4gICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJcIjsgfVxyXG4gICAgaWYgKGRlZmF1bHRFbmhhbmNlciA9PT0gdm9pZCAwKSB7IGRlZmF1bHRFbmhhbmNlciA9IGRlZXBFbmhhbmNlcjsgfVxyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsICRtb2J4KSlcclxuICAgICAgICByZXR1cm4gdGFyZ2V0WyRtb2J4XTtcclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgIGludmFyaWFudChPYmplY3QuaXNFeHRlbnNpYmxlKHRhcmdldCksIFwiQ2Fubm90IG1ha2UgdGhlIGRlc2lnbmF0ZWQgb2JqZWN0IG9ic2VydmFibGU7IGl0IGlzIG5vdCBleHRlbnNpYmxlXCIpO1xyXG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgbmFtZSA9ICh0YXJnZXQuY29uc3RydWN0b3IubmFtZSB8fCBcIk9ic2VydmFibGVPYmplY3RcIikgKyBcIkBcIiArIGdldE5leHRJZCgpO1xyXG4gICAgaWYgKCFuYW1lKVxyXG4gICAgICAgIG5hbWUgPSBcIk9ic2VydmFibGVPYmplY3RAXCIgKyBnZXROZXh0SWQoKTtcclxuICAgIHZhciBhZG0gPSBuZXcgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uKHRhcmdldCwgbmV3IE1hcCgpLCBzdHJpbmdpZnlLZXkobmFtZSksIGRlZmF1bHRFbmhhbmNlcik7XHJcbiAgICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwgJG1vYngsIGFkbSk7XHJcbiAgICByZXR1cm4gYWRtO1xyXG59XHJcbnZhciBvYnNlcnZhYmxlUHJvcGVydHlDb25maWdzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxudmFyIGNvbXB1dGVkUHJvcGVydHlDb25maWdzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuZnVuY3Rpb24gZ2VuZXJhdGVPYnNlcnZhYmxlUHJvcENvbmZpZyhwcm9wTmFtZSkge1xyXG4gICAgcmV0dXJuIChvYnNlcnZhYmxlUHJvcGVydHlDb25maWdzW3Byb3BOYW1lXSB8fFxyXG4gICAgICAgIChvYnNlcnZhYmxlUHJvcGVydHlDb25maWdzW3Byb3BOYW1lXSA9IHtcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWyRtb2J4XS5yZWFkKHByb3BOYW1lKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgdGhpc1skbW9ieF0ud3JpdGUocHJvcE5hbWUsIHYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEFkbWluaXN0cmF0aW9uRm9yQ29tcHV0ZWRQcm9wT3duZXIob3duZXIpIHtcclxuICAgIHZhciBhZG0gPSBvd25lclskbW9ieF07XHJcbiAgICBpZiAoIWFkbSkge1xyXG4gICAgICAgIC8vIGJlY2F1c2UgY29tcHV0ZWQgcHJvcHMgYXJlIGRlY2xhcmVkIG9uIHByb3R5LFxyXG4gICAgICAgIC8vIHRoZSBjdXJyZW50IGluc3RhbmNlIG1pZ2h0IG5vdCBoYXZlIGJlZW4gaW5pdGlhbGl6ZWQgeWV0XHJcbiAgICAgICAgaW5pdGlhbGl6ZUluc3RhbmNlKG93bmVyKTtcclxuICAgICAgICByZXR1cm4gb3duZXJbJG1vYnhdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFkbTtcclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbXB1dGVkUHJvcENvbmZpZyhwcm9wTmFtZSkge1xyXG4gICAgcmV0dXJuIChjb21wdXRlZFByb3BlcnR5Q29uZmlnc1twcm9wTmFtZV0gfHxcclxuICAgICAgICAoY29tcHV0ZWRQcm9wZXJ0eUNvbmZpZ3NbcHJvcE5hbWVdID0ge1xyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGdsb2JhbFN0YXRlLmNvbXB1dGVkQ29uZmlndXJhYmxlLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb25Gb3JDb21wdXRlZFByb3BPd25lcih0aGlzKS5yZWFkKHByb3BOYW1lKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgZ2V0QWRtaW5pc3RyYXRpb25Gb3JDb21wdXRlZFByb3BPd25lcih0aGlzKS53cml0ZShwcm9wTmFtZSwgdik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbn1cclxudmFyIGlzT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIk9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvblwiLCBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24pO1xyXG5mdW5jdGlvbiBpc09ic2VydmFibGVPYmplY3QodGhpbmcpIHtcclxuICAgIGlmIChpc09iamVjdCh0aGluZykpIHtcclxuICAgICAgICAvLyBJbml0aWFsaXplcnMgcnVuIGxhemlseSB3aGVuIHRyYW5zcGlsaW5nIHRvIGJhYmVsLCBzbyBtYWtlIHN1cmUgdGhleSBhcmUgcnVuLi4uXHJcbiAgICAgICAgaW5pdGlhbGl6ZUluc3RhbmNlKHRoaW5nKTtcclxuICAgICAgICByZXR1cm4gaXNPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24odGhpbmdbJG1vYnhdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxuXG5mdW5jdGlvbiBnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGluZyA9PT0gXCJvYmplY3RcIiAmJiB0aGluZyAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChpc09ic2VydmFibGVBcnJheSh0aGluZykpIHtcclxuICAgICAgICAgICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFwiSXQgaXMgbm90IHBvc3NpYmxlIHRvIGdldCBpbmRleCBhdG9tcyBmcm9tIGFycmF5c1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaW5nWyRtb2J4XS5hdG9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlU2V0KHRoaW5nKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpbmdbJG1vYnhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKHRoaW5nKSkge1xyXG4gICAgICAgICAgICB2YXIgYW55VGhpbmcgPSB0aGluZztcclxuICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYW55VGhpbmcuX2tleXNBdG9tO1xyXG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IGFueVRoaW5nLl9kYXRhLmdldChwcm9wZXJ0eSkgfHwgYW55VGhpbmcuX2hhc01hcC5nZXQocHJvcGVydHkpO1xyXG4gICAgICAgICAgICBpZiAoIW9ic2VydmFibGUpXHJcbiAgICAgICAgICAgICAgICBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFwidGhlIGVudHJ5ICdcIiArIHByb3BlcnR5ICsgXCInIGRvZXMgbm90IGV4aXN0IGluIHRoZSBvYnNlcnZhYmxlIG1hcCAnXCIgKyBnZXREZWJ1Z05hbWUodGhpbmcpICsgXCInXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZXJzIHJ1biBsYXppbHkgd2hlbiB0cmFuc3BpbGluZyB0byBiYWJlbCwgc28gbWFrZSBzdXJlIHRoZXkgYXJlIHJ1bi4uLlxyXG4gICAgICAgIGluaXRpYWxpemVJbnN0YW5jZSh0aGluZyk7XHJcbiAgICAgICAgaWYgKHByb3BlcnR5ICYmICF0aGluZ1skbW9ieF0pXHJcbiAgICAgICAgICAgIHRoaW5nW3Byb3BlcnR5XTsgLy8gU2VlICMxMDcyXHJcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh0aGluZykpIHtcclxuICAgICAgICAgICAgaWYgKCFwcm9wZXJ0eSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBcInBsZWFzZSBzcGVjaWZ5IGEgcHJvcGVydHlcIik7XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlID0gdGhpbmdbJG1vYnhdLnZhbHVlcy5nZXQocHJvcGVydHkpO1xyXG4gICAgICAgICAgICBpZiAoIW9ic2VydmFibGUpXHJcbiAgICAgICAgICAgICAgICBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFwibm8gb2JzZXJ2YWJsZSBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJyBmb3VuZCBvbiB0aGUgb2JzZXJ2YWJsZSBvYmplY3QgJ1wiICsgZ2V0RGVidWdOYW1lKHRoaW5nKSArIFwiJ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0F0b20odGhpbmcpIHx8IGlzQ29tcHV0ZWRWYWx1ZSh0aGluZykgfHwgaXNSZWFjdGlvbih0aGluZykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiB0aGluZyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgaWYgKGlzUmVhY3Rpb24odGhpbmdbJG1vYnhdKSkge1xyXG4gICAgICAgICAgICAvLyBkaXNwb3NlciBmdW5jdGlvblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpbmdbJG1vYnhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBcIkNhbm5vdCBvYnRhaW4gYXRvbSBmcm9tIFwiICsgdGhpbmcpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nLCBwcm9wZXJ0eSkge1xyXG4gICAgaWYgKCF0aGluZylcclxuICAgICAgICBmYWlsKFwiRXhwZWN0aW5nIHNvbWUgb2JqZWN0XCIpO1xyXG4gICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKGdldEF0b20odGhpbmcsIHByb3BlcnR5KSk7XHJcbiAgICBpZiAoaXNBdG9tKHRoaW5nKSB8fCBpc0NvbXB1dGVkVmFsdWUodGhpbmcpIHx8IGlzUmVhY3Rpb24odGhpbmcpKVxyXG4gICAgICAgIHJldHVybiB0aGluZztcclxuICAgIGlmIChpc09ic2VydmFibGVNYXAodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZVNldCh0aGluZykpXHJcbiAgICAgICAgcmV0dXJuIHRoaW5nO1xyXG4gICAgLy8gSW5pdGlhbGl6ZXJzIHJ1biBsYXppbHkgd2hlbiB0cmFuc3BpbGluZyB0byBiYWJlbCwgc28gbWFrZSBzdXJlIHRoZXkgYXJlIHJ1bi4uLlxyXG4gICAgaW5pdGlhbGl6ZUluc3RhbmNlKHRoaW5nKTtcclxuICAgIGlmICh0aGluZ1skbW9ieF0pXHJcbiAgICAgICAgcmV0dXJuIHRoaW5nWyRtb2J4XTtcclxuICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiQ2Fubm90IG9idGFpbiBhZG1pbmlzdHJhdGlvbiBmcm9tIFwiICsgdGhpbmcpO1xyXG59XHJcbmZ1bmN0aW9uIGdldERlYnVnTmFtZSh0aGluZywgcHJvcGVydHkpIHtcclxuICAgIHZhciBuYW1lZDtcclxuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIG5hbWVkID0gZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpO1xyXG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSB8fCBpc09ic2VydmFibGVNYXAodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZVNldCh0aGluZykpXHJcbiAgICAgICAgbmFtZWQgPSBnZXRBZG1pbmlzdHJhdGlvbih0aGluZyk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgbmFtZWQgPSBnZXRBdG9tKHRoaW5nKTsgLy8gdmFsaWQgZm9yIGFycmF5cyBhcyB3ZWxsXHJcbiAgICByZXR1cm4gbmFtZWQubmFtZTtcclxufVxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xyXG5mdW5jdGlvbiBkZWVwRXF1YWwoYSwgYiwgZGVwdGgpIHtcclxuICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7IGRlcHRoID0gLTE7IH1cclxuICAgIHJldHVybiBlcShhLCBiLCBkZXB0aCk7XHJcbn1cclxuLy8gQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL2Jsb2IvNWMyMzdhN2M2ODJmYjY4ZmQ1Mzc4MjAzZjBiZjIyZGNlMTYyNDg1NC91bmRlcnNjb3JlLmpzI0wxMTg2LUwxMjg5XHJcbi8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXHJcbmZ1bmN0aW9uIGVxKGEsIGIsIGRlcHRoLCBhU3RhY2ssIGJTdGFjaykge1xyXG4gICAgLy8gSWRlbnRpY2FsIG9iamVjdHMgYXJlIGVxdWFsLiBgMCA9PT0gLTBgLCBidXQgdGhleSBhcmVuJ3QgaWRlbnRpY2FsLlxyXG4gICAgLy8gU2VlIHRoZSBbSGFybW9ueSBgZWdhbGAgcHJvcG9zYWxdKGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPWhhcm1vbnk6ZWdhbCkuXHJcbiAgICBpZiAoYSA9PT0gYilcclxuICAgICAgICByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PT0gMSAvIGI7XHJcbiAgICAvLyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgb25seSBlcXVhbCB0byBpdHNlbGYgKHN0cmljdCBjb21wYXJpc29uKS5cclxuICAgIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXHJcbiAgICBpZiAoYSAhPT0gYSlcclxuICAgICAgICByZXR1cm4gYiAhPT0gYjtcclxuICAgIC8vIEV4aGF1c3QgcHJpbWl0aXZlIGNoZWNrc1xyXG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgYTtcclxuICAgIGlmICh0eXBlICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYiAhPSBcIm9iamVjdFwiKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vIFVud3JhcCBhbnkgd3JhcHBlZCBvYmplY3RzLlxyXG4gICAgYSA9IHVud3JhcChhKTtcclxuICAgIGIgPSB1bndyYXAoYik7XHJcbiAgICAvLyBDb21wYXJlIGBbW0NsYXNzXV1gIG5hbWVzLlxyXG4gICAgdmFyIGNsYXNzTmFtZSA9IHRvU3RyaW5nLmNhbGwoYSk7XHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSB0b1N0cmluZy5jYWxsKGIpKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgLy8gU3RyaW5ncywgbnVtYmVycywgcmVndWxhciBleHByZXNzaW9ucywgZGF0ZXMsIGFuZCBib29sZWFucyBhcmUgY29tcGFyZWQgYnkgdmFsdWUuXHJcbiAgICAgICAgY2FzZSBcIltvYmplY3QgUmVnRXhwXVwiOlxyXG4gICAgICAgIC8vIFJlZ0V4cHMgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncyBmb3IgY29tcGFyaXNvbiAoTm90ZTogJycgKyAvYS9pID09PSAnL2EvaScpXHJcbiAgICAgICAgY2FzZSBcIltvYmplY3QgU3RyaW5nXVwiOlxyXG4gICAgICAgICAgICAvLyBQcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCB3cmFwcGVycyBhcmUgZXF1aXZhbGVudDsgdGh1cywgYFwiNVwiYCBpc1xyXG4gICAgICAgICAgICAvLyBlcXVpdmFsZW50IHRvIGBuZXcgU3RyaW5nKFwiNVwiKWAuXHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiICsgYSA9PT0gXCJcIiArIGI7XHJcbiAgICAgICAgY2FzZSBcIltvYmplY3QgTnVtYmVyXVwiOlxyXG4gICAgICAgICAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLlxyXG4gICAgICAgICAgICAvLyBPYmplY3QoTmFOKSBpcyBlcXVpdmFsZW50IHRvIE5hTi5cclxuICAgICAgICAgICAgaWYgKCthICE9PSArYSlcclxuICAgICAgICAgICAgICAgIHJldHVybiArYiAhPT0gK2I7XHJcbiAgICAgICAgICAgIC8vIEFuIGBlZ2FsYCBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3Igb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXHJcbiAgICAgICAgICAgIHJldHVybiArYSA9PT0gMCA/IDEgLyArYSA9PT0gMSAvIGIgOiArYSA9PT0gK2I7XHJcbiAgICAgICAgY2FzZSBcIltvYmplY3QgRGF0ZV1cIjpcclxuICAgICAgICBjYXNlIFwiW29iamVjdCBCb29sZWFuXVwiOlxyXG4gICAgICAgICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXHJcbiAgICAgICAgICAgIC8vIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWQgZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnNcclxuICAgICAgICAgICAgLy8gb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxyXG4gICAgICAgICAgICByZXR1cm4gK2EgPT09ICtiO1xyXG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IFN5bWJvbF1cIjpcclxuICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC52YWx1ZU9mLmNhbGwoYSkgPT09IFN5bWJvbC52YWx1ZU9mLmNhbGwoYikpO1xyXG4gICAgfVxyXG4gICAgdmFyIGFyZUFycmF5cyA9IGNsYXNzTmFtZSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xyXG4gICAgaWYgKCFhcmVBcnJheXMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGEgIT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgYiAhPSBcIm9iamVjdFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8gT2JqZWN0cyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVpdmFsZW50LCBidXQgYE9iamVjdGBzIG9yIGBBcnJheWBzXHJcbiAgICAgICAgLy8gZnJvbSBkaWZmZXJlbnQgZnJhbWVzIGFyZS5cclxuICAgICAgICB2YXIgYUN0b3IgPSBhLmNvbnN0cnVjdG9yLCBiQ3RvciA9IGIuY29uc3RydWN0b3I7XHJcbiAgICAgICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJlxyXG4gICAgICAgICAgICAhKHR5cGVvZiBhQ3RvciA9PT0gXCJmdW5jdGlvblwiICYmXHJcbiAgICAgICAgICAgICAgICBhQ3RvciBpbnN0YW5jZW9mIGFDdG9yICYmXHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgYkN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG4gICAgICAgICAgICAgICAgYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcikgJiZcclxuICAgICAgICAgICAgKFwiY29uc3RydWN0b3JcIiBpbiBhICYmIFwiY29uc3RydWN0b3JcIiBpbiBiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGRlcHRoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVwdGggPCAwKSB7XHJcbiAgICAgICAgZGVwdGggPSAtMTtcclxuICAgIH1cclxuICAgIC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcclxuICAgIC8vIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvbiBgSk9gLlxyXG4gICAgLy8gSW5pdGlhbGl6aW5nIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxyXG4gICAgLy8gSXQncyBkb25lIGhlcmUgc2luY2Ugd2Ugb25seSBuZWVkIHRoZW0gZm9yIG9iamVjdHMgYW5kIGFycmF5cyBjb21wYXJpc29uLlxyXG4gICAgYVN0YWNrID0gYVN0YWNrIHx8IFtdO1xyXG4gICAgYlN0YWNrID0gYlN0YWNrIHx8IFtdO1xyXG4gICAgdmFyIGxlbmd0aCA9IGFTdGFjay5sZW5ndGg7XHJcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcclxuICAgICAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcclxuICAgICAgICAvLyB1bmlxdWUgbmVzdGVkIHN0cnVjdHVyZXMuXHJcbiAgICAgICAgaWYgKGFTdGFja1tsZW5ndGhdID09PSBhKVxyXG4gICAgICAgICAgICByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT09IGI7XHJcbiAgICB9XHJcbiAgICAvLyBBZGQgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXHJcbiAgICBhU3RhY2sucHVzaChhKTtcclxuICAgIGJTdGFjay5wdXNoKGIpO1xyXG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIGFuZCBhcnJheXMuXHJcbiAgICBpZiAoYXJlQXJyYXlzKSB7XHJcbiAgICAgICAgLy8gQ29tcGFyZSBhcnJheSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiBhIGRlZXAgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkuXHJcbiAgICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gYi5sZW5ndGgpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyBEZWVwIGNvbXBhcmUgdGhlIGNvbnRlbnRzLCBpZ25vcmluZyBub24tbnVtZXJpYyBwcm9wZXJ0aWVzLlxyXG4gICAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xyXG4gICAgICAgICAgICBpZiAoIWVxKGFbbGVuZ3RoXSwgYltsZW5ndGhdLCBkZXB0aCAtIDEsIGFTdGFjaywgYlN0YWNrKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBEZWVwIGNvbXBhcmUgb2JqZWN0cy5cclxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xyXG4gICAgICAgIHZhciBrZXkgPSB2b2lkIDA7XHJcbiAgICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XHJcbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgYm90aCBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXMgYmVmb3JlIGNvbXBhcmluZyBkZWVwIGVxdWFsaXR5LlxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhiKS5sZW5ndGggIT09IGxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xyXG4gICAgICAgICAgICAvLyBEZWVwIGNvbXBhcmUgZWFjaCBtZW1iZXJcclxuICAgICAgICAgICAga2V5ID0ga2V5c1tsZW5ndGhdO1xyXG4gICAgICAgICAgICBpZiAoIShoYXMkMShiLCBrZXkpICYmIGVxKGFba2V5XSwgYltrZXldLCBkZXB0aCAtIDEsIGFTdGFjaywgYlN0YWNrKSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBvYmplY3QgZnJvbSB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXHJcbiAgICBhU3RhY2sucG9wKCk7XHJcbiAgICBiU3RhY2sucG9wKCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiB1bndyYXAoYSkge1xyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KGEpKVxyXG4gICAgICAgIHJldHVybiBhLnNsaWNlKCk7XHJcbiAgICBpZiAoaXNFUzZNYXAoYSkgfHwgaXNPYnNlcnZhYmxlTWFwKGEpKVxyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGEuZW50cmllcygpKTtcclxuICAgIGlmIChpc0VTNlNldChhKSB8fCBpc09ic2VydmFibGVTZXQoYSkpXHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYS5lbnRyaWVzKCkpO1xyXG4gICAgcmV0dXJuIGE7XHJcbn1cclxuZnVuY3Rpb24gaGFzJDEoYSwga2V5KSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsIGtleSk7XHJcbn1cblxuZnVuY3Rpb24gbWFrZUl0ZXJhYmxlKGl0ZXJhdG9yKSB7XHJcbiAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZ2V0U2VsZjtcclxuICAgIHJldHVybiBpdGVyYXRvcjtcclxufVxyXG5mdW5jdGlvbiBnZXRTZWxmKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn1cblxuLypcclxuVGhlIG9ubHkgcmVhc29uIGZvciB0aGlzIGZpbGUgdG8gZXhpc3QgaXMgcHVyZSBob3Jyb3I6XHJcbldpdGhvdXQgaXQgcm9sbHVwIGNhbiBtYWtlIHRoZSBidW5kbGluZyBmYWlsIGF0IGFueSBwb2ludCBpbiB0aW1lOyB3aGVuIGl0IHJvbGxzIHVwIHRoZSBmaWxlcyBpbiB0aGUgd3Jvbmcgb3JkZXJcclxuaXQgd2lsbCBjYXVzZSB1bmRlZmluZWQgZXJyb3JzIChmb3IgZXhhbXBsZSBiZWNhdXNlIHN1cGVyIGNsYXNzZXMgb3IgbG9jYWwgdmFyaWFibGVzIG5vdCBiZWluZyBob2lzdGVkKS5cclxuV2l0aCB0aGlzIGZpbGUgdGhhdCB3aWxsIHN0aWxsIGhhcHBlbixcclxuYnV0IGF0IGxlYXN0IGluIHRoaXMgZmlsZSB3ZSBjYW4gbWFnaWNhbGx5IHJlb3JkZXIgdGhlIGltcG9ydHMgd2l0aCB0cmlhbCBhbmQgZXJyb3IgdW50aWwgdGhlIGJ1aWxkIHN1Y2NlZWRzIGFnYWluLlxyXG4qL1xuXG4vKipcclxuICogKGMpIE1pY2hlbCBXZXN0c3RyYXRlIDIwMTUgLSAyMDE4XHJcbiAqIE1JVCBMaWNlbnNlZFxyXG4gKlxyXG4gKiBXZWxjb21lIHRvIHRoZSBtb2J4IHNvdXJjZXMhIFRvIGdldCBhbiBnbG9iYWwgb3ZlcnZpZXcgb2YgaG93IE1vYlggaW50ZXJuYWxseSB3b3JrcyxcclxuICogdGhpcyBpcyBhIGdvb2QgcGxhY2UgdG8gc3RhcnQ6XHJcbiAqIGh0dHBzOi8vbWVkaXVtLmNvbS9AbXdlc3RzdHJhdGUvYmVjb21pbmctZnVsbHktcmVhY3RpdmUtYW4taW4tZGVwdGgtZXhwbGFuYXRpb24tb2YtbW9ic2VydmFibGUtNTU5OTUyNjJhMjU0Iy54dmJoNnFkNzRcclxuICpcclxuICogU291cmNlIGZvbGRlcnM6XHJcbiAqID09PT09PT09PT09PT09PVxyXG4gKlxyXG4gKiAtIGFwaS8gICAgIE1vc3Qgb2YgdGhlIHB1YmxpYyBzdGF0aWMgbWV0aG9kcyBleHBvc2VkIGJ5IHRoZSBtb2R1bGUgY2FuIGJlIGZvdW5kIGhlcmUuXHJcbiAqIC0gY29yZS8gICAgSW1wbGVtZW50YXRpb24gb2YgdGhlIE1vYlggYWxnb3JpdGhtOyBhdG9tcywgZGVyaXZhdGlvbnMsIHJlYWN0aW9ucywgZGVwZW5kZW5jeSB0cmVlcywgb3B0aW1pemF0aW9ucy4gQ29vbCBzdHVmZiBjYW4gYmUgZm91bmQgaGVyZS5cclxuICogLSB0eXBlcy8gICBBbGwgdGhlIG1hZ2ljIHRoYXQgaXMgbmVlZCB0byBoYXZlIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCB2YWx1ZXMgaXMgaW4gdGhpcyBmb2xkZXIuIEluY2x1ZGluZyB0aGUgbW9kaWZpZXJzIGxpa2UgYGFzRmxhdGAuXHJcbiAqIC0gdXRpbHMvICAgVXRpbGl0eSBzdHVmZi5cclxuICpcclxuICovXHJcbmlmICh0eXBlb2YgUHJveHkgPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYnhdIE1vYlggNSsgcmVxdWlyZXMgUHJveHkgYW5kIFN5bWJvbCBvYmplY3RzLiBJZiB5b3VyIGVudmlyb25tZW50IGRvZXNuJ3Qgc3VwcG9ydCBTeW1ib2wgb3IgUHJveHkgb2JqZWN0cywgcGxlYXNlIGRvd25ncmFkZSB0byBNb2JYIDQuIEZvciBSZWFjdCBOYXRpdmUgQW5kcm9pZCwgY29uc2lkZXIgdXBncmFkaW5nIEpTQ29yZS5cIik7XHJcbn1cclxudHJ5IHtcclxuICAgIC8vIGRlZmluZSBwcm9jZXNzLmVudiBpZiBuZWVkZWRcclxuICAgIC8vIGlmIHRoaXMgaXMgbm90IGEgcHJvZHVjdGlvbiBidWlsZCBpbiB0aGUgZmlyc3QgcGxhY2VcclxuICAgIC8vIChpbiB3aGljaCBjYXNlIHRoZSBleHByZXNzaW9uIGJlbG93IHdvdWxkIGJlIHN1YnN0aXR1dGVkIHdpdGggJ3Byb2R1Y3Rpb24nKVxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XHJcbn1cclxuY2F0Y2ggKGUpIHtcclxuICAgIHZhciBnID0gZ2V0R2xvYmFsKCk7XHJcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgZy5wcm9jZXNzID0ge307XHJcbiAgICBnLnByb2Nlc3MuZW52ID0ge307XHJcbn1cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHRlc3RDb2RlTWluaWZpY2F0aW9uKCkgeyB9XHJcbiAgICBpZiAodGVzdENvZGVNaW5pZmljYXRpb24ubmFtZSAhPT0gXCJ0ZXN0Q29kZU1pbmlmaWNhdGlvblwiICYmXHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuSUdOT1JFX01PQlhfTUlOSUZZX1dBUk5JTkcgIT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgLy8gdHJpY2sgc28gaXQgZG9lc24ndCBnZXQgcmVwbGFjZWRcclxuICAgICAgICB2YXIgdmFyTmFtZSA9IFtcInByb2Nlc3NcIiwgXCJlbnZcIiwgXCJOT0RFX0VOVlwiXS5qb2luKFwiLlwiKTtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0geW91IGFyZSBydW5uaW5nIGEgbWluaWZpZWQgYnVpbGQsIGJ1dCAnXCIgKyB2YXJOYW1lICsgXCInIHdhcyBub3Qgc2V0IHRvICdwcm9kdWN0aW9uJyBpbiB5b3VyIGJ1bmRsZXIuIFRoaXMgcmVzdWx0cyBpbiBhbiB1bm5lY2Vzc2FyaWx5IGxhcmdlIGFuZCBzbG93IGJ1bmRsZVwiKTtcclxuICAgIH1cclxufSkoKTtcclxuaWYgKHR5cGVvZiBfX01PQlhfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5keWtvZy9tb2J4LWRldnRvb2xzL1xyXG4gICAgX19NT0JYX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uaW5qZWN0TW9ieCh7XHJcbiAgICAgICAgc3B5OiBzcHksXHJcbiAgICAgICAgZXh0cmFzOiB7XHJcbiAgICAgICAgICAgIGdldERlYnVnTmFtZTogZ2V0RGVidWdOYW1lXHJcbiAgICAgICAgfSxcclxuICAgICAgICAkbW9ieDogJG1vYnhcclxuICAgIH0pO1xyXG59XG5cbmV4cG9ydCB7ICRtb2J4LCBJRGVyaXZhdGlvblN0YXRlLCBPYnNlcnZhYmxlTWFwLCBPYnNlcnZhYmxlU2V0LCBSZWFjdGlvbiwgYWxsb3dTdGF0ZUNoYW5nZXMgYXMgX2FsbG93U3RhdGVDaGFuZ2VzLCBhbGxvd1N0YXRlQ2hhbmdlc0luc2lkZUNvbXB1dGVkIGFzIF9hbGxvd1N0YXRlQ2hhbmdlc0luc2lkZUNvbXB1dGVkLCBfZW5kQWN0aW9uLCBnZXRBZG1pbmlzdHJhdGlvbiBhcyBfZ2V0QWRtaW5pc3RyYXRpb24sIGdldEdsb2JhbFN0YXRlIGFzIF9nZXRHbG9iYWxTdGF0ZSwgaW50ZXJjZXB0UmVhZHMgYXMgX2ludGVyY2VwdFJlYWRzLCBpc0NvbXB1dGluZ0Rlcml2YXRpb24gYXMgX2lzQ29tcHV0aW5nRGVyaXZhdGlvbiwgcmVzZXRHbG9iYWxTdGF0ZSBhcyBfcmVzZXRHbG9iYWxTdGF0ZSwgX3N0YXJ0QWN0aW9uLCBhY3Rpb24sIGF1dG9ydW4sIGNvbXBhcmVyLCBjb21wdXRlZCwgY29uZmlndXJlLCBjcmVhdGVBdG9tLCBkZWNvcmF0ZSwgZW50cmllcywgZXh0ZW5kT2JzZXJ2YWJsZSwgZmxvdywgZ2V0LCBnZXRBdG9tLCBnZXREZWJ1Z05hbWUsIGdldERlcGVuZGVuY3lUcmVlLCBnZXRPYnNlcnZlclRyZWUsIGhhcywgaW50ZXJjZXB0LCBpc0FjdGlvbiwgaXNBcnJheUxpa2UsIGlzT2JzZXJ2YWJsZVZhbHVlIGFzIGlzQm94ZWRPYnNlcnZhYmxlLCBpc0NvbXB1dGVkLCBpc0NvbXB1dGVkUHJvcCwgaXNPYnNlcnZhYmxlLCBpc09ic2VydmFibGVBcnJheSwgaXNPYnNlcnZhYmxlTWFwLCBpc09ic2VydmFibGVPYmplY3QsIGlzT2JzZXJ2YWJsZVByb3AsIGlzT2JzZXJ2YWJsZVNldCwga2V5cywgb2JzZXJ2YWJsZSwgb2JzZXJ2ZSwgb25CZWNvbWVPYnNlcnZlZCwgb25CZWNvbWVVbm9ic2VydmVkLCBvblJlYWN0aW9uRXJyb3IsIHJlYWN0aW9uLCByZW1vdmUsIHJ1bkluQWN0aW9uLCBzZXQsIHNweSwgdG9KUywgdHJhY2UsIHRyYW5zYWN0aW9uLCB1bnRyYWNrZWQsIHZhbHVlcywgd2hlbiB9O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7b2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnXHJcblxyXG52YXIgc3RyID0gb2JzZXJ2YWJsZS5ib3goJ3N0cicpXHJcbnZhciBudW0gPSBvYnNlcnZhYmxlLmJveCgyMClcclxudmFyIGJvb2wgPSBvYnNlcnZhYmxlLmJveChmYWxzZSlcclxuXHJcbmNvbnNvbGUubG9nKHN0ci5nZXQoKSlcclxuY29uc29sZS5sb2cobnVtLmdldCgpKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9