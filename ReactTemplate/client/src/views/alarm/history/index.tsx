import * as React from 'react';
import { SidebarContainer } from 'client/src/containers/sidebar-container';
import { Page } from 'client/src/components/page';

import { styled } from 'client/src/styles';
import { sidebarWidth } from 'client/src/styles/constants';
import { VueWrapper } from 'vuera';
import MyVueComponent from './components/MyVueComponent.vue';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-left: 0;
  overflow-x: scroll;
  overflow-y: hidden; /* fixme */
  -webkit-overflow-scrolling: touch;

  @media screen and (min-width: 700px) {
    width: calc(100% - ${sidebarWidth}px);
    margin-left: ${sidebarWidth}px;
  }
`;

export const AlarmHistory = React.memo(() => {
  if (localStorage.getItem('login') !== 'true') {
    localStorage.setItem('pageNow', 'Login');
    window.location.reload();
  }
  return (
    <Page>
      Admin
      <SidebarContainer />
      <Wrapper>
        <VueWrapper component={MyVueComponent} />
      </Wrapper>
    </Page>
  );
});
