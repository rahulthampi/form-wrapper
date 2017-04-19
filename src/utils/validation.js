import RegExp from './regExp';

const validation = {
  isExisting: value => value !== null && value !== undefined,

  matchValidationRule: (value, regEx) => regEx.test(value),

  isTrue: value => value === true,
  isFalse: value => value === false,
  isNull: value => value === null,
  isUndefined: value => value === undefined,

  isEmptyString: value => value === '',
  isEqual: (value, valueOne) => value === valueOne,
  isNumeric: (value) => {
    if (typeof value === 'number') return true;
    return validation.matchValidationRule(value, RegExp.Numeric);
  },
  isAlphabetic: value => validation.matchValidationRule(value, RegExp.Alphabetic),
  isWords: value => validation.matchValidationRule(value, RegExp.Words),
  isAlphaNumeric: value => validation.matchValidationRule(value, RegExp.AlphaNumeric),
  isDate: value => validation.matchValidationRule(value, RegExp.Date),
  isTime: value => validation.matchValidationRule(value, RegExp.Time),
  isDateTime: value => validation.matchValidationRule(value, RegExp.DateTime),
  isEmail: value => validation.matchValidationRule(value, RegExp.Email),
  isURL: value => validation.matchValidationRule(value, RegExp.Url),
};

export default validation;
