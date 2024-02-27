import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    reporters: ['./lib/CustomReporter.ts'],
    cache: false,
    slowTestThreshold: -1,
    alias: {
      '~lib': path.resolve(__dirname, './lib'),
    },
    coverage: {
      enabled: true,
      include: ['src'],
      thresholds: {
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
  },
});
