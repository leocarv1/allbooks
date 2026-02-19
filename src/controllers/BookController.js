import Book from "../models/Books.js";
import Author from "../models/author.js";

class BookController {
    static async index(req, res, next) {
        try {
            const books = await Book.findAll();
            return res.json(books);
        } catch (err) {
            next(err)
        }
    }
    
    static async create(req, res) {
        try {
            const { title, authorId } = req.body;
            
            if (!title) {
                return res.status(400).json({ message: "title is required" });
            }

            const author = await Author.findByPk(authorId);
            
            const book = await Book.create({ title, authorId }, { include: [ author ]});
            
            return res.status(201).json({
                message: "Book created",
                data: book,
            });
        } catch (err) {
            next(err)
        }
    }
    
    static async getBook(req, res, next) {
        try {
            const book = await Book.findOne({ where: { id: req.params.id } });
            
            if (!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            
            return res.json(book);
        } catch (err) {
            next(err)
        }
    }
    
    static async update(req, res) {
        try {
            const { title } = req.body;
            
            if (!title) {
                return res.status(400).json({ message: "title is required" });
            }
            
            const book = await Book.findOne({ where: { id: req.params.id } });
            
            if (!book) {
                return res.status(404).json({ message: "Book not found" });
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
    
    static async delete(req, res) {
        try {
            const book = await Book.findOne({ where: { id: req.params.id } });
            
            if (!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            
            await book.destroy();
            
            return res.status(200).json({ message: "Deleted successful" });
        } catch (err) {
            next(err)
        }
    }
}

export default BookController;