const _removeElement = {
  v1(nums: number[], val: number): number {
    let ptr: number[] = [];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
        ptr.push(i);
        nums[i] = '_';
      } else {
        const index = ptr.shift();
        if (index !== undefined) {
          nums[index] = nums[i];
          nums[i] = '_';
          ptr.push(i);
        }
      }
    }

    return ptr.shift()!;
  },
};

export const removeElement = Object.entries(_removeElement);

export default {
  fns: removeElement,
  testcase: [[0, 1, 2, 2, 3, 0, 4, 2], 2],
};
