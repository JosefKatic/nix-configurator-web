import { Route } from '@angular/router';
import { devicesRoutes } from '@joka00/libs/devices';
import { authGuard } from './guards/auth.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'devices',
    pathMatch: 'full',
  },
  {
    path: 'devices',
    children: devicesRoutes,
    canActivate: [authGuard],
  },
];
