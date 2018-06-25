export const objectClass = (object) => {
  const typeofObject = typeof object;

  return typeofObject === 'object'
    ? Object.prototype.toString.call(object).slice(8, -1)
    : `${typeofObject[0].toUpperCase()}${typeofObject.slice(1)}`;
};

export default objectClass;
