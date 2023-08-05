import Fastify from 'fastify'
import { routes } from './routes.js'


// dotenv.config();

const fastify = Fastify()

// fastify.register(import("@fastify/postgres"), {
//   connectionString: `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DB_NAME}`,
// });


  routes(fastify)
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