const _dataTransform = {
  async v1() {
    const data = await fetch('https://emojihub.yurace.pro/api/all');
    const json = (await data.json()) as { name: string; category: string }[];

    return json
      .filter((val) => val.category === 'flags')
      .map((val) => val.name);
  },
  async v2() {
    const data = await fetch('https://emojihub.yurace.pro/api/all');
    const json = (await data.json()) as { name: string; category: string }[];

    const vals = [];
    for (const val of json) {
      if (val.category === 'flags') {
        vals.push(val.name);
      }
    }

    return vals;
  },
};

export const dataTransform = Object.entries(_dataTransform);
export default {
  fns: dataTransform,
  testcase: [],
};
