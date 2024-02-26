const _longestCommonPrefix: Record<string, (strs: string[]) => string> = {
  v1(strs) {
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
  },
};

export const longestCommonPrefix = Object.entries(_longestCommonPrefix);

export default {
  fns: longestCommonPrefix,
  testcase: [
    ['flower', 'flow', 'flight'],
    ['dog', 'racecar', 'car'],
  ],
};
