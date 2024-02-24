import { describe, expect } from 'vitest';
import { removeElement } from './remove-element.js';
import { test } from '~lib/vitest.js';

describe.each(removeElement)('removeElement %s', (_, fn) => {
  test('[3,2,2,3], 3', () => {
    const num = [3, 2, 2, 3];
    expect(fn(num, 3)).toEqual(2);
    expect(num).toEqual([2, 2, '_', '_']);
  });

  test('[0,1,2,2,3,0,4,2], 2', () => {
    const num = [0, 1, 2, 2, 3, 0, 4, 2];
    expect(fn(num, 2)).toEqual(5);
    expect(num).toEqual([0, 1, 3, 0, 4, '_', '_', '_']);
  });
});
