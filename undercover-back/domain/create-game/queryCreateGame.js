import { database } from "../../database/auth/injecte-dependency.js";

export function queryPlayers({ namePlayer }) {
  return database.query(
    'INSERT INTO players (name, head_skin, body_skin, accessory) VALUES ($1, $2, $3, $4) RETURNING id',
    [namePlayer, 'jaune', 'jauneAussi', null]
  );
}

export function queryGames({ gameName, maxPlayers}) {
  return database.query(
    'INSERT INTO games (game_name, state_game, max_players, private, word_civil, word_undercover) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
      [gameName, 'waiting', maxPlayers, false, 'pomme', 'fraise']
  );
}

export function queryListPlayers(insertedIdPlayer, insertedIdGame) {
  return database.query(
    'INSERT INTO list_players (id_players, id_games, score, role) VALUES ($1, $2, $3, $4)',
    [insertedIdPlayer, insertedIdGame, 0, "Mr.White"]
  );
}