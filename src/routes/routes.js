import { Router } from "express";

// Controllers
import BookController from "../controllers/BookController.js";
import AuthorController from "../controllers/AuthorController.js";

const routes = Router();

// Books
routes
    .route("/books")
    .get(BookController.index)
    .post(BookController.create)

routes
    .route("/books/:id")
    .get(BookController.getBook)
    .put(BookController.update)
    .delete(BookController.delete);

// Authors
routes
    .route("/authors")
    .get(AuthorController.index)
    .post(AuthorController.create);

routes
    .route("/authors/:id")
    .get(AuthorController.getAuthor)
    .put(AuthorController.update)
    .delete(AuthorController.delete);

export default routes;
