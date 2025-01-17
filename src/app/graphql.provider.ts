import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { createPersistedQueryLink } from 'apollo-angular/persisted-queries';
import { sha256 } from 'crypto-hash';
import { environment } from '../environments/environment.development';
import { inject } from '@angular/core';

export const initializeApollo = () => {
  return () => {
    const httpLink = inject(HttpLink);
    return {
      link: httpLink.create({ uri: environment.API_URI }),
      cache: new InMemoryCache(),
    };
  };
};
