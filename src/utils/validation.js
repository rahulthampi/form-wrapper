const validation = {
  matchValidationValue: (value, regEx) => regEx.test(value),

  isString: () => { },
  isEmptyString: value => value === '',

  isNumeric: () => { },

  isTrue: value => value === true,
  isFalse: value => value === false,
  isUndefined: value => value === undefined,
};

export default validation;
