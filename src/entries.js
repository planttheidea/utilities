// external dependencies
import {curry} from 'curriable';

// utils
import {onMatchType} from './_utils';
import {reduceObject} from './reduce';

export const entriesArray = (array) => [...array];

export const entriesObject = (object) =>
  reduceObject(
    (entries, value, key) => {
      entries.push([key, value]);

      return entries;
    },
    [],
    object
  );

export const entries = onMatchType(entriesArray, entriesObject);

export default curry(entries);
