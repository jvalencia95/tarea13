import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RetosModule } from './retos/retos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RetosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
