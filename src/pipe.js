// utils
import {identity} from './identity';
import {reduceArray} from './reduce';

export const pipe = (...fns) => reduceArray((f, g) => (...args) => g(f(...args)), identity, fns);

export default pipe;
