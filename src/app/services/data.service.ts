import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data } from '../mocks/data';

@Injectable()
export class DataService {
  public getData(): Observable<any> {
    return of(data);
  }

  public save(data: any): void {
    console.log('saved', data);
  }

  public delete(data: any): void {
    console.log('deleted', data);
  }
}
