import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { ButtonDirective } from '@progress/kendo-angular-buttons';
import { isEqual } from 'lodash';
import { fromEvent, Subscription } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';
import { Table } from '../interfaces/table.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements AfterViewInit, OnDestroy {
  @ViewChild(ButtonDirective, { read: ElementRef }) public button: ElementRef;

  @Output() public tableChange: EventEmitter<Table> = new EventEmitter<Table>();

  public expanded: boolean = false;
  public selectedTable: Table;

  public tables: Array<Table> = [{ name: 'Account' }, { name: 'Person' }];

  private subscriptions: Subscription = new Subscription();

  public ngAfterViewInit(): void {
    this.subscriptions.add(
      fromEvent(this.button.nativeElement, 'click')
        .pipe(
          scan((currentState) => !currentState, false),
          startWith(true)
        )
        .subscribe((expanded) => {
          this.expanded = expanded;
          if (!expanded) {
            this.reset();
          }
        })
    );
  }

  public onSelect(table: Table): void {
    this.selectedTable = table;
    this.tableChange.emit(table);
  }

  public toggleMenu(): void {}

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public isSelected(table: Table): boolean {
    return isEqual(table, this.selectedTable);
  }

  private reset(): void {
    this.selectedTable = null;
  }
}
