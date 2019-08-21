import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BillService {
  constructor(private http: HttpClient) {}

  getBill(): any {
    return this.http
      .get('http://localhost:3000/bill')
      .pipe(map((response: Response) => response));
  }

  getCurrency(base: string = 'RUB'): Observable<any> {
    return this.http
      .get(`http://api.fixer.io/latest?base=${base}`)
      .pipe(map((response: Response) => response));
  }
}
