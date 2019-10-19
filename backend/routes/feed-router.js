const express = require('express');
const router = express.Router();

const feedController = require('../controllers/feed-controller');

/* GET users listing. */
router.get('/', (req, res, next) => {
  const feed = feedController.findAll();

  res.send(feed);
});

module.exports = router;
