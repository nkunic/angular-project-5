import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClanoviComponent } from './view/clanovi/clanovi.component';
import { KnjigeComponent } from './view/knjige/knjige.component';

const appRoutes: Routes = [
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

export const routing: ModuleWithProviders<unknown> = RouterModule.forRoot(appRoutes);