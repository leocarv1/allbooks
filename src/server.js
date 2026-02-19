import http from "http";
import app from "./app.js"
import { initDb } from "./db/index.js";

const PORT = 3333;

await initDb();

app.listen(PORT, () => {
    console.log("Server listening!")
});