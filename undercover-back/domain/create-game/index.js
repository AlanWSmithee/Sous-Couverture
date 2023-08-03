import { getErrorData } from "./validateCreateGame.js";
import {
  queryPlayers,
  queryGames,
  queryListPlayers,
} from "./queryCreateGame.js";

export async function createGame(client, { namePlayer, gameName, maxPlayers }) {
  const errors = getErrorData({ namePlayer, gameName, maxPlayers });
  if (errors.length > 0) {
    throw new Error(JSON.stringify({ ...errors }));
  }

  const rowPlayers = await queryPlayers(client, { namePlayer });
  const rowGames = await queryGames(client, { gameName, maxPlayers });
  const rowPlayersId = rowPlayers.rows[0].id;
  const rowGamesId = rowGames.rows[0].id;

  await queryListPlayers(client, rowPlayersId, rowGamesId);
}



