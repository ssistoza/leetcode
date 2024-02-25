const _strStr = {
  v1(haystack: string, needle: string): number {
    let ptr = 0;
    let found = [];

    for (let i = 0; i < haystack.length; i++) {
      const h = haystack[i];
      if (h !== needle[ptr]) {
        ptr = 0;
        const start = found.shift();

        if (start !== undefined) {
          i = start;
        }

        continue;
      }

      found.push(i);
      ptr++;

      if (ptr === needle.length) {
        return found.shift()!;
      }
    }

    return -1;
  },
};

export const strStr = Object.entries(_strStr);
