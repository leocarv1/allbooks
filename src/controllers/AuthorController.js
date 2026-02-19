import Author from "../models/author.js";
import AuthorValidation from "../Validations/AuthorValidation.js";

class AuthorController {
    static async index(req, res, next) {
        try {
            const authors = await Author.findAll();
            return res.json(authors);
        } catch (err) {
            next(err)
        }
    }
    
    static async create(req, res, next) {
        try {
            const { firstName, lastName, birthday } = req.body;

            const validated = AuthorValidation.validation(req.body);

            if (!validated.valid) {
                return res.status(400).json({ message: validated.message });
            }
            
            const author = await Author.create({
                firstName,
                lastName,
                birthday
            });
            
            return res.status(201).json({
                message: "Author created",
                data: author,
            });

        } catch (err) {
            next(err)
        }
    }
    
    static async getAuthor(req, res, next) {
        try {
            const author = await Author.findOne({ where: { id: req.params.id } });
            
            if (!author) {
                return res.status(404).json({ message: "Author not found" });
            }
            
            return res.json(author);
        } catch (err) {
            next(err)
        }
    }
    
    static async update(req, res, next) {
        try {
            const { title } = req.body;
            
            if (!title) {
                return res.status(400).json({ message: "title is required" });
            }
            
            const book = await Author.findOne({ where: { id: req.params.id } });
            
            if (!book) {
                return res.status(404).json({ message: "Author not found" });
            }
            
            book.title = title;
            await book.save();
            
            return res.status(200).json({
                message: "Update successful",
                data: book,
            });
        } catch (err) {
            next(err)
        }
    }
    
    static async delete(req, res, next) {
        try {
            const author = await Author.findOne({ where: { id: req.params.id } });
            
            if (!author) {
                return res.status(404).json({ message: "Author not found" });
            }
            
            await author.destroy();
            
            return res.status(200).json({ message: "Deleted successful" });
        } catch (err) {
            next(err)
        }
    }
}

export default AuthorController;