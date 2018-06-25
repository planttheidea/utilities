// external dependencies
import {curry} from 'curriable';

// utils
import {onMatchType} from './_utils';
import {
  reduceArray,
  reduceObject
} from './reduce';

export const handleForEach = (fn) => (passedThrough, item, key, collection) => {
  fn(item, key, collection);

  return passedThrough;
};

export const forEachArray = (fn, array) => reduceArray(handleForEach(fn), array, array);

export const forEachObject = (fn, forEach) => reduceObject(handleForEach(fn), forEach, forEach);

export const forEach = onMatchType(forEachArray, forEachObject);

export default curry(forEach);
