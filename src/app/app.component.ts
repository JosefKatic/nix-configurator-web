import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { KeycloakProfile } from 'keycloak-js';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent
} from '@angular/material/sidenav';
import { MatCheckbox } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    AsyncPipe,
    MatSidenavContainer,
    MatCheckbox,
    MatSidenav,
    MatSidenavContent,
    ReactiveFormsModule,
    MatNavList,
    MatListItem,
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatButton,
    MatMenuModule,
    NavbarComponent
  ],
  selector: 'joka00-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  authenticated = false;
  roles: string[] = [];
  profile$: Observable<KeycloakProfile>;

  constructor(private readonly authService: AuthService) {
    this.authenticated = authService.isAuthenticated;
    this.profile$ = authService.userProfile$;
  }
}
