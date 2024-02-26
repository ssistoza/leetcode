# leetcode

A fun little repo typescript project journey on leetcode problems. The structure of this leetcode problems allow us to apply multiple version changes and check benchmark timing.

I was very curious to know whether writing code in lower-level context can drastically improve processing. In this case, we can verify by version whether it is indeed better or not.

## Installation

1. Clone Repo
2. `yarn install`

### Option 1: Vitest

Use vitest to run the test, which run all testable leetcode problems.

### Option 2: Running leetcode via script.

To run leet code via script, use the problem number to find the file to run.

`yarn start 1` to run problem number 1.

#### Changing run count.

By default we run the script 10 times skipping the very first run in the event of any node specific initialization that occurs.

`yarn start 1 --runs=5`
