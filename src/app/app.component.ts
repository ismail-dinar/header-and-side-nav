import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { Table } from './interfaces/table.interface';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public  menuExpanded:Observable<boolean> = this.menuService.expanded$;

  public constructor(private menuService: MenuService) {}
}
