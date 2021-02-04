function reverseNestedObject(inputObject) {
  function recursiveGetValue(value, parent) {
    if (typeof value === 'string') {
      return {
        [value]: parent,
      };
    }
    const obj = {};
    for (let key in value) {
      Object.assign(obj, recursiveGetValue(
        value[key],
        parent
          ? { [key]: parent }
          : key
      ));
    }
    return obj;
  }

  return recursiveGetValue(inputObject);
}

export default reverseNestedObject;
