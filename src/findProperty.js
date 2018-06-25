// external dependencies
import {curry} from 'curriable';

// utils
import {
  getKeys,
  onMatchType
} from './_utils';

export const findPropertyArray = (fn, array) => {
  for (let index = 0; index < array.length; index++) {
    if (fn(array[index], index, array)) {
      return index;
    }
  }

  return -1;
};

export const findPropertyObject = (fn, object) => {
  const keys = getKeys(object);

  let key;

  for (let index = 0; index < keys.length; index++) {
    key = keys[index];

    if (fn(object[key], key, object)) {
      return key;
    }
  }
};

export const findProperty = onMatchType(findPropertyArray, findPropertyObject);

export default curry(findProperty);
