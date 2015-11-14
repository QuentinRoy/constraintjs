import { extend, isArray, isObject, isFunction, has, get_array_diff } from "./util";
import debug from "./debug";
import constraint, { Constraint, is_constraint, constraint_solver, cjs_wait, cjs_signal }  from "./core";
import cjs_map, { is_map, MapConstraint } from "./map";
import cjs_array, { ArrayConstraint, is_array } from "./array";
import liven from "./liven";
import memoize from "./memoize";
import cjs_get from "./get";
import root from "./root";
// import { isPolyDOM } from "./template/cjs_template";
const isPolyDOM = () => false; //FIXME: template support

// Save the previous value of the `cjs` variable.
const old_cjs = root.cjs;

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
function cjs (arg0, arg1) {
	if(isArray(arg0)) {
		return new ArrayConstraint(extend({
			value: arg0
		}, arg1));
	} else if(isPolyDOM(arg0)) {
		return cjs.inputValue(arg0);
	} else if(is_constraint(arg0)) {
		return new Constraint(arg0, arg1);
	} else if(isObject(arg0) && !isFunction(arg0)) {
		return new MapConstraint(extend({
			value: arg0
		}, arg1));
	} else {
		return new Constraint(arg0, arg1);
	}
}

// Expose core functions
// -------------------------
extend(cjs, {
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
	constraint: constraint,
	/** @expose cjs.Constraint */
	Constraint: Constraint,
	/** @expose cjs.isConstraint */
	isConstraint: is_constraint,

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
	inFSM: function(fsm, values) {
		return (new Constraint()).inFSM(fsm, values);
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
	get: cjs_get,

	/** @expose cjs.wait */
	wait: cjs_wait,
	/** @expose cjs.signal */
	signal: cjs_signal,
	/** @expose cjs.removeDependency */
	removeDependency: constraint_solver.removeDependency,

	/** @expose cjs.arrayDiff */
	arrayDiff: get_array_diff, // expose this useful function

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
	toString: function() { return "ConstraintJS v" + cjs.version; },

	get __debug(){
		return debug.__debug;
	},

	set __debug(val){
		debug.__debug = val;
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
	noConflict: has(root, "cjs") ?  function() {
										// If there was a previous `cjs` property then track it
										// and allow `cjs.noConflict` to restore its previous value
										if(root.cjs === cjs) { root.cjs = old_cjs; }
										// and return a reference to `cjs` if the user wants it
										return cjs;
									} :
									// ...otherwise, `cjs.noConflict` will just delete the old value
									function() {
										delete root.cjs;
										return cjs;
									},

	/** @expose cjs.map **/
	map: cjs_map,
	/** @expose cjs.MapConstraint */
	MapConstraint: MapConstraint,
	/** @expose cjs.isMapConstraint */
	isMapConstraint: is_map,

	/** @expose cjs.array **/
	array: cjs_array,
	/** @expose cjs.ArrayConstraint */
	ArrayConstraint: ArrayConstraint,
	/** @expose cjs.isArrayConstraint */
	isArrayConstraint: is_array,

	/** @expose cjs.liven */
	liven: liven,

	/** @expose cjs.memoize */
	memoize: memoize
});

export default cjs;