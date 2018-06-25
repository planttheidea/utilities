export const throws = (message, ErrorType = Error) => {
  throw new ErrorType(message);
};

export default throws;
