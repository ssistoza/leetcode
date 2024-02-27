import fs from 'node:fs';
import { Readable } from 'node:stream';

import csv from 'fast-csv';

const metData = fs.existsSync('./lib/met.csv');
if (!metData) {
  await fetch(
    'https://media.githubusercontent.com/media/metmuseum/openaccess/master/MetObjects.csv'
  )
    .then((res) => res.body)
    .then((data) => {
      return new Promise((resolve) => {
        // @ts-ignore
        const rs = Readable.fromWeb(data);
        const ws = fs.createWriteStream('./lib/met.csv');
        // @ts-ignore
        const t = rs.pipe(ws);

        ws.on('finish', () => {
          resolve(true);
        });
      });
    });
}

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
