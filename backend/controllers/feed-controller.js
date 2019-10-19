
const feedService = require('../services/feed-service');
const logger = require('../services/logger-service');

class FeedController {
  async findAll() {
    logger.i('Retrieving feed');
    return feedService.findAll();
  }

} 

module.exports = new FeedController();
