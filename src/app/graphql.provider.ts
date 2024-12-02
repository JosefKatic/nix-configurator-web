import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { createPersistedQueryLink } from 'apollo-angular/persisted-queries';
import { sha256 } from 'crypto-hash';
import { environment } from '@joka00/environment';

export const initializeApollo = (httpLink: HttpLink) => {
  return () => ({
    link: createPersistedQueryLink({ sha256 }).concat(httpLink.create({ uri: environment.API_URI })),
    cache: new InMemoryCache(),
  });
};
