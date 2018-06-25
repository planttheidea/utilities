// external dependencies
import {curry} from 'curriable';

// utils
import {onMatchType} from './_utils';

export const hasArray = (key, array) => typeof key === 'number' && key === ~~key && key > -1 && key < array.length;

export const hasObject = (key, object) => Object.hasOwnProperty.call(object, key);

export const has = onMatchType(hasArray, hasObject);

export default curry(has);
