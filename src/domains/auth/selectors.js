import { createSelector } from 'reselect';

export const authSelector = store => store.auth;

export const authIsAuthenticatedSelector = createSelector(
  [authSelector],
  auth => (auth.isAuthenticated),
);

export const authNameSelector = createSelector(
  [authSelector],
  auth => (auth.isAuthenticated ? auth.name : null),
);

export const authAvatarSelector = createSelector(
  [authSelector],
  auth => (auth.isAuthenticated ? auth.avatar : null),
);
