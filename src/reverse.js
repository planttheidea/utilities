// utils
import {onMatchType} from './_utils';
import {
  reduceRightArray,
  reduceRightObject
} from './reduceRight';

export const reverseArray = (array) =>
  reduceRightArray(
    (newArray, value) => {
      newArray.push(value);

      return newArray;
    },
    [],
    array
  );

export const reverseObject = (object) =>
  reduceRightObject(
    (newObject, value, key) => {
      newObject[key] = value;

      return newObject;
    },
    {},
    object
  );

export const reverse = onMatchType(reverseArray, reverseObject);

export default reverse;
