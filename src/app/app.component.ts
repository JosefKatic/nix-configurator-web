import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { KeycloakProfile } from 'keycloak-js';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    AsyncPipe,
    ReactiveFormsModule,
    MatMenuModule,
    NavbarComponent,
  ],
  selector: 'joka00-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
