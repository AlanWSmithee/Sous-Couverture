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

  fastify.post('/create-game', async (request, reply) => {
    try {
      const client = await fastify.pg.connect();
      const queryPlayer = await client.query("INSERT INTO \"players\" (\"name\", \"head_skin\", \"body_skin\", \"accessory\") VALUES ('"+request.body.namePlayer+"', 'jaune', 'jauneAussi', null) RETURNING id;");
      const insertedIdPlayer = queryPlayer.rows[0].id;

      const queryGame = await client.query("INSERT INTO \"games\" (\"game_name\", \"state_game\", \"max_players\", \"private\", \"word_civil\", \"word_undercover\") VALUES ('"+request.body.gameName+"', 'waiting', '"+request.body.maxPlayers+"', '"+request.body.private+"', 'pomme', 'poire') RETURNING id;");
      const insertedIdGame = queryGame.rows[0].id;

      const queryListPlayer = await client.query("INSERT INTO \"list_players\" (\"id_players\", \"id_games\", \"score\", \"role\") VALUES ('"+insertedIdPlayer+"', '"+insertedIdGame+"', 0, 'Mr.White');");
      client.release();
      return { message: 'Test de création de game réussi!' };
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