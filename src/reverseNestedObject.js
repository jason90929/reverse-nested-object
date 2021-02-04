function reverseNestedObject(inputObject) {
  let outputValue = {};
  const nestedArray = [];

  function recursiveGetValue(value) {
    nestedArray.push(value);
    if (typeof value === 'string') {
      return;
    }

    if (typeof value === 'object') {
      for (let key in value) {
        console.log('in', key, value, value[key]);
        recursiveGetValue(value[key]);
      }
    }
  }

  recursiveGetValue(inputObject);
  // console.log('result', result);
  console.log('nestedArray', nestedArray);

  let pointer;
  for (let i = 0; i < nestedArray.length; i += 1) {
    let keys;
    if (typeof nestedArray[i] === 'string') {
      keys = { [nestedArray[i]]: nestedArray[i] };
    } else {
      keys = Object.keys(nestedArray[i]);
    }
    for (let key in keys) {
      if (i === 0) {
        pointer = keys[key];
      } else {
        pointer = {
          [keys[key]]: pointer,
        };
      }
    }
  }
  outputValue = pointer;
  console.log('pointer', pointer);

  console.log('outputValue', outputValue);
  return outputValue;
}

export default reverseNestedObject;
