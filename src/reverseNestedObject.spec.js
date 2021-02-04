import reverseNestedObject from './reverseNestedObject';

describe('reverseNestedObject', function () {
  it('should match reversed object', function () {
    let input1Value = {
      hired: {
        be: {
          to: {
            deserve: 'I',
          },
        },
      },
    };

    let output1Value = {
      I: {
        deserve: {
          to: {
            be: 'hired',
          },
        },
      },
    };
    const result = reverseNestedObject(input1Value);

    expect(JSON.stringify(result)).toEqual(JSON.stringify(output1Value));
  });

  it('should match reversed object', function () {
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
          }
        },
      },
    };

    let output2Value = {
      oneFinal: {
        oneInner: {
          oneIn: 'one',
        },
      },
      twoFinal: {
        twoInInner: {
          twoInner: {
            twoIn: 'two',
          },
        },
      },
    };

    const result = reverseNestedObject(input2Value);

    expect(JSON.stringify(result)).toEqual(JSON.stringify(output2Value));
  });
});
