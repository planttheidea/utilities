// utils
import {identity} from './identity';
import {reduceArray} from './reduce';

export const compose = (...fns) => reduceArray((f, g) => (...args) => f(g(...args)), identity, fns);

export default compose;
