import * as React from 'react';
import { SidebarContainer } from 'client/src/containers/sidebar-container';
import { Page } from 'client/src/components/page';

import { styled } from 'client/src/styles';
import { sidebarWidth } from 'client/src/styles/constants';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-left: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  @media screen and (min-width: 700px) {
    width: calc(100% - ${sidebarWidth}px);
    margin-left: ${sidebarWidth}px;
  }
`;

interface MyState {
  loading: boolean;
  list: any[];
}

export class NewAssets extends React.Component<{}, MyState> {
  private doCreate = () => {
    alert('doCreate');
    // var file = document.getElementById("resume_attachment")
  };

  private constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      list: [
        {
          id: 7,
          name: 'test',
          attachment: {
            url: '/uploads/resume/attachment/7/avatar_2x.png',
          },
          created_at: '2020-02-10T09:56:15.207Z',
          updated_at: '2020-02-10T09:56:15.207Z',
        },
      ],
    };
  }

  public render() {
    if (localStorage.getItem('login') !== 'true') {
      localStorage.setItem('pageNow', 'Login');
      window.location.reload();
    }
    return (
      <Page>
        <SidebarContainer />
        <Wrapper>
          <div className="container" style={{ paddingTop: '20px' }}>
            <div className="well">
              <form className="new_resume">
                Name
                <input type="text" name="resume[name]" id="resume_name" />
                Attachment
                <input
                  type="file"
                  name="resume[attachment]"
                  id="resume_attachment"
                />
                <input
                  onClick={this.doCreate}
                  type="submit"
                  value="Save"
                  className="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </Wrapper>
      </Page>
    );
  }
}
