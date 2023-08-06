import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Client } = pg


export class AuthDatabase {
  constructor() {
    this.pool = null;
  }

  connect() {
    this.pool = new Client({
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        database: process.env.PG_DB_NAME,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
    });
    return this.pool.connect()
  }

    disconnect() {
        return this.pool.end();
    }

    query(query, values) {
      return this.pool.query(query, values);
    }
}