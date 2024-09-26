const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

router.get('/', async(req, res) => {
    const books = await Book.find();
    res.json(books);
});

router.get('/:isbn', async(req, res) => {
    const book = await Book.findOne({ isbn: req.params.isbn });
    if (book) res.json(book);
    else res.status(404).send('Libro no encontrado');
});
// Ruta para registrar un nuevo libro
router.post('/books', async(req, res) => {
    const { title, author, isbn, publishedDate, rating } = req.body;

    try {
        const newBook = new Book({
            title,
            author,
            isbn,
            publishedDate,
            rating
        });

        await newBook.save();
        res.status(201).json({ message: 'Libro registrado exitosamente', book: newBook });
    } catch (error) {
        res.status(400).json({ message: 'Error al registrar el libro', error: error.message });
    }
});
module.exports = router;