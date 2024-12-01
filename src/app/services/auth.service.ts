import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { from, Observable } from 'rxjs';
import { KeycloakProfile } from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get userProfile$(): Observable<KeycloakProfile> {
    return this._userProfile$;
  }

  get isAuthenticated(): boolean {
    return this.keycloak.isLoggedIn();
  }

  get isAdmin(): boolean {
    return this.keycloak.isUserInRole('admin');
  }

  get userRoles() {
    return this.keycloak.getUserRoles();
  }

  private readonly _userProfile$: Observable<KeycloakProfile>;

  constructor(private keycloak: KeycloakService) {
    this._userProfile$ = from(this.keycloak.loadUserProfile());
  }

  public login() {
    return this.keycloak.login();
  }


  public logout() {
    return this.keycloak.logout();
  }
}
