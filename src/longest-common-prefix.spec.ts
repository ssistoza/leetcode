import { describe, test, expect } from 'vitest';
import { longestCommonPrefix } from './longest-common-prefix.js';
import { measure } from '../lib/vitest.js';

describe.each(longestCommonPrefix)('longestCommonPrefix %s', (_, fn) => {
  measure('["flower","flow","flight"]', () => {
    expect(fn(['flower', 'flow', 'flight'])).toBe('fl');
  });

  measure('["dog","racecar","car"]', () => {
    expect(fn(['dog', 'racecar', 'car'])).toBe('');
  });
});
