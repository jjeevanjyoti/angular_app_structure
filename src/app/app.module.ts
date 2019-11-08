import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// location module
import { HashLocationStrategy, LocationStrategy, CommonModule } from '@angular/common';


// HTTP client modules
import { HttpClientModule } from '@angular/common/http';

// import components
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {ProductComponent} from './components/product/product.component';



// Import Services
import {GlobalService} from './services/global.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
