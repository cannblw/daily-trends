
const feedService = require('../services/feed-service');

class FeedController {

  findAll() {
    return feedService.findAll();
  }

} 

module.exports = new FeedController();
