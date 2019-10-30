import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { FeedService } from 'src/app/services/feed.service';
import { Feed } from 'src/app/models/feed';
import { PublisherName } from 'src/app/models/publisher';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  feed: Feed[];

  // Make it available on HTML
  PublisherName = PublisherName;

  private readonly MAX_PREVIEW_CHARACTERS = 500;

  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.feedService.getFeed().pipe(
      map((feeds: Feed[]) => {
        return feeds.map(news => {
          if (news.body) {
            news.shortBody = news.body.substr(0, this.MAX_PREVIEW_CHARACTERS);

            if (news.body.length !== news.shortBody.length) {
              news.isExpandable = true;
              news.shortBody = news.shortBody.concat('...');
            } else {
              news.isExpandable = false;
            }
          }
          return news;
        });
      })
    ).subscribe(feed => this.feed = feed);
  }

}
