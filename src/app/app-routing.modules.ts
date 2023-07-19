import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubeComponent } from './clube/clube.component';
import { TimesComponent } from './times/times.component';

const routes: Routes = [
    {path: 'clube', component: ClubeComponent},
    {path: 'times', component: TimesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

