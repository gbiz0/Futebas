import { Component, OnInit } from '@angular/core';
import { TimesService } from './services/times.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tabela!: any;
  ngOnInit(): void {
    this.tabela = this.timesService.getTimes();
  }
  constructor(private timesService:TimesService) { }
}
