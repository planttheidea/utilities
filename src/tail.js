// utils
import {
  getKeys,
  onMatchType
} from './_utils';
import {
  finalArray,
  finalObject
} from './final';

export const tailArray = (array) => finalArray(1, array)[0];

export const tailObject = (object) => {
  const last = finalObject(1, object);

  return last[getKeys(last)[0]];
};

export const tail = onMatchType(tailArray, tailObject);

export default tail;
