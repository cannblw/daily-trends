
const enclosure = require('./enclosure');

class RssFeed {
  constructor() {
    this.creator = '';
    this.title = '';
    this.link = '';
    this.pubDate = '';
    this['dc:creator'] = '';
    this['content:encoded'] = '';
    this.content = '';
    this.contentSnippet = '';
    this.guid = '';
    this.categories = [];
    this.isoDate = '';
    this.itunes = {};
    this.enclosure = new Enclosure();
  }
}

module.export = RssFeed;