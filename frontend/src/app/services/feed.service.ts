import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { find, map, concatAll, tap } from 'rxjs/operators';

import { BaseService } from './base.service';
import { Feed } from '../models/feed';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FeedService extends BaseService {

  private readonly MAX_PREVIEW_CHARACTERS = 500;

  private feedList: Feed[] = [];

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getFeed(): Observable<Feed[]> {
    if (this.feedList.length !== 0) {
      return of(this.feedList);
    }

    return this.fetchFeed().pipe(
      map((feeds: Feed[]) => {
        return feeds.map((news: Feed, index: number) => {
          news.id = index;

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

  findById(id: number): Observable<Feed> {
    return this.getFeed().pipe(
      concatAll(),
      find((feed: Feed) => feed.id === id),
      tap(a => console.log(a))
    );
  }

  private fetchFeed(): Observable<Feed[]> {
    return this.http.get<Feed[]>(`${this.getBaseUrl()}/feed`);
  }
}
