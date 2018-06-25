// external dependencies
import {curry} from 'curriable';

// utils
import {
  getKeys,
  onMatchType
} from './_utils';

export const sortResults = (resultA, resultB) => (resultA > resultB ? 1 : resultA < resultB ? -1 : 0);

export const sortByArray = (fn, array) => [...array].sort((a, b) => sortResults(fn(a), fn(b)));

export const sortByObject = (fn, object) => {
  const keys = getKeys(object);

  keys.sort((keyA, keyB) => sortResults(fn(object[keyA]), fn(object[keyB])));

  let result = {},
      key;

  for (let index = 0; index < keys.length; index++) {
    key = keys[index];

    result[key] = object[key];
  }

  return result;
};

export const sortBy = onMatchType(sortByArray, sortByObject);

export default curry(sortBy);
