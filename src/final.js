// external dependencies
import {curry} from 'curriable';

// utils
import {
  getKeys,
  onMatchType
} from './_utils';

export const finalArray = (size, array) => {
  const length = array.length;

  let result = [];

  for (let index = length - size; index < length; index++) {
    result.push(array[index]);
  }

  return result;
};

export const finalObject = (size, object) => {
  const keys = getKeys(object);
  const length = keys.length;

  let result = {},
      key;

  for (let index = length - size; index < length; index++) {
    key = keys[index];

    result[key] = object[key];
  }

  return result;
};

export const final = onMatchType(finalArray, finalObject);

export default curry(final);
