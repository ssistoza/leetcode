import { describe, expect } from 'vitest';
import { longestCommonPrefix } from './longest-common-prefix.js';
import { test } from '../lib/vitest.js';

describe.each(longestCommonPrefix)('longestCommonPrefix %s', (_, fn) => {
  test('["flower","flow","flight"]', () => {
    expect(fn(['flower', 'flow', 'flight'])).toBe('fl');
  });

  test('["dog","racecar","car"]', () => {
    expect(fn(['dog', 'racecar', 'car'])).toBe('');
  });
});
