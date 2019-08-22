import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseApi {
  private baseUrl = 'http://localhost:3000/';

  constructor(public http: HttpClient) {
  }

  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  public get(url: string = ''): any {
    return this.http.get(this.getUrl(url))
      .pipe(map((response: Response) => response[0]));
  }

  public post(url: string = '', data: any = {}): any {
    return this.http.post(this.getUrl(url), data)
      .pipe(map((response: Response) => response));
  }

  public put(url: string = '', data: any = {}): any {
    return this.http.put(this.getUrl(url), data)
      .pipe(map((response: Response) => response));
  }
}
