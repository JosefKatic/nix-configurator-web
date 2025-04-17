import { inject } from '@angular/core';
import { environment } from '../environments/environment.development';
import { KeycloakService } from 'keycloak-angular';

export const initializeKeycloak = () => {
  return () => {
    const keycloak = inject(KeycloakService);
    return keycloak.init({
      config: {
        url: 'https://sso.joka00.dev',
        realm: '21bb13ca-8130-423c-ac0f-85de48db99bb',
        clientId: 'web-config',
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/silent-check-sso.html',
      },
      bearerPrefix: 'Bearer',
      shouldAddToken: (request) => {
        // always add token to POST requests to the GraphQL API
        return (
          request.method.toUpperCase() === 'POST' &&
          request.url === environment.API_URI
        );
      },
    });
  };
};
