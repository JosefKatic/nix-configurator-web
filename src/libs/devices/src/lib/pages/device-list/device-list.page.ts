import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client';
import { ListDevicesGQL, ListDevicesQuery } from '@joka00.dev/libs/data-access';
import { DeviceListComponent } from '../../components/device-list/device-list.component';

@Component({
  selector: 'joka00-device-list-page',
  standalone: true,
  imports: [CommonModule, DeviceListComponent],
  templateUrl: './device-list.page.html',
  styleUrl: './device-list.page.scss',
})
export class DeviceListPage {
  get list$(): Observable<ApolloQueryResult<ListDevicesQuery>> {
    return this._list$;
  }
  private _list$: Observable<ApolloQueryResult<ListDevicesQuery>>
  constructor(private listDevicesGQL: ListDevicesGQL) {
    this._list$ = listDevicesGQL.watch().valueChanges;
  }
}
