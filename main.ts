import c from 'picocolors';
import yargs from 'yargs';
import fs from 'node:fs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv)).argv;
const _argv = argv as Awaited<typeof argv>;
const filename = String(_argv._[0]);
const runs = (_argv.runs as number) ?? 10;

const testfile = fs
  .readdirSync('./src')
  .filter((f) => f.startsWith(filename!) && !f.endsWith('spec.ts'))
  .at(0);

console.log({ testfile });
const { fns, testcase } = (await import(`./src/${testfile}`)).default;

console.log();
for (const [version, fn] of fns) {
  console.log(c.magenta(`File: ${testfile}, Version: ${version}`));

  for (let i = 0; i < runs; i++) {
    const start = performance.now();
    const before = process.memoryUsage();
    fn(...testcase);
    const after = process.memoryUsage();
    const end = performance.now();
    console.log(c.bold(c.white(`Run ${i + 1}: `)), c.yellow(end - start));
  }
}
