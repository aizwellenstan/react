import * as React from 'react';
import { TimetableContainer } from 'client/src/containers/timetable-container';
import { SidebarContainer } from 'client/src/containers/sidebar-container';
import { Page } from 'client/src/components/page';

export const Events = React.memo(() => {
  return (
    <Page>
      <SidebarContainer />
      <TimetableContainer />
    </Page>
  );
});
