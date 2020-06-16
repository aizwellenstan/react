import * as React from 'react';
import { Page } from 'client/src/components/page';

import { Redirect } from 'react-router-dom';

export const NoMatch = React.memo(() => {
  if (localStorage.getItem('login') !== 'true') {
    return <Redirect exact from="/admin" to="/login" />;
  }
  return <Page>404 Not Found</Page>;
});
