import path from 'path';
import fs from 'fs';
import Builder from '@rextjs/builder';
import Server from '@rextjs/server';

export default async (config) => {
  config.dev = false;
  if (!fs.existsSync(path.join(config.dir.root, config.dir.build))) {
    // 构建目录不存在先构建
    const builder = new Builder(config);
    await builder.build();
  }

  const server = new Server(config);

  await server.ready();

  server.listen();
};
