import { describe, test, expect } from 'vitest';

function longestCommonPrefix(strs: string[]): string {
  const [first, ...rest] = strs;

  let last = 1;
  while (last <= first!.length) {
    for (const str of rest) {
      const prefix = first!.slice(0, last);
      const strPrefix = str.slice(0, last);
      if (prefix !== strPrefix) return first!.slice(0, last - 1);
    }

    last++;
  }

  return first!;
}

describe('longestCommonPrefix', () => {
  test('["flower","flow","flight"]', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  });

  test('["dog","racecar","car"]', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });
});
