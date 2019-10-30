import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from './base.service';
import { Feed } from '../models/feed';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FeedService extends BaseService {

  private readonly MAX_PREVIEW_CHARACTERS = 500;

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getFeed(): Observable<Feed[]> {
    return this.fetchFeed().pipe(
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
    );
  }

  private fetchFeed(): Observable<Feed[]> {
    return this.http.get<Feed[]>(`${this.getBaseUrl()}/feed`);
  }
}
