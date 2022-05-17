import { Component, VERSION } from '@angular/core';
import { Table } from './interfaces/table.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public table: Table;
  public menuExpanded: boolean = false;

  public onTableChange(table: Table): void {
    this.table = table;
  }

  public onMenuExpansion(expanded: boolean): void {
    this.menuExpanded = expanded;
  }
}
