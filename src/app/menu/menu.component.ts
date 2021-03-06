import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ButtonDirective } from '@progress/kendo-angular-buttons';
import { fromEvent, Observable } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';
import { Table, TableData } from '../interfaces/table.interface';
import { DataService } from '../services/data.service';
import { MenuService } from '../services/menu.service';
import { StateService } from '../services/state.service';

@UntilDestroy()
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements AfterViewInit {
  @ViewChild(ButtonDirective, { read: ElementRef }) public button: ElementRef;

  public expanded$: Observable<boolean> = this.menuService.expanded$;

  public tables$: Observable<Array<Table>> = this.dataService.getTables();

  public constructor(
    private stateService: StateService,
    private menuService: MenuService,
    private dataService: DataService
  ) {}

  public ngAfterViewInit(): void {
    fromEvent(this.button.nativeElement, 'click')
      .pipe(
        scan((currentState) => !currentState, false),
        startWith(false),
        untilDestroyed(this)
      )
      .subscribe((expanded) => {
        this.menuService.setExpanded(expanded);
      });
  }

  public onSelect(table: Table): void {
    this.stateService.setCurrentTable(table);
  }

  public toggleMenu(): void {}

  public isSelected(table: Table): Observable<boolean> {
    return this.stateService.isSelected(table);
  }
}
