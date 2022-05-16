import { Component, Input, OnInit } from '@angular/core';
import { Table } from '../interfaces/table.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Input() table: Table;
}
