import { Component, OnInit } from '@angular/core';

import { FeedService } from 'src/app/services/feed.service';
import { Feed } from 'src/app/models/feed';
import { PublisherName } from 'src/app/models/publisher';

@Component({
  selector: 'app-news-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit() {

  }
}
