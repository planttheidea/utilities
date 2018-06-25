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
export const reduceRightArray = (fn, initialValue, array) => {
  const clone = [...array];

  let result = initialValue;

  for (let index = clone.length - 1; index >= 0; index--) {
    result = fn(result, clone[index], index, array);
  }

  return result;
};

/**
 * @function reduceRightObject
 *
 * @description
 * reduce an object to a new value
 *
 * @param {function} fn the function called on each iteration
 * @param {any} [initialValue] the initial value to use in the reduction
 * @param {Object} object the object to map
 * @returns {Object} the mapped object
 */
export const reduceRightObject = (fn, initialValue, object) => {
  const clone = assign({}, object);
  const keys = getKeys(clone);

  let result = initialValue,
      key;

  for (let index = keys.length - 1; index >= 0; index--) {
    key = keys[index];

    result = fn(result, clone[key], key, object);
  }

  return result;
};

export const reduceRight = onMatchType(reduceRightArray, reduceRightObject);

export default curry(reduceRight);
