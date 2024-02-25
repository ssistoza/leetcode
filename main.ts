import c from 'picocolors';

const RUNS = 10;

for (let i = 0; i < RUNS; i++) {
  const start = performance.now();
  // Run tests
  const end = performance.now();
  console.log(c.bold(c.white(`Run ${i + 1}: `)), c.yellow(end - start));
}
