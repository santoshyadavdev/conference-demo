import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () => import('@conf-demo/home').then((m) => m.HomeComponent),
  },
];
