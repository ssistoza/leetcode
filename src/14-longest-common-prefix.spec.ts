import { describe, expect } from 'vitest';
import { longestCommonPrefix } from './14-longest-common-prefix.js';
import { test } from '../lib/vitest.js';

describe.each(longestCommonPrefix)('14. longestCommonPrefix %s', (_, fn) => {
  test('["flower","flow","flight"]', () => {
    expect(fn(['flower', 'flow', 'flight'])).toBe('fl');
  });

  test('["dog","racecar","car"]', () => {
    expect(fn(['dog', 'racecar', 'car'])).toBe('');
  });

  test('["doggy","doggy daycare","doggy bowl"]', () => {
    expect(fn(['doggy', 'doggy daycare', 'doggy bowl'])).toBe('doggy');
  });
});
