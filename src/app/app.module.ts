import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    QuotesDetailsComponent,
    QuotesComponent,
    QuotesFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }