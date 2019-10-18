import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Feed } from '../models/feed';
import { Publisher } from '../models/publisher';

@Injectable()
export class FeedService {

  getFeed(): Observable<Feed[]> {
    const feedList: Feed[] = [];

    const feed: Feed = {
      title: 'SAMPLE TITLE',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut odio vehicula, lacinia urna at, lacinia ni
        bh. Proin venenatis volutpat tortor, a pellentesque justo commodo ac. Class aptent taciti sociosqu ad litor
        a torquent per conubia nostra, per inceptos himenaeos. Morbi accumsan at purus suscipit rhoncus. Vestibulum eget cursus erat, ne
        c posuere dolor. In ultrices eu quam ut malesuada. Aliquam eu massa rutrum, volutpat leo laoreet, cursus turpis. Pellen
        tesque interdum tincidunt molestie.`,
      image: 'http://via.placeholder.com/640x360',
      source: 'http://samplesourceurl.com/source',
      publisher: Publisher.EL_MUNDO,
    };

    for (let i = 0; i < 10; ++i) {
      feedList.push(feed);
    }

    return of(feedList);
  }
}
