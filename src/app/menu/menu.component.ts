import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ButtonDirective } from '@progress/kendo-angular-buttons';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { fromEvent, Subscription } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';

interface Table {
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements AfterViewInit, OnDestroy {
  @ViewChild(ButtonDirective, { read: ElementRef }) public button: ElementRef;

  public expanded:boolean = false;
  public selectedTable: Table;

  public tables: Array<Table> = [
    { name: 'Account' },
    { name: 'Person'},
  ];

  private subscriptions: Subscription = new Subscription();

  public ngAfterViewInit(): void {
    this.subscriptions.add(fromEvent(this.button.nativeElement, 'click').pipe(
      scan((currentState) => !currentState, false),
      startWith(false)
    ).subscribe((expanded) => {
      this.expanded = expanded
    }));
  }

  public onSelect(ev: DrawerSelectEvent): void {
    this.selectedTable = ev.item.text;
  }

  public toggleMenu(): void {}

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
