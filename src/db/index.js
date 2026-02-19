import { Sequelize } from "sequelize";
import { dbConfig } from "./config.js";

// Models
import Book from '../models/Books.js';
import Author from '../models/Author.js'

export const connect = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        define: dbConfig.define,
        logging: false, 
    }
);

Book.init(connect);
Author.init(connect);

export async function initDb() {
    try {
        await connect.authenticate();
        console.log("✅ DB conectado com sucesso!");
    } catch (error) {
        console.error("❌ Falha ao conectar no DB:", error);
        throw error;
    }
}
