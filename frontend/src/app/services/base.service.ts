import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class BaseService {

  protected getBaseUrl(): string {
    return environment.baseUrl || '';
  }
}
