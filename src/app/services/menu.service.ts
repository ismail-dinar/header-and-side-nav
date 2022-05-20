import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class MenuService {
  private expandedSubject: ReplaySubject<boolean> = new ReplaySubject<boolean>(
    1
  );
  public expanded$: Observable<boolean> = this.expandedSubject.asObservable();

  public setExpanded(exapnded: boolean): void {
    this.expandedSubject.next(exapnded);
  }
}
