import React, { lazy, Suspense } from 'react';

const LazyLoginPage = lazy(() => import('./LoginPage'));

const LoginPage = props => (
  <Suspense fallback={null}>
    <LazyLoginPage {...props} />
  </Suspense>
);

export default LoginPage;
