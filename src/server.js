import app from "./app.js"
import { initDb } from "./db/index.js";

const PORT = process.env.PORT || 3333;

await initDb();

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});