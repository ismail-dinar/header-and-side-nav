import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Table } from '../interfaces/table.interface';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  public currentTable$: Observable<Table> = this.stateService.currentTable$;

  public constructor(private stateService: StateService) {}
}
