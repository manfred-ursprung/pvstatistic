import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DatainputComponent } from './datainput/datainput.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PventriesService } from './pventries.service';
import { DataoutputComponent } from './dataoutput/dataoutput.component';
import { RestServiceComponent } from './rest-service/rest-service.component';

@NgModule({
  declarations: [
    AppComponent,
    DatainputComponent,
    DashboardComponent,
    DataoutputComponent,
    RestServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
      PventriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
