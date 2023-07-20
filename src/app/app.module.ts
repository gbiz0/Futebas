import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { TimesComponent } from './times/times.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { JogadorComponent } from './jogador/jogador.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TimesComponent,
    JogadorComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
