import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Column } from '../interfaces/column.interface';
import { Table } from '../interfaces/table.interface';
import { columns } from '../mocks/columns';
import { data } from '../mocks/data';

@Injectable()
export class DataService {
  public getData(): Observable<Array<Table>> {
    return of(data);
  }

  public getColumns(): Observable<Array<Column>> {
    return of(columns);
  }

  public save(data: any): void {
    console.log('saved', data);
  }

  public delete(data: any): void {
    console.log('deleted', data);
  }
}
