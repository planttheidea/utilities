// external dependencies
import {curry} from 'curriable';

// utils
import {
  getKeys,
  onMatchType
} from './_utils';

export const initialArray = (size, array) => {
  let result = new Array(size);

  for (let index = 0; index < size; index++) {
    result[index] = array[index];
  }

  return result;
};

export const initialObject = (size, object) => {
  const keys = getKeys(object);

  let result = {},
      key;

  for (let index = 0; index < size; index++) {
    key = keys[index];

    result[key] = object[key];
  }

  return result;
};

export const initial = onMatchType(initialArray, initialObject);

export default curry(initial);
