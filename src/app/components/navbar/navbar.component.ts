import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import {
  MatAnchor,
  MatButton,
  MatIconAnchor,
  MatIconButton,
} from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { AuthService } from '../../services/auth.service';
import { KeycloakProfile } from 'keycloak-js';
@Component({
  selector: 'joka00-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbar,
    MatIcon,
    MatToolbarRow,
    MatMenuTrigger,
    MatButton,
    MatMenu,
    MatMenuItem,
    RouterLink,
    MatAnchor,
    LogoComponent,
    RouterLinkActive,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() profile!: KeycloakProfile;
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private readonly authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
