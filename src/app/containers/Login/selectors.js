import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

export const selectAuthenticationState = state => state.authentication;

export const makeSelectIsAuthenticated = createSelector(
  selectAuthenticationState,
  authentication => get('isAuthenticated', authentication),
);

export const makeSelectAuthenticationStatus = createSelector(
  selectAuthenticationState,
  authentication => get('status', authentication),
);

export const makeSelectAuthenticationError = createSelector(
  selectAuthenticationState,
  authentication => get('error', authentication),
);

export const makeSelectAuthenticationInfo = createSelector(
  selectAuthenticationState,
  authentication => get('info', authentication),
);
