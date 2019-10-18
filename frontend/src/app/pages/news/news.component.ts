import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';
import { Feed } from 'src/app/models/feed';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  feed: Feed[];

  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.feedService.getFeed().subscribe(feed => this.feed = feed);
  }

}
