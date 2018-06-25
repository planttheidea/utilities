/**
 * @function assign
 *
 * @description
 * shallowly merge multiple objects into the first one passed
 *
 * @param {...Array<Object>} objects the objects to merge
 * @returns {Object} the merged objects
 */
export const assign = Object.assign;

/**
 * @function getKeys
 *
 * @description
 * get the keys for the passed object
 *
 * @param {Object} object the object to get the keys for
 * @returns {Array<string>} the keys for the object
 */
export const getKeys = Object.keys;

/**
 * @function isSameValueZero
 *
 * @description
 * are the two values equal based on SameValueZero
 *
 * @param {any} valueA the first value to compare
 * @param {any} valueB the second value to compare
 * @returns {boolean} are valueA and valueB equal by SameValueZero
 */
export const isSameValueZero = (valueA, valueB) => valueA === valueB || (valueA !== valueA && valueB !== valueB);

/**
 * @function onMatchType
 *
 * @description
 * HOF that will call the appropriate type-specific method
 *
 * @param {function} onArray method to call when the colleciton is an array
 * @param {function} onObject method to call when the collection is an object
 * @returns {function(...Array<any>): any}
 */
export const onMatchType = (onArray, onObject) => (...args) => {
  const collection = args[args.length - 1];

  return Array.isArray(collection) ? onArray(...args) : onObject(...args);
};
