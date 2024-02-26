const _romanToInt = {
  v1(s: string): number {
    const roman = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    } as const;

    const maxLength = s.length;
    let pointer = maxLength - 1;
    let total = 0;

    let prev = null;
    while (pointer >= 0) {
      const _roman = roman[s[pointer] as keyof typeof roman];

      if (prev === null || prev <= _roman) {
        prev = _roman;
        pointer--;
        total += _roman;
        continue;
      }

      // Found, numbers should now be deprecating
      total -= _roman;
      pointer--;
    }

    return total;
  },
};

export const romanToInt = Object.entries(_romanToInt);
export default romanToInt;
