
const feedService = require('../services/feed-service');
const logger = require('../services/logger-service');

const FeedResponseDto = require('../models/dto/feed-response-dto');

class FeedController {
  async findAll() {
    logger.i('Retrieving feed');

    const serverFeed = await feedService.findAll();
    
    const responseFeed = serverFeed.map(item => {
      return FeedResponseDto.fromServerItem(item);
    });

    return responseFeed;
  }

} 

module.exports = new FeedController();
