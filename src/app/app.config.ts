import {
  ApplicationConfig,
  importProvidersFrom,
  inject,
  provideAppInitializer,
} from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { appRoutes } from './app.routes';
import { initializeApollo } from './graphql.provider';
import { initializeKeycloak } from './keycloak.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(KeycloakAngularModule),
    provideAnimationsAsync(),
    provideAppInitializer(initializeKeycloak(inject(KeycloakService))),
    provideRouter(
      appRoutes,
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideApollo(initializeApollo(inject(HttpLink))),
  ],
};
