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
import { fromEvent, Observable, Subscription } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';
import { Table } from '../interfaces/table.interface';
import { MenuService } from '../services/menu.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements AfterViewInit, OnDestroy {
  @ViewChild(ButtonDirective, { read: ElementRef }) public button: ElementRef;

  @Output() public tableChange: EventEmitter<Table> = new EventEmitter<Table>();

  public expanded$: Observable<boolean> = this.menuService.expanded$;

  public tables: Array<Table> = [{ name: 'Account' }, { name: 'Person' }];

  private subscriptions: Subscription = new Subscription();

  public constructor(private stateService: StateService, private menuService: MenuService) {}

  public ngAfterViewInit(): void {
    this.subscriptions.add(
      fromEvent(this.button.nativeElement, 'click')
        .pipe(
          scan((currentState) => !currentState, false),
          startWith(false)
        )
        .subscribe((expanded) => {
          this.menuService.setExpanded(expanded);
        })
    );
  }

  public onSelect(table: Table): void {
    this.stateService.setCurrentTable(table);
    this.tableChange.emit(table);
  }

  public toggleMenu(): void {}

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public isSelected(table: Table): Observable<boolean> {
    return this.stateService.isSelected(table);
  }
}
