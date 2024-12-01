import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatList, MatListItem, MatListModule, MatListSubheaderCssMatStyler } from '@angular/material/list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { DeviceItemFragment } from '@joka00.dev/libs/data-access';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client';
import { ListItemComponent } from '../list-item/list-item.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'joka00-device-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent, MatListModule, MatIconModule, MatDividerModule, DatePipe],
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.scss'
})
export class DeviceListComponent {
  @Input() list: DeviceItemFragment[] = [];
}
