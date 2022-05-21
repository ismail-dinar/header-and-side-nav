import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Column } from '../interfaces/column.interface';
import { Table, TableData } from '../interfaces/table.interface';
import { DataService } from '../services/data.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  public message: string | null;
  public gridData$: Observable<TableData> =
    this.stateService.currentTable$.pipe(
      switchMap((table) => this.dataService.getData(table))
    );

  public columns$: Observable<Array<Column>> =
    this.stateService.currentTable$.pipe(
      switchMap((table) => this.dataService.getColumns(table))
    );

  public currentTable$: Observable<Table> =
    this.stateService.currentTable$.pipe(
      tap((table) => {
        this.message = !table ? 'Please select a table' : null;
      })
    );

  public constructor(
    private stateService: StateService,
    private dataService: DataService
  ) {}
}
