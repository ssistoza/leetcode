import { describe, expect } from 'vitest';
import { romanToInt } from './roman-to-integer.js';
import { measure } from '~lib/vitest.js';

describe.each(romanToInt)('romanToInt %s', (_, fn) => {
  measure('III', () => {
    expect(fn('III')).toBe(3);
  });

  measure('IV', () => {
    expect(fn('IV')).toBe(4);
  });

  measure('IX', () => {
    expect(fn('IX')).toBe(9);
  });

  measure('LVIII', () => {
    expect(fn('LVIII')).toBe(58);
  });

  measure('MCMXCIV', () => {
    expect(fn('MCMXCIV')).toBe(1994);
  });
});
