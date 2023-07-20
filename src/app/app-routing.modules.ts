import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimesComponent } from './times/times.component';
import { JogadorComponent } from './jogador/jogador.component';

const routes: Routes = [
    {path: '/times', component: TimesComponent},
    {path: '/jogador', component: JogadorComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

