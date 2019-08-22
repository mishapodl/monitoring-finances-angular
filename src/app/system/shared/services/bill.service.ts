import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bill } from '../models/bill.model';
import { BaseApi } from '../../../shared/core/base-api';

@Injectable()
export class BillService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getBill(): Observable<Bill> {
    return this.get('bill');
  }

  getCurrency(base: string = 'RUB'): Observable<any> {
    return this.http
      .get(`http://api.fixer.io/latest?base=${base}`)
      .pipe(map((response: Response) => response));
  }
}
