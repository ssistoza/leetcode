import { describe, expect } from 'vitest';
import { test } from '~lib/vitest.js';
import { strStr } from './28-str-str.js';

describe.each(strStr)('28. strStr %s', (_, fn) => {
  test('haystack = "sadbutsad", needle = "sad"', () => {
    expect(fn('sadbutsad', 'sad')).toBe(0);
  });

  test('haystack = "leetcode", needle = "leeto"', () => {
    expect(fn('leetcode', 'leeto')).toBe(-1);
  });

  test('haystack = "aquaphor", needle = "pho"', () => {
    expect(fn('aquaphor', 'pho')).toBe(4);
  });

  test('haystack = "mississippi", needle = "issip"', () => {
    expect(fn('mississippi', 'issip')).toBe(4);
  });
});
