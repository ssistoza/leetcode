import { test as _vitest } from 'vitest';

export function test(str: string, fn: (ctx: any) => void) {
  _vitest(str, (ctx) => {
    const start = performance.now();
    fn(ctx);
    const end = performance.now();

    // @ts-ignore Using the meta field is a bit of a hack.
    ctx.task.meta.duration = end - start;
  });
}
