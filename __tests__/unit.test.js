// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('(123) 456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('123-456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('123456 is not a valid phone number', () => {
  expect(isPhoneNumber('123456')).toBe(false);
});
test('abcd-efg-hijk is not a valid phone number', () => {
  expect(isPhoneNumber('abcd-efg-hijk')).toBe(false);
});

// isEmail
test('test@email.com is a valid email', () => {
  expect(isEmail('test@email.com')).toBe(true);
});
test('hello@ucsd.edu is a valid email', () => {
  expect(isEmail('hello@ucsd.edu')).toBe(true);
});
test('notanemail is not a valid email', () => {
  expect(isEmail('notanemail')).toBe(false);
});
test('missing@dotcom is not a valid email', () => {
  expect(isEmail('missing@dotcom')).toBe(false);
});

// isStrongPassword
test('Hello123 is a strong password', () => {
  expect(isStrongPassword('Hello123')).toBe(true);
});
test('Abcd_1 is a strong password', () => {
  expect(isStrongPassword('Abcd_1')).toBe(true);
});
test('hi is not a strong password (too short)', () => {
  expect(isStrongPassword('hi')).toBe(false);
});
test('1abc is not a strong password (starts with number)', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

// isDate
test('01/01/2024 is a valid date', () => {
  expect(isDate('01/01/2024')).toBe(true);
});
test('1/1/2024 is a valid date', () => {
  expect(isDate('1/1/2024')).toBe(true);
});
test('2024-01-01 is not a valid date', () => {
  expect(isDate('2024-01-01')).toBe(false);
});
test('01/01/24 is not a valid date (year not 4 digits)', () => {
  expect(isDate('01/01/24')).toBe(false);
});

// isHexColor
test('#FFF is a valid hex color', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('#1a2b3c is a valid hex color', () => {
  expect(isHexColor('#1a2b3c')).toBe(true);
});
test('#GGGGGG is not a valid hex color', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});
test('#12345 is not a valid hex color (5 digits)', () => {
  expect(isHexColor('#12345')).toBe(false);
});