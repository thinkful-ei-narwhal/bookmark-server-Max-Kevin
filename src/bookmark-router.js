const express = require('express');
const bookmarkRouter = express.Router();
const { v4: uuid } = require('uuid');
const bodyParser = express.json();
const bookmarks = require('./store');
const logger = require('./logger');

bookmarkRouter
  .route('/bookmarks')
  .get((req, res) => {
    res.json(bookmarks)
  })
  .post(bodyParser, (req, res) => {
    const { rating, title, description } = req.body;
    const id = uuid();
    /* Validate that user information is valid *//* Validate that user information is valid *//* Validate that user information is valid */
    /* Validate that user information is valid *//* Validate that user information is valid *//* Validate that user information is valid */
      if (!description) {
          logger.error('Description is required');
          return res
            .status(400)
            .send('Description is required')
        }
      if (!rating) {
        logger.error('Rating is required');
        return res
          .status(400)
          .send('Rating is required')
        }
      if (!title) {
        logger.error('Title is required');
        return res
          .status(400)
          .send('Title is required')
        }
    /* Validate that user information is valid *//* Validate that user information is valid *//* Validate that user information is valid */
    /* Validate that user information is valid *//* Validate that user information is valid *//* Validate that user information is valid */

    bookmarks.push({
      id: id,
      rating: rating,
      title: title,
      description: description,
    });

    res.json(bookmarks);
  })

  bookmarkRouter
  .route('/bookmarks/:id')
  .get((req, res) => {
    res.send('Bookmark about to be deleted');
  })
  .delete((req, res) => {
    let newId  = req.params.id;
    let deletedBookmark = bookmarks.findIndex(bookmark => {
      bookmark.id === newId;
    });
    bookmarks.splice(deletedBookmark, 1);
    res.send('Bookmark deleted successfully.');
  })
  module.exports = bookmarkRouter;