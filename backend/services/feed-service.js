const fetch = require('node-fetch');

const Parser = require('rss-parser');
const parser = new Parser();

const environment = require('../environment');
const Publisher = require('../models/publisher');

class FeedService {
  async findAll() {
    const elMundoFeed = await this.findElMundoFeed();
    const elPaisFeed = await this.findElPaisFeed();

    const elMundoItems = await Promise.all(
      elMundoFeed.items.slice(0, environment.MAX_RESULTS_PER_SOURCE).map(async item => {
        item['content:encoded'] = await this.findElMundoBody(item.link);
        item.publisher = Publisher.EL_MUNDO;
        return item;
      })
    );

    const elPaisItems = elPaisFeed.items.slice(0, environment.MAX_RESULTS_PER_SOURCE).map(item => {
      item.publisher = Publisher.EL_PAIS;
      return item;
    });

    const feed = [...elMundoItems, ...elPaisItems];

    return feed;
  }

  async findElMundoFeed() {
    return parser.parseURL(environment.EL_MUNDO_FEED);
  }

  async findElPaisFeed() {
    return parser.parseURL(environment.EL_PAIS_FEED);
  }

  async findElMundoBody(newsUrl) {
    const jsonUrl = newsUrl.replace(/\.html$/, '.json');

    const json = await fetch(jsonUrl).then(res => res.json());
    const body = json.texto;

    return body || null;
  }
}

module.exports = new FeedService();