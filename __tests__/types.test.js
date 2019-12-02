const {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  castToNumber,
  getCaster
} = require('../lib/types.js');
  
describe('validator module', () => {
  describe('basic validation', () => {
    it('properly tells if a value is a numbers', () => {
      expect(isNumber(3)).toBeTruthy();
      expect(isNumber('hi')).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber(() => {})).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });
    it('properly tells if a value is a string', () => {
      expect(isString('hi')).toBeTruthy();
      expect(isString('true')).toBeTruthy();
      expect(isString('')).toBeTruthy();
      expect(isString('2')).toBeTruthy();
      expect(isString(2)).toBeFalsy();
      expect(isString([])).toBeFalsy();
      expect(isString({})).toBeFalsy();
      expect(isString(true)).toBeFalsy();
    });
    it('properly tells if a value is a boolean', () => {
      expect(isBoolean(true)).toBeTruthy();
      expect(isBoolean(false)).toBeTruthy();
      expect(isBoolean('true')).toBeFalsy();
      expect(isBoolean('false')).toBeFalsy();
      expect(isBoolean(2)).toBeFalsy();
      expect(isBoolean(0)).toBeFalsy();
      expect(isBoolean([])).toBeFalsy();
    });
    it('properly tells if a value is an array', () => {
      expect(isArray([])).toBeTruthy();
      expect(isArray({})).toBeTruthy();
      expect(isArray(2)).toBeFalsy();
      expect(isArray('what')).toBeFalsy();
      expect(isArray(false)).toBeFalsy();
    });
    it('properly tells if a value is an object', () => {
      expect(isObject([])).toBeTruthy();
      expect(isObject({})).toBeTruthy();
      expect(isObject(2)).toBeFalsy();
      expect(isObject('what')).toBeFalsy();
      expect(isObject(false)).toBeFalsy();
    });
  });
  
  describe('casters', () => {
    it('can cast values to a number', () => {
      expect(castToNumber(3)).toEqual(3);
      expect(castToNumber('3')).toEqual(3);
      expect(castToNumber(true)).toEqual(1);
      expect(castToNumber(false)).toEqual(0);
    });
  
    it('throws if value is not castable to number', () => {
      expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
      expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
    });
  });
  
  it('can get the right caster', () => {
    expect(getCaster(Number)).toEqual(castToNumber);
    expect(getCaster(Promise)).toBeNull();
  });
});
