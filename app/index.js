const fastify = require('fastify')({ logger: true });
console.info('Fastify connect');

// Declare a route
fastify.get('/*', async (request, reply) => {
  console.info(request);  
  const body = request.body;
  const headers = request.headers;
  const params = request.params;
  const query = request.query;
  const rawReq = request.raw;
  
  return {
    Body: body,
    Headers: headers, 
    Params: params, 
    Query: query
  };
  
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3773)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()