import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.compnent'),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
