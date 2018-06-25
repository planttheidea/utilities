// external dependencies
import {curry} from 'curriable';

// utils
import {onMatchType} from './_utils';
import {
  reduceArray,
  reduceObject
} from './reduce';

export const filterArray = (fn, collection) =>
  reduceArray(
    (newCollection, item, key, collection) => {
      if (fn(item, key, collection)) {
        newCollection.push(item);
      }

      return newCollection;
    },
    [],
    collection
  );

export const filterObject = (fn, collection) =>
  reduceObject(
    (newCollection, item, key, collection) => {
      if (fn(item, key, collection)) {
        newCollection[key] = item;
      }

      return newCollection;
    },
    {},
    collection
  );

export const filter = onMatchType(filterArray, filterObject);

export default curry(filter);
