// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber
test('valid phone number with area code', () => {
  expect(isPhoneNumber('(619) 555-1234')).toBe(true);
});
test('valid phone number with dashes', () => {
  expect(isPhoneNumber('619-555-1234')).toBe(true);
});
test('invalid phone number with letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});
test('invalid phone number too short', () => {
  expect(isPhoneNumber('619-456')).toBe(false);
});

// isEmail
test('valid ucsd email', () => {
  expect(isEmail('lorenzo@ucsd.edu')).toBe(true);
});
test('valid gmail email', () => {
  expect(isEmail('lorenzo123@gmail.com')).toBe(true);
});
test('invalid email no at sign', () => {
  expect(isEmail('lorenzoucsd.edu')).toBe(false);
});
test('invalid email no domain extension', () => {
  expect(isEmail('lorenzo@')).toBe(false);
});

// isStrongPassword
test('valid password starting with letter', () => {
  expect(isStrongPassword('Lorenzo1')).toBe(true);
});
test('valid password with underscore', () => {
  expect(isStrongPassword('abcd_1234')).toBe(true);
});
test('invalid password starts with number', () => {
  expect(isStrongPassword('1Lorenzo')).toBe(false);
});
test('invalid password too short', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

// isDate
test('valid date with birthday format', () => {
  expect(isDate('5/6/2004')).toBe(true);
});
test('valid date two digit month and day', () => {
  expect(isDate('12/25/2023')).toBe(true);
});
test('invalid date wrong separator', () => {
  expect(isDate('2023-12-25')).toBe(false);
});
test('invalid date year too short', () => {
  expect(isDate('5/6/04')).toBe(false);
});

// isHexColor
test('valid 6 digit hex color', () => {
  expect(isHexColor('#FF5733')).toBe(true);
});
test('valid 3 digit hex color', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('invalid hex color wrong characters', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});
test('invalid hex color wrong length', () => {
  expect(isHexColor('#12345')).toBe(false);
});