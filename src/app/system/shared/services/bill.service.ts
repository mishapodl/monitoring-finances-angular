import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bill } from '../models/bill.model';
import { BaseApi } from '../../../shared/core/base-api';

const KEY = 'fe79ad99779d19bee34ed9eabf7a1fee';

@Injectable()
export class BillService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getBill(): any {
    return this.http
      .get('http://localhost:3000/bill')
      .pipe(map((response: Response) => response));
  }

  getCurrency(base: string = 'USD'): Observable<any> {
    return this.http
      .get(`http://data.fixer.io/api/latest?access_key=${KEY}`)
      .pipe(map((response: Response) => response));
  }
}
