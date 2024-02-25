const _searchInsert = {
  v1(nums: number[], target: number): number {
    const mid = Math.floor(nums.length / 2);

    if (nums[mid] === target) return mid;
    if (nums.length === 1) return nums[0] < target ? 1 : 0;

    if (nums[mid] > target) return _searchInsert.v1(nums.slice(0, mid), target);
    if (nums[mid] < target)
      return mid + _searchInsert.v1(nums.slice(mid), target);
  },
  v2(nums: number[], target: number): number {
    const index = nums.findIndex((num) => num >= target);
    return index === -1 ? nums.length : index;
  },
};

export const searchInsert = Object.entries(_searchInsert);
