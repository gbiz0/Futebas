import { TeamService } from './team/shared/team.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Team } from './team/team.component'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent {
  title = 'Futebas'
  allteams: any[] = []
  @Input() query: string = ''
  @Output() teamsEvent = new EventEmitter<any[]>()
  @Input() teams: any[] = []

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.teamService.getAllTeams().subscribe(
      teams => teams.forEach((char: any)=> {
        this.allteams.push(char)
      })
    )

    this.setTeams(this.allteams)
  }

  setTeams(teams: any[]) {
    this.teamsEvent.emit(teams)
  }
}
// Compare this snippet from src/app/teams/team/team.component.ts:  
