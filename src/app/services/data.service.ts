import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Column } from '../interfaces/column.interface';
import { Table, TableData } from '../interfaces/table.interface';
import { columns } from '../mocks/columns';
import { data } from '../mocks/data';
import { tables } from '../mocks/tables';

@Injectable({providedIn: 'root'})
export class DataService {
  public getData(): Observable<TableData> {
    return of(data);
  }

  public getColumns(): Observable<Array<Column>> {
    return of(columns);
  }

  public getTables(): Observable<Array<Table>> {
    return of(tables);
  }

  public save(data: any): void {
    console.log('saved', data);
  }

  public delete(data: any): void {
    console.log('deleted', data);
  }
}
