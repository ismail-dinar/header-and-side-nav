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
import { LayoutModule } from '@progress/kendo-angular-layout';
import { NoDataComponent } from './no-data/no-data.component';

@NgModule({
  imports: [
    FormsModule,
    DrawerModule,
    BrowserAnimationsModule,
    ButtonsModule,
    LayoutModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    MenuComponent,
    GridComponent,
    MainComponent,
    SectionComponent,
    NoDataComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
