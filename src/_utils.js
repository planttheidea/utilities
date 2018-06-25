export const assign = Object.assign;

export const getKeys = Object.keys;

export const isSameValueZero = (valueA, valueB) => valueA === valueB || (valueA !== valueA && valueB !== valueB);

export const onMatchType = (onArray, onObject) => (...args) => {
  const collection = args[args.length - 1];

  return Array.isArray(collection) ? onArray(...args) : onObject(...args);
};
