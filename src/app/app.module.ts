import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { ClubeComponent } from './clube/clube.component';
import { TimesComponent } from './times/times.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubeComponent,
    TimesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
