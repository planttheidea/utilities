/**
 * @function always
 *
 * @description
 * create  function that always returns the value passed
 *
 * @param {any} value the value to always return
 * @returns {function(): any} the function that will return the value
 */
export const always = (value) => () => value;

export default always;
