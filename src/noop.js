// utils
import {always} from './always';

/**
 * @function noop
 *
 * @description
 * a non-operation, always returning undefined regardless of what is passed
 *
 * @returns {void}
 */
export const noop = always(void 0);

export default noop;
