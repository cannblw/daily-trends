import { Component, OnInit, OnDestroy } from '@angular/core';

import { FeedService } from 'src/app/services/feed.service';
import { Feed } from 'src/app/models/feed';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PublisherName } from 'src/app/models/publisher';

@Component({
  selector: 'app-news-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class NewsDetailComponent implements OnInit, OnDestroy {

  newsDetailSubscription: Subscription;
  news: Feed;

  // Make it available on HTML
  PublisherName = PublisherName;

  constructor(
    private route: ActivatedRoute,
    private feedService: FeedService
  ) { }

  ngOnInit() {
    const newsId = this.route.snapshot.params.id;

    if (newsId) {
      this.newsDetailSubscription = this.feedService.findById(+newsId).subscribe(news => {
        this.news = news;
      });
    }
  }

  ngOnDestroy() {
    this.newsDetailSubscription.unsubscribe();
  }
}
