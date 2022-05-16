import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DrawerModule } from '@progress/kendo-angular-layout';
import { GridComponent } from './grid/grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
  imports: [FormsModule, DrawerModule, BrowserAnimationsModule, ButtonsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    MenuComponent,
    GridComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
