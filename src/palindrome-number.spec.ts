import { describe, expect } from 'vitest';
import { isPalindrome } from './palindrome-number.js';
import { measure } from '~lib/vitest.js';

describe.each(isPalindrome)('isPalindrome %s', (_, fn) => {
  measure('121', () => {
    expect(fn(121)).toBe(true);
  });

  measure('-121', () => {
    expect(fn(-121)).toBe(false);
  });

  measure('10', () => {
    expect(fn(10)).toBe(false);
  });

  measure('1', () => {
    expect(fn(1)).toBe(true);
  });

  measure('11', () => {
    expect(fn(11)).toBe(true);
  });
});
