function reverseNestedObject(inputObject) {
  let outputValue = {};
  let nestedArray = [];

  function recursiveGetValue(value, parent) {
    console.log('recursiveGetValue1', value, parent);
    // if (typeof value === 'string') {
    //   return value;
    // }
    // if (typeof value === 'object') {
    if (typeof value === 'string') {
      return {
        [value]: parent,
      };
    }
    const keys = Object.keys(value);
    const key = keys[0];
    console.log('key', key);
    return recursiveGetValue(value[key], parent ? { [key]: parent } : key);
    // return {
    //   [recursiveGetValue(value[key], value)]: value,
    // };
    // return {
    //   [value[key]]: recursiveGetValue(value[key]),
    // };
    // }

    // if (typeof value === 'string') {
    //   return value;
    // }
    // if (typeof value === 'object') {
    //   const keys = Object.keys(value);
    //   const key = keys[0];
    //   let result = {};
    //   const current = recursiveGetValue(value[key]);
    //   if (typeof current === 'string') {
    //     result = current;
    //   } else if (typeof current === 'object') {
    //     result[current] = key;
    //     // keys.forEach((key) => {
    //     //   result[recursiveGetValue(value[key])] = value;
    //     // });
    //   }
    //   console.log('value result', value, result);
    //   return result;
    // }
  }

  nestedArray = recursiveGetValue(inputObject);
  console.log('nestedArray', nestedArray);

  // let pointer;
  // for (let i = 0; i < nestedArray.length; i += 1) {
  //   let keys;
  //   if (typeof nestedArray[i] === 'string') {
  //     keys = { [nestedArray[i]]: nestedArray[i] };
  //   } else {
  //     keys = Object.keys(nestedArray[i]);
  //   }
  //   for (let key in keys) {
  //     if (i === 0) {
  //       pointer = keys[key];
  //     } else {
  //       pointer = {
  //         [keys[key]]: pointer,
  //       };
  //     }
  //   }
  // }
  // outputValue = pointer;
  // console.log('pointer', pointer);
  //
  // console.log('outputValue', outputValue);
  // return outputValue;
}

export default reverseNestedObject;
