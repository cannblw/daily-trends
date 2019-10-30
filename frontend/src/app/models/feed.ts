
import { Publisher } from './publisher';

export class Feed {
  title: string;
  body: string;
  image: string;
  source: string;
  publisher: Publisher;

  shortBody?: string;
  isExpandable: boolean;
}
