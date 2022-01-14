import fastify from 'fastify';
import indexRoute from './routes/index.route';
import maximoRoute from './routes/maximo.route';

function createServer() {
  const server = fastify({ logger: { prettyPrint: true } });
  server.register(indexRoute, { prefix: "/maximo/oslc/os/mxapisr" });
  server.register(maximoRoute, { prefix: "/dummy" });

  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString());
    res.send({ error });
  });

  return server;
}

export default createServer;
