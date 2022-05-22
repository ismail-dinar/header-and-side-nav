import { Component, Input, OnInit } from '@angular/core';
import { WindowRef, WindowService } from '@progress/kendo-angular-dialog';
import { AddEvent } from '@progress/kendo-angular-grid';
import { cloneDeep, lowerFirst, startCase } from 'lodash';
import { singular } from 'pluralize';
import { Observable } from 'rxjs';
import { switchMap, tap, filter } from 'rxjs/operators';
import { EditFormComponent } from '../edit-form/edit-form.component';
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
      filter(Boolean),
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
    private dataService: DataService,
    private windowService: WindowService
  ) {}

  public getDisplayName(name: string): string {
    return startCase(name);
  }

  public edit(
    tableName: string,
    columns: Column[],
    isNew: boolean,
    data?: Record<string, any>
  ): void {
    const windowRef: WindowRef = this.windowService.open({
      title: `Add new ${lowerFirst(singular(tableName))}`,
      content: EditFormComponent,
      width: 600,
      height: 400,
    });

    const windowInstance = windowRef.content.instance as EditFormComponent;
    windowInstance.columns = columns;
    windowInstance.isNew = isNew;
    windowInstance.model = cloneDeep(data);
  }
}
