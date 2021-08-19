import path from 'path';
import yargs from 'yargs';
import RextBuilder from '@rextjs/builder';
import RextServer from '@rextjs/server';
import devHandle from './dev';
import buildHandle from './build';
import startHandle from './start';

export const dev = devHandle;
export const build = buildHandle;
export const start = startHandle;

export const Builder = RextBuilder;
export const Server = RextServer;

export const run = () => yargs
  .command('dev', 'start dev server', ({ argv: { cwd, config } }) => dev(require(path.join(cwd, config))))
  .command('build', 'build the project', ({ argv: { cwd, config } }) => build(require(path.join(cwd, config))))
  .command('start', 'start the project', ({ argv: { cwd, config } }) => start(require(path.join(cwd, config))))
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
