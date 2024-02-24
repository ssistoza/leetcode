import { test } from 'vitest';

export function measure(str: string, fn: (ctx: any) => void) {
  test(str, (ctx) => {
    const start = performance.now();
    fn(ctx);
    const end = performance.now();

    // @ts-ignore Using the meta field is a bit of a hack.
    ctx.task.meta.duration = end - start;
  });
}
