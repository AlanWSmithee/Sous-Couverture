export function queryPlayers(client, { namePlayer }) {
  return client.query(
    'INSERT INTO players (name, head_skin, body_skin, accessory) VALUES ($1, $2, $3, $4) RETURNING id',
    [namePlayer, 'jaune', 'jauneAussi', null]
  );
}

export function queryGames(client, { gameName, maxPlayers}) {
  return client.query(
    'INSERT INTO games (game_name, state_game, max_players, private, word_civil, word_undercover) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id'
      [gameName, 'waiting', maxPlayers, false, 'pomme', 'fraise']
  );
}

export function queryListPlayers(client, insertedIdPlayer, insertedIdGame) {
  client.query(
    'INSERT INTO list_players (id_players, id_games, score, role) VALUES ($1, $2, $3, $4)'
    [insertedIdPlayer, insertedIdGame, 0, "Mr.White"]
  );
}