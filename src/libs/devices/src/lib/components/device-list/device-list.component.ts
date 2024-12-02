import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { DeviceItemFragment } from '@joka00/libs/data-access';
import { ListItemComponent } from '../list-item/list-item.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'joka00-device-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent, MatListModule, MatIconModule, MatDividerModule],
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.scss'
})
export class DeviceListComponent {
  @Input() list: DeviceItemFragment[] = [];
}
