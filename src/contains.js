// external dependencies
import {curry} from 'curriable';

// utils
import {onMatchType} from './_utils';
import {propertyOf} from './propertyOf';

export const containsArray = (item, array) => !!~propertyOf(item, array);

export const containsObject = (item, object) => propertyOf(item, object) !== void 0;

export const contains = onMatchType(containsArray, containsObject);

export default curry(contains);
