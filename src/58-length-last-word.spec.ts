import { describe, expect } from 'vitest';
import { lengthOfLastWord } from './58-length-last-word.js';
import { test } from '~lib/vitest.js';

describe.each(lengthOfLastWord)('58. lengthOfLastWord %s', (_, fn) => {
  test('s = "Hello World"', () => {
    expect(fn('Hello World')).toBe(5);
  });

  test('s = "luffy is still joyboy"', () => {
    expect(fn('luffy is still joyboy')).toBe(6);
  });

  test('s = "a"', () => {
    expect(fn('a')).toBe(1);
  });

  test('s = "   fly me   to   the moon  "', () => {
    expect(fn('   fly me   to   the moon  ')).toBe(4);
  });
});
