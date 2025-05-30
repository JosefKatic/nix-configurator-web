import { CanMatchFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';

// Services
import { KeycloakService } from 'keycloak-angular';

export const authGuard: CanMatchFn = async (route): Promise<boolean | UrlTree> => {
  const router = inject(Router);

  const keycloakService = inject(KeycloakService);

  const authenticated: boolean = keycloakService.isLoggedIn();

  if (!authenticated) {
    await keycloakService.login({
      redirectUri: window.location.origin,
    });
  }

  // Get the user Keycloak roles and the required from the route
  const roles: string[] = keycloakService.getUserRoles(true);
  const requiredRoles = route.data?.['roles'];

  // Allow the user to proceed if no additional roles are required to access the route
  if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
    return true;
  }

  // Allow the user to proceed if ALL of the required roles are present
  const authorized = requiredRoles.every((role) => roles.includes(role));
  // Allow the user to proceed if ONE of the required roles is present
  //const authorized = requiredRoles.some((role) => roles.includes(role));

  if (authorized) {
    return true;
  }

  // Display my custom HTTP 403 access denied page
  return router.createUrlTree(['/access']);
};
