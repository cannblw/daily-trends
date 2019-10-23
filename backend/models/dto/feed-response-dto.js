
class FeedResponseDto {
  constructor() {
    this.title = '';
    this.body = '';
    this.image = '';
    this.source = '';
    this.publisher = null;
  }

  static fromServerItem(serverItem) {
    const feed = new FeedResponseDto();
    feed.image = (serverItem.enclosure && serverItem.enclosure.url) || null;

    feed.publisher = serverItem.publisher;
    
    feed.source = serverItem.link || null;
    feed.title = serverItem.title || null;

    feed.body = serverItem['content:encoded'] || null;
    
    return feed;
  }
}

module.exports = FeedResponseDto;
