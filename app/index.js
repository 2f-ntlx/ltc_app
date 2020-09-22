const fastify = require('fastify')({ logger: true });
console.log('Fastify connect');

// Declare a route
fastify.get('/app', async (request, reply) => {
  return { hello: 'LTC app' }
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