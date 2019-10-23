import { Component, OnInit } from '@angular/core';
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

  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.feedService.getFeed().subscribe(feed => this.feed = feed);
  }

}
