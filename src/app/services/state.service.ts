import { Injectable } from '@angular/core';
import { isEqual } from 'lodash';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Table } from '../interfaces/table.interface';

@Injectable({ providedIn: 'root' })
export class StateService {
  private currentTableSubject: ReplaySubject<Table> = new ReplaySubject<Table>(
    1
  );
  public currentTable$: Observable<Table> =
    this.currentTableSubject.asObservable();

  public setCurrentTable(table: Table): void {
    this.currentTableSubject.next(table);
  }

  public isSelected(table: Table): Observable<boolean> {
    return this.currentTable$.pipe(
      map((currentTbale) => isEqual(currentTbale, table))
    );
  }
}
