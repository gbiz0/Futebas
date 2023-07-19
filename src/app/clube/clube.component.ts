import { Component, OnInit } from '@angular/core';
import { ClubeService } from './services/clube.service';

@Component({
  selector: 'app-clube',
  templateUrl: './clube.component.html',
  styleUrls: ['./clube.component.css']
})
export class ClubeComponent implements OnInit{
  informacoes!: any;
  ngOnInit(): void {
    this.informacoes = this.clubeService.getClube();
  }
  constructor(private clubeService:ClubeService) { }
}
