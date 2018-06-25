// utils
import {reduce} from './reduce';

export const values = (collection) =>
  reduce(
    (array, value) => {
      array.push(value);

      return array;
    },
    [],
    collection
  );

export default values;
