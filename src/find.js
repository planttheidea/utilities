// external dependencies
import {curry} from 'curriable';

// utils
import {onMatchType} from './_utils';
import {findProperty} from './findProperty';

export const findArray = (fn, array) => {
  const index = findProperty(fn, array);

  return ~index ? array[index] : -1;
};

export const findObject = (fn, object) => {
  const key = findProperty(fn, object);

  return key !== void 0 ? object[key] : void 0;
};

export const find = onMatchType(findArray, findObject);

export default curry(find);
