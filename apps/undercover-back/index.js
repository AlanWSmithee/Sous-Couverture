import Fastify from 'fastify'
import dotenv from "dotenv";
dotenv.config();

const fastify = Fastify()

fastify.register(import("@fastify/postgres"), {
  connectionString: `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DB_NAME}`,
});


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