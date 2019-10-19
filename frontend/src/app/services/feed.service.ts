import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from './base.service';
import { Feed } from '../models/feed';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FeedService extends BaseService {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getFeed(): Observable<Feed[]> {
    return this.http.get<Feed[]>(`${this.getBaseUrl()}/feed`);
  }
}
