import path from 'path';
import yargs from 'yargs';

import devHandle from './dev';
import buildHandle from './build';
import startHandle from './start';

export const run = () => yargs
  .command('dev', 'start dev server', ({ argv: { cwd, config } }) => devHandle(require(path.join(cwd, config))))
  .command('build', 'build the project', ({ argv: { cwd, config } }) => buildHandle(require(path.join(cwd, config))))
  .command('start', 'start the project', ({ argv: { cwd, config } }) => startHandle(require(path.join(cwd, config))))
  .option('cwd', {
    alias: 'cwd',
    default: process.cwd(),
    describe: 'root path',
  })
  .option('c', {
    alias: 'config',
    default: './rext.config.js',
    describe: 'config path',
  })
  .argv;
