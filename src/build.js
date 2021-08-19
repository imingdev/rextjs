import path from 'path';
import rm from 'rimraf';
import consola from 'consola';
import Builder from '@rextjs/builder';

export default (config) => {
  config.dev = false;

  return rm(path.join(config.dir.root, config.dir.build), async (err) => {
    if (err) throw err;
    const builder = new Builder(config);
    await builder.build();

    consola.success({
      message: '  Build complete.',
      badge: true,
    });
  });
};
