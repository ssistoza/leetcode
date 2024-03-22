const _threeSumClosest = {
  v1(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    let sum = nums[0] + nums[1] + nums[2];
    if (nums.length === 3) return sum;

    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        const _sum = nums[i] + nums[left] + nums[right];
        if (_sum === target) return _sum;

        if (_sum < target) {
          left++;
        } else {
          right--;
        }

        if (Math.abs(_sum - target) < Math.abs(sum - target)) {
          sum = _sum;
        }
      }
    }

    return sum;
  },
};

export const threeSumClosest = Object.entries(_threeSumClosest);
