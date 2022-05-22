import { Table } from './../interfaces/table.interface';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditService {
  public add(data: Record<string, any>, table: Table): Observable<any> {
    return of(`added ${JSON.stringify(data)} to ${table.name}`);
  }

  public edit(data: Record<string, any>, table: Table): Observable<any> {
    return of(`edited ${JSON.stringify(data)} in ${table.name}`);
  }

  public remove(data: Record<string, any>, table: Table): Observable<any> {
    return of(`removed ${JSON.stringify(data)} from ${table.name}`);
  }
}
