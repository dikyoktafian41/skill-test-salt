import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './config/font-awesome-icons';
import { HttpClientModule } from '@angular/common/http';
import './config/dayjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    iconLibrary: FaIconLibrary,
  ) {
    iconLibrary.addIcons(...fontAwesomeIcons);

  }
}
