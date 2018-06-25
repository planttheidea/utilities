/* eslint-disable */

import * as utils from '../src';

const array = [1, 2, 3, 4, 5, 6];
const object = {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6};

const otherArray = ['foo', 'bar', 'baz'];
const otherObject = {foo: 'foo', bar: 'bar', baz: 'baz'};

console.log('always', utils.always('foo')());

console.log('combine array', utils.combine(array, otherArray));
console.log('combine object', utils.combine(object, otherObject));

console.log('contains array', utils.contains(2, array));
console.log('contains object', utils.contains(2, object));
console.log('contains not array', utils.contains('2', array));
console.log('contains not object', utils.contains('2', object));

console.log('entries array', utils.entries(array));
console.log('entries object', utils.entries(object));

console.log('filter array', utils.filter((value) => value > 1, array));
console.log('filter object', utils.filter((value) => value > 1, object));

console.log('final array', utils.final(2, array));
console.log('final object', utils.final(2, object));

console.log('find array', utils.find((value) => value > 1, array));
console.log('find object', utils.find((value) => value > 1, object));

console.log('findProperty array', utils.findProperty((value) => value > 1, array));
console.log('findProperty object', utils.findProperty((value) => value > 1, object));

console.log('forEach array', utils.forEach((value) => console.log(value), array));
console.log('forEach object', utils.forEach((value) => console.log(value), object));

console.log('has array', utils.has(2, array));
console.log('has object', utils.has('two', object));
console.log('has not array', utils.has('2', array));
console.log('has not object', utils.has(2, object));

console.log('head array', utils.head(array));
console.log('head object', utils.head(object));

console.log('identity', utils.identity('identity'));

console.log('initial array', utils.initial(2, array));
console.log('initial object', utils.initial(2, object));

console.log('keys array', utils.keys(array));
console.log('keys object', utils.keys(object));

console.log('map array', utils.map((value) => value * value, array));
console.log('map object', utils.map((value) => value * value, object));

console.log('noop', utils.noop('noop'));

console.log('object class array', utils.objectClass(array));
console.log('object class boolean', utils.objectClass(true));
console.log('object class date', utils.objectClass(new Date()));
console.log('object class map', utils.objectClass(new Map()));
console.log('object class number', utils.objectClass(123));
console.log('object class null', utils.objectClass(null));
console.log('object class object', utils.objectClass(object));
console.log('object class set', utils.objectClass(new Set()));
console.log('object class string', utils.objectClass('string'));
console.log('object class undefined', utils.objectClass());

console.log('propertyOf array', utils.propertyOf(2, array));
console.log('propertyOf object', utils.propertyOf(2, object));

console.log('reduce array', utils.reduce((sum, value) => sum + value, 0, array));
console.log('reduce object', utils.reduce((sum, value) => sum + value, 0, object));

console.log('reduce right array', utils.reduceRight((sum, value) => sum + value, 0, array));
console.log('reduce right object', utils.reduceRight((sum, value) => sum + value, 0, object));

console.log('reverse array', utils.reverse(array));
console.log('reverse object', utils.reverse(object));

console.log('sort array', utils.sort((a, b) => (a % 2 === 0 ? -1 : 1), array));
console.log('sort object', utils.sort((a, b) => (a % 2 === 0 ? -1 : 1), object));

const arrayCollection = [{key: 'foo'}, {key: 'bar'}, {key: 'baz'}];
const objectCollection = {one: {key: 'foo'}, two: {key: 'bar'}, three: {key: 'baz'}};

console.log('sortBy array', utils.sortBy(({key}) => key, arrayCollection));
console.log('sortBy object', utils.sortBy(({key}) => key, objectCollection));

console.log('tail array', utils.tail(array));
console.log('tail object', utils.tail(object));

console.log('tap', utils.tap('tapped value'));

try {
  utils.throws('Some error');
} catch (error) {
  console.log('throws', error);
}

console.log('values array', utils.values(array));
console.log('values object', utils.values(object));

const now = Date.now();

console.log('sleep time start');
utils.sleep(3000).then(() => console.log('sleep time end', Date.now() - now));
