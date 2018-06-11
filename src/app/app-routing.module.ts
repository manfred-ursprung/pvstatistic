import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatainputComponent } from './datainput/datainput.component';
import {DataoutputComponent} from './dataoutput/dataoutput.component';
import {RestServiceComponent} from './rest-service/rest-service.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
   // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
   // { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
    { path: 'eingabe', component: DatainputComponent },
    { path: 'list', component: DataoutputComponent },
    { path: 'rest', component: RestServiceComponent },
   // { path: 'detail/:id', component: HeroDetailComponent },
   // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
