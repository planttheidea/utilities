// utils
import {
  getKeys,
  onMatchType
} from './_utils';
import {map} from './map';

export const keysArray = (array) => map((value) => +value, getKeys(array));

export const keysObject = getKeys;

export const keys = onMatchType(keysArray, keysObject);

export default keys;
