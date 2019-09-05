import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseApi } from '../../../shared/core/base-api';
import { APPEvent } from '../models/event.model';
import { map } from 'rxjs/operators';

@Injectable()
export class EventsService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  addEvent(event: APPEvent): Observable<APPEvent> {
    return this.post('events', event);
  }

  getEvents(): any {
    return this.http
      .get('http://localhost:3000/events')
      .pipe(map((response: Response) => response));
  }

  getEventById(id: string): any {
    return this.http
      .get(`http://localhost:3000/events/${id}`)
      .pipe(map((response: Response) => response));
  }
}
