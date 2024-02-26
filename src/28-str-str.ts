const _strStr = {
  v1(haystack: string, needle: string): number {
    let ptr = 0;
    let found = new Set();

    for (let i = 0; i < haystack.length; i++) {
      const h = haystack[i];
      if (h !== needle[ptr]) {
        ptr = 0;

        if (found.size !== 0) {
          i = found.values().next().value;
          found.delete(i);
        }

        continue;
      }

      found.add(i);
      ptr++;

      if (ptr === needle.length) {
        return found.values().next().value;
      }
    }

    return -1;
  },
};

export const strStr = Object.entries(_strStr);
export default {
  fns: strStr,
  testcase: [['babbbbbabb', 'bbab']],
};
