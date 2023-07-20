import Fastify from 'fastify'
const fastify = Fastify()

fastify.register(import('@fastify/postgres'), {
  connectionString: 'postgres://root:root@127.0.0.1/undercover'
})


fastify.get('/', async (request, reply) => {
   return { hello: 'world' }
  })


  fastify.get('/test-database', async (request, reply) => {
   try {
    const client = await fastify.pg.connect();
    await client.query('SELECT NOW() as now');
    client.release();
    return { message: 'Connexion à la base de données réussie!' };
  } catch (err) {
    console.error('Erreur lors de la connexion à la base de données:', err);
    reply.status(500).send({ error: 'Erreur lors de la connexion à la base de données.' });
  }
  })
  
  // Run the server!
  const start = async () => {
    try {
      await fastify.listen({ port: 3000 })
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()