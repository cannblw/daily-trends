
const Parser = require('rss-parser');
const parser = new Parser();

const environment = require('../environment');

class FeedService {
  async findAll() {
    const elMundoFeed = await this.findElMundoFeed();
    const elPaisFeed = await this.findElPaisFeed();

    const elMundoItems = elMundoFeed.items;
    const elPaisItems = elPaisFeed.items;

    const feed = [...elMundoItems, ...elPaisItems];

    return feed;
  }

  async findElMundoFeed() {
    return parser.parseURL(environment.EL_MUNDO_FEED);
  }

  async findElPaisFeed() {
    return parser.parseURL(environment.EL_PAIS_FEED);
  }
}

module.exports = new FeedService();