import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GetDeviceDetailGQL } from '@joka00/libs/data-access';
import { MatTabLink, MatTabNav, MatTabNavPanel } from '@angular/material/tabs';

@Component({
  selector: 'joka00-device-detail-page',
  standalone: true,
  imports: [CommonModule, MatTabNav, MatTabLink, RouterLink, MatTabNavPanel, RouterLinkActive, RouterOutlet],
  templateUrl: './device-detail.page.html',
  styleUrl: './device-detail.page.scss'
})
export class DeviceDetailPage implements OnInit {
  sections = [
    'System',
    'User'
  ];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly getDeviceDetail: GetDeviceDetailGQL
  ) {
  }

  ngOnInit() {
  }
}
