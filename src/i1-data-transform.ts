import fs from 'node:fs';
import csv from 'fast-csv';

const data = new Promise((resolve) => {
  const _data: unknown[] = [];
  fs.createReadStream('./lib/met.csv', 'utf8')
    .pipe(csv.parse({ headers: true }))
    .on('error', (error) => console.error(error))
    .on('data', (row) => {
      _data.push(row);
    })
    .on('end', () => resolve(_data));
});

const val = (await data) as any[];

const _dataTransform = {
  async v1() {
    const asianArt = val
      .filter((v: any) => v.Department === 'Asian Art')
      .map((v: any) => v['Object Name']);
    return asianArt;
  },
  async v2() {
    const vals = [];
    for (const v of val) {
      if (v.Department === 'Asian Art') {
        vals.push(v['Object Name']);
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
