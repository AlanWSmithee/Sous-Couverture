import { getErrorData } from './validateCreateGame.js'
import {
  queryPlayers,
  queryGames,
  queryListPlayers,
} from './queryCreateGame.js'

import { database } from '../../database/auth/injecte-dependency.js'

export async function createGame({ namePlayer, gameName, maxPlayers }) {
  const errors = getErrorData({ namePlayer, gameName, maxPlayers })
  if (errors.length > 0) {
    throw new Error(JSON.stringify({ ...errors }))
  }
  await database.connect()
  const rowPlayers = await queryPlayers({ namePlayer })
  const rowGames = await queryGames({ gameName, maxPlayers })
  const rowPlayersId = rowPlayers.rows[0].id
  const rowGamesId = rowGames.rows[0].id

  await queryListPlayers(rowPlayersId, rowGamesId)
  await database.disconnect()
}
