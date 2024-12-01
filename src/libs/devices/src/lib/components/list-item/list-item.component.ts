import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { DeviceItemFragment } from '@joka00.dev/libs/data-access';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle } from '@angular/material/card';

@Component({
  selector: 'joka00-list-item',
  standalone: true,
  imports: [CommonModule, MatIcon, RouterLink, MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input() device!: DeviceItemFragment;
}
