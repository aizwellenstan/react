import * as React from 'react';
import { SidebarContainer } from 'client/src/containers/sidebar-container';
import { Page } from 'client/src/components/page';

import { styled } from 'client/src/styles';
import { sidebarWidth } from 'client/src/styles/constants';
import { Link } from 'react-router-dom';

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

export class Assets extends React.Component<{}, MyState> {
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
            <br />
            <a className="btn btn-primary" href="/newasset">
              New File
            </a>
            <br />
            <br />
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Download Link</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map(i => (
                  <tr key={i}>
                    <td>{i.name}</td>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={'http://127.0.0.1:4000' + i.attachment.url}
                      >
                        {/* <button className="btn btn-success"> */}
                        Download File
                        {/* </button> */}
                      </a>
                    </td>
                    <td>
                      <Link to="/editequiplist">
                        <input
                          className="btn btn-danger"
                          type="submit"
                          value="Delete"
                        />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Wrapper>
      </Page>
    );
  }
}
