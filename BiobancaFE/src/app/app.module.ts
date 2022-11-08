import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AcasaPageComponent } from './pages/acasa-page/acasa-page.component';
import { RegistruPageComponent } from './pages/registru-page/registru-page.component';
import { FormularPageComponent } from './pages/formular-page/formular-page.component';
import { SetariPageComponent } from './pages/setari-page/setari-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SidebarModule } from 'ng-cdbangular';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './pages/setari-page/components/sidenav/sidenav.component';
import { HeaderComponent } from './pages/setari-page/components/header/header.component';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { PersonInfoComponent } from './pages/registru-page/person-info/person-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AcasaPageComponent,
    RegistruPageComponent,
    FormularPageComponent,
    SetariPageComponent,
    SidenavComponent,
    HeaderComponent,
    PersonInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    SidebarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatTableModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
