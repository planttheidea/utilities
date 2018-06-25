// external dependencies
import {curry} from 'curriable';

// utils
import {isSameValueZero} from './_utils';
import {findProperty} from './findProperty';

export const propertyOf = (item, collection) => findProperty((value) => isSameValueZero(item, value), collection);

export default curry(propertyOf);
