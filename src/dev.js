import Builder from '@rextjs/builder';
import Server from '@rextjs/server';

export default async (config) => {
  config.dev = true;

  const builder = new Builder(config);
  const server = new Server(config);

  await builder.build();

  await server.setBuilderInstance(builder);

  await server.ready();

  server.listen();
};
