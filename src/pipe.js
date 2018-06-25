// utils
import {compose} from './compose';
import {reverseArray} from './reverse';

/**
 * @function pipe
 *
 * @description
 * compose multiple functions into a single function, based on order executed
 *
 * @param {...Array<function>} fns the functions to compose
 * @return {function} the composed function
 */
export const pipe = (...fns) => compose(...reverseArray(fns));

export default pipe;
