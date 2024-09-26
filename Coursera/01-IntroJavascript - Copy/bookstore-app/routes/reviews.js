const express = require('express');
const Review = require('../models/Review');
const Book = require('../models/Book');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/:bookId', authMiddleware, async(req, res) => {
    const { content, rating } = req.body;
    const review = new Review({ book: req.params.bookId, user: req.userId, content, rating });
    await review.save();
    res.status(201).send('Reseña agregada');
});

module.exports = router;