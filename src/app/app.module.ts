import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DrawerModule } from '@progress/kendo-angular-layout';
import { GridComponent } from './grid/grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { MainComponent } from './main/main.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  imports: [FormsModule, DrawerModule, BrowserAnimationsModule, ButtonsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    MenuComponent,
    GridComponent,
    MainComponent,
    SectionComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
