// utils
import {
  getKeys,
  onMatchType
} from './_utils';

export const headArray = (array) => array[0];

export const headObject = (object) => object[getKeys(object)[0]];

export const head = onMatchType(headArray, headObject);

export default head;
