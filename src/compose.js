// utils
import {identity} from './identity';
import {reduceArray} from './reduce';

/**
 * @function compose
 *
 * @description
 * compose multiple functions into a single function, based on classic composition order
 *
 * @param {...Array<function>} fns the functions to compose
 * @return {function} the composed function
 */
export const compose = (...fns) => reduceArray((f, g) => (...args) => f(g(...args)), identity, fns);

export default compose;
