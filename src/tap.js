/**
 * @function identity
 *
 * @description
 * a function always returning the first thing passed after logging it
 *
 * @param {any} value the value passed
 * @returns {any} the first parameter passed
 */
export const tap = (value) => {
  // eslint-disable-next-line no-console
  console.log(value);

  return value;
};

export default tap;
