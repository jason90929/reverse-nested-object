import reverseNestedObject from './reverseNestedObject';
/**
 * Please use TypeScript/JS to answer question
 * Welcome to answer with unit testing code if you can
 *
 * After you finish coding, please push to your GitHub account and share the link with us.
 */

// Please write a function to reverse the following nested input value into output value

let input1Value = {
  hired: {
    be: {
      to: {
        deserve: 'I',
      },
    },
  },
};

const result1 = reverseNestedObject(input1Value);
console.log('result1', result1);

let input2Value = {
  one: {
    oneIn: {
      oneInner: 'oneFinal',
    },
  },
  two: {
    twoIn: {
      twoInner: {
        twoInInner: 'twoFinal',
      },
    },
  },
};

const result2 = reverseNestedObject(input2Value);
console.log('result2', result2);

let input3Value = {
  group: {
    one: {
      oneInner: 'oneFinal',
      oneAnother: 'oneAnotherFinal',
    },
    two: 'twoFinal',
  },
};

const result3 = reverseNestedObject(input3Value);
console.log('result3', result3);
