import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ButtonDirective } from '@progress/kendo-angular-buttons';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  public selected: DrawerItem;
  //this items should come for the server this is just for showcasing you how it should be
  public items: Array<DrawerItem> = [
    { text: 'Account', icon: 'k-i-inbox' },
    { text: 'Person', icon: 'k-i-bell' },
  ];

  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
  }

  public toggleMenu(): void {}
}
