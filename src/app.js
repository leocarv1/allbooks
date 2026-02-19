import express from "express";
import routes from "./routes/routes.js";
import cors from 'cors';

// Middlewares
import handlingErrors from "./middlewares/handlingErrors.js";
import handling404 from "./middlewares/handling404.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(handlingErrors);
app.use(handling404);

export default app;