import * as React from 'react';
// import { TimetableContainer } from 'client/src/containers/timetable-container';
import { SidebarContainer } from 'client/src/containers/sidebar-container';
import { Page } from 'client/src/components/page';

// import { Redirect } from 'react-router-dom';

export const Admin = React.memo(() => {
  if (localStorage.getItem('login') !== 'true') {
    localStorage.setItem('pageNow', 'Login');
    window.location.reload();
  }
  return (
    <Page>
      Admin
      <SidebarContainer />
      {/* <TimetableContainer /> */}
    </Page>
  );
});
