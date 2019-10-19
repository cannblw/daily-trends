const express = require('express');
const router = express.Router();

const feedController = require('../controllers/feed-controller');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const feed = await feedController.findAll();

  res.send(feed);
});

module.exports = router;
