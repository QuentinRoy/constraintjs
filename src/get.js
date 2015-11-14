export const cjs_getter = Symbol('cjs getter');

export default function cjs_get(obj, ...rest) {
	if(obj[cjs_getter]) {
		return obj[cjs_getter](...rest);
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