const _lengthOfLastWord = {
  v1(s: string): number {
    const words = s.trim();

    let word = 0;
    for (let i = words.length - 1; i >= 0; i--) {
      if (words[i] === ' ') {
        return words.length - i - 1;
      }

      word++;
    }

    return words.length;
  },
  v2(s: string): number {
    const words = s.trim().split(' ');
    return words[words.length - 1].length;
  },
};

export const lengthOfLastWord = Object.entries(_lengthOfLastWord);
