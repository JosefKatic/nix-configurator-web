import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from '@angular/material/list';
import { ListDevicesGQL, ListDevicesQuery } from '@joka00.dev/libs/data-access';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'joka00-device-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, MatSidenavContent, MatNavList, MatSidenav, MatListItem, RouterLinkActive, MatSidenavContainer, MatIcon],
  templateUrl: './device-layout.component.html',
  styleUrl: './device-layout.component.scss'
})
export class DeviceLayoutComponent {
  get list$(): Observable<ApolloQueryResult<ListDevicesQuery>> {
    return this._list$;
  }

  private _list$: Observable<ApolloQueryResult<ListDevicesQuery>>;

  constructor(private listDevicesGQL: ListDevicesGQL) {
    this._list$ = listDevicesGQL.watch().valueChanges;
  }
}
