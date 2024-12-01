import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { graphqlProvider } from './graphql.provider';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'https://auth.joka00.dev',
        realm: '21bb13ca-8130-423c-ac0f-85de48db99bb',
        clientId: 'web-config'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/silent-check-sso.html'
      },
      bearerPrefix: 'Bearer',
      shouldAddToken: (request) => {
        // always add token to POST requests to the GraphQL API
        return request.method.toUpperCase() === 'POST' &&
          request.url === 'http://localhost:3000/graphql';
      }
    });
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(KeycloakAngularModule),
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    provideRouter(appRoutes, withRouterConfig({ paramsInheritanceStrategy: 'always' })), provideHttpClient(withInterceptorsFromDi()), graphqlProvider
  ]
};
