import { describe, test, expect } from 'vitest';
import { isPalindrome } from './palindrome-number.js';

describe.each(isPalindrome)('isPalindrome %s', (_, fn) => {
  test('121', () => {
    expect(fn(121)).toBe(true);
  });

  test('-121', () => {
    expect(fn(-121)).toBe(false);
  });

  test('10', () => {
    expect(fn(10)).toBe(false);
  });

  test('1', () => {
    expect(fn(1)).toBe(true);
  });

  test('11', () => {
    expect(fn(11)).toBe(true);
  });
});
