import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,   } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormaddproductComponent } from './components/formaddproduct/formaddproduct.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { ViewerComponent } from './components/viewer/viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    FormaddproductComponent,
    DivisasComponent,
    TicketsComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
