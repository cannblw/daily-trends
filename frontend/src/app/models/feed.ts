
import { Publisher } from './publisher';

export interface Feed {
  title: string;
  body: string;
  image: string;
  source: string;
  publisher: Publisher;
}
