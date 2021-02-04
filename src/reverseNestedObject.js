function reverseNestedObject(inputObject) {
  let outputValue = {};
  let nestedArray = [];

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

  outputValue = recursiveGetValue(inputObject);

  return outputValue;
}

export default reverseNestedObject;
