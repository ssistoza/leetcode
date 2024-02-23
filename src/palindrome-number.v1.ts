import { test, expect, describe } from 'vitest';

function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x < 10) return true;

  const str = x.toString();
  const length = str.length;

  let left = 0;
  let right = length - 1;

  while (right > left) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

describe('isPalindrome', () => {
  test('121', () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test('-121', () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  test('10', () => {
    expect(isPalindrome(10)).toBe(false);
  });

  test('1', () => {
    expect(isPalindrome(1)).toBe(true);
  });

  test('11', () => {
    expect(isPalindrome(11)).toBe(true);
  });
});
