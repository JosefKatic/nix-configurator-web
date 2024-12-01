import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GetDeviceDetailGQL, GetDeviceDetailQuery } from '@joka00.dev/libs/data-access';
import { map, Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client';
import { DeviceDetailComponent } from '../../components/device-detail/device-detail.component';
import { MatTab, MatTabGroup, MatTabLink, MatTabNav, MatTabNavPanel } from '@angular/material/tabs';

@Component({
  selector: 'joka00-device-detail-page',
  standalone: true,
  imports: [CommonModule, DeviceDetailComponent, MatTab, MatTabGroup, MatTabNav, MatTabLink, RouterLink, MatTabNavPanel, RouterLinkActive, RouterOutlet],
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
