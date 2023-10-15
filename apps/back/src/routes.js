import { createGame } from './domain/create-game/index.js'

export function routes(fastify) {
  fastify.post('/create-game', async (request, reply) => {
    try {
      await createGame({ ...request.body })
      return { message: 'Test de création de game réussi!' }
    } catch (err) {
      console.error('err:', err)
      reply
        .status(500)
        .send({ error: 'Erreur lors de la connexion à la base de données.' })
    }
  })
}
