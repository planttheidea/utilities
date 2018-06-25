// external dependencies
import {curry} from 'curriable';

// utils
import {
  assign,
  getKeys,
  onMatchType
} from './_utils';

/**
 * @function reduce
 *
 * @description
 * reduce an array to a new value
 *
 * @param {function} fn the function called on each iteration
 * @param {any} [initialValue] the initial value to use in the reduction
 * @param {Array<any>} array the array to map
 * @returns {Array<any>} the mapped array
 */
export const reduceArray = (fn, initialValue, array) => {
  const clone = [...array];

  let result = initialValue;

  const length = clone.length;

  for (let index = 0; index < length; index++) {
    result = fn(result, clone[index], index, array);
  }

  return result;
};

/**
 * @function reduceObject
 *
 * @description
 * reduce an object to a new value
 *
 * @param {function} fn the function called on each iteration
 * @param {any} [initialValue] the initial value to use in the reduction
 * @param {Object} object the object to map
 * @returns {Object} the mapped object
 */
export const reduceObject = (fn, initialValue, object) => {
  const clone = assign({}, object);
  const keys = getKeys(clone);

  let result = initialValue;
  let key;

  for (let index = 0; index < keys.length; index++) {
    key = keys[index];

    result = fn(result, clone[key], key, object);
  }

  return result;
};

export const reduce = onMatchType(reduceArray, reduceObject);

export default curry(reduce);
