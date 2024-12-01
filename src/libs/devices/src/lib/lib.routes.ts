import { Route } from '@angular/router';
import { DeviceLayoutComponent } from './components/device-layout/device-layout.component';
import { tabGuard } from './guards/tab.guard';

export const devicesRoutes: Route[] = [
  {
    path: '', component: DeviceLayoutComponent, children: [
      {
        path: '',
        loadComponent: () => import('./pages/device-list/device-list.page').then((page) => page.DeviceListPage)
      },
      {
        path: ':hostname',
        loadComponent: () => import('./pages/device-detail/device-detail.page').then((page) => page.DeviceDetailPage),
        canActivateChild: [tabGuard],
        children: [
          {
            path: ':tab',
            loadComponent: () => import('./components/device-detail/device-detail.component').then(component => component.DeviceDetailComponent)
          },
          {
            path: '',
            redirectTo: 'system',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];
