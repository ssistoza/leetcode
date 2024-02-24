import { VerboseReporter } from 'vitest/reporters';

import type {
  Benchmark,
  BenchmarkResult,
  File,
  Reporter,
  SuiteHooks,
  Task,
  TaskResultPack,
  VitestRunMode,
} from 'vitest';
import c from 'picocolors';

export default class CustomReporter
  extends VerboseReporter
  implements Reporter
{
  async reportTestSummary(files: File[], errors: unknown[]) {
    super.reportTestSummary(files, errors);

    files.forEach((file) => {
      file.tasks.forEach((task) => {
        this.ctx.logger.log(c.italic(c.blue(`${task.name}`)));
        // @ts-ignore
        task.tasks?.forEach(({ name, meta }) => {
          this.ctx.logger.log(c.white(`  ${name}`), c.yellow(meta.duration));
        });
      });
    });
  }
}
