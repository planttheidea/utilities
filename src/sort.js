// external dependencies
import {curry} from 'curriable';

// utils
import {
  getKeys,
  onMatchType
} from './_utils';

export const sortArray = (fn, array) => [...array].sort(fn);

export const sortObject = (fn, object) => {
  const keys = getKeys(object);

  keys.sort((keyA, keyB) => fn(object[keyA], object[keyB]));

  let result = {},
      key;

  for (let index = 0; index < keys.length; index++) {
    key = keys[index];

    result[key] = object[key];
  }

  return result;
};

export const sort = onMatchType(sortArray, sortObject);

export default curry(sort);
