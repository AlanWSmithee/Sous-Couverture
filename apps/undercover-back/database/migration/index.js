import pg from "pg";
import dotenv from "dotenv";
import chalk from "chalk";

const { Client } = pg
dotenv.config();

const client = new Client({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DB_NAME,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

await client.connect();

async function dropTable () {
    try {
      const queries = [
        `DROP TABLE IF EXISTS "list_players";`,
        `DROP TABLE IF EXISTS "games";`,
        `DROP TABLE IF EXISTS "players";`
      ];

      for (const query of queries) {
        await client.query(query);
      }
      console.log(chalk.green("suppression des tables réussie"));
    } catch (err) {
      console.log(chalk.red(err));
    }
}

async function createTable() {
    try {
      const queries = [`
        CREATE TABLE IF NOT EXISTS "players" (
            "id" SERIAL,
            "name" VARCHAR(255) NOT NULL,
            "head_skin" VARCHAR(255) NOT NULL,
            "body_skin" VARCHAR(255) NOT NULL,
            "accessory" VARCHAR(255),
            PRIMARY KEY ("id")
            );`,
        `CREATE TABLE IF NOT EXISTS "games" (
            "id" SERIAL,
            "game_name" VARCHAR(255) NOT NULL,
            "state_game" VARCHAR(255) NOT NULL,
            "max_players" INTEGER NOT NULL,
            "private" BOOLEAN NOT NULL,
            "word_civil" VARCHAR(255) NOT NULL,
            "word_undercover" VARCHAR(255) NOT NULL,
            "turn" INTEGER,
            "id_players_turn" SERIAL,
            PRIMARY KEY ("id"),
            CONSTRAINT fk_id_players_turn FOREIGN KEY ("id_players_turn") REFERENCES "players" ("id")
        );`,
        `CREATE TABLE IF NOT EXISTS "list_players" (
            "id_players" SERIAL,
            "id_games" SERIAL,
            "score" INTEGER NOT NULL,
            "role" VARCHAR(255) NOT NULL,
            "turn_elimination" INTEGER,
            PRIMARY KEY ("id_players", "id_games"),
            CONSTRAINT fk_id_players FOREIGN KEY ("id_players") REFERENCES "players" ("id"),
            CONSTRAINT fk_id_games FOREIGN KEY ("id_games") REFERENCES "games" ("id")
        );`];
    
    for (const query of queries) {
        await client.query(query);
    }
    console.log(chalk.green('création des tables réussie'))

    } catch(err) {
        console.log(chalk.red(err))
    }
}

try {
    await dropTable();
    await createTable();
    console.log(chalk.green('tout est OK'))
}catch (err) {
    console.log(chalk.red(err))
}