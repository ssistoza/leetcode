const _isPalindrome: Record<string, (x: number) => boolean> = {
  v1(x: number): boolean {
    if (x < 0) return false;
    if (x < 10) return true;

    const str = x.toString();
    const length = str.length;

    let left = 0;
    let right = length - 1;

    while (right > left) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }

    return true;
  },
};

export const isPalindrome = Object.entries(_isPalindrome);
