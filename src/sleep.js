export const sleep = (milliseconds = 0) => new Promise((resolve) => setTimeout(resolve, milliseconds));

export default sleep;
