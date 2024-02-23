import { describe, test, expect } from 'vitest';
import { longestCommonPrefix } from './longest-common-prefix.js';

describe.each(longestCommonPrefix)('longestCommonPrefix %s', (_, fn) => {
  test('["flower","flow","flight"]', () => {
    expect(fn(['flower', 'flow', 'flight'])).toBe('fl');
  });

  test('["dog","racecar","car"]', () => {
    expect(fn(['dog', 'racecar', 'car'])).toBe('');
  });
});
