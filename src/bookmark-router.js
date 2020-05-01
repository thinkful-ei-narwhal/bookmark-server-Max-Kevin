const express = require('express')
const bookmarkRouter = express.Router()
const { v4: uuid } = require('uuid')
const logger = require('./logger')
const bodyParser = express.json()
const bookmarks = require('./store')

bookmarkRouter
  .route('/bookmarks')
  .get((req, res) => {
    res.json(bookmarks)
  })
  .post(bodyParser, (req, res) => {
    const { rating, title, description } = req.body;
    const id = uuid();

    if (!rating) {
      logger.error('Rating is required');
      return res
        .status(400)
        .send('Invalid data')
    }

    if (!title) {
      logger.error('Title is required');
      return res
        .status(400)
        .send('Invalid data')
    }

    if (!description) {
      logger.error('Description is required');
      return res
        .status(400)
        .send('Invalid data')
    }

    bookmarks[id] = {
      rating: rating,
      title: title,
      description: description,
    }
    
    res.json(bookmarks)
  })

  module.exports = bookmarkRouter