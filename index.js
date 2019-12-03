const { isNumber, isString, isBoolean, isArray, isObject, isFunction } = require('./lib/types.js');

console.log(isNumber('3'));
console.log(isNumber(3));
console.log(isString(2));
console.log(isString('hey'));
console.log(isBoolean('hey'));
console.log(isBoolean(false));
console.log(isArray('hey'));
console.log(isArray(['hey']));
console.log(isObject('hey'));
console.log(isObject({ name: 'travis ' }));
console.log(isFunction('hey'));
console.log(isFunction(() => {}));
