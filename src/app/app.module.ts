import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyKendoModule } from '@ngx-formly/kendo';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';
import { DrawerModule, LayoutModule } from '@progress/kendo-angular-layout';
import { TypographyModule } from '@progress/kendo-angular-typography';
import { AppComponent } from './app.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FormlyDropDownListModule } from './formly/dropdownlist/dropdownlist.module';
import { GridComponent } from './grid/grid.component';
import { HeaderComponent } from './header/header.component';
import { HelloComponent } from './hello.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { NoDataComponent } from './no-data/no-data.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  imports: [
    FormsModule,
    DrawerModule,
    BrowserAnimationsModule,
    ButtonsModule,
    LayoutModule,
    TypographyModule,
    FlexLayoutModule,
    GridModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    DialogsModule,
    ReactiveFormsModule,
    FormlyKendoModule,
    FormlyDropDownListModule,
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
    EditFormComponent,
  ],
  entryComponents: [EditFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
