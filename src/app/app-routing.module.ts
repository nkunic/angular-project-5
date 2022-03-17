import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClanoviComponent } from './view/clanovi/clanovi.component';
import { KnjigeComponent } from './view/knjige/knjige.component';

const bibliotekaRoutes: Routes = [
  {
    path: '',
    redirectTo: '/knjige',
    pathMatch: 'full',
  },
  {
    path: 'knjige',
    component: KnjigeComponent,
  },
  {
    path: 'clanovi',
    component: ClanoviComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(bibliotekaRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }