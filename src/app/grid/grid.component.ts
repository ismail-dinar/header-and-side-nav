import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Table, TableData } from '../interfaces/table.interface';
import { DataService } from '../services/data.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  public message: string;
  public gridData$: Observable<TableData> = this.dataService.getData();

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
