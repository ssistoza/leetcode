import { describe, expect, test } from 'vitest';

function romanToInt(s: string): number {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  } as const;

  const maxLength = s.length;
  let pointer = maxLength - 1;
  let total = 0;

  let prev = null;
  while (pointer >= 0) {
    const _roman = roman[s[pointer] as keyof typeof roman];

    if (prev === null || prev <= _roman) {
      prev = _roman;
      pointer--;
      total += _roman;
      continue;
    }

    // Found, numbers should now be deprecating
    total -= _roman;
    pointer--;
  }

  return total;
}

describe('romanToInt', () => {
  test('III', () => {
    expect(romanToInt('III')).toBe(3);
  });

  test('IV', () => {
    expect(romanToInt('IV')).toBe(4);
  });

  test('IX', () => {
    expect(romanToInt('IX')).toBe(9);
  });

  test('LVIII', () => {
    expect(romanToInt('LVIII')).toBe(58);
  });

  test('MCMXCIV', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });
});
