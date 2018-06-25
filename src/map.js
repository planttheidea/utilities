// external dependencies
import {curry} from 'curriable';

// utils
import {onMatchType} from './_utils';
import {
  reduceArray,
  reduceObject
} from './reduce';

export const mapArray = (fn, array) =>
  reduceArray(
    (newCollection, item, key, collection) => {
      newCollection.push(fn(item, key, collection));

      return newCollection;
    },
    [],
    array
  );

export const mapObject = (fn, map) =>
  reduceObject(
    (newCollection, item, key, collection) => {
      newCollection[key] = fn(item, key, collection);

      return newCollection;
    },
    {},
    map
  );

export const map = onMatchType(mapArray, mapObject);

export default curry(map);
