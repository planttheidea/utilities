// external dependencies
import {curry} from 'curriable';

// utils
import {
  assign,
  onMatchType
} from './_utils';

export const combineArrays = (...arrays) => (arrays.length ? [].concat(...arrays) : []);

export const combineObjects = (...objects) => (objects.length ? assign({}, ...objects) : {});

export const combine = onMatchType(combineArrays, combineObjects);

export default curry(combine, 2);
