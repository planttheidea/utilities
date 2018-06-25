/**
 * @function sleep
 *
 * @description
 * delay function, returning a promsie that resolves after the time passed
 *
 * @param {number} [milliseconds=0] the time to sleep for
 * @returns {Promise} the promise resolving after the milliseconds pased
 */
export const sleep = (milliseconds = 0) => new Promise((resolve) => setTimeout(resolve, milliseconds));

export default sleep;
