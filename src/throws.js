/**
 * @function throws
 *
 * @description
 * throws an error with the message passed
 *
 * @throws
 *
 * @param {string} message the message for the error
 * @param {Error} [ErrorType=Error] the type of error to throw
 */
export const throws = (message, ErrorType = Error) => {
  throw new ErrorType(message);
};

export default throws;
