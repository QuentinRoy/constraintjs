(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cjs"] = factory();
	else
		root["cjs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _cjs = __webpack_require__(1);
	
	var _cjs2 = _interopRequireDefault(_cjs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// exports with commonjs as webpack's umd does not export es6's module default
	module.exports = _cjs2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _util = __webpack_require__(2);
	
	var _debug = __webpack_require__(16);
	
	var _debug2 = _interopRequireDefault(_debug);
	
	var _core = __webpack_require__(17);
	
	var _core2 = _interopRequireDefault(_core);
	
	var _map = __webpack_require__(44);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _array = __webpack_require__(45);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _liven = __webpack_require__(47);
	
	var _liven2 = _interopRequireDefault(_liven);
	
	var _memoize = __webpack_require__(46);
	
	var _memoize2 = _interopRequireDefault(_memoize);
	
	var _get = __webpack_require__(43);
	
	var _get2 = _interopRequireDefault(_get);
	
	var _root = __webpack_require__(15);
	
	var _root2 = _interopRequireDefault(_root);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import { isPolyDOM } from "./template/cjs_template";
	var isPolyDOM = function isPolyDOM() {
		return false;
	}; //FIXME: template support
	
	// Save the previous value of the `cjs` variable.
	var old_cjs = _root2.default.cjs;
	
	/**
	 * `cjs` is ConstraintJS's only *visible* object; every other method an property is a property of `cjs`.
	 * The `cjs` object itself can also be called to create a constraint object.
	 *
	 * @method cjs
	 * @param {object} value - A map of initial values
	 * @param {object} options - A set of options to control how the array constraint is evaluated
	 * @return {cjs.ArrayConstraint} A new array constraint
	 * @see cjs.noConflict
	 *
	 * @example Creating an array constraint
	 *
	 *     var cjs_arr = cjs([1,2,3]);
	 *         cjs_arr.item(0); // 1
	 */
	
	/**
	 * Input value constraint
	 *
	 * @method cjs^2
	 * @param {dom} node - The DOM node whose value to follow
	 * @return {cjs.Binding} A constraint whose value is the current value of the input
	 *
	 * @example Creating an input value constraint
	 *
	 *     var inp_elem = document.getElementById('myTextInput'),
	 *         cjs_val = cjs(inp_elem);
	 */
	/**
	 * Create a map constraint
	 *
	 * @method cjs^3
	 * @param {object} value - A map of initial values
	 * @param {object} options - A set of options to control how the map constraint is evaluated
	 * @return {cjs.MapConstraint} A new map constraint
	 *
	 * @example Creating a map constraint
	 *
	 *     var cobj_obj = cjs({
	 *         foo: 1
	 *     });
	 *     cobj.get('foo'); // 1
	 *     cobj.put('bar', 2);
	 *     cobj.get('bar') // 2
	 */
	/**
	 * Create a standard constraint
	 *
	 * @method cjs^4
	 * @param {object} value - The constraint's value
	 * @param {object} options - A set of options to control how the constraint is evaluated
	 * @return {cjs.Constraint} A new constraint
	 * 
	 * @example Creating an empty constraint
	 *
	 *     var x = cjs(),
	 *         y = cjs(1),
	 *         z = cjs(function() {
	 *             return y.get() + 1;
	 *         });
	 *     x.get(); // undefined
	 *     y.get(); // 1
	 *     z.get(); // 2
	 *
	 * @example With options
	 *
	 *     var yes_lit = cjs(function() { return 1; },
	 *                         { literal: true }),
	 *     var not_lit = cjs(function() { return 1; },
	 *                         { literal: false });
	 *     yes_lit.get(); // (function)
	 *     not_lit.get(); // 1
	 */
	function cjs(arg0, arg1) {
		if ((0, _util.isArray)(arg0)) {
			return new _array.ArrayConstraint((0, _util.extend)({
				value: arg0
			}, arg1));
		} else if (isPolyDOM(arg0)) {
			return cjs.inputValue(arg0);
		} else if ((0, _core.is_constraint)(arg0)) {
			return new _core.Constraint(arg0, arg1);
		} else if ((0, _util.isObject)(arg0) && !(0, _util.isFunction)(arg0)) {
			return new _map.MapConstraint((0, _util.extend)({
				value: arg0
			}, arg1));
		} else {
			return new _core.Constraint(arg0, arg1);
		}
	}
	
	// Expose core functions
	// -------------------------
	(0, _util.extend)(cjs, {
		/**
	  * Constraint constructor
	  *
	  * @method cjs.constraint
	  * @constructs cjs.Constraint
	  * @param {*} value - The initial value of the constraint or a function to compute its value
	  * @param {Object} [options] - A set of options to control how and when the constraint's value is evaluated
	  * @return {cjs.Constraint} - A new constraint object
	  * @see cjs.Constraint
	  */
		constraint: _core2.default,
		/** @expose cjs.Constraint */
		Constraint: _core.Constraint,
		/** @expose cjs.isConstraint */
		isConstraint: _core.is_constraint,
	
		/**
	  * Create a new constraint whose value changes by state
	  *
	  * @method cjs.inFSM
	  * @param {cjs.FSM} fsm - The finite-state machine to depend on
	  * @param {Object} values - Keys are the state specifications for the FSM, values are the value for those specific states
	  * @return {cjs.Constraint} - A new constraint object
	  * @see cjs.Constraint.prototype.inFSM
	  *
	  * @example
	  *
	  *     var fsm = cjs.fsm("state1", "state2")
	  *                  .addTransition("state1", "state2",
	  *                       cjs.on("click"));
	  *     var x = cjs.inFSM(fsm, {
	  *         state1: 'val1',
	  *         state2: function() { return 'val2'; }
	  *     });
	  */
		inFSM: function inFSM(fsm, values) {
			return new _core.Constraint().inFSM(fsm, values);
		},
	
		/**
	  * Gets the value of an object regardless of if it's a constraint (standard, array, or map) or not.
	  *
	  * @method cjs.get
	  * @param {*} obj - The object whose value to return
	  * @param {boolean} [autoAddOutgoing=true] - Whether to automatically add a dependency from this constraint to ones that depend on it.
	  * @return {*} - The value
	  *
	  * @see cjs.isConstraint
	  * @see cjs.Constraint.prototype.get
	  * @see cjs.isArrayConstraint
	  * @see cjs.ArrayConstraint.prototype.toArray
	  * @see cjs.isMapConstraint
	  * @see cjs.MapConstraint.prototype.toObject
	  *
	  * @example
	  *     var w = 1,
	  *         x = cjs(2),
	  *         y = cjs(['a','b']),
	  *         z = cjs({c: 2});
	  *
	  *     cjs.get(w); // 1
	  *     cjs.get(x); // 2
	  *     cjs.get(y); // ['a','b'] 
	  *     cjs.get(z); // {c: 2}
	  */
		get: _get2.default,
	
		/** @expose cjs.wait */
		wait: _core.cjs_wait,
		/** @expose cjs.signal */
		signal: _core.cjs_signal,
		/** @expose cjs.removeDependency */
		removeDependency: _core.constraint_solver.removeDependency,
	
		/** @expose cjs.arrayDiff */
		arrayDiff: _util.get_array_diff, // expose this useful function
	
		/**
	  * The version number of ConstraintJS
	  * @property {string} cjs.version
	  * @see cjs.toString
	  */
		version: "<%= version %>", // This template will be filled in by the builder
	
		/**
	  * Print out the name and version of ConstraintJS
	  *
	  * @method cjs.toString
	  * @return {string} - `ConstraintJS v(version#)`
	  * @see cjs.version
	  */
		toString: function toString() {
			return "ConstraintJS v" + cjs.version;
		},
	
		get __debug() {
			return _debug2.default.__debug;
		},
	
		set __debug(val) {
			_debug2.default.__debug = val;
		},
	
		/**
	  * Restore the previous value of `cjs`
	  *
	  * @method cjs.noConflict
	  * @return {object} - `cjs`
	  *
	  * @example Renaming `cjs` to `ninjaCJS`
	  *
	  *     var ninjaCJS = cjs.noConflict();
	  *     var x = ninjaCJS(1);
	  * @see cjs
	  */
		noConflict: (0, _util.has)(_root2.default, "cjs") ? function () {
			// If there was a previous `cjs` property then track it
			// and allow `cjs.noConflict` to restore its previous value
			if (_root2.default.cjs === cjs) {
				_root2.default.cjs = old_cjs;
			}
			// and return a reference to `cjs` if the user wants it
			return cjs;
		} :
		// ...otherwise, `cjs.noConflict` will just delete the old value
		function () {
			delete _root2.default.cjs;
			return cjs;
		},
	
		/** @expose cjs.map **/
		map: _map2.default,
		/** @expose cjs.MapConstraint */
		MapConstraint: _map.MapConstraint,
		/** @expose cjs.isMapConstraint */
		isMapConstraint: _map.is_map,
	
		/** @expose cjs.array **/
		array: _array2.default,
		/** @expose cjs.ArrayConstraint */
		ArrayConstraint: _array.ArrayConstraint,
		/** @expose cjs.isArrayConstraint */
		isArrayConstraint: _array.is_array,
	
		/** @expose cjs.liven */
		liven: _liven2.default,
	
		/** @expose cjs.memoize */
		memoize: _memoize2.default
	});
	
	exports.default = cjs;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.isPositiveInteger = exports.indexWhere = exports.hasAny = exports.isAnyElement = exports.isElement = exports.values = exports.flatten = exports.compact = exports.last = exports.rEL = exports.aEL = exports.setTextContent = exports.getTextContent = exports.identity = exports.isObject = exports.isArray = exports.cTO = exports.sTO = exports.trim = exports.bindArgs = exports.lastIndexOf = exports.camel_case = exports.ArrayProto = exports.FuncProto = exports.get_array_diff = exports.bind = exports.unary_operators = exports.binary_operators = exports.rest = exports.reduce = exports.removeIndex = exports.toArray = exports.breaker = exports.any = exports.clone = exports.indexOf = exports.isString = exports.uniqueId = exports.extend = exports.remove = exports.has = exports.each = exports.eqeqeq = exports.slice = exports.isNumber = exports.map = exports.isFunction = undefined;
	
	var _keys = __webpack_require__(3);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _root = __webpack_require__(15);
	
	var _root2 = _interopRequireDefault(_root);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*jslint eqnull: true */
	
	// Utility functions
	// -----------------
	
	// Many of the functions here are from http://underscorejs.org/
	// Save bytes in the minified (but not gzipped) version:
	var ArrayProto = Array.prototype,
	    ObjProto = Object.prototype,
	    FuncProto = Function.prototype,
	    StringProto = String.prototype;
	
	// Create quick reference variables for speed access to core prototypes.
	var slice = ArrayProto.slice,
	    toString = ObjProto.toString,
	    concat = ArrayProto.concat,
	    push = ArrayProto.push;
	
	// All **ECMAScript 5** native function implementations that we hope to use
	// are declared here.
	var nativeSome = ArrayProto.some,
	    nativeIndexOf = ArrayProto.indexOf,
	    nativeLastIndexOf = ArrayProto.lastIndexOf,
	    nativeEvery = ArrayProto.every,
	    nativeForEach = ArrayProto.forEach,
	    nativeKeys = _keys2.default,
	    nativeFilter = ArrayProto.filter,
	    nativeReduce = ArrayProto.reduce,
	    nativeMap = ArrayProto.map,
	    nativeTrim = StringProto.trim;
	
	//Bind a function to a context
	var bind = function bind(func, context) {
		return function () {
			return func.apply(context, arguments);
		};
	},
	    bindArgs = function bindArgs(func) {
		var args = rest(arguments, 1);return function () {
			return func.apply(this, args);
		};
	},
	    trim = function trim(str) {
		return nativeTrim ? nativeTrim.call(str) : String(str).replace(/^\s+|\s+$/g, '');
	},
	    doc = _root2.default.document,
	    sTO = function sTO(a, b) {
		return _root2.default.setTimeout(a, b);
	},
	    cTO = function cTO(a, b) {
		return _root2.default.clearTimeout(a, b);
	},
	
	// Binary and unary operators will be used for constraint modifiers and for templates,
	// which allow these operators to be used in constraints
	unary_operators = { "+": function _(a) {
			return +a;
		}, "-": function _(a) {
			return -a;
		},
		"~": function _(a) {
			return ~a;
		}, "!": function _(a) {
			return !a;
		}
	},
	    binary_operators = { "===": function _(a, b) {
			return a === b;
		}, "!==": function _(a, b) {
			return a !== b;
		},
		"==": function _(a, b) {
			return a == b;
		}, "!=": function _(a, b) {
			return a != b;
		},
		">": function _(a, b) {
			return a > b;
		}, ">=": function _(a, b) {
			return a >= b;
		},
		"<": function _(a, b) {
			return a < b;
		}, "<=": function _(a, b) {
			return a <= b;
		},
		"+": function _(a, b) {
			return a + b;
		}, "-": function _(a, b) {
			return a - b;
		},
		"*": function _(a, b) {
			return a * b;
		}, "/": function _(a, b) {
			return a / b;
		},
		"%": function _(a, b) {
			return a % b;
		}, "^": function _(a, b) {
			return a ^ b;
		},
		"&&": function _(a, b) {
			return a && b;
		}, "||": function _(a, b) {
			return a || b;
		},
		"&": function _(a, b) {
			return a & b;
		}, "|": function _(a, b) {
			return a | b;
		},
		"<<": function _(a, b) {
			return a << b;
		}, ">>": function _(a, b) {
			return a >> b;
		},
		">>>": function _(a, b) {
			return a >>> b;
		}
	};
	
	var getTextContent, setTextContent;
	if (doc && !('textContent' in doc.createElement('div'))) {
		exports.getTextContent = getTextContent = function (node) {
			return node && node.nodeType === 3 ? node.nodeValue : node.innerText;
		};
		exports.setTextContent = setTextContent = function (node, val) {
			if (node && node.nodeType === 3) {
				node.nodeValue = val;
			} else {
				node.innerText = val;
			}
		};
	} else {
		exports.getTextContent = getTextContent = function (node) {
			return node.textContent;
		};
		exports.setTextContent = setTextContent = function (node, val) {
			node.textContent = val;
		};
	}
	
	var aEL = function aEL(node, type, callback) {
		if (node.addEventListener) {
			node.addEventListener(type, callback);
		} else {
			node.attachEvent("on" + type, callback);
		}
	},
	    rEL = function rEL(node, type, callback) {
		if (node.removeEventListener) {
			node.removeEventListener(type, callback);
		} else {
			node.detachEvent("on" + type, callback);
		}
	};
	
	// Establish the object that gets returned to break out of a loop iteration.
	var breaker = {};
	
	// Creating a unique id for constraints allows for quicker referencing
	var uniqueId = (function () {
		var id = 0;
		return function () {
			return id++;
		};
	})();
	
	// Create a (shallow-cloned) duplicate of an object.
	var clone = function clone(obj) {
		if (!isObject(obj)) {
			return obj;
		}
		return isArray(obj) ? obj.slice() : extend({}, obj);
	};
	
	// Returns the keys of an object
	var keys = nativeKeys || function (obj) {
		if (obj !== Object(obj)) {
			throw new TypeError('Invalid object');
		}
		var keys = [],
		    key,
		    len = 0;
		for (key in obj) {
			if (hOP.call(obj, key)) {
				keys[len++] = key;
			}
		}
		return keys;
	};
	
	// Get the last element of an array. Passing **n** will return the last N
	// values in the array.
	var last = function last(array, n) {
		if (!array) {
			return void 0;
		} else if (n === undefined) {
			return array[array.length - 1];
		} else {
			return slice.call(array, Math.max(array.length - n, 0));
		}
	};
	
	// Determine if at least one element in the object matches a truth test.
	// Delegates to **ECMAScript 5**'s native `some` if available.
	var any = function any(obj, iterator, context) {
		var result = false;
		if (!obj) {
			return result;
		}
		if (nativeSome && obj.some === nativeSome) {
			return obj.some(iterator, context);
		}
		each(obj, function (value, index, list) {
			if (result || (result = iterator.call(context, value, index, list))) {
				return breaker;
			}
		});
		return !!result;
	};
	
	// Returns everything but the first entry of the array.
	// Especially useful on the arguments object. Passing an **n** will return
	// the rest N values in the array.
	var rest = function rest(array, n) {
		return slice.call(array, n === undefined ? 1 : n);
	};
	
	// Trim out all falsy values from an array.
	var compact = function compact(array) {
		return filter(array, identity);
	};
	
	// Determine whether all of the elements match a truth test.
	// Delegates to **ECMAScript 5**'s native `every` if available.
	var every = function every(obj, iterator, context) {
		iterator = iterator || identity;
		var result = true;
		if (!obj) {
			return result;
		} else if (nativeEvery && obj.every === nativeEvery) {
			return obj.every(iterator, context);
		} else {
			each(obj, function (value, index, list) {
				if (!(result = result && iterator.call(context, value, index, list))) {
					return breaker;
				}
			});
			return !!result;
		}
	};
	
	// Recursive call for flatten (from underscore)
	var recursiveFlatten = function recursiveFlatten(input, shallow, output) {
		if (shallow && every(input, isArray)) {
			return concat.apply(output, input);
		}
		each(input, function (value) {
			if (isArray(value) || isArguments(value)) {
				if (shallow) {
					push.apply(output, value);
				} else {
					recursiveFlatten(value, shallow, output);
				}
			} else {
				output.push(value);
			}
		});
		return output;
	};
	
	// Initial call to the recursive flatten function
	var flatten = function flatten(input, shallow) {
		return recursiveFlatten(input, shallow, []);
	};
	
	// Retrieve the values of an object's properties.
	var values = function values(obj) {
		var values = [];
		var key;
		for (key in obj) {
			if (obj.hasOwnProperty(key)) {
				values.push(obj[key]);
			}
		}
		return values;
	};
	
	// Is a given value a number?
	var isNumber = function isNumber(obj) {
		return toString.call(obj) === '[object Number]';
	},
	
	// Is a given value an array?
	// Delegates to ECMA5's native Array.isArray
	isArray = Array.isArray || function (obj) {
		return toString.call(obj) === '[object Array]';
	},
	
	// Is a given value a function?
	isFunction = function isFunction(obj) {
		return toString.call(obj) === '[object Function]';
	},
	
	// Is the given value a String?
	isString = function isString(obj) {
		return toString.call(obj) === '[object String]';
	},
	
	// Is a given variable an object?
	isObject = function isObject(obj) {
		return obj === Object(obj);
	},
	
	// Is a given value a DOM element?
	isElement = function isElement(obj) {
		return !!(obj && obj.nodeType === 1);
	},
	
	// Any element of any type?
	isAnyElement = function isAnyElement(obj) {
		return !!(obj && obj.nodeType > 0);
	},
	
	// Is a given variable an arguments object?
	isArguments = function isArguments(obj) {
		return toString.call(obj) === '[object Arguments]';
	};
	
	// Keep the identity function around for default iterators.
	var identity = function identity(value) {
		return value;
	};
	
	// Safely convert anything iterable into a real, live array.
	var toArray = function toArray(obj) {
		if (!obj) {
			return [];
		}
		if (isArray(obj)) {
			return slice.call(obj);
		}
		if (isArguments(obj)) {
			return slice.call(obj);
		}
		if (obj.toArray && isFunction(obj.toArray)) {
			return obj.toArray();
		}
		return map(obj, identity);
	};
	
	// `hasOwnProperty` proxy, useful if you don't know if obj is null or not
	var hOP = ObjProto.hasOwnProperty,
	    has = function has(obj, key) {
		return hOP.call(obj, key);
	},
	    hasAny = function hasAny(obj) {
		return any(rest(arguments), function (x) {
			return has(obj, x);
		});
	};
	
	// Run through each element and calls `iterator` where `this` === `context`
	
	var each = function each(obj, iterator, context) {
		var i, length;
		if (!obj) {
			return;
		}
		if (nativeForEach && obj.forEach === nativeForEach) {
			obj.forEach(iterator, context);
		} else if (obj.length === +obj.length) {
			i = 0;length = obj.length;
			for (; i < length; i++) {
				if (iterator.call(context, obj[i], i, obj) === breaker) return;
			}
		} else {
			var kys = keys(obj);
			i = 0;length = kys.length;
	
			for (; i < length; i++) {
				if (iterator.call(context, obj[kys[i]], kys[i], obj) === breaker) return;
			}
		}
		return obj;
	};
	
	// Run through each element and calls 'iterator' where 'this' === context
	// and returns the return value for every element
	var map = function map(obj, iterator, context) {
		var results = [];
		if (!obj) {
			return results;
		}
		if (nativeMap && obj.map === nativeMap) {
			return obj.map(iterator, context);
		}
		each(obj, function (value, index, list) {
			results[results.length] = iterator.call(context, value, index, list);
		});
		if (obj.length === +obj.length) {
			results.length = obj.length;
		}
		return results;
	};
	
	// Return all the elements that pass a truth test.
	// Delegates to **ECMAScript 5**'s native `filter` if available.
	var filter = function filter(obj, iterator, context) {
		var results = [];
		if (!obj) {
			return results;
		}
		if (nativeFilter && obj.filter === nativeFilter) {
			return obj.filter(iterator, context);
		}
		each(obj, function (value, index, list) {
			if (iterator.call(context, value, index, list)) {
				results.push(value);
			}
		});
		return results;
	};
	
	// Extend a given object with all the properties in passed-in object(s).
	var extend = function extend(obj) {
		each(slice.call(arguments, 1), function (source) {
			if (source) {
				for (var prop in source) {
					if (source.hasOwnProperty(prop)) {
						obj[prop] = source[prop];
					}
				}
			}
		});
		return obj;
	};
	
	// Return the first item in arr where test is true
	var indexWhere = function indexWhere(arr, test, start_index) {
		var i,
		    len = arr.length;
		for (i = start_index || 0; i < len; i++) {
			if (test(arr[i], i)) {
				return i;
			}
		}
		return -1;
	},
	    lastIndexWhere = function lastIndexWhere(arr, test) {
		var i,
		    len = arr.length;
		for (i = len - 1; i >= 0; i--) {
			if (test(arr[i], i)) {
				return i;
			}
		}
		return -1;
	};
	
	// The default equality check function
	var eqeqeq = function eqeqeq(a, b) {
		return a === b;
	};
	
	// Return the first item in arr equal to item (where equality is defined in equality_check)
	var indexOf = function indexOf(arr, item, start_index, equality_check) {
		if (!equality_check && !start_index && nativeIndexOf && arr.indexOf === nativeIndexOf) {
			return arr.indexOf(item);
		} else {
			equality_check = equality_check || eqeqeq;
			return indexWhere(arr, function (x) {
				return equality_check(item, x);
			}, start_index);
		}
	},
	    lastIndexOf = function lastIndexOf(arr, item, equality_check) {
		if (nativeLastIndexOf && arr.lastIndexOf === nativeLastIndexOf) {
			return arr.lastIndexOf(item);
		} else {
			equality_check = equality_check || eqeqeq;
			return lastIndexWhere(arr, function (x) {
				return equality_check(item, x);
			});
		}
	};
	
	// Remove an item in an array
	var remove = function remove(arr, obj) {
		return removeIndex(arr, indexOf(arr, obj));
	},
	    removeIndex = function removeIndex(arr, index) {
		if (index >= 0) {
			return arr.splice(index, 1)[0];
		}
		return index;
	};
	
	// Fold down a list of values into a single value
	var reduce = function reduce(obj, iterator, memo) {
		var initial = arguments.length > 2;
		if (!obj) obj = [];
		if (nativeReduce && obj.reduce === nativeReduce) {
			return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
		}
		each(obj, function (value, index, list) {
			memo = iterator(memo, value, index, list);
		});
		return memo;
	};
	
	var sparse_indexof = function sparse_indexof(arr, item, start_index, equals) {
		//indexOf is wonky with sparse arrays
		var i = start_index,
		    len = arr.length;
		while (i < len) {
			if (equals(arr[i], item)) {
				return i;
			}
			i++;
		}
		return -1;
	},
	    popsym = function popsym(index, x, y, symbols, r, n, equality_check) {
		// Longest common subsequence between two arrays, based on
		// the [rosetta code implementation](http://rosettacode.org/wiki/Longest_common_subsequence#JavaScript)
		var s = x[index],
		    pos = symbols[s] + 1;
		pos = sparse_indexof(y, s, pos > r ? pos : r, equality_check || eqeqeq);
		if (pos < 0) {
			pos = n;
		}
		symbols[s] = pos;
		return pos;
	},
	    indexed_lcs = function indexed_lcs(x, y, equality_check) {
		var symbols = {},
		    r = 0,
		    p = 0,
		    p1,
		    L = 0,
		    idx,
		    i,
		    m = x.length,
		    n = y.length,
		    S = new Array(m < n ? n : m);
		if (n === 0 || m === 0) {
			return [];
		}
		p1 = popsym(0, x, y, symbols, r, n, equality_check);
		for (i = 0; i < m; i++) {
			p = r === p ? p1 : popsym(i, x, y, symbols, r, n, equality_check);
			p1 = popsym(i + 1, x, y, symbols, r, n, equality_check);
	
			if (p > p1) {
				i++;
				idx = p1;
			} else {
				idx = p;
			}
	
			if (idx === n || i === m) {
				p = popsym(i, x, y, symbols, r, n, equality_check);
			} else {
				r = idx;
				S[L] = { item: x[i], indicies: [i, idx] };
				L++;
			}
		}
		return S.slice(0, L);
	};
	
	// "Subtracts" `y` from `x` (takes `x-y`) and returns a list of items in `x` that aren't in `y`
	var diff = function diff(x, y, equality_check) {
		var i,
		    j,
		    xi,
		    y_clone = clone(y),
		    x_len = x.length,
		    y_len = y.length,
		    diff = [],
		    diff_len = 0;
	
		// If there aren't any items, then the difference is the same as `x`.
		// not bothering to return a clone here because diff is private none of my code
		// modifies the return value
		if (y_len === 0 || x_len === 0) {
			return x;
		}
	
		for (i = 0; i < x_len; i += 1) {
			xi = x[i];
			j = indexOf(y_clone, xi, 0, equality_check);
			if (j >= 0) {
				removeIndex(y_clone, j);
				// If there's nothing left to subtract, just add the rest of x to diff and return
				if (--y_len === 0) {
					diff.push.apply(diff, rest(x, i + 1));
					break;
				}
			} else {
				diff[diff_len] = xi;
				diff_len++;
			}
		}
		return diff;
	};
	
	// Returns the items that are in both x and y, but also accounts for the count of equivalent items (as defined by equality_check)
	// Examples:
	// `x = [1,2,2,3]`, `y = [1,2,4]` -> `[1,2]`;
	// `x = [1,1,1]`,   `y = [1,1]`   -> `[1,1]`
	var dualized_intersection = function dualized_intersection(x, y, equality_check) {
		var i,
		    j,
		    xi,
		    y_clone = clone(y),
		    x_len = x.length,
		    y_len = y.length,
		    intersection = [];
	
		for (i = 0; i < x_len && y_len > 0; i++) {
			xi = x[i];
			j = indexOf(y_clone, xi, 0, equality_check);
			if (j >= 0) {
				intersection.push([xi, removeIndex(y_clone, j)]);
				y_len--;
			}
		}
	
		return intersection;
	};
	
	// Utility functions for `array_source_map`
	var get_index_moved = function get_index_moved(info) {
		var item = info[1].item;
		return { item: item, from: info[0].index, to: info[1].index, from_item: info[0].item, to_item: item };
	},
	    add_indicies = function add_indicies(arr) {
		// suppose you have array `arr` defined by:
		// arr = []; arr[10] = 'hi';
		// Looping through arr with arr.forEach (or cjs's map) would only produce the 10th item.
		// this function is declared to make sure every item is looped through
		var i = 0,
		    len = arr.length,
		    rv = [];
		while (i < len) {
			rv[i] = { item: arr[i], index: i };
			i++;
		}
		return rv;
	},
	    add_from_to_indicies = function add_from_to_indicies(info) {
		return { item: info.item, from: info.indicies[0], to: info.indicies[1] };
	},
	    get_index = function get_index(x) {
		return x.index;
	},
	    get_to = function get_to(x) {
		return x.to;
	},
	    add_from_and_from_item = function add_from_and_from_item(x) {
		return { from: x.index, from_item: x.item };
	};
	
	// Get where every item came from and went to and return that map
	var array_source_map = function array_source_map(from, to, equality_check) {
		var eq = equality_check || eqeqeq,
		    item_aware_equality_check = function item_aware_equality_check(a, b) {
			return eq(a ? a.item : a, b ? b.item : b);
		},
		    indexed_from = add_indicies(from),
		    indexed_to = add_indicies(to),
		    indexed_common_subsequence = map(indexed_lcs(from, to), add_from_to_indicies),
		    indexed_removed = diff(indexed_from, indexed_common_subsequence, item_aware_equality_check),
		    indexed_added = diff(indexed_to, indexed_common_subsequence, item_aware_equality_check),
		    indexed_moved = map(dualized_intersection(indexed_removed, indexed_added, item_aware_equality_check), get_index_moved);
	
		indexed_added = diff(indexed_added, indexed_moved, item_aware_equality_check);
		indexed_removed = diff(indexed_removed, indexed_moved, item_aware_equality_check);
	
		var added_indicies = map(indexed_added, get_index),
		    moved_indicies = map(indexed_moved, get_to),
		    ics_indicies = map(indexed_common_subsequence, get_to),
		    to_mappings = [],
		    i = 0,
		    len = to.length,
		    info,
		    info_index,
		    item;
		while (i < len) {
			item = to[i];
			// Added items
			if ((info_index = indexOf(added_indicies, i)) >= 0) {
				info = indexed_added[info_index];
				to_mappings[i] = { to: i, to_item: item, item: item };
			} else if ((info_index = indexOf(moved_indicies, i)) >= 0) {
				info = indexed_moved[info_index];
				to_mappings[i] = { to: i, to_item: item, item: item, from: info.from, from_item: info.from_item };
			} else if ((info_index = indexOf(ics_indicies, i)) >= 0) {
				info = indexed_common_subsequence[info_index];
				to_mappings[i] = { to: i, to_item: item, item: item, from: info.from, from_item: from[info.from] };
			}
			i++;
		}
	
		return to_mappings.concat(map(indexed_removed, add_from_and_from_item));
	};
	
	// These utility functions help compute the array diff (without having to re-declare them every time get_array_diff is called
	var has_from = function has_from(x) {
		return x.hasOwnProperty("from");
	},
	    not_has_from = function not_has_from(x) {
		return !has_from(x);
	},
	    has_to = function has_to(x) {
		return x.hasOwnProperty("to");
	},
	    not_has_to = function not_has_to(x) {
		return !has_to(x);
	},
	    has_from_and_to = function has_from_and_to(x) {
		return has_from(x) && has_to(x);
	},
	    unequal_from_to = function unequal_from_to(x) {
		return has_from_and_to(x) && x.from !== x.to;
	},
	    sort_by_from_fn = function sort_by_from_fn(a, b) {
		// This is equivalent to (but faster than):
	
		//     if (a_has_from && b_has_from) { return a.from - b.from; }
		//     else if (a_has_from && !b_has_from) { return -1; }
		//     else if (!a_has_from && b_has_from) { return 1; }
		//     else { return 0; }
		var a_has_from = has_from(a),
		    b_has_from = has_from(b);
		return a_has_from && b_has_from ? a.from - b.from : b_has_from - a_has_from;
	};
	
	/**
	 *
	 * `arrayDiff` returns an object with attributes:
	 * `removed`, `added`, and `moved`.
	 * Every item in `removed` has the format: `{item, index}`
	 * Every item in `added` has the format: `{item, index}`
	 * Every item in `moved` has the format: `{from_index, to_index}`
	 * Every item in `index_changed` has the format: `{from_index, to_index}`
	 *
	 * When `oldArray` removes every item in `removed`, adds every item in `added`,
	 * and moves every item in `moved` (in that order), it will result in an array
	 * that is equivalent to `newArray`. Note: this function is used internally to
	 * determine how to keep DOM nodes in sync with an underlying model with the
	 * smallest number of modifications to the DOM tree.
	 *
	 * @method cjs.arrayDiff
	 * @param {array[*]} from_val - The 'former' array
	 * @param {array[*]} to_val - The 'new' array
	 * @param {function} [equality_check] - A function that checks for equality between items
	 * @return {Object} - added, removed, and moved items
	 *
	 * @example Taking the diff between `old_array` and `new_array` with the default equality check
	 *
	 *     var old_array = ['a','b','c'],
	 *         new_array = ['c','b','d'],
	 *         diff = cjs.arrayDiff(old_array, new_array);
	 *		
	 *     // diff === {
	 *     //   added: [ { item: 'd', to: 2, to_item: 'd' } ],
	 *     //   removed: [ { from: 0, from_item: 'a' } ],
	 *     //   moved: [ { item: 'c', from: 2, insert_at: 0, move_from: 1, to: 0 } ],
	 *     //   index_changed: [ { from: 2, from_item: 'c', item: 'c', to: 0, to_item: 'c' } ]
	 *     // }
	 *		
	 */
	var get_array_diff = function get_array_diff(from_val, to_val, equality_check) {
		var source_map = array_source_map(from_val, to_val, equality_check),
		    rearranged_array = clone(source_map).sort(sort_by_from_fn),
		    added = filter(source_map, not_has_from),
		    // back to front
		removed = filter(rearranged_array, not_has_to).reverse(),
		    // back to front
		index_changed = filter(source_map, unequal_from_to),
		    moved = [];
	
		each(removed, function (info) {
			removeIndex(rearranged_array, info.from);
		});
		each(added, function (info) {
			rearranged_array.splice(info.to, 0, info);
		});
	
		each(source_map, function (info, index) {
			if (has_from_and_to(info)) {
				if (rearranged_array[index] !== info) {
					var rearranged_array_info_index = indexOf(rearranged_array, info, index);
					rearranged_array.splice(index, 0, removeIndex(rearranged_array, rearranged_array_info_index));
					moved.push({ move_from: rearranged_array_info_index, insert_at: index, item: info.item, from: info.from, to: info.to });
				}
			}
		});
		rearranged_array = null;
		return { added: added, removed: removed, moved: moved, index_changed: index_changed, mapping: source_map };
	};
	
	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	var rdashAlpha = /-([a-z]|[0-9])/ig,
	    rmsPrefix = /^-ms-/,
	    fcamelCase = function fcamelCase(all, letter) {
		return String(letter).toUpperCase();
	},
	    camel_case = function camel_case(string) {
		return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
	};
	
	var isPositiveInteger = function isPositiveInteger(val) {
		return isNumber(val) && Math.round(val) === val && val >= 0;
	};
	
	exports.isFunction = isFunction;
	exports.map = map;
	exports.isNumber = isNumber;
	exports.slice = slice;
	exports.eqeqeq = eqeqeq;
	exports.each = each;
	exports.has = has;
	exports.remove = remove;
	exports.extend = extend;
	exports.uniqueId = uniqueId;
	exports.isString = isString;
	exports.indexOf = indexOf;
	exports.clone = clone;
	exports.any = any;
	exports.breaker = breaker;
	exports.toArray = toArray;
	exports.removeIndex = removeIndex;
	exports.reduce = reduce;
	exports.rest = rest;
	exports.binary_operators = binary_operators;
	exports.unary_operators = unary_operators;
	exports.bind = bind;
	exports.get_array_diff = get_array_diff;
	exports.FuncProto = FuncProto;
	exports.ArrayProto = ArrayProto;
	exports.camel_case = camel_case;
	exports.lastIndexOf = lastIndexOf;
	exports.bindArgs = bindArgs;
	exports.trim = trim;
	exports.sTO = sTO;
	exports.cTO = cTO;
	exports.isArray = isArray;
	exports.isObject = isObject;
	exports.identity = identity;
	exports.getTextContent = getTextContent;
	exports.setTextContent = setTextContent;
	exports.aEL = aEL;
	exports.rEL = rEL;
	exports.last = last;
	exports.compact = compact;
	exports.flatten = flatten;
	exports.values = values;
	exports.isElement = isElement;
	exports.isAnyElement = isAnyElement;
	exports.hasAny = hasAny;
	exports.indexWhere = indexWhere;
	exports.isPositiveInteger = isPositiveInteger;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(11).Object.keys;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(6);
	
	__webpack_require__(8)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(7);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(9)
	  , core    = __webpack_require__(11)
	  , fails   = __webpack_require__(14);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , core      = __webpack_require__(11)
	  , ctx       = __webpack_require__(12)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 10 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(13);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var root = root || window || {};
	exports.default = root;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		/** @private */
		__debug: true
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.constraint_solver = exports.is_constraint = exports.Constraint = exports.cjs_signal = exports.cjs_wait = undefined;
	exports.default = constraint;
	
	var _typeof2 = __webpack_require__(18);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _util = __webpack_require__(2);
	
	var _get = __webpack_require__(43);
	
	var _get2 = _interopRequireDefault(_get);
	
	var _debug = __webpack_require__(16);
	
	var _debug2 = _interopRequireDefault(_debug);
	
	var _root = __webpack_require__(15);
	
	var _root2 = _interopRequireDefault(_root);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ConstraintJS Core Functionality
	// -------------------------------
	
	var Constraint,
	    // Declare here, will be defined later
	is_constraint,
	    get_constraint_val = function get_constraint_val(x) {
		return is_constraint(x) ? x.get() : x;
	};
	
	// Constraint Solver
	// -----------------
	// Implements constraint solving, as described in:
	// [Integrating pointer variables into one-way constraint models](http://doi.acm.org/10.1145/180171.180174)
	
	//   Edge from A -> B means A sends data to B
	
	var constraint_solver = {
		// `stack` keeps track of the list of constraints that is currently being fetched. If constraint A is fetched while B is on the top of the stack
		// then A is added to the top of the stack and B is marked as dependent on A
		stack: [],
	
		check_on_nullified_ids: {},
	
		// node is the Constraint whose value we are fetching and auto_add_outgoing specifies whether dependencies FROM node should
		// be automatically added
		getValue: function getValue(auto_add_outgoing, getter_arg) {
			var node = this,
			    stack = constraint_solver.stack,
			    stack_len = stack.length,
			    demanding_var,
			    dependency_edge,
			    tstamp;
	
			if (stack_len > 0) {
				// There's a constraint that's asking for my value
				// Let's call it demanding_var
				demanding_var = stack[stack_len - 1];
				dependency_edge = node._outEdges[demanding_var._id];
				tstamp = demanding_var._tstamp + 1;
	
				// If there's already a dependency set up, mark it as still being used by setting its timestamp to the demanding
				// variable's timestamp + `1` (because that variable's timestamp will be incrememted later on, so they will be equal)
				//
				// Code in the this.nullify will check this timestamp and remove the dependency if it's out of date
				if (dependency_edge) {
					// Update timestamp
					dependency_edge.tstamp = tstamp;
				} else if (node !== demanding_var) {
					// Make sure that the dependency should be added
					if (node._options.auto_add_outgoing_dependencies !== false && demanding_var._options.auto_add_incoming_dependencies !== false && auto_add_outgoing !== false) {
						// and add it if it should
						node._outEdges[demanding_var._id] = demanding_var._inEdges[node._id] = { from: node, to: demanding_var, tstamp: tstamp };
					}
				}
			}
	
			// This node is waiting for an asyncronous value
			if (node._paused_info) {
				// So return its temporary value until then
				return node._paused_info.temporaryValue;
			} else if (!node._valid) {
				// If the node's cached value is invalid...
				// Set the timestamp before fetching in case a constraint depends on itself
				node._tstamp++;
	
				// Push node onto the stack to make it clear that it's being fetched
				stack[stack_len] = node;
	
				// Mark it as valid
				node._valid = true;
	
				if (node._options.cache_value !== false) {
					// Check if dynamic value. If it is, then call it. If not, just fetch it
					// set this to the node's cached value, which will be returned
					node._cached_value = node._options.literal ? node._value : (0, _util.isFunction)(node._value) ? node._value.call(node._options.context || node, node, getter_arg) : get_constraint_val(node._value);
	
					// The node paused as if this was going to be an asyncronous value but it ended up being syncronous.
					// Use that to set the value
					if (node._sync_value) {
						node._cached_value = node._sync_value.value;
						delete node._sync_value;
					} else if (constraint_solver._paused_node && constraint_solver._paused_node.node === node) {
						// The node said it would have an asyncronous value and it did
						// Save the paused information to the node and remove it from the constraint solver
						node._paused_info = constraint_solver._paused_node;
						delete constraint_solver._paused_node;
						//Restore the stack to avoid adding a self-dependency
						stack.length = stack_len;
						// And return the temporary value
						return node._paused_info.temporaryValue;
					}
				} else if ((0, _util.isFunction)(node._value)) {
					// if it's just a non-cached function call, just call the function
					node._value.call(node._options.context);
				}
	
				// Pop the item off the stack
				stack.length = stack_len;
			}
	
			return node._cached_value;
		},
	
		// Called when a constraint's getter is paused
		pauseNodeGetter: function pauseNodeGetter(temporaryValue) {
			constraint_solver._paused_node = {
				temporaryValue: temporaryValue,
				node: this
			};
		},
		// Called when a constraint's getter is resumed
		resumeNodeGetter: function resumeNodeGetter(value) {
			var node = this,
			    old_stack;
	
			// Hey! The node said its value would be asyncronous but it ended up being syncronous
			// We know because, it paused and then resumed before the constraint solver's paused node information could even
			// be removed.
			if (constraint_solver._paused_node && constraint_solver._paused_node.node === node) {
				delete constraint_solver._paused_node;
				node._sync_value = { value: value };
			} else {
				// Nullify every dependent node and update this node's cached value
				old_stack = constraint_solver.stack;
	
				delete node._paused_info;
				node._tstamp++;
				node._valid = true;
	
				constraint_solver.stack = [node];
	
				if (node._options.cache_value !== false) {
					// Check if dynamic value. If it is, then call it. If not, just fetch it
					// set this to the node's cached value, which will be returned
					node._cached_value = node._options.literal ? value : (0, _util.isFunction)(value) ? value.call(node._options.context || node, node) : (0, _get2.default)(value);
				} else if ((0, _util.isFunction)(node._value)) {
					// if it's just a non-cached function call, just call the function
					value.call(node._options.context);
				}
	
				constraint_solver.nullify.apply(constraint_solver, (0, _util.map)(node._outEdges, function (edge) {
					return edge.to;
				}));
				constraint_solver.stack = old_stack;
			}
		},
	
		// Utility function to mark a listener as being in the call stack. `this` refers to the constraint node here
		add_in_call_stack: function add_in_call_stack(nl) {
			var nl_priority = nl.priority;
	
			nl.in_call_stack++;
			nl.node._num_listeners_in_call_stack++;
	
			if ((0, _util.isNumber)(nl_priority)) {
				var i = 0,
				    len = this.nullified_call_stack.length,
				    item,
				    item_priority;
				while (i < len) {
					item = this.nullified_call_stack[i];
					if (item) {
						item_priority = item.priority;
						if (item_priority === false || item_priority < nl_priority) {
							this.nullified_call_stack.splice(i, 0, nl);
							return;
						}
					}
					i++;
				}
			}
			this.nullified_call_stack.push(nl);
		},
		nullify: function nullify() {
			// Unfortunately, running nullification listeners can, in some cases cause nullify to be indirectly called by itself
			// (as in while running `nullify`). The variable is_root will prevent another call to `run_nullification_listeners` at
			// the bottom of this function
			var i,
			    outgoingEdges,
			    toNodeID,
			    invalid,
			    curr_node,
			    equals,
			    old_value,
			    new_value,
			    changeListeners,
			    to_nullify = _util.slice.call(arguments),
			    to_nullify_len = to_nullify.length,
			    is_root = !this._is_nullifying,
			    curr_node_id;
	
			if (is_root) {
				// This variable is used to track `is_root` for any potential future calls
				this._is_nullifying = true;
			}
	
			// Using a list instead of a recursive call because the call stack can get tall and annoying for debugging with
			// recursive calls
			for (i = 0; i < to_nullify_len; i += 1) {
				curr_node = to_nullify[i]; // the constraint we are currently nullifying
				to_nullify[i] = false; // To save space, stop keeping track of the object (also useful for debugging occasionally)
	
				// We only care to nullify if the current node is actually valid
				if (curr_node._valid) {
					curr_node._valid = false; // Mark it as invalid...
					invalid = true;
	
					// The user can also optionally check if the node should be nullified. This is useful if a large number of nodes
					// depend on this node, and the potential cost of nullifying/re-evaluating them is higher than the cost of
					// re-evaluating this node
					if (curr_node._options.cache_value !== false && curr_node._options.check_on_nullify === true &&
					// check to make sure we aren't already getting this node to avoid an infinite loop
					!this.check_on_nullified_ids[curr_node._id]) {
						this.check_on_nullified_ids[curr_node._id] = true;
	
						// Only mark as invalid if the old value is different from the current value.
						equals = curr_node._options.equals || _util.eqeqeq;
						old_value = curr_node._cached_value;
	
						new_value = curr_node.get(undefined, true);
						if (equals(old_value, new_value)) {
							invalid = false;
						}
					}
	
					// If I'm still invalid, after a potential check
					if (invalid) {
						// Add all of the change listeners to the call stack, and mark each change listener
						// as being in the call stack
						changeListeners = curr_node._changeListeners;
						(0, _util.each)(changeListeners, this.add_in_call_stack, this);
	
						// Then, get every outgoing edge and add it to the nullify queue
						outgoingEdges = curr_node._outEdges;
						curr_node_id = curr_node._id;
						for (toNodeID in outgoingEdges) {
							if ((0, _util.has)(outgoingEdges, toNodeID)) {
								var outgoingEdge = outgoingEdges[toNodeID];
								var dependentNode = outgoingEdge.to;
	
								// If the edge's timestamp is out of date, then this dependency isn't used
								// any more and remove it
								if (outgoingEdge.tstamp < dependentNode._tstamp) {
									delete curr_node._outEdges[toNodeID];
									delete dependentNode._inEdges[curr_node_id];
								} else {
									// But if the dependency still is being used, then add it to the nullification
									// queue
									to_nullify[to_nullify_len] = dependentNode;
									to_nullify_len += 1;
								}
							}
						}
					}
				}
			}
	
			// If I'm the first one, then run the nullification listeners and remove the is_nullifying flag
			if (is_root) {
				this.check_on_nullified_ids = {};
				// If nobody told us to wait, then run the nullification listeners
				if (this.semaphore >= 0 && this.nullified_call_stack.length > 0) {
					this.run_nullified_listeners();
				}
				delete this._is_nullifying;
			}
		},
	
		/**
	  * 
	  * Remove the edge going from `fromNode` to `toNode`
	  * @method cjs.removeDependency
	  */
		removeDependency: function removeDependency(fromNode, toNode) {
			delete fromNode._outEdges[toNode._id];
			delete toNode._inEdges[fromNode._id];
		},
	
		// Use a semaphore to decide when running the nullification listeners is appropriate
		semaphore: 0,
	
		/**
	  * Tells the constraint solver to delay before running any `onChange` listeners
	  *
	  * Note that `signal` needs to be called the same number of times as `wait` before
	  * the `onChange` listeners will run.
	  * @method cjs.wait
	  * @see cjs.signal
	  * @see cjs.onChange
	  * @example
	  *     var x = cjs(1);
	  *     x.onChange(function() {
	  *         console.log('x changed');
	  *     });
	  *     cjs.wait();
	  *     x.set(2);
	  *     x.set(3);
	  *     cjs.signal(); // output: x changed
	  */
		wait: function wait() {
			this.semaphore -= 1;
		},
		/**
	  * Tells the constraint solver it is ready to run any `onChange` listeners.
	  * Note that `signal` needs to be called the same number of times as `wait` before
	  * the `onChange` listeners will run.
	  * @method cjs.signal
	  * @see cjs.wait
	  * @see cjs.onChange
	  * @example
	  *     var x = cjs(1);
	  *     x.onChange(function() {
	  *         console.log('x changed');
	  *     });
	  *     cjs.wait();
	  *     cjs.wait();
	  *     x.set(2);
	  *     x.set(3);
	  *     cjs.signal();
	  *     cjs.signal(); // output: x changed
	  */
		signal: function signal() {
			this.semaphore += 1;
			// When we signal that we're ready, try running the call stack
			if (this.semaphore >= 0 && this.nullified_call_stack.length > 0) {
				this.run_nullified_listeners();
			}
		},
		// The list of nullified listeners to run
		nullified_call_stack: [],
		// Tracks whether we are in the middle of running the nullification listeners
		running_listeners: false,
		// Clear all of the dependencies
		clearEdges: function clearEdges(node, silent) {
			var loud = silent !== true,
			    node_id = node._id,
			    edge,
			    key,
			    inEdges = node._inEdges,
			    outEdges = node._outEdges;
	
			if (loud) {
				this.wait();
			}
	
			// Clear the incoming edges
			for (key in inEdges) {
				if ((0, _util.has)(inEdges, key)) {
					delete inEdges[key].from._outEdges[node_id];
					delete inEdges[key];
				}
			}
	
			// and the outgoing edges
			for (key in outEdges) {
				if ((0, _util.has)(outEdges, key)) {
					var toNode = outEdges[key].to;
					if (loud) {
						constraint_solver.nullify(toNode);
					}
	
					delete toNode._inEdges[node_id];
					delete outEdges[key];
				}
			}
	
			if (loud) {
				this.signal();
			}
		},
		run_nullified_listeners: function run_nullified_listeners() {
			var nullified_info, callback, context;
			// Make sure `run_nullified_listeners` isn't indirectly called by itself
			if (!this.running_listeners) {
				this.running_listeners = true;
				while (this.nullified_call_stack.length > 0) {
					nullified_info = this.nullified_call_stack.shift();
					callback = nullified_info.callback;
					context = nullified_info.context || _root2.default;
	
					nullified_info.in_call_stack--;
					nullified_info.node._num_listeners_in_call_stack--;
					// If in debugging mode, then call the callback outside of a `try` statement
					if (_debug2.default.__debug) {
						callback.apply(context, nullified_info.args);
					} else {
						try {
							// Call the nullification callback with any specified arguments
							callback.apply(context, nullified_info.args);
						} catch (e) {
							if ((0, _util.has)(_root2.default, "console")) {
								_root2.default.console.error(e);
							}
						}
					}
				}
				this.running_listeners = false;
			}
		},
		remove_from_call_stack: function remove_from_call_stack(info) {
			while (info.in_call_stack > 0) {
				(0, _util.remove)(this.nullified_call_stack, info);
				info.in_call_stack--;
				info.node._num_listeners_in_call_stack--;
			}
		}
	};
	
	// Constraint Variables
	// --------------------
	
	/**
	 * ***Note***: The preferred way to create a constraint is with the `cjs.constraint` function (lower-case 'c')
	 * `cjs.Constraint` is the constructor for the base constraint. Valid properties for `options` are:
	 *
	 * - `auto_add_outgoing_dependencies`: allow the constraint solver to determine when things depend on me. *default:* `true`
	 * - `auto_add_incoming_dependencies`: allow the constraint solver to determine when things I depend on things. *default:* `true`
	 * - `cache_value`: whether or not to keep track of the current value. *default:* `true`
	 * - `check_on_nullify`: when nullified, check if my value has actually changed (requires immediately re-evaluating me). *default*: `false`
	 * - `context`: if `value` is a function, the value of `this`, when that function is called. *default:* `window`
	 * - `equals`: the function to check if two values are equal, *default:* `===`
	 * - `literal`: if `value` is a function, the value of the constraint should be the function itself (not its return value). *default:* `false`
	 * - `run_on_add_listener`: when `onChange` is called, whether or not immediately validate the value. *default:* `true`
	 *
	 * @class cjs.Constraint
	 * @classdesc A constraint object communicates with the constraint solver to store and maintain constraint values
	 * @param {*} value - The initial value of the constraint or a function to compute its value
	 * @param {Object} [options] - A set of options to control how and when the constraint's value is evaluated:
	 */
	exports.Constraint = Constraint = function (value, options) {
		// These are all hidden values that should not be referred to directly
		this._options = (0, _util.extend)({
			context: _root2.default
		}, options); // keeps track of the above options
		this._value = value; // Constant or a function
		this._id = (0, _util.uniqueId)(); // different for every constraint, helps with optimizing speed
		this._outEdges = {}; // The nodes that depend on me, key is link to edge object (with properties toNode, fromNode=this)
		this._inEdges = {}; // The nodes that I depend on, key is link to edge object (with properties toNode=this, fromNode)
		this._changeListeners = []; // A list of callbacks that will be called when I'm nullified
		this._tstamp = 0; // Marks the last time I was updated
		this._num_listeners_in_call_stack = 0; // the number of listeners that are in the call stack
	
		if (this._options.literal || !(0, _util.isFunction)(this._value) && !is_constraint(this._value)) {
			// We already have a value that doesn't need to be computed
			this._valid = true; // Tracks whether or not the cached value if valid
			this._cached_value = this._value; // Caches the node's value
		} else {
				this._valid = false;
				this._cached_value = undefined;
			}
	};
	
	(function (My) {
		var proto = My.prototype;
		/** @lends cjs.Constraint.prototype */
	
		/**
	  * Get the current value of this constraint. For computed constraints, if the constraint is invalid, its value will be re-computed.
	  *
	  *
	  * @method get
	  * @param {boolean} [autoAddOutgoing=true] - Whether to automatically add a dependency from this constraint to ones that depend on it.
	  * @return {*} The current constraint value
	  * @see set
	  *
	  * @example
	  *     var x = cjs(1);
	  *     x.get(); // 1
	  */
		proto.get = constraint_solver.getValue;
	
		/**
	  * Change the current value of the constraint. Other constraints that depend on its value will be invalidated.
	  *
	  * @method set
	  * @see cjs.Constraint
	  * @param {*} value - The initial value of the constraint or a function to compute its value
	  * @param {Object} [options] - A set of options to control how and when the constraint's value is evaluated:
	  * @return {cjs.Constraint} - `this`
	  * @see get
	  * @see invalidate
	  *
	  * @example
	  *    var x = cjs(1);
	  *    x.get(); // 1
	  *    x.set(function() { return 2; });
	  *    x.get(); // 2
	  *    x.set('c');
	  *    x.get(); // 'c'
	  */
		proto.set = function (value, options) {
			var old_value = this._value;
			this._value = value;
	
			if (options && options.silent === true) {
				return this;
			} else if (this._options.literal || !(0, _util.isFunction)(value) && !is_constraint(value)) {
				// If it's a value
				// Then use the specified equality check
				var equality_check = this._options.equal || _util.eqeqeq;
				if (!equality_check(old_value, value)) {
					// And nullify if they aren't equal
					constraint_solver.nullify(this);
				}
			} else if (old_value !== value) {
				// Otherwise, check function equality
				// And if they aren't the same function, nullify
				constraint_solver.nullify(this);
			}
	
			return this;
		};
	
		/**
	  * Change how this constraint is computed (see Constraint options)
	  *
	  * @method setOption
	  * @see cjs.Constraint
	  * @param {Object} options - An object with the options to change
	  * @return {cjs.Constraint} - `this`
	  *
	  * @example
	  *     var x = cjs(function() { return 1; });
	  *     x.get(); // 1
	  *     x.setOption({
	  *         literal: true,
	  *         auto_add_outgoing_dependencies: false
	  *     });
	  *     x.get(); // (function)
	  */
		/**
	  * @method setOption^2
	  * @see cjs.Constraint
	  * @param {String} key - The name of the option to set
	  * @param {*} value - The option's new value
	  * @return {cjs.Constraint} - `this`
	  *
	  * @example
	  *     var x = cjs(function() { return 1; });
	  *     x.get(); // 1
	  *     x.setOption("literal", true);
	  *     x.get(); // (function)
	  */
		var invalidation_arguments = ["context", "literal"];
		proto.setOption = function (arg0, arg1) {
			var to_invalidate;
			if ((0, _util.isString)(arg0)) {
				this._options[arg0] = arg1;
				to_invalidate = (0, _util.indexOf)(invalidation_arguments, arg0) >= 0;
			} else {
				var keys = keys(arg0);
				(0, _util.extend)(this._options, arg0);
				to_invalidate = (0, _util.any)(invalidation_arguments, function (ia) {
					return keys.indexOf(ia) >= 0;
				});
			}
	
			// Nullify my value regardless of what changed
			// changing context, literal, etc. might change my value
			return to_invalidate ? this.invalidate() : this;
		};
	
		/**
	  * Mark this constraint's value as invalid. This signals that the next time its value is fetched,
	  * it should be recomputed, rather than returning the cached value.
	  *
	  * An invalid constraint's value is only updated when it is next requested (for example, via `.get()`).
	  *
	  * @method invalidate
	  * @return {cjs.Constraint} - `this`
	  * @see isValid
	  *
	  * @example Tracking the window height
	  *     var height = cjs(window.innerHeight);
	  *     window.addEventListener("resize", function() {
	  *         height.invalidate();
	  *     });
	  */
		proto.invalidate = function () {
			constraint_solver.nullify(this);
			return this;
		};
	
		/**
	  * Find out if this constraint's value needs to be recomputed (i.e. whether it's invalid).
	  *
	  * An invalid constraint's value is only updated when it is next requested (for example, via `.get()`).
	  *
	  * @method isValid
	  * @return {boolean} - `true` if this constraint's current value is valid. `false` otherwise.
	  * @see invalidate
	  *
	  * @example
	  *     var x = cjs(1),
	  *         y = x.add(2);
	  *     y.get();     // 3
	  *     y.isValid(); // true
	  *     x.set(2);
	  *     y.isValid(); // false
	  *     y.get();     // 4
	  *     y.isValid(); //true
	  */
		proto.isValid = function () {
			return this._valid;
		};
	
		/**
	  * Removes every dependency to this node
	  *
	  * @method remove
	  * @param {boolean} [silent=false] - If set to `true`, avoids invalidating any dependent constraints.
	  * @return {cjs.Constraint} - `this`
	  * @see destroy
	  */
		proto.remove = function (silent) {
			constraint_solver.clearEdges(this, silent);
			this._valid = false; // In case it gets used in the future, make sure this constraint is marked as invalid
			this._cached_value = undefined; // and remove the cached value
			return this;
		};
	
		/**
	  * Removes any dependent constraint, clears this constraints options, and removes every change listener. This is
	  * useful for making sure no memory is deallocated
	  *
	  * @method destroy
	  * @param {boolean} [silent=false] - If set to `true`, avoids invalidating any dependent constraints.
	  * @return {cjs.Constraint} - `this`
	  * @see remove
	  *
	  * @example
	  *     var x = cjs(1);
	  *     x.destroy(); // ...x is no longer needed
	  */
		proto.destroy = function (silent) {
			if (this._num_listeners_in_call_stack > 0) {
				(0, _util.each)(this._changeListeners, function (cl) {
					// remove it from the call stack
					if (cl.in_call_stack > 0) {
						constraint_solver.remove_from_call_stack(cl);
						if (this._num_listeners_in_call_stack === 0) {
							return _util.breaker;
						}
					}
				}, this);
			}
			this.remove(silent);
			this._changeListeners = [];
			return this;
		};
	
		/**
	  * Signal that this constraint's value will be computed later. For instance, for asyncronous values.
	  *
	  * @method pauseGetter
	  * @param {*} temporaryValue - The temporary value to use for this node until it is resumed
	  * @return {cjs.Constraint} - `this`
	  * @see resumeGetter
	  */
		proto.pauseGetter = function () {
			constraint_solver.pauseNodeGetter.apply(this, arguments);
			return this;
		};
		/**
	  * Signal that this Constraint, which has been paused with `pauseGetter` now has a value.
	  *
	  * @method resumeGetter
	  * @param {*} value - This node's value
	  * @return {cjs.Constraint} - `this`
	  * @see pauseGetter
	  *
	  */
		proto.resumeGetter = function () {
			constraint_solver.resumeNodeGetter.apply(this, arguments);
			return this;
		};
	
		/**
	  * Call `callback` as soon as this constraint's value is invalidated. Note that if the constraint's value
	  * is invalidated multiple times, `callback` is only called once.
	  *
	  * @method onChange
	  * @param {function} callback
	  * @param {*} [thisArg=window] - The context to use for `callback`
	  * @param {*} ...args - The first `args.length` arguments to `callback`
	  * @return {cjs.Constraint} - `this`
	  * @see offChange
	  *
	  * @example
	  *     var x = cjs(1);
	  *     x.onChange(function() {
	  *         console.log("x is " + x.get());
	  *     });
	  *     x.set(2); // x is 2
	  */
		proto.onChange = function (callback, thisArg) {
			return this.onChangeWithPriority.apply(this, [false].concat((0, _util.toArray)(arguments)));
		};
		proto.onChangeWithPriority = function (priority, callback, thisArg) {
			var args = _util.slice.call(arguments, 3); // Additional arguments
			if (!(0, _util.isNumber)(priority)) {
				priority = false;
			}
			this._changeListeners.push({
				callback: callback, // function
				context: thisArg, // 'this' when called
				args: args, // arguments to pass into the callback
				in_call_stack: 0, // internally keeps track of if this function will be called in the near future
				node: this,
				priority: priority
			});
			if (this._options.run_on_add_listener !== false) {
				// Make sure my current value is up to date but don't add outgoing constraints.
				// That way, when it changes the callback will be called
				this.get(false);
			}
			return this;
		};
	
		/**
	  * Removes the first listener to `callback` that was created by `onChange`. `thisArg` is optional and
	  * if specified, it only removes listeners within the same context. If thisArg is not specified,
	  * the first `callback` is removed. 
	  *
	  * @method offChange
	  * @param {function} callback
	  * @param {*} [thisArg] - If specified, only remove listeners that were added with this context
	  * @return {cjs.Constraint} - `this`
	  * @see onChange
	  *
	  *     var x = cjs(1),
	  *         callback = function(){};
	  *     x.onChange(callback);
	  *     // ...
	  *     x.offChange(callback);
	  */
		proto.offChange = function (callback, thisArg) {
			var cl, i;
			for (i = this._changeListeners.length - 1; i >= 0; i -= 1) {
				cl = this._changeListeners[i];
				// Same callback and either the same context or context wasn't specified
				if (cl.callback === callback && (!thisArg || cl.context === thisArg)) {
					// Then get rid of it
					(0, _util.removeIndex)(this._changeListeners, i);
					// And remove it if it's in the callback
					if (cl.in_call_stack > 0) {
						constraint_solver.remove_from_call_stack(cl);
					}
					delete cl.node;
					// Only searching for the last one
					break;
				}
			}
			return this;
		};
	
		/**
	  * Change this constraint's value in different states
	  *
	  * @method inFSM
	  * @param {cjs.FSM} fsm - The finite-state machine to depend on
	  * @param {Object} values - Keys are the state specifications for the FSM, values are the value for those specific states
	  * @return {cjs.Constraint} - `this`
	  *
	  * @example
	  *     var fsm = cjs.fsm("state1", "state2")
	  *                  .addTransition("state1", "state2",
	  *                        cjs.on("click"));
	  *     var x = cjs().inFSM(fsm, {
	  *         state1: 'val1',
	  *         state2: function() { return 'val2'; }
	  *     });
	  */
		proto.inFSM = function (fsm, values) {
			(0, _util.each)(values, function (v, k) {
				// add listeners to the fsm for that state that will set my getter's value
				fsm.on(k, function () {
					this.set(v);
				}, this);
	
				if (fsm.is(k)) {
					this.set(v);
				}
			}, this);
	
			return this;
		};
	
		/**
	  * Returns the last value in the array `[this].concat(args)` if every value is truthy. Otherwise, returns `false`.
	  * Every argument won't necessarily be evaluated. For instance:
	  *
	  * - `x = cjs(false); cjs.get(x.and(a))` does not evaluate `a`
	  *
	  * @method and
	  * @param {*} ...args - Any number of constraints or values to pass the "and" test
	  * @return {cjs.Constraitnboolean|*} - A constraint whose value is `false` if this or any passed in value is falsy. Otherwise, the last value passed in.
	  *
	  * @example
	  *
	  *     var x = c1.and(c2, c3, true);
	  */
		proto.and = function () {
			var args = [this].concat((0, _util.toArray)(arguments)),
			    len = args.length;
	
			return new My(function () {
				var i = 0,
				    val;
				for (; i < len; i++) {
					// If any value is falsy, return false
					if (!(val = (0, _get2.default)(args[i]))) {
						return false;
					}
				}
				// Otherwise, return the last value fetched
				return val;
			});
		};
	
		/**
	  * Inline if function: similar to the javascript a ? b : c expression
	  *
	  * @method iif
	  * @param {*} true_val - The value to return if `this` is truthy
	  * @param {*} other_val - The value to return if `this` is falsy
	  * @return {cjs.Constraint} - A constraint whose value is `false` if this or any passed in value is falsy. Otherwise, the last value passed in.
	  *
	  * @example
	  *
	  *     var x = is_selected.iif(selected_val, nonselected_val);
	  */
		proto.iif = function (true_val, other_val) {
			var me = this;
			return new My(function () {
				return me.get() ? (0, _get2.default)(true_val) : (0, _get2.default)(other_val);
			});
		};
	
		/**
	  * Returns the first truthy value in the array `[this].concat(args)`. If no value is truthy, returns `false`.
	  * Every argument won't necessarily be evaluated. For instance:
	  *
	  * - `y = cjs(true); cjs.get(y.or(b))` does not evaluate `b`
	  *
	  * @method or
	  * @param {*} ...args - Any number of constraints or values to pass the "or" test
	  * @return {cjs.Constraint} - A constraitn whose value is the first truthy value or `false` if there aren't any
	  *
	  * @example
	  *
	  *     var x = c1.or(c2, c3, false);
	  */
		proto.or = function () {
			var args = [this].concat((0, _util.toArray)(arguments)),
			    len = args.length;
	
			return new My(function () {
				var i = 0,
				    val;
				for (; i < len; i++) {
					// Return the first value (including this) that is truthy
					if (val = (0, _get2.default)(args[i])) {
						return val;
					}
				}
				//Nothing was truthy, so return false
				return false;
			});
		};
	
		/**
	  * @ignore
	  * Creates a new function that takes in any number of arguments and creates a constraint whose result
	  * is calling `modifier_fn` on `this` plus every argument
	  */
		var createConstraintModifier = function createConstraintModifier(modifier_fn) {
			return function () {
				var args = [this].concat((0, _util.toArray)(arguments));
				return new My(function () {
					return modifier_fn.apply(this, (0, _util.map)(args, _get2.default));
				});
			};
		};
	
		var get_prop = function get_prop(a, b) {
			return a ? a[b] : undefined;
		};
		/**
	  * Property constraint modifier.
	  *
	  * @method prop
	  * @param {strings} ...args - Any number of properties to fetch
	  * @return {*} - A constraint whose value is `this[args[0]][args[1]]...`
	  * @example
	  * 
	  *     w = x.prop("y", "z"); // means w <- x.y.z
	  */
		proto.prop = createConstraintModifier(function (me) {
			return (0, _util.reduce)((0, _util.rest)(arguments), get_prop, me);
		});
	
		/**
	  * Integer conversion constraint modifier.
	  * @method toInt
	  * @return {*} - A constrant whose value is parseInt(this)
	  * @example Given `<input />` element `inp_elem`
	  *
	  *     var inp_val = cjs(inp_elem).toInt();
	  */
		proto.toInt = createConstraintModifier(function (me) {
			return parseInt.apply(this, arguments);
		});
	
		/**
	  * Float conversion constraint modifier.
	  * @method toFloat
	  * @return {*} - A constraint whose value is parseFloat(this)
	  * @example Given `<input />` element `inp_elem`
	  *
	  *     var inp_val = cjs(inp_elem).toFloat();
	  */
		proto.toFloat = createConstraintModifier(function (me) {
			return parseFloat.apply(this, arguments);
		});
	
		// For all the arithmetic operators, allow any number of arguments to be passed in. For example:
		/**
	  * Addition constraint modifier
	  * @method add
	  * @param {number} ...args - Any number of constraints or numbers
	  * @return {number} - A constraint whose value is `this.get() + args[0].get() + args[1].get() + ...`
	  * @example
	  *
	  *     x = y.add(1,2,z); // x <- y + 1 + 2 + z
	  * @example The same method can also be used to add units to values
	  *
	  *     x = y.add("px"); // x <- ypx
	  */
		proto.add = createConstraintModifier(function () {
			return (0, _util.reduce)(arguments, _util.binary_operators["+"], 0);
		});
		/**
	  * Subtraction constraint modifier
	  * @method sub
	  * @param {number} ...args - Any number of constraints or numbers
	  * @return {number} - A constraint whose value is `this.get() - args[0].get() - args[1].get() - ...`
	  * @example
	  *
	  *     x = y.sub(1,2,z); // x <- y - 1 - 2 - z
	  */
		proto.sub = createConstraintModifier(function (me) {
			return (0, _util.reduce)((0, _util.rest)(arguments), _util.binary_operators["-"], me);
		});
		/**
	  * Multiplication constraint modifier
	  * @method mul
	  * @param {number} ...args - Any number of constraints or numbers
	  * @return {number} - A constraint whose value is `this.get() * args[0].get() * args[1].get() * ...`
	  * @example
	  *
	  *     x = y.mul(1,2,z); //x <- y * 1 * 2 * z
	  */
		proto.mul = createConstraintModifier(function (me) {
			return (0, _util.reduce)((0, _util.rest)(arguments), _util.binary_operators["*"], me);
		});
		/**
	  * Division constraint modifier
	  * @method div
	  * @param {number} ...args - Any number of constraints or numbers
	  * @return {number} - A constraint whose value is `this.get() / args[0].get() / args[1].get() / ...`
	  * @example
	  *
	  *     x = y.div(1,2,z); // x <- y / 1 / 2 / z
	  */
		proto.div = createConstraintModifier(function (me) {
			return (0, _util.reduce)((0, _util.rest)(arguments), _util.binary_operators["/"], me);
		});
	
		/**
	  * Absolute value constraint modifier
	  * @method abs
	  * @return {number} - A constraint whose value is `Math.abs(this.get())`
	  * @example
	  *
	  *     x = c1.abs(); // x <- abs(c1)
	  */
		/**
	  * Floor
	  * @method floor
	  * @return {number} - A constraint whose value is `Math.floor(this.get())`
	  * @example
	  *
	  *     x = c1.floor(); // x <- floor(c1)
	  */
		/**
	  * Ceil
	  * @method ceil
	  * @return {number} - A constraint whose value is `Math.ceil(this.get())`
	  * @example
	  *
	  *     x = c1.ceil(); // x <- ceil(c1)
	  */
		/**
	  * Round
	  * @method round
	  * @return {number} - A constraint whose value is `Math.round(this.get())`
	  * @example
	  *
	  *     x = c1.round(); // x <- round(c1)
	  */
		/**
	  * Square root
	  * @method sqrt
	  * @return {number} - A constraint whose value is `Math.sqrt(this.get())`
	  * @example
	  *
	  *     x = c1.sqrt(); // x <- sqrt(c1)
	  */
		/**
	  * Arccosine
	  * @method acos
	  * @return {number} - A constraint whose value is `Math.acos(this.get())`
	  * @example
	  *
	  *     angle = r.div(x).acos()
	  */
		/**
	  * Arcsin
	  * @method asin
	  * @return {number} - A constraint whose value is `Math.asin(this.get())`
	  * @example
	  *
	  *     angle = r.div(y).asin()
	  */
		/**
	  * Arctan
	  * @method atan
	  * @return {number} - A constraint whose value is `Math.atan(this.get())`
	  * @example
	  *
	  *     angle = y.div(x).atan()
	  */
		/**
	  * Arctan2
	  * @method atan2
	  * @param {number|cjs.Constraint} x
	  * @return {number} - A constraint whose value is `Math.atan2(this.get()/x.get())`
	  * @example
	  *
	  *     angle = y.atan2(x)
	  */
		/**
	  * Cosine
	  * @method cos
	  * @return {number} - A constraint whose value is `Math.cos(this.get())`
	  * @example
	  *
	  *     dx = r.mul(angle.cos())
	  */
		/**
	  * Sine
	  * @method sin
	  * @return {number} - A constraint whose value is `Math.sin(this.get())`
	  * @example
	  *
	  *     dy = r.mul(angle.sin())
	  */
		/**
	  * Tangent
	  * @method tan
	  * @return {number} - A constraint whose value is `Math.tan(this.get())`
	  * @example
	  *
	  *     dy = r.mul(angle.sin())
	  */
		/**
	  * Max
	  * @method max
	  * @param {number} ...args - Any number of constraints or numbers
	  * @return {number} - A constraint whose value is the **highest** of `this.get()`, `args[0].get()`, `args[1].get()`...
	  * @example
	  *
	  *     val = val1.max(val2, val3);
	  */
		/**
	  * Min
	  * @method min
	  * @param {number} ...args - Any number of constraints or numbers
	  * @return {number} - A constraint whose value is the **lowest** of `this.get()`, `args[0].get()`, `args[1].get()`...
	  * @example
	  *
	  *     val = val1.min(val2, val3);
	  */
		/**
	  * Power
	  * @method pow
	  * @param {number} x - The exponent
	  * @return {number} - A constraint whose value is `Math.pow(this.get(), x.get())`
	  * @example
	  *
	  *     d = dx.pow(2).add(dy.pow(2)).sqrt()
	  */
		/**
	  * Natural Log (base e)
	  * @method log
	  * @return {number} - A constraint whose value is `Math.log(this.get())`
	  * @example
	  *
	  *     num_digits = num.max(2).log().div(Math.log(10)).ceil()
	  */
		/**
	  * Exp (E^x)
	  * @method exp
	  * @return {number} - A constraint whose value is `Math.exp(this.get())`
	  * @example
	  *
	  *     neg_1 = cjs(i*pi).exp()
	  */
		(0, _util.each)(["abs", "acos", "asin", "atan", "atan2", "cos", "max", "min", "sin", "tan", "pow", "round", "floor", "ceil", "sqrt", "log", "exp"], function (op_name) {
			proto[op_name] = createConstraintModifier((0, _util.bind)(Math[op_name], Math));
		});
	
		/**
	  * Coerce an object to a number
	  * @method pos
	  * @return {number} - A constraint whose value is `+(this.get())`
	  * @example
	  *
	  *     numeric_val = val.pos()
	  */
		/**
	  * Negative operator
	  * @method neg
	  * @return {number} - A constraint whose value is `-(this.get())`
	  * @example
	  *
	  *     neg_val = x.neg()
	  */
		/**
	  * Not operator
	  * @method not
	  * @return {boolean} - A constraint whose value is `!(this.get())`
	  * @example
	  *
	  *     opposite = x.not()
	  */
		/**
	  * Bitwise not operator
	  * @method bitwiseNot
	  * @return {number} - A constraint whose value is `~(this.get())`
	  * @example
	  *
	  *     inverseBits = val.bitwiseNot()
	  */
		/**
	  * Equals unary operator
	  * @method eq
	  * @param {*} other - A constraint or value to compare against
	  * @return {boolean} - A constraint whose value is `this.get() == other.get()`
	  *
	  * @example
	  *
	  *     isNull = val.eq(null)
	  */
		/**
	  * Not equals operator
	  * @method neq
	  * @param {*} other - A constraint or value to compare against
	  * @return {boolean} - A constraint whose value is `this.get() != other.get()`
	  *
	  * @example
	  *
	  *     notNull = val.neq(null)
	  */
		/**
	  * Strict equals operator
	  * @method eqStrict
	  * @param {*} other - A constraint or value to compare against
	  * @return {boolean} - A constraint whose value is `this.get() === other.get()`
	  *
	  * @example
	  *
	  *     isOne = val.eqStrict(1)
	  */
		/**
	  * Not strict equals binary operator
	  * @method neqStrict
	  * @param {*} other - A constraint or value to compare against
	  * @return {boolean} - A constraint whose value is `this.get() !== other.get()`
	  *
	  * @example
	  *
	  *     notOne = val.neqStrict(1)
	  */
		/**
	  * @method gt
	  * @param {*} other - A constraint or value to compare against
	  * @return {boolean} - A constraint whose value is `this.get() > other.get()`
	  *
	  * @example
	  *
	  *     isPositive = val.gt(0)
	  */
		/**
	  * @method lt
	  * @param {*} other - A constraint or value to compare against
	  * @return {boolean} - A constraint whose value is `this.get() < other.get()`
	  * 
	  * @example
	  *
	  *     isNegative = val.lt(0)
	  */
		/**
	  * @method ge
	  * @param {*} other - A constraint or value to compare against
	  * @return {boolean} - A constraint whose value is `this.get() >= other.get()`
	  *
	  * @example
	  *
	  *     isBig = val.ge(100)
	  */
		/**
	  * @method le
	  * @param {*} other - A constraint or value to compare against
	  * @return {boolean} - A constraint whose value is `this.get() <= other.get()`
	  *
	  * @example
	  *
	  *     isSmall = val.le(100)
	  */
		/**
	  * @method xor
	  * @param {*} other - A constraint or value to compare against
	  * @return {number} - A constraint whose value is `this.get() ^ other.get()`
	  */
		/**
	  * @method bitwiseAnd
	  * @param {*} other - A constraint or value to compare against
	  * @return {number} - A constraint whose value is `this.get() & other.get()`
	  */
		/**
	  * @method bitwiseOr
	  * @param {*} other - A constraint or value to compare against
	  * @return {number} - A constraint whose value is `this.get() | other.get()`
	  */
		/**
	  * @method mod
	  * @param {*} other - A constraint or value to compare against
	  * @return {number} - A constraint whose value is `this.get() % other.get()`
	  * @example
	  *		isEven = x.mod(2).eq(0);
	  *
	  */
		/**
	  * @method rightShift
	  * @param {*} other - A constraint or value to compare against
	  * @return {number} - A constraint whose value is `this.get() >> other.get()`
	  */
		/**
	  * @method leftShift
	  * @param {*} other - A constraint or value to compare against
	  * @return {number} - A constraint whose value is `this.get() << other.get()`
	  */
		/**
	  * @method unsignedRightShift
	  * @param {*} other - A constraint or value to compare against
	  * @return {number} - A constraint whose value is `this.get() >>> other.get()`
	  */
		(0, _util.each)({
			u: { // Unary operators
				pos: "+", neg: "-", not: "!", bitwiseNot: "~"
			},
			bi: { // Binary operators
				eqStrict: "===", neqStrict: "!==", eq: "==", neq: "!=",
				gt: ">", ge: ">=", lt: "<", le: "<=",
				xor: "^", bitwiseAnd: "&", bitwiseOr: "|", mod: "%",
				rightShift: ">>", leftShift: "<<", unsignedRightShift: ">>>"
			}
		}, function (ops, operator_prefix) {
			var op_list = operator_prefix === "u" ? _util.unary_operators : _util.binary_operators;
			(0, _util.each)(ops, function (key, op_name) {
				proto[op_name] = createConstraintModifier(op_list[key]);
			});
		});
	
		/**
	  * Object type modifier
	  * @method typeOf
	  * @param {*} other - a constraint or value to compare against
	  * @return {*} - a constraint whose value is `typeof this.get()`
	  * @example
	  *
	  *     var valIsNumber = val.typeOf().eq('[object Number]')
	  */
		proto.typeOf = createConstraintModifier(function (a) {
			return typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a);
		});
	
		/**
	  * Object instance check modifier
	  * @method instanceOf
	  * @param {*} other - a constraint or value to compare against
	  * @return {boolean} - a constraint whose value is `this.get() instanceof other.get()`
	  * @example
	  *
	  *     var valIsArray = val.instanceof(Array)
	  */
		proto.instanceOf = createConstraintModifier(function (a, b) {
			return a instanceof b;
		});
	
		proto[_get.cjs_getter] = proto.get;
	})(Constraint);
	/** @lends */
	
	// Create some exposed utility functions
	/**
	 * Determine whether an object is a constraint
	 * @method cjs.isConstraint
	 * @param {*} obj - An object to check
	 * @return {boolean} - `obj instanceof cjs.Constraint`
	 */
	exports.is_constraint = is_constraint = function (obj) {
		return obj instanceof Constraint;
	};
	
	var cjs_wait = exports.cjs_wait = (0, _util.bind)(constraint_solver.wait, constraint_solver);
	var cjs_signal = exports.cjs_signal = (0, _util.bind)(constraint_solver.signal, constraint_solver);
	
	function constraint(value, options) {
		return new Constraint(value, options);
	}
	exports.Constraint = Constraint;
	exports.is_constraint = is_constraint;
	exports.constraint_solver = constraint_solver;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Symbol = __webpack_require__(19)["default"];
	
	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(20), __esModule: true };

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(21);
	__webpack_require__(42);
	module.exports = __webpack_require__(11).Symbol;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(22)
	  , global         = __webpack_require__(10)
	  , has            = __webpack_require__(23)
	  , DESCRIPTORS    = __webpack_require__(24)
	  , $export        = __webpack_require__(9)
	  , redefine       = __webpack_require__(25)
	  , $fails         = __webpack_require__(14)
	  , shared         = __webpack_require__(28)
	  , setToStringTag = __webpack_require__(29)
	  , uid            = __webpack_require__(31)
	  , wks            = __webpack_require__(30)
	  , keyOf          = __webpack_require__(32)
	  , $names         = __webpack_require__(36)
	  , enumKeys       = __webpack_require__(37)
	  , isArray        = __webpack_require__(38)
	  , anObject       = __webpack_require__(39)
	  , toIObject      = __webpack_require__(33)
	  , createDesc     = __webpack_require__(27)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(41)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 22 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(14)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(26);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(22)
	  , createDesc = __webpack_require__(27);
	module.exports = __webpack_require__(24) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(10)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(22).setDesc
	  , has = __webpack_require__(23)
	  , TAG = __webpack_require__(30)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(28)('wks')
	  , uid    = __webpack_require__(31)
	  , Symbol = __webpack_require__(10).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(22)
	  , toIObject = __webpack_require__(33);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(34)
	  , defined = __webpack_require__(7);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(35);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(33)
	  , getNames  = __webpack_require__(22).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(22);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(35);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(40);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 42 */
/***/ function(module, exports) {



/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.cjs_getter = undefined;
	exports.default = cjs_get;
	
	var _symbol = __webpack_require__(19);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var cjs_getter = exports.cjs_getter = (0, _symbol2.default)('cjs getter');
	
	function cjs_get(obj) {
		if (obj[cjs_getter]) {
			for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				rest[_key - 1] = arguments[_key];
			}
	
			return obj[cjs_getter].apply(obj, rest);
		} else {
			return obj;
		}
		/*
	 if(is_constraint(obj))	{ return obj.get(arg0); }
	 else if(is_array(obj))	{ return obj.toArray(); }
	 else if(is_map(obj))	{ return obj.toObject(); }
	 else					{ return obj; }
	 */
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.MapConstraint = exports.is_map = undefined;
	
	var _util = __webpack_require__(2);
	
	var _core = __webpack_require__(17);
	
	var _array = __webpack_require__(45);
	
	var _get = __webpack_require__(43);
	
	var _get2 = _interopRequireDefault(_get);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Map Constraints
	// ---------------
	
	// Maps use hashing to improve performance. By default, the hash is a simple toString
	// function
	
	//FIXME: remove array dependency
	var defaulthash = function defaulthash(key) {
		return key + "";
	};
	
	// A string can also be specified as the hash, so that the hash is the result of calling
	// that property of the object
	var get_str_hash_fn = function get_str_hash_fn(prop_name) {
		return function (key) {
			return key[prop_name]();
		};
	};
	
	/**
	 * ***Note:*** the preferred way to create a map constraint is with `cjs.map`
	 * This class is meant to emulate JavaScript objects ({}) but with constraints
	 *
	 * Options:
	 *
	 * - `hash`: a key hash to use to improve performance when searching for a key (default: `x.toString()`)
	 * - `valuehash`: a value hash to use improve performance when searching for a value (default: `false`)
	 * - `equals`: How to check for equality when searching for a key (default: `===`)
	 * - `valueequals`: How to check for equality when searching for a value (default: `===`)
	 * - `value`: An optional starting value (default: `{}`)
	 * - `keys`: An optional starting set of keys (default: `[]`)
	 * - `values`: An optional starting set of values (default: `[]`)
	 * - `literal_values`: True if values that are functions should return a function rather than that function's return value. (default: `false`)
	 * - `create_unsubstantiated`: Create a constraint when searching for non-existent keys. (default: `true`)
	 *
	 * @class cjs.MapConstraint
	 * @classdesc A class that adds constraint to objects
	 * @param {Object} [options] - A set of options to control how the map constraint is evaluated
	 */
	var MapConstraint = function MapConstraint(options) {
		options = (0, _util.extend)({
			hash: defaulthash, // Improves performance when searching by key
			valuehash: false, // Function if we should hash values, which improves performance when searching by value. By default, we don't hash values
			equals: _util.eqeqeq, // Equality check when searching by key
			valueequals: _util.eqeqeq, // Equality check when searching by value
			value: {}, // Optional starting value
			keys: [], // Rather than passing in 'value', keys and values can be equal-length arrays specifying keys...
			values: [], // and values
			literal_values: false, // true if every value should be literal
			create_unsubstantiated: true // Create a value when a key isn't found
		}, options);
	
		options.keys = (0, _util.clone)(options.keys);
		options.values = (0, _util.clone)(options.values);
		var set_keys = {};
	
		//ensure no duplicate keys
		(0, _util.each)(options.keys, function (key) {
			set_keys[key] = true;
		});
	
		// Append all of the keys and values passed to the keys and values arrays
		(0, _util.each)(options.value, function (v, k) {
			if (!set_keys[k]) {
				options.keys.push(k);
				options.values.push(v);
			}
		}, this);
	
		set_keys = false;
	
		// Convert to boolean
		this._default_literal_values = !!options.literal_values;
		this.$equality_check = new _core.Constraint(options.equals, { literal: true });
		this.$vequality_check = new _core.Constraint(options.valueequals, { literal: true });
	
		// Get my hash
		this._hash = (0, _util.isString)(options.hash) ? get_str_hash_fn(options.hash) : options.hash;
		this._create_unsubstantiated = options.create_unsubstantiated;
	
		this._khash = {};
	
		// If we're hashing values, then set this._valuehash as a function
		if (options.valuehash) {
			this._vhash = {};
			if ((0, _util.isFunction)(options.valuehash)) {
				this._valuehash = options.valuehash;
			} else if ((0, _util.isString)(options.valuehash)) {
				this._valuehash = get_str_hash_fn(options.valuehash);
			} else {
				this._valuehash = defaulthash;
			}
		} else {
			this._vhash = false;
		}
	
		var is_literal = this._default_literal_values;
	
		// Keeps track of the values and maintains the proper order
		this._ordered_values = (0, _util.map)(options.keys, function (k, i) {
			var v = options.values[i];
			// Have key (k) and value (v)
			var info = {
				key: new _core.Constraint(k, { literal: true }),
				value: new _core.Constraint(v, { literal: is_literal }),
				index: new _core.Constraint(i, { literal: true })
			};
	
			// Properly put the entry into the key hash
			var hash = this._hash(k);
			var hash_val = this._khash[hash];
			if (hash_val) {
				hash_val.push(info);
			} else {
				this._khash[hash] = [info];
			}
	
			// If we hash values too, properly put the entry into the value hash
			if (this._vhash) {
				var value_hash = this._valuehash(v);
				var vhash_val = this._vhash[value_hash];
				if (vhash_val) {
					vhash_val.push(info);
				} else {
					this._vhash[value_hash] = [info];
				}
			}
			// And finally, set return info for this._ordered_values[i]
			return info;
		}, this);
	
		// Keeps track of requested values that aren't set
		this._unsubstantiated_values = {};
	
		// Array to store keys
		this.$keys = new _core.Constraint(function () {
			var rv = [];
			this.forEach(function (value, key, index) {
				rv[index] = key;
			});
			return rv;
		}, { context: this });
	
		// Array to store values
		this.$values = new _core.Constraint(function () {
			var rv = [];
			this.forEach(function (value, key, index) {
				rv[index] = value;
			});
			return rv;
		}, { context: this });
	
		// Full entries (includes keys and values)
		this.$entries = new _core.Constraint(function () {
			var rv = [];
			this.forEach(function (value, key, index) {
				rv[index] = { key: key, value: value };
			});
			return rv;
		}, { context: this });
	
		// Number of keys
		this.$size = new _core.Constraint(function () {
			return this._ordered_values.length;
		}, { context: this });
	};
	
	(function (my) {
		/**
	  * Any iterator in forEach can return this object to break out of its loop.
	  * @property {object} cjs.MapConstraint.BREAK
	  */
		my.BREAK = _array.ArrayConstraint.BREAK;
	
		var proto = my.prototype;
		/** @lends cjs.MapConstraint.prototype */
	
		// Utility function to return information about a key
		var _find_key = function _find_key(key, fetch_unsubstantiated, create_unsubstantiated, literal) {
			// Get the hash
			var hash = this._hash(key),
			    rv = {
				h: hash, // the actual hash value
				hv: false, // the hash array at the hash value
				i: -1, // the index of the key in the hash array
				ui: -1, // the index in the unsubstantiated array
				uhv: false // the unsubstantiated hash array
			},
			    eq = this.$equality_check.get(),
			    index_where_fn = function index_where_fn(a, b) {
				return eq(a.key.get(), key);
			},
			    hash_values = this._khash[hash];
	
			if (hash_values) {
				// We found a potential hash array
				var key_index = (0, _util.indexWhere)(hash_values, index_where_fn);
				rv.hv = hash_values;
				if (key_index >= 0) {
					// Wohoo! we also found the key in there
					rv.i = key_index;
					return rv;
				}
			}
	
			// Haven't returned yet, so we didn't find the entry. Look for an unsubstantiated
			// value instead.
			if (fetch_unsubstantiated !== false) {
				//Not found
				var unsubstantiated_values = this._unsubstantiated_values[hash],
				    unsubstantiated_index = -1;
	
				if (unsubstantiated_values) {
					rv.uhv = unsubstantiated_values;
					unsubstantiated_index = (0, _util.indexWhere)(unsubstantiated_values, index_where_fn);
					if (unsubstantiated_index >= 0) {
						rv.ui = unsubstantiated_index;
						return rv;
					}
				}
	
				// We haven't returned yet, so we didn't find an unsubstantiated value either
				// Check to see if we should create one.
				if (create_unsubstantiated === true) {
					var is_literal = this._default_literal_values,
					    unsubstantiated_info = {
						key: new _core.Constraint(key, { literal: true }),
						value: new _core.Constraint(undefined, { literal: literal === undefined ? this._default_literal_values : !!literal }), // will be undefined
						index: new _core.Constraint(-1, { literal: true }) // with a negative index
					};
	
					if (unsubstantiated_values) {
						// The hash was found but not the particular value
						// Add it onto the end
						unsubstantiated_index = unsubstantiated_values.length;
						unsubstantiated_values[unsubstantiated_index] = unsubstantiated_info;
					} else {
						// The hash wasn't found; create a new array
						unsubstantiated_index = 0;
						this._unsubstantiated_values[hash] = unsubstantiated_values = [unsubstantiated_info];
					}
				}
				rv.uhv = unsubstantiated_values || false; // Want to return false if not found
				rv.ui = unsubstantiated_index;
			}
			return rv;
		};
	
		// Responsible for setting a key properly
		var _do_set_item_ki = function _do_set_item_ki(ki, key, value, index, literal) {
			// ki is the key information from _find_key
			var i,
			    value_hash,
			    vhash_val,
			    info,
			    key_index = ki.i,
			    // where the key is in the hash array
			hash_values = ki.hv,
			    // the hash array
			hash = ki.h; // the hash value
	
			if (key_index >= 0) {
				// The key was already in this map
				// get the information
				info = hash_values[key_index];
	
				if (this._vhash) {
					// If we're hashing values, the new value has to get re-hashed
					var old_value = info.value.get(),
					    old_value_hash = this._valuehash(old_value),
					    old_vhash_val = this._vhash[old_value_hash];
					value_hash = this._valuehash(value);
	
					if (old_vhash_val) {
						// This should probably always be true, unless something went wrong...
						var len = old_vhash_val.length;
						for (i = 0; i < len; i += 1) {
							if (old_vhash_val[i] === info) {
								// wohoo, found it
								old_vhash_val.splice(i, 1);
								if (old_vhash_val.length === 0) {
									delete this._vhash[old_value_hash]; // don't keep the old hash array
								}
								break;
							}
						}
					}
	
					// Put the new value has in
					vhash_val = this._vhash[value_hash]; // hash array
					if (vhash_val) {
						vhash_val.push(info); // add onto the hash array
					} else {
							this._vhash[value_hash] = [info]; // create a new hash array
						}
				}
	
				info.value.set(value); // set the value constraint to the new value
	
				if ((0, _util.isPositiveInteger)(index)) {
					// But they also specified an index...
					var old_index = info.index.get();
					if (old_index !== index) {
						// great...now we have to move it too
						// take out the old value
						this._ordered_values.splice(old_index, 1);
						// and re-add it
						this._ordered_values.splice(index, 0, info);
	
						// Properly iterate regardless of whether moving higher or lower
						var low = Math.min(old_index, index);
						var high = Math.max(old_index, index);
						// update the indicies of every thing between that might have been affected
						for (i = low; i <= high; i += 1) {
							_set_index(this._ordered_values[i], i);
						}
						this.$keys.invalidate(); // Keys are now invalid
					}
				}
			} else {
					// They didn't specify an index or at least they specified it wrong...
					if (!(0, _util.isPositiveInteger)(index)) {
						index = this._ordered_values.length; // just set it to the
					}
					// Check to see if there was an unsubstantiated item
					var unsubstantiated_index = ki.ui;
	
					if (unsubstantiated_index >= 0) {
						// Found it! Now let's remove it from the list of unsubstantiated items
						var unsubstantiated_hash_values = ki.uhv,
						    unsubstantiated_info = unsubstantiated_hash_values[unsubstantiated_index];
	
						unsubstantiated_hash_values.splice(unsubstantiated_index, 1);
						if (unsubstantiated_hash_values.length === 0) {
							delete this._unsubstantiated_values[hash];
						}
	
						info = unsubstantiated_info; // re-use the same object to keep dependencies
					} else {
							// Nothing in unsubstantiated; just create it from scratch
							info = {
								key: new _core.Constraint(key, { literal: true }),
								value: new _core.Constraint(value, { literal: literal === undefined ? this._default_literal_values : !!literal }),
								index: new _core.Constraint(index, { literal: true })
							};
						}
	
					if (hash_values) {
						// There was already a hash array
						hash_values.push(info);
					} else {
						// Have to create the hash array
						hash_values = this._khash[hash] = [info];
					}
	
					//If we're hashing values...
					if (this._vhash) {
						value_hash = this._valuehash(value);
						vhash_val = this._vhash[value_hash];
						// Add the item to the value hash
						if (vhash_val) {
							vhash_val.push(info);
						} else {
							this._vhash[value_hash] = [info];
						}
					}
	
					//  insert into values
					this._ordered_values.splice(index, 0, info);
	
					if (unsubstantiated_index >= 0) {
						info.value.set(value); // but update its value and index
						info.index.set(index);
					}
	
					// Push the index of every item that I spliced before up
					for (i = index + 1; i < this._ordered_values.length; i += 1) {
						_set_index(this._ordered_values[i], i);
					}
					// Now, size and keys are invalid
					this.$size.invalidate();
					this.$keys.invalidate();
				}
			this.$values.invalidate();
			this.$entries.invalidate();
		};
	
		// Cange an info's specified index
		var _set_index = function _set_index(info, to_index) {
			info.index.set(to_index);
		};
	
		// Deallocate memory from constraints
		var _destroy_info = function _destroy_info(infos, silent) {
			(0, _util.each)(infos, function (info) {
				info.key.destroy(silent);
				info.value.destroy(silent);
				info.index.destroy(silent);
			});
		};
	
		// removes the selected item and destroys its value to deallocate it
		var _remove_index = function _remove_index(index, silent) {
			var info = this._ordered_values[index];
			_destroy_info(this._ordered_values.splice(index, 1), silent);
			if (silent !== true) {
				this.$size.invalidate();
			}
		};
	
		/**
	  * Get the keys on this object.
	  *
	  * @method keys
	  * @return {array.*} - The set of keys
	  * @see values
	  * @see entries
	  * @example
	  *     var map = cjs({x: 1, y: 2});
	  *     map.keys(); // ['x','y']
	  */
		proto.keys = function () {
			return this.$keys.get();
		};
	
		/**
	  * Get the values on this object.
	  *
	  * @method values
	  * @return {array.*} - The set of values
	  * @see keys
	  * @see entries
	  * @example
	  *     var map = cjs({x: 1, y: 2});
	  *     map.values(); // [1,2]
	  */
		proto.values = function () {
			return this.$values.get();
		};
	
		/**
	  * Get every key and value of this object as an array.
	  *
	  * @method entries
	  * @return {array.object} - A set of objects with properties `key` and `value`
	  * @see keys
	  * @see values
	  * @example
	  *     var map = cjs({x: 1, y: 2});
	  *     map.entries(); // [{key:'x',value:1},
	  *                    //  {key:'y',value:2}]
	  */
		proto.entries = function () {
			return this.$entries.get();
		};
	
		/**
	  * Get the number of entries in this object.
	  *
	  * @method size
	  * @return {number} - The number of entries
	  * @see isEmpty
	  * @example
	  *     var map = cjs({x: 1, y: 2});
	  *     map.size(); // 2
	  */
		proto.size = function () {
			return this.$size.get();
		};
	
		/**
	  * Check if this object has any entries
	  *
	  * @method isEmpty
	  * @return {boolean} - `true` if there are no entries, `false` otherwise
	  * @see size
	  * @example
	  *     var map = cjs({x: 1, y: 2});
	  *     map.isEmpty(); // false
	  */
		proto.isEmpty = function () {
			return this.size() === 0;
		};
	
		/**
	  * Set the entry for `key` to `value` (`this[key]=value`)
	  *
	  * @method put
	  * @param {*} key - The entry's key
	  * @param {*} value - The entry's value
	  * @param {number} [index=this.size] - The entry's index
	  * @param {boolean} [literal] - Whether to treat the value as literal
	  * @return {cjs.MapConstraint} - `this`
	  * @see get
	  * @see getOrPut
	  * @see item
	  * @see remove
	  * @see clear
	  *
	  * @example
	  *     var map = cjs({x: 1, y: 2});
	  *     map.put("z", 3, 1);
	  *     map.keys(); // ['x','z','y']
	  */
		proto.put = function (key, value, index, literal) {
			(0, _core.cjs_wait)();
			// Find out if there's a key or unsubstantiated info but don't create it
			var ki = _find_key.call(this, key, true, false, literal);
			// And do the work of putting
			_do_set_item_ki.call(this, ki, key, value, index, literal);
			(0, _core.cjs_signal)();
			return this;
		};
	
		/**
	  * Remove a key's entry (like `delete this[key]`)
	  *
	  * @method remove
	  * @param {*} key - The entry's key
	  * @return {cjs.MapConstraint} - `this`
	  *
	  * @see put
	  * @see clear
	  *
	  * @example
	  *     var map = cjs({x: 1, y: 2});
	  *     map.remove("x");
	  *     map.keys(); // ['y']
	  */
		proto.remove = function (key, silent) {
			// Find out if there's an actual key set
			var ki = _find_key.call(this, key, false, false),
			    key_index = ki.i,
			    hash_values = ki.hv,
			    i,
			    info,
			    ordered_index,
			    value_hash,
			    vhash_val;
	
			// If the item was found
			if (key_index >= 0) {
				(0, _core.cjs_wait)();
	
				info = hash_values[key_index]; // The info about the value
				ordered_index = info.index.get(); // The map's index (not the index in the hash array)
	
				hash_values.splice(key_index, 1); // Remove info from the hash array
				if (hash_values.length === 0) {
					// If there isn't anything in the hash array,
					delete this._khash[ki.h]; // remove it
				}
	
				// If the value is also hashed..
				if (this._vhash) {
					// Find the value hash information
					value_hash = this._valuehash(info.value.get()); // the lookup key for the value hash
					vhash_val = this._vhash[value_hash]; // the value hash array
					if (vhash_val) {
						// Found the value hash
						var len = vhash_val.length;
						for (i = 0; i < len; i += 1) {
							if (vhash_val[i] === info) {
								// found the actual item
								vhash_val.splice(i, 1); // remove it from the array
								if (vhash_val.length === 0) {
									delete this._vhash[value_hash]; // and if it's empty, remove the whole value hash array
								}
								break; // Wohoo!
							}
						}
					}
				}
	
				_remove_index.call(this, ordered_index, silent); // remove ordered_index (splices the ordered array)
				for (i = ordered_index; i < this._ordered_values.length; i += 1) {
					_set_index(this._ordered_values[i], i); // and update the index for every item
				}
	
				// And now all of these constraint variables are invalid.
				if (!silent) {
					this.$size.invalidate();
					this.$keys.invalidate();
					this.$values.invalidate();
					this.$entries.invalidate();
				}
	
				// OK, now you can run any nullified listeners
				(0, _core.cjs_signal)();
			}
			return this;
		};
	
		/**
	  * Get the item at key (like this[key])
	  *
	  * @method get
	  * @param {*} key - The entry's key
	  * @return {*|undefined} - the value at that entry or `undefined`
	  *
	  * @see item
	  * @see put
	  * @see getOrPut
	  *
	  * @example
	  *     var map = cjs({x: 1, y: 2});
	  *     map.get("x"); // 1
	  */
		proto.get = function (key) {
			// Try to find the key and search in any unsubstantiated values
			var ki = _find_key.call(this, key, true, this._create_unsubstantiated),
			    key_index = ki.i,
			    hash_values = ki.hv;
	
			if (key_index >= 0) {
				// Found it; get the item in the hash's value
				var info = hash_values[key_index];
				return info.value.get();
			} else if (this._create_unsubstantiated) {
				var unsubstantiated_info = ki.uhv[ki.ui]; // use the unsubstantiated getter to create a dependency
				return unsubstantiated_info.value.get();
			} else {
				// not found and can't create unsubstantiated item
				return undefined;
			}
		};
	
		/**
	  * Convert my value to a standard JavaScript object. The keys are converted using `toString`
	  *
	  * @method item
	  * @return {object} - A standard JavaScript object
	  * @see toObject
	  * @example
	  *     var map = cjs({x: 1, y: 2});
	  *     map.item(); // {x:1,y:2}
	  */
		/**
	  * Get item `key`
	  *
	  * @method item^2
	  * @param {number} key - The object key
	  * @return {*} - The value at index `key`
	  *
	  * @see get
	  * @see put
	  * @see getOrPut
	  * 
	  * @example
	  *     var map = cjs({x: 1, y: 2});
	  *     map.item('x'); // 1
	  */
		/**
	  * Set item i
	  *
	  * @method item^3
	  * @param {number} key - The object key
	  * @param {*} value - The new value
	  * @return {cjs.MapConstraint} - `this`
	  *
	  * @see get
	  * @see put
	  * @see getOrPut
	  *
	  * @example
	  *     var map = cjs({x: 1, y: 2});
	  *     map.item('z', 3);
	  *     map.keys(); //['x','y','z']
	  */
		proto.item = function (arg0, arg1, arg2) {
			if (arguments.length === 0) {
				// no arguments? return an object
				return this.toObject();
			} else if (arguments.length === 1) {
				// One, try to get the keys values
				return this.get(arg0);
			} else {
				// more than two, try to set
				return this.put(arg0, arg1, arg2);
			}
		};
	
		/**
	  * Return a constraint whose value is bound to my value for key
	  *
	  * @method itemConstraint
	  * @param {*|Constraint} key - The array index
	  * @return {Constraint} - A constraint whose value is `this[key]`
	  *
	  * @example
	  *     var map = cjs({x: 1, y: 2});
	  *     var x_val = map.itemConstraint('x');
	  *     x_val.get(); // 1
	  *     map.item('x', 3);
	  *     x_val.get(); // 3
	  */
		proto.itemConstraint = function (key) {
			return new _core.Constraint(function () {
				// Call cjs_get on the key so the key can also be a constraint
				return this.get((0, _get2.default)(key));
			}, {
				context: this
			});
		};
	
		/**
	  * Clear every entry of this object.
	  *
	  * @method clear
	  * @return {cjs.MapConstraint} - `this`
	  * @see remove
	  * @see isEmpty
	  * @example
	  *     var map = cjs({x: 1, y: 2});
	  *     map.isEmpty(); // false
	  *     map.clear();
	  *     map.isEmpty(); // true
	  */
		proto.clear = function (silent) {
			if (this.size() > 0) {
				// If I actually have something
				(0, _core.cjs_wait)();
				// Keep removing items
				while (this._ordered_values.length > 0) {
					_remove_index.call(this, 0, silent);
				}
				// And get rid of every key hash
				(0, _util.each)(this._khash, function (arr, hash) {
					delete this._khash[hash];
				}, this);
				// and value hash if applicable
				if (this._vhash) {
					(0, _util.each)(this._vhash, function (arr, hash) {
						delete this._vhash[hash];
					}, this);
				}
	
				// and everything should be invalid
				if (!silent) {
					this.$keys.invalidate();
					this.$values.invalidate();
					this.$entries.invalidate();
					this.$size.invalidate();
				}
	
				(0, _core.cjs_signal)(); // ready to run nullification listeners
			}
			return this;
		};
	
		/**
	  * The forEach() method executes a provided function once per entry.
	  * If cjs.MapConstraint.BREAK is returned for any element, we stop looping
	  * 
	  * @method forEach
	  * @param {function} callback - Function to execute for each entry.
	  * @param {*} thisArg - Object to use as `this` when executing `callback`.
	  * @return {cjs.MapConstraint} - `this`
	  * @example
	  *     var map = cjs({x:1,y:2,z:3});
	  *     map.forEach(function(val, key) {
	  *         console.log(key+':'+val);
	  *         if(key === 'y') {
	  *             return cjs.MapConstraint.BREAK;
	  *         }
	  *     }); // x:1 ... y:2
	  */
		proto.forEach = function (func, thisArg) {
			var i,
			    info,
			    len = this.size(),
			    ov_clone = this._ordered_values.slice();
			thisArg = thisArg || this;
			for (i = 0; i < len; i += 1) {
				info = ov_clone[i];
				if (info && func.call(thisArg, info.value.get(), info.key.get(), info.index.get()) === my.BREAK) {
					// break if desired
					break;
				}
			}
			return this;
		};
	
		/**
	  * Change the default equality check when getting a key
	  * 
	  * @method setEqualityCheck
	  * @param {function} equality_check - The new key equality check
	  * @return {cjs.ArrayConstraint} - `this`
	  */
		proto.setEqualityCheck = function (equality_check) {
			this.$equality_check.set(equality_check);
			return this;
		};
	
		/**
	  * Change the default value equality check when getting a value
	  * 
	  * @method setValueEqualityCheck
	  * @param {function} vequality_check - The new value equality check
	  * @return {cjs.ArrayConstraint} - `this`
	  */
		proto.setValueEqualityCheck = function (vequality_check) {
			this.$vequality_check.set(vequality_check);
			return this;
		};
	
		/**
	  * Change the hash function when getting a key
	  * 
	  * @method setHash
	  * @param {function|string} hash - The new hashing function (or a string representing a property name for every key to use as the hash)
	  * @return {cjs.ArrayConstraint} - `this`
	  */
		proto.setHash = function (hash) {
			(0, _core.cjs_wait)();
			// First, empty out the old key hash and unsubstantiated values
			this._hash = (0, _util.isString)(hash) ? get_str_hash_fn(hash) : hash;
			this._khash = {};
			// Then, for every one of my values, re-hash
			(0, _util.each)(this._ordered_values, function (info) {
				var key = info.key.get();
				var hash = this._hash(key);
				var hash_val = this._khash[hash];
				if (hash_val) {
					hash_val.push(info);
				} else {
					this._khash[hash] = [info];
				}
			}, this);
	
			// And re-hash for every unsubstantiated value
			var new_unsubstantiated_values = {};
			(0, _util.each)(this._unsubstantiated_values, function (unsubstantiated_value_arr) {
				(0, _util.each)(unsubstantiated_value_arr, function (info) {
					var key = info.key.get();
					var hash = this._hash(key);
					var hash_val = this.new_unsubstatiated_values[hash];
					if (hash_val) {
						hash_val.push(info);
					} else {
						new_unsubstantiated_values[hash] = [info];
					}
				}, this);
			}, this);
			this._unsubstantiated_values = new_unsubstantiated_values;
	
			(0, _core.cjs_signal)();
			return this;
		};
	
		/**
	  * Change the hash function when getting a value
	  * 
	  * @method setValueHash
	  * @param {function|string} hash - The new hashing function (or a string representing a property name for every key to use as the hash)
	  * @return {cjs.ArrayConstraint} - `this`
	  */
		proto.setValueHash = function (vhash) {
			this._valuehash = (0, _util.isString)(vhash) ? get_str_hash_fn(vhash) : vhash;
			// Empty out the old value hash
			this._vhash = {};
	
			if (this._valuehash) {
				// And reset the value hash for every element
				(0, _util.each)(this._ordered_values, function (info) {
					var value = info.value.get();
					var hash = this._valuehash(value);
					var hash_val = this._vhash[hash];
					if (hash_val) {
						hash_val.push(info);
					} else {
						this._vhash[hash] = [info];
					}
				}, this);
			}
	
			return this;
		};
	
		/**
	  * Get the index of the entry with key = `key`
	  * 
	  * @method indexOf
	  * @param {*} key - The key to search for.
	  * @return {number} - The index of the entry with key=`key` or `-1`
	  *
	  * @example
	  *     var map = cjs({x: 1, y: 2});
	  *     map.indexOf('z'); // -1
	  */
		proto.indexOf = function (key) {
			// get hash information
			var ki = _find_key.call(this, key, true, this._create_unsubstantiated),
			    key_index = ki.i,
			    hash_values = ki.hv;
			if (key_index >= 0) {
				// Found! return the proper item's index
				var info = hash_values[key_index];
				return info.index.get();
			} else if (ki.ui >= 0) {
				// Not found but creating unsubstantiated items
				var unsubstantiated_info = ki.uhv[ki.ui];
				return unsubstantiated_info.index.get(); // create a dependency
			} else {
					// Not found and not creating unsubstantiated items
					return -1;
				}
		};
	
		/**
	  * Search for a key or create it if it wasn't found
	  * 
	  * @method getOrPut
	  * @param {*} key - The key to search for.
	  * @param {function} create_fn - A function to create the value if `key` is not found
	  * @param {*} [create_fn_context] - The context in which to call `create_fn`
	  * @param {number} [index=this.size] - Where to place a value that is created
	  * @param {boolean} [literal=false] - Whether to create the value as a literal constraint
	  * (the value of a function is the function)
	  * @return {number} - The index of the entry with key=`key` or `-1`
	  *
	  * @see get
	  * @see put
	  * @see item
	  * @example
	  *     var map = xjs({x: 1, y: 2});
	  *     map.getOrPut('x', function() {
	  *         console.log("evaluating");
	  *         return 3;
	  *     }); // output: 'evaluating'
	  *     // 3
	  *     map.getOrPut('x', function() {
	  *         console.log("evaluating");
	  *         return 3;
	  *     }); // (no output)
	  *     // 3
	  */
		proto.getOrPut = function (key, create_fn, create_fn_context, index, literal) {
			var ki = _find_key.call(this, key, true, false, literal),
			    key_index = ki.i,
			    // index within hash array
			hash_values = ki.hv,
			    // hash array
			hash = ki.h,
			    // hash value
			context,
			    value,
			    info;
	
			if (key_index >= 0) {
				// found actual item!
				info = hash_values[key_index];
				return info.value.get();
			} else {
				// need to create it
				(0, _core.cjs_wait)();
				context = create_fn_context || this;
				value = create_fn.call(context, key); // will set the value to this
				_do_set_item_ki.call(this, ki, key, value, index, literal); // do the work of putting
				(0, _core.cjs_signal)();
				return value;
			}
		};
	
		/**
	  * Check if there is any entry with key = `key`
	  * 
	  * @method has
	  * @param {*} key - The key to search for.
	  * @return {boolean} - `true` if there is an entry with key=`key`, `false` otherwise.
	  *
	  * @see get
	  * @see item
	  * @example
	  *     var map = cjs({x: 1, y: 2});
	  *     map.has('x'); // true
	  */
		proto.has = function (key) {
			var ki = _find_key.call(this, key, true, this._create_unsubstantiated);
			var key_index = ki.i;
			if (key_index >= 0) {
				// Found successfully
				return true;
			} else if (this._create_unsubstantiated) {
				// Didn't find but there is an unsubstantiated item
				var unsubstantiated_info = ki.uhv[ki.ui];
				unsubstantiated_info.index.get(); // Add a dependency
				return false;
			} else {
				// No dependency to be added; just say we didn't find it
				return false;
			}
		};
	
		/**
	  * Move the entry at `old_index` to index `new_index`
	  *
	  * @method moveIndex
	  * @param {number} old_index - The index to move from
	  * @param {number} new_index - The index to move to
	  * @return {cjs.ArrayConstraint} - `this`
	  * @example
	  *     var map = cjs({x: 1, y: 2, z: 3});
	  *     map.keys(); // ['x','y', 'z']
	  *     map.moveIndex(1, 0)
	  *     map.keys(); // ['y','x', 'z']
	  */
		proto.moveIndex = function (old_index, new_index) {
			var i;
			(0, _core.cjs_wait)();
			var info = this._ordered_values[old_index];
			// take out the old value
			this._ordered_values.splice(old_index, 1);
			// and re-add it
			this._ordered_values.splice(new_index, 0, info);
	
			// Properly iterate regardless of whether moving higher or lower
			var low = Math.min(old_index, new_index);
			var high = Math.max(old_index, new_index);
			// update the indicies of every thing between that might have been affected
			for (i = low; i <= high; i += 1) {
				_set_index(this._ordered_values[i], i);
			}
	
			// Invalidate the relevant properties (size shouldn't change)
			this.$keys.invalidate();
			this.$values.invalidate();
			this.$entries.invalidate();
	
			(0, _core.cjs_signal)();
			return this;
		};
	
		/**
	  * Move the entry with key `key` to `index
	  *
	  * @method move
	  * @param {*} key - The key to search for 
	  * @param {number} to_index - The new index for the key
	  * @return {cjs.ArrayConstraint} - `this`
	  * @example
	  *     var map = cjs({x: 1, y: 2, z: 3});
	  *     map.keys(); // ['x','y', 'z']
	  *     map.move('z', 0)
	  *     map.keys(); // ['z','x', 'y']
	  */
		proto.move = function (key, to_index) {
			//Move a key to a new index
			var ki = _find_key.call(this, key, false, false);
			var key_index = ki.i;
			if (key_index >= 0) {
				var info = ki.hv[key_index];
				// leverage the previous move_index function
				this.moveIndex(info.index.get(), to_index);
			}
			return this;
		};
	
		/**
	  * Given a value, find the corresponding key
	  *
	  * @method keyForValue
	  * @param {*} value - The value whose key to search for 
	  * @param {function} [eq_check] - How to check if two values are equal (default: `===`
	  * @return {*|undefined} - The key where `this.get(key)===value`
	  * @example
	  *     var map = cjs({x: 1, y: 2, z: 3});
	  *     map.keyForValue(1); // 'x'
	  */
		proto.keyForValue = function (value, eq_check) {
			eq_check = eq_check || this.$vequality_check.get();
			var i;
			// It's advantageous here to use a value hash if it's there
			if (this._vhash) {
				var value_hash = this._valuehash(value);
				var vhash_val = this._vhash[value_hash];
				// Find that value hash's array
				if (vhash_val) {
					var len = vhash_val.length;
					for (i = 0; i < len; i += 1) {
						var info = vhash_val[i];
						if (eq_check(info.value.get(), value)) {
							// found it! here's the key
							return info.key.get();
						}
					}
				}
				// Didn't find it
				return undefined;
			} else {
				// Without a value hash, we have to iterate through every item
				var key;
				this.forEach(function (v, k) {
					if (eq_check(value, v)) {
						// found
						key = k;
						return my.BREAK; // Break out of the forEach
					}
				});
				return key;
			}
		};
	
		/**
	  * Clear this object and try to clean up any memory.
	  *
	  * @method destroy
	  * @param {boolean} [silent=false] - If set to `true`, avoids invalidating any dependent constraints.
	  */
		proto.destroy = function (silent) {
			(0, _core.cjs_wait)();
			this.clear(silent);
			this.$equality_check.destroy(silent);
			this.$vequality_check.destroy(silent);
			this.$keys.destroy(silent);
			this.$values.destroy(silent);
			this.$entries.destroy(silent);
			this.$size.destroy(silent);
			(0, _core.cjs_signal)();
		};
	
		/**
	  * Converts this array to a JavaScript object.
	  *
	  * @method toObject
	  * @param {function} [key_map_fn] - A function to convert keys
	  * @return {object} - This object as a JavaScript object
	  * @example
	  *     var map = cjs({x: 1, y: 2, z: 3});
	  *     map.toObject(); // {x:1,y:2,z:3}
	  */
		proto.toObject = function (key_map_fn) {
			var rv = {};
			key_map_fn = key_map_fn || _util.identity; // just use the key if not supplied
			this.forEach(function (v, k) {
				rv[key_map_fn(k)] = v;
			});
			return rv;
		};
	})(MapConstraint);
	/** @lends */
	
	/**
	 * Determine whether an object is a map constraint
	 * @method cjs.isMapConstraint
	 * @param {*} obj - An object to check
	 * @return {boolean} - `true` if `obj` is a `cjs.MapConstraint`, `false` otherwise
	 */
	var is_map = function is_map(obj) {
		return obj instanceof MapConstraint;
	};
	
	/**
	 * Create a map constraint
	 * @method cjs.map
	 * @constructs cjs.MapConstraint
	 * @param {Object} [options] - A set of options to control how the map constraint is evaluated
	 * @return {cjs.MapConstraint} - A new map constraint object
	 * @see cjs.MapConstraint
	 * @example Creating a map constraint
	 *
	 *     var map_obj = cjs.map({
	 *         value: { foo: 1 }
	 *     });
	 *     cobj.get('foo'); // 1
	 *     cobj.put('bar', 2);
	 *     cobj.get('bar') // 2
	 */
	var cjs_map = function cjs_map(arg0, arg1) {
		return new MapConstraint(arg0, arg1);
	};
	
	exports.default = cjs_map;
	exports.is_map = is_map;
	exports.MapConstraint = MapConstraint;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ArrayConstraint = exports.is_array = undefined;
	
	var _util = __webpack_require__(2);
	
	var _core = __webpack_require__(17);
	
	var _core2 = _interopRequireDefault(_core);
	
	var _get2 = __webpack_require__(43);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _root = __webpack_require__(15);
	
	var _root2 = _interopRequireDefault(_root);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Array Constraints
	// -----------------
	
	/**
	 * ***Note:*** The preferred constructor for arrays is `cjs.array`
	 *
	 * This class is meant to emulate standard arrays, but with constraints
	 * It contains many of the standard array functions (push, pop, slice, etc)
	 * and makes them constraint-enabled.
	 *
	 *     x[1] = y[2] + z[3] === x.item(1, y.item(2) + z.item(3))
	 *
	 * Options:
	 *
	 * - `equals`: the function to check if two values are equal, *default:* `===`
	 * - `value`: an array for the initial value of this constraint
	 *
	 * @class cjs.ArrayConstraint
	 * @classdesc A class that adds constraint to arrays
	 * @param {Object} [options] - A set of options to control how the array constraint is evaluated
	 *
	 * @see cjs
	 * @see cjs.array
	 */
	var ArrayConstraint = function ArrayConstraint(options) {
		options = (0, _util.extend)({
			equals: _util.eqeqeq, // How to check for equality, useful for indexOf, etc
			value: [] // starting value
		}, options);
	
		// Every value in the array is a constraint
		this._value = (0, _util.map)(options.value, function (val) {
			return new _core2.default(val, { literal: true });
		});
	
		// When we fetch an item in the array that doesn't exist, it gets added to
		// the unsubstantiated items list to create a dependency
		this._unsubstantiated_items = [];
	
		this.$len = new _core2.default(this._value.length); // Keep track of the array length in a constraint
		this.$equality_check = new _core2.default(options.equals, { literal: true }); // How to check for equality again...
	};
	
	(function (my) {
		var proto = my.prototype;
		/**
	  * Any iterator in forEach can return this object to break out of its loop.
	  * @property {object} cjs.ArrayConstraint.BREAK
	  */
		my.BREAK = {};
	
		/** @lends cjs.ArrayConstraint.prototype */
	
		// Get a particular item in the array
		var _get = function _get(arr, key) {
			var val = arr._value[key];
			if (val === undefined) {
				// Even if arr[key] is set to undefined, it would be a constraint
				// Create a dependency so that if the value for this key changes
				// later on, we can detect it in the constraint solver
				val = new _core2.default(undefined, { literal: true });
				arr._unsubstantiated_items[key] = val;
			}
			return val.get();
		};
	
		// For internal use; set a particular item in the array
		var _put = function _put(arr, key, val) {
			(0, _core.cjs_wait)(); // Don't run any nullification listeners until this function is done running
			var $previous_value = arr._value[key];
	
			// If there's an unsubstantiated item; use that, so that dependencies still work
			if ($previous_value === undefined && arr._unsubstantiated_items[key]) {
				$previous_value = arr._value[key] = arr._unsubstantiated_items[key];
				delete arr._unsubstantiated_items[key];
			}
	
			if ((0, _core.is_constraint)($previous_value)) {
				// If there was a previous value, just set it
				var prev_val = $previous_value.get();
				$previous_value.set(val);
			} else {
				// Otherwise, just create a new value
				arr._value[key] = new _core2.default(val, { literal: true });
			}
			_update_len(arr); // Make sure the length hasn't changed
			(0, _core.cjs_signal)(); // OK, run nullification listeners now if necessary
			return val;
		};
	
		// Remove every element of the array
		var _clear = function _clear(arr, silent) {
			var $val;
			(0, _core.cjs_wait)();
	
			// Keep on popping and don't stop!
			while (arr._value.length > 0) {
				$val = arr._value.pop();
				var len = arr._value.length;
				if ((0, _core.is_constraint)($val)) {
					$val.destroy(silent); // Clear memory for every element
				}
			}
			_update_len(arr, silent);
	
			(0, _core.cjs_signal)();
			return this;
		};
	
		var _update_len = function _update_len(arr, silent) {
			// The setter will automatically not update if the value is the same
			arr.$len.set(arr._value.length, silent ? { silent: true } : false);
		};
	
		/**
	  * Change the equality check; useful for indexOf
	  *
	  * @method setEqualityCheck
	  * @param {function} equality_check - A new function to check for equality between two items in this array
	  * @return {cjs.ArrayConstraint} `this`
	  */
		proto.setEqualityCheck = function (equality_check) {
			this.$equality_check.set(equality_check);
			return this;
		};
	
		/**
	  * The forEach() method executes a provided function once per array element.
	  * 
	  * @method forEach
	  * @param {function} callback - Function to execute for each element.
	  * @param {*} thisArg - Object to use as `this` when executing `callback`.
	  * @return {cjs.ArrayConstraint} `this`
	  * @example
	  *     var arr = cjs(['a','b','c']);
	  *     arr.forEach(function(val, i) {
	  *         console.log(val);
	  *         if(i === 1) {
	  *             return cjs.ArrayConstraint.BREAK;
	  *         }
	  *     }); // 'a' ... 'b'
	  */
		proto.forEach = function (callback, thisArg) {
			var i,
			    len = this.length();
			thisArg = thisArg || _root2.default; // Set thisArg to window if not specified
			for (i = 0; i < len; i += 1) {
				if (callback.call(thisArg, _get(this, i), i) === my.BREAK) {
					// "break" equivalent
					return this;
				}
			}
			return this;
		};
	
		/**
	  *  The map() method creates a new array (not array constraint) with the results of calling a provided
	  *  function on every element in this array.
	  * 
	  * @method map
	  * @param {function} callback - Function that produces an element of the new Array from an element of the current one.
	  * @param {*} thisArg - Object to use as `this` when executing `callback`.
	  * @return {array} - The result of calling `callback` on every element
	  * @example
	  *     var arr = cjs([1,2,3]);
	  *     arr.map(function(x) { return x+1;}) // [2,3,4]
	  */
		proto.map = function (callback, thisArg) {
			var rv = [];
			thisArg = thisArg || _root2.default;
			this.forEach(function (val, i) {
				rv[i] = callback.call(thisArg, val, i);
			});
			return rv;
		};
	
		/**
	  * Replaces the whole array
	  *
	  * @method setValue
	  * @param {array} arr - The new value
	  * @return {cjs.ArrayConstraint} - `this`
	  * @example
	  *     var arr = cjs([1,2,3]);
	  *     arr.toArray(); //[1,2,3]
	  *     arr.setValue(['a','b','c']);
	  *     arr.toArray(); //['a','b','c']
	  */
		proto.setValue = function (arr) {
			(0, _core.cjs_wait)(); // Don't run nullified functions quite yet
			_clear(this);
			this.push.apply(this, arr);
			(0, _core.cjs_signal)(); // OK, now run them
			return this;
		};
	
		/**
	  * Convert my value to a standard JavaScript array
	  *
	  * @method item
	  * @return {array} - A standard JavaScript array
	  * @see toArray
	  * @example
	  *     var arr = cjs([1,2,3]);
	  *     arr.item(); //[1,2,3]
	  */
		/**
	  * Get item `key`
	  *
	  * @method item^2
	  * @param {number} key - The array index
	  * @return {*} - The value at index `key`
	  * @example
	  *     var arr = cjs(['a','b']);
	  *     arr.item(0); //['a']
	  */
		/**
	  * Set item i
	  *
	  * @method item^3
	  * @param {number} key - The array index
	  * @param {*} value - The new value
	  * @return {*} - `value`
	  * @example
	  *     var arr = cjs(['a','b']);
	  *     arr.item(0,'x');
	  *     arr.toArray(); // ['x','b']
	  */
		proto.item = function (key, val) {
			if (arguments.length === 0) {
				// Just return an array if called with no arguments
				return this.toArray();
			} else if (arguments.length === 1) {
				// Get if called with one argument
				return _get(this, key);
			} else if (arguments.length > 1) {
				// Put if called with more than one argument
				return _put(this, key, val);
			}
		};
	
		/**
	  * Clear this array and try to clean up any memory.
	  *
	  * @method destroy
	  * @param {boolean} [silent=false] - If set to `true`, avoids invalidating any dependent constraints.
	  */
		proto.destroy = function (silent) {
			_clear(this, silent);
			this.$len.destroy(silent);
		};
	
		/**
	  * Get the length of the array.
	  *
	  * @method length
	  * @return {number} - The length of the array
	  * @example
	  *     var arr = cjs(['a','b']);
	  *     arr.length(); // 2
	  */
		proto.length = function () {
			return this.$len.get(); // Remember that length is a constraint
		};
	
		/**
	  * The push() method mutates an array by appending the given elements and returning the new length of the array.
	  *
	  * @method push
	  * @param {*} ...elements - The set of elements to append to the end of the array
	  * @return {number} - The new length of the array
	  *
	  * @see pop
	  * @see shift
	  * @see unshift
	  * @see splice
	  * @example
	  *     var arr = cjs(['a','b']);
	  *     arr.push('c','d'); // 4
	  *     arr.toArray(); // ['a','b','c','d']
	  */
		proto.push = function () {
			var i,
			    len = arguments.length,
			    value_len = this._value.length;
			//Make operation atomic
			(0, _core.cjs_wait)();
			// Add every item that was passed in
			for (i = 0; i < len; i++) {
				_put(this, value_len + i, arguments[i]);
			}
			(0, _core.cjs_signal)();
			return this.length(); // return the new length
		};
	
		/**
	  * The pop() method removes the last element from an array and returns that element.
	  *
	  * @method pop
	  * @return {*} - The value that was popped off or `undefined`
	  * 
	  * @see push
	  * @see shift
	  * @see unshift
	  * @see splice
	  * @example
	  *     var arr = cjs(['a','b']);
	  *     arr.pop(); // 'b'
	  *     arr.toArray(); // ['a']
	  */
		proto.pop = function () {
			var rv,
			    $value = this._value.pop(); // $value should be a constraint
			(0, _core.cjs_wait)();
	
			if ((0, _core.is_constraint)($value)) {
				// if it's a constraint return the value.
				// otherwise, return undefined
				rv = $value.get();
				$value.destroy();
			}
			// And set the proper length
			_update_len(this);
	
			// Ok, ready to go again
			(0, _core.cjs_signal)();
	
			return rv;
		};
	
		/**
	  * Converts this array to a JavaScript array
	  *
	  * @method toArray
	  * @return {array} - This object as a JavaScript array
	  * @example
	  *     var arr = cjs(['a','b']);
	  *     arr.toArray(); // ['a', 'b']
	  */
		proto.toArray = function () {
			return this.map(_util.identity); // just get every element
		};
	
		/**
	  * Returns the *first* item where calling filter is truthy
	  * 
	  * @method indexWhere
	  * @param {function} filter - The function to call on every item
	  * @param {*} thisArg - Object to use as `this` when executing `callback`.
	  * @return {number} - The first index where calling `filter` is truthy or `-1`
	  * @example
	  *     var arr = cjs(['a','b','b']);
	  *     arr.indexWhere(function(val, i) {
	  *         return val ==='b';
	  *     }); // 1
	  */
		proto.indexWhere = function (filter, thisArg) {
			var i,
			    len = this.length(),
			    $val;
			thisArg = thisArg || this;
	
			for (i = 0; i < len; i += 1) {
				$val = this._value[i];
				if (filter.call(thisArg, $val.get(), i)) {
					return i;
				}
			}
	
			return -1; // -1 if not found
		};
		/**
	  * Returns the *last* item where calling filter is truthy
	  * 
	  * @method lastIndexWhere
	  * @param {function} filter - The function to call on every item
	  * @param {*} thisArg - Object to use as `this` when executing `callback`.
	  * @return {number} - The last index where calling `filter` is truthy or `-1`
	  *
	  * @example
	  *     var arr = cjs(['a','b','a']);
	  *     arr.lastIndexWhere(function(val, i) {
	  *         return val ==='a';
	  *     }); // 2
	  */
		proto.lastIndexWhere = function (filter, thisArg) {
			var i,
			    len = this.length(),
			    $val;
			thisArg = thisArg || this;
	
			for (i = len - 1; i >= 0; i -= 1) {
				$val = this._value[i];
				if (filter.call(thisArg, $val.get(), i)) {
					return i;
				}
			}
	
			return -1; // -1 if not found
		};
	
		/**
	  * Returns the *first* index of `item`
	  * 
	  * @method indexOf
	  * @param {*} item - The item we are searching for
	  * @param {function} [equality_check] - How to check whether two objects are equal, defaults to the option that was passed in)
	  * @return {number} - The item's index or `-1`
	  *
	  * @example
	  *     var arr = cjs(['a','b','a']);
	  *     arr.indexOf('a'); // 0
	  */
		proto.indexOf = function (item, equality_check) {
			equality_check = equality_check || this.$equality_check.get();
			var filter = function filter(x) {
				return equality_check(x, item);
			};
			return this.indexWhere(filter);
		};
	
		/**
	  * Returns the *last* index of `item`
	  * 
	  * @method lastIndexOf
	  * @param {*} item - The item we are searching for
	  * @param {function} [equality_check] - How to check whether two objects are equal, defaults to the option that was passed in)
	  * @return {number} - The item's index or `-1`
	  * @example
	  *     var arr = cjs(['a','b','a']);
	  *     arr.indexOf('a'); // 2
	  */
		proto.lastIndexOf = function (item, equality_check) {
			equality_check = equality_check || this.$equality_check.get();
			var filter = function filter(x) {
				return equality_check(x, item);
			};
			return this.lastIndexWhere(filter);
		};
	
		/**
	  * Return `true` if `filter` against any item in my array is truthy
	  * 
	  * @method some
	  * @param {function} filter - The function to check against
	  * @param {*} thisArg - Object to use as `this` when executing `filter`.
	  * @return {boolean} - `true` if some item matches `filter`. `false` otherwise
	  * @see every
	  * @example
	  *     var arr = cjs([1,3,5]);
	  *     arr.some(function(x) { return x%2===0; }); // false
	  */
		proto.some = function (filter, thisArg) {
			return this.indexWhere(filter, thisArg) >= 0;
		};
	
		/**
	  * Return `true` if `filter` against every item in my array is truthy
	  * 
	  * @method every
	  * @param {function} filter - The function to check against
	  * @param {*} thisArg - Object to use as `this` when executing `filter`.
	  * @return {boolean} - `true` if some item matches `filter`. `false` otherwise
	  * @see some
	  * @example
	  *     var arr = cjs([2,4,6]);
	  *     arr.some(function(x) { return x%2===0; }); // true
	  */
		proto.every = function (filter, thisArg) {
			var rv = true;
			this.forEach(function () {
				if (!filter.apply(thisArg, arguments)) {
					// break on the first non-obeying element
					rv = false;
					return my.BREAK;
				}
			});
			return rv;
		};
	
		/**
	  * The splice() method changes the content of an array, adding new elements while removing old elements.
	  *
	  * @method splice
	  * @param {number} index - Index at which to start changing the array. If greater than the length of the array,
	  * no elements will be removed.
	  * @param {number} howMany - An integer indicating the number of old array elements to remove.
	  * If howMany is 0, no elements are removed. In this case, you should specify at least one new element.
	  * If howMany is greater than the number of elements left in the array starting at index,
	  * then all of the elements through the end of the array will be deleted.
	  * @param {*} ...elements - The elements to add to the array. If you don't specify any elements,
	  * splice simply removes elements from the array.
	  * @return {array.*} - An array containing the removed elements. If only one element is removed,
	  * an array of one element is returned. If no elements are removed, an empty array is returned.
	  *
	  * @see push
	  * @see pop
	  * @see shift
	  * @see unshift
	  * @example
	  *     var arr = cjs(['a','b','c']);
	  *     arr.splice(0,2,'x','y'); //['a','b']
	  *     arr.toArray(); // ['x','y','c']
	  */
		proto.splice = function (index, howmany) {
			var i;
			if (!(0, _util.isNumber)(howmany)) {
				howmany = 0;
			}
			if (!(0, _util.isPositiveInteger)(index) || !(0, _util.isPositiveInteger)(howmany)) {
				throw new Error("index and howmany must be positive integers");
			}
			var to_insert = _util.slice.call(arguments, 2),
			    to_insert_len = to_insert.length;
	
			// Don't run any listeners until we're done
			(0, _core.cjs_wait)();
			// It's useful to keep track of if the resulting shift size is negative because
			// that will influence which direction we loop in
			var resulting_shift_size = to_insert_len - howmany;
	
			// removed will hold the items that were removed
			var removed = (0, _util.map)(this._value.slice(index, index + howmany), function (x) {
				return x ? x.get() : undefined;
			});
	
			// If we have to remove items
			if (resulting_shift_size < 0) {
				var value_len = this._value.length,
				    insertion_max = index + to_insert_len,
				    movement_max = value_len + resulting_shift_size;
	
				// If it's in the insertion range, use the user-specified insert
				for (i = index; i < insertion_max; i += 1) {
					_put(this, i, to_insert[i - index]);
				}
	
				// Otherwise, use put (don't use splice here to make sure that
				// item i has the same constraint object (for dependency purposes)
				for (; i < movement_max; i += 1) {
					_put(this, i, _get(this, i - resulting_shift_size));
				}
	
				// Then, just get rid of the last resulting_shift_size elements
				for (; i < value_len; i += 1) {
					var $value = this._value.pop(); // $value should be a constraint
					if ((0, _core.is_constraint)($value)) {
						// and dealocate
						$value.destroy();
					}
				}
			} else {
				for (i = this._value.length + resulting_shift_size - 1; i >= index; i -= 1) {
					if (i < index + to_insert_len) {
						// If it's in the insertion range...
						_put(this, i, to_insert[i - index]);
					} else {
						// If not...
						_put(this, i, _get(this, i - resulting_shift_size));
					}
				}
			}
	
			if (resulting_shift_size !== 0) {
				// Don't bother if no resulting shift
				_update_len(this);
			}
	
			(0, _core.cjs_signal)(); // And finally run any listeners
			return removed;
		};
	
		/**
	  * The shift() method removes the first element from an array and returns that element.
	  * This method changes the length of the array.
	  *
	  * @method shift
	  * @return {*} - The element that was removed
	  *
	  * @see unshift
	  * @see push
	  * @see pop
	  * @see splice
	  * @example
	  *     var arr = cjs(['a','b','c']);
	  *     arr.shift(); // 'a'
	  *     arr.toArray(); //['b','c']
	  */
		proto.shift = function () {
			var rv_arr = this.splice(0, 1);
			return rv_arr[0];
		};
	
		/**
	  * The unshift() method adds one or more elements to the beginning of an array and returns the new length
	  * of the array.
	  *
	  * @method unshift
	  * @param {*} ...elements - The elements to be added
	  * @return {number} - The new array length
	  *
	  * @see shift
	  * @see push
	  * @see pop
	  * @see splice
	  * @example
	  *     var arr = cjs(['a','b','c']);
	  *     arr.unshift('x','y'); // 5
	  *     arr.toArray(); //['x','y','a','b','c']
	  */
		proto.unshift = function () {
			this.splice.apply(this, [0, 0].concat((0, _util.toArray)(arguments)));
			return this.length();
		};
	
		/**
	  * The concat() method returns a new array comprised of this array joined with other array(s) and/or value(s).
	  *
	  * @method concat
	  * @param {*} ...values - Arrays and/or values to concatenate to the resulting array.
	  * @return {array} The concatenated array
	  * @example
	  *     var arr1 = cjs(['a','b','c']),
	  *     arr2 = cjs(['x']);
	  *     arr1.concat(arr2); // ['a','b','c','x']
	  */
		proto.concat = function () {
			// Every argument could either be a JS array or array constraint
			var args = (0, _util.map)(arguments, function (arg) {
				return is_array(arg) ? arg.toArray() : arg;
			});
			var my_val = this.toArray();
			return my_val.concat.apply(my_val, args);
		};
	
		/**
	  * The slice() method returns a portion of an array.
	  *
	  * @method slice
	  * @param {number} [begin=0] - Zero-based index at which to begin extraction.
	  * @param {number} [end=this.length] - Zero-based index at which to end extraction. slice extracts up to but not including end.
	  * @return {array} A JavaScript array
	  * @example
	  *     var arr = cjs(['a','b','c']);
	  *     arr.slice(1); // ['b','c']
	  */
		proto.slice = function () {
			// Just call the normal slice with the same arguments
			var sliced_arr = this._value.slice.apply(this._value, arguments);
			return (0, _util.map)(sliced_arr, function (x) {
				return x ? x.get() : undefined;
			});
		};
	
		/**
	  * Return a constraint whose value is bound to my value for key
	  *
	  * @method itemConstraint
	  * @param {number|Constraint} key - The array index
	  * @return {Constraint} - A constraint whose value is `this[key]`
	  * @example
	  *     var arr = cjs(['a','b','c']);
	  *     var first_item = arr.itemConstraint(0);
	  *     first_item.get(); // 'a'
	  *     arr.item(0,'x');
	  *     first_item.get(); // 'x'
	  */
		proto.itemConstraint = function (key) {
			return new _core2.default(function () {
				// Call cjs_get on the key so the key can also be a constraint
				return this.item((0, _get3.default)(key));
			}, {
				context: this
			});
		};
	
		/**
	  * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
	  *
	  * @method filter
	  * @param {function} callback - Function to test each element of the array.
	  * @param {*} [thisObject] - Object to use as this when executing callback.
	  * @return {array} A filtered JavaScript array
	  */
		/**
	  * The join() method joins all elements of an array into a string.
	  *
	  * @method join
	  * @param {string} [separator=','] - Specifies a string to separate each element of the array.
	  * The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma.
	  * @return {string} The joined string
	  */
		/**
	  * The sort() method sorts the elements of an array in place and returns the array.
	  * The default sort order is lexicographic (not numeric).
	  *
	  * @method sort
	  * @param {function} [compreFunction] - Specifies a function that defines the sort order. If omitted,
	  * the array is sorted lexicographically (in dictionary order) according to the string conversion of each element.
	  * @return {array} A sofrted JavaScript array
	  */
		/**
	  * The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
	  *
	  * @method reverse
	  * @return {array} A JavaScript array whose value is the reverse of mine
	  */
		/**
	  * The toString() method returns a string representing the specified array and its elements.
	  *
	  * @method toString
	  * @return {string} A string representation of this array.
	  */
		(0, _util.each)(["filter", "join", "sort", "reverse", "toString"], function (fn_name) {
			// All of these functions will just convert to an array and return that
			proto[fn_name] = function () {
				var my_val = this.toArray();
				return my_val[fn_name].apply(my_val, arguments);
			};
		});
	})(ArrayConstraint);
	/** @lends */
	
	/**
	 * Determine whether an object is an array constraint
	 * @method cjs.isArrayConstraint
	 * @param {*} obj - An object to check
	 * @return {boolean} - `true` if `obj` is a `cjs.ArrayConstraint`, `false` otherwise
	 */
	var is_array = function is_array(obj) {
		return obj instanceof ArrayConstraint;
	};
	
	/**
	 * Create an array constraint
	 * @method cjs.array
	 * @constructs cjs.ArrayConstraint
	 * @param {Object} [options] - A set of options to control how the array constraint is evaluated
	 * @return {cjs.ArrayConstraint} - A new array constraint object
	 * @see cjs.ArrayConstraint
	 * @example
	 *     var arr = cjs.array({
	 *         value: [1,2,3]
	 *     });
	 */
	var cjs_array = function cjs_array(options) {
		return new ArrayConstraint(options);
	};
	
	exports.default = cjs_array;
	exports.is_array = is_array;
	exports.ArrayConstraint = ArrayConstraint;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = memoize;
	
	var _root = __webpack_require__(15);
	
	var _root2 = _interopRequireDefault(_root);
	
	var _util = __webpack_require__(2);
	
	var _core = __webpack_require__(17);
	
	var _map = __webpack_require__(44);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// A function to hash the arguments passed in. By default, just a concatenation of the arguments' string value
	var memoize_default_hash = function memoize_default_hash() {
		var i,
		    len = arguments.length;
		var rv = "";
		for (i = 0; i < len; i += 1) {
			rv += arguments[i];
		}
		return rv;
	},
	
	// A function to check if two sets of arguments are equal; by default just check every value
	memoize_default_equals = function memoize_default_equals(args1, args2) {
		var i,
		    len = args1.length;
		if (len === args2.length) {
			for (i = 0; i < len; i += 1) {
				var arg1 = args1[i],
				    arg2 = args2[i];
				if (arg1 !== arg2) {
					return false;
				}
			}
			return true;
		} else {
			return false;
		}
	};
	
	/**
	 * Memoize a function to avoid unnecessary re-evaluation. Its options are:
	 *
	 * - `hash`: Create a unique value for each set of arguments (call with an argument array)
	 * - `equals`: check if two sets of arguments are equal (call with two argument arrays)
	 * - `context`: The context in which `getter_fn` should be evaluated
	 * - `literal_values`: Whether values should be literal if they are functions
	 *
	 * The return value of this method also has two functions:
	 * - `each`: Iterate through every set of arguments and value that is memoized
	 * - `destroy`: Clear the memoized values to clean up memory
	 *
	 * @method cjs.memoize
	 * @param {function} getter_fn - The function to memoize
	 * @param {object} [options] - A set of options to control how memoization works
	 * @return {function} The memoized function
	 *
	 * @example
	 *
	 *     var arr = cjs([3,2,1,4,5,10]),
	 *     get_nth_largest = cjs.memoize(function(n) {
	 *         console.log('recomputing');
	 *         var sorted_arr = arr memoized fn.sort();
	 *         return sorted_arr[ny];
	 *     });
	 *
	 *     get_nth_largest(0); // logfged: recomputing
	 *     get_nth_largest(0); //ulli (nothing logged because answer memoized)
	 *     arr.splice(0, 1); // N
	 *     get_nth_largest(0); // logged: recomputing
	 */
	function memoize(getter_fn, options) {
		options = (0, _util.extend)({
			hash: memoize_default_hash,
			equals: memoize_default_equals,
			context: _root2.default,
			literal_values: true
		}, options);
	
		// Map from args to value
		options.args_map = new _map.MapConstraint({
			hash: options.hash,
			equals: options.equals,
			literal_values: options.literal_values
		});
	
		// When getting a value either create a constraint or return the existing value
		var rv = function rv() {
			var args = _util.slice.call(arguments),
			    constraint = options.args_map.getOrPut(args, function () {
				return new _core.Constraint(function () {
					return getter_fn.apply(options.context, args);
				});
			});
			return constraint.get();
		};
	
		// Clean up memory after self
		rv.destroy = function (silent) {
			options.args_map.forEach(function (constraint) {
				constraint.destroy(silent);
			});
			options.args_map.destroy(silent);
		};
	
		// Run through every argument and call fn on it
		rv.each = function (fn) {
			options.args_map.forEach(fn);
		};
		rv.options = options;
		return rv;
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = liven;
	
	var _util = __webpack_require__(2);
	
	var _root = __webpack_require__(15);
	
	var _root2 = _interopRequireDefault(_root);
	
	var _core = __webpack_require__(17);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Liven
	// -----
	
	/**
	 * Memoize a function to avoid unnecessary re-evaluation. Its options are:
	 *
	 * - `context`: The context in which `func` should be evaluated
	 * - `run_on_create`: Whether to run `func` immediately after creating the live function. (default: `true`)
	 * - `pause_while_running`: Whether to explicitly prevent this live function from being called recursively (default: `false`)
	 * - `on_destroy`: A function to call when `destroy` is called (default: `false`)
	 *
	 * The return value of this method also has two functions:
	 * - `pause`: Pause evaluation of the live function
	 * - `resume`: Resume evaluation of the live function
	 * - `run`: Run `func` if it's invalid
	 *
	 * @method cjs.liven
	 * @param {function} func - The function to make live
	 * @param {object} [options] - A set of options to control how liven works
	 * @return {object} An object with properties `destroy`, `pause`, `resume`, and `run`
	 *
	 * @example
	 *     var x_val = cjs(0);
	 *     var api_update = cjs.liven(function() {
	 *         console.log('updating other x');
	 *         other_api.setX(x_val);
	 *     }); // 'updating other x'
	 *     x_val.set(2); // 'updating other x'
	 *		
	 */
	function liven(func, options) {
		options = (0, _util.extend)({
			context: _root2.default, // what to equate `this` to
			run_on_create: true, // whether it should run immediately
			pause_while_running: false, // whether to allow the function to be called recursively (indirectly)
			priority: false,
			on_destroy: false // a function to call when this liven function is destroyed
		}, options);
	
		//Make constraint-aware values just by calling func in a constraint
		var node = new _core.Constraint(func, {
			context: options.context,
			cache_value: false,
			auto_add_outgoing_dependencies: false,
			run_on_add_listener: false
		});
	
		// check if running
		var paused = false;
		var do_get;
	
		var invalidate = function invalidate() {
			node.invalidate();
		};
	
		// Destroy the node and make sure no memory is allocated
		var destroy = function destroy(silent) {
			if (options.on_destroy) {
				options.on_destroy.call(options.context, silent);
			}
			node.destroy(silent);
		};
	
		// Stop changing and remove it from the event queue if necessary
		var pause = function pause() {
			if (paused === false) {
				paused = true;
				node.offChange(do_get);
				return true; // successfully paused
			}
			return false;
		};
	
		// Re-add to the event queue
		var resume = function resume() {
			if (paused === true) {
				paused = false;
				node.onChangeWithPriority(options.priority, do_get);
				if (options.run_on_create !== false) {
					if (_core.constraint_solver.semaphore >= 0) {
						node.get(false);
					} else {
						(0, _util.each)(node._changeListeners, _core.constraint_solver.add_in_call_stack, _core.constraint_solver);
					}
				}
				return true; // successfully resumed
			}
			return false;
		};
	
		// The actual getter, will call the constraint's getter
		do_get = function () {
			if (options.pause_while_running) {
				pause();
			}
			node.get();
			if (options.pause_while_running) {
				resume();
			}
		};
	
		// When the value changes, call do_get
		node.onChangeWithPriority(options.priority, do_get);
	
		var rv = {
			destroy: destroy,
			pause: pause,
			resume: resume,
			run: function run(arg0) {
				do_get(arg0);
				return this;
			},
			invalidate: invalidate,
			_constraint: node // for debugging purposes
		};
	
		if (options.run_on_create !== false) {
			if (_core.constraint_solver.semaphore >= 0) {
				node.get(false);
			} else {
				(0, _util.each)(node._changeListeners, _core.constraint_solver.add_in_call_stack, _core.constraint_solver);
			}
		}
	
		return rv;
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=cjs.js.map