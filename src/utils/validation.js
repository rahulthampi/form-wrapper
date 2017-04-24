import RegExp from './regExp';

const validation = {
  isExisting: value => value !== null && value !== undefined,

  matchValidationRule: (value, regEx) => regEx.test(value),

  isTrue: value => value === true,
  isFalse: value => value === false,
  isNull: value => value === null,
  isUndefined: value => value === undefined,

  isString: value => typeof value === 'string' && value !== '',
  isEmptyString: value => typeof value === 'string' && value === '',
  isEqual: (value, valueOne) => value === valueOne,
  isEqualToField: (values, value, valueOne) => value === values[valueOne],
  isNumeric: (value) => {
    if (typeof value !== 'number') return false;
    return validation.matchValidationRule(value, RegExp.Numeric);
  },
  isAlphabetic: value => validation.matchValidationRule(value, RegExp.Alphabetic),
  isAlphabeticWords: value => validation.matchValidationRule(value, RegExp.AlphabeticWords),
  isAlphaNumeric: value => validation.matchValidationRule(value, RegExp.AlphaNumeric),
  isPassword: value => validation.matchValidationRule(value, RegExp.Password),
  isDate: value => validation.matchValidationRule(value, RegExp.Date),
  isTime: value => validation.matchValidationRule(value, RegExp.Time),
  isDateTime: value => validation.matchValidationRule(value, RegExp.DateTime),
  isEmail: value => validation.matchValidationRule(value, RegExp.Email),
  isURL: value => validation.matchValidationRule(value, RegExp.Url),
};

export default validation;
