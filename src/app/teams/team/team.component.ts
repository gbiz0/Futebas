import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  @Input() team: any = {};
  
  constructor() { }

  ngOnInit() {
  }
}
export interface Team {
  nome: string
  escudo: string
}
