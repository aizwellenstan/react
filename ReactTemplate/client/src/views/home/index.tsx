import * as React from 'react';
// import { TimetableContainer } from 'client/src/containers/timetable-container';
// import { SidebarContainer } from 'client/src/containers/sidebar-container';
import { Page } from 'client/src/components/page';
import { Helmet } from 'react-helmet';
import { styled } from 'client/src/styles';
import Template from './components/template.html';

import {api} from '../../api';
import {proxy} from '../../api';


var htmlDoc = { __html: Template };

export const Home = React.memo(() => {
  const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-left: 0;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  `;

  if (localStorage.getItem('login') == 'true') {
    localStorage.setItem('pageNow', 'CreateCold');
    window.location.reload();
  }

  if (proxy == ""){
    return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={api+"/assets/css/font-awesome.min.css"}
        />
        <link
          rel="stylesheet"
          href={api+"/assets/css/owl.carousel.css"}
        />
        <link
          rel="stylesheet"
          href={api+"/assets/css/style.css"}
        />
        <link
          rel="stylesheet"
          href={api+"/assets/css/animate.css"}
        />
      </Helmet>
      <Page>
        <Wrapper>
          <div dangerouslySetInnerHTML={htmlDoc} />
        </Wrapper>
        {/* <SidebarContainer />
        <TimetableContainer /> */}
      </Page>
    </>
  );
  }
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={api+proxy+"/assets/css/font-awesome.min.css"}
        />
        <link
          rel="stylesheet"
          href={api+proxy+"/assets/css/owl.carousel.css"}
        />
        <link
          rel="stylesheet"
          href={api+proxy+"/assets/css/style.css"}
        />
        <link
          rel="stylesheet"
          href={api+proxy+"/assets/css/animate.css"}
        />
      </Helmet>
      <Page>
        <Wrapper>
          <div dangerouslySetInnerHTML={htmlDoc} />
        </Wrapper>
        {/* <SidebarContainer />
        <TimetableContainer /> */}
      </Page>
    </>
  );
});
