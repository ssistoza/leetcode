import { describe, expect } from 'vitest';
import { dataTransform } from './i1-data-transform.js';
import { test } from '~lib/vitest.js';

describe.each(dataTransform)('internal1 dataTransform %s', (_, fn) => {
  test('should work', async () => {
    expect(await fn()).toBe(expect.arrayContaining(expect.anything()));
  });
});
