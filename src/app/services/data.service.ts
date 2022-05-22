import { Injectable } from '@angular/core';
import { get } from 'lodash';
import { Observable, of } from 'rxjs';
import { Column } from '../interfaces/column.interface';
import { ILookup } from '../interfaces/lookup.interface';
import { Table, TableData } from '../interfaces/table.interface';
import { columns, tablesColumns } from '../mocks/columns';
import { data } from '../mocks/data';
import { currencies, lookups } from '../mocks/lookups';
import { tables } from '../mocks/tables';

@Injectable({providedIn: 'root'})
export class DataService {
  public getData(table: Table): Observable<TableData> {
    return of(get(data, table.name));
  }

  public getColumns(table: Table): Observable<Array<Column>> {
    return of(get(tablesColumns, table.name));
  }

  public getTables(): Observable<Array<Table>> {
    return of(tables);
  }

  public getLookupFor(lookupName: string): Observable<ILookup[]> {
    return of(get(lookups, lookupName));
  }

  public save(data: any): void {
    console.log('saved', data);
  }

  public delete(data: any): void {
    console.log('deleted', data);
  }
}
