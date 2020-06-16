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
  overflow-x: scroll;
  overflow-y: hidden; /* fixme */
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

export class Maintance extends React.Component<{}, MyState> {
  private constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      list: [
        {
          EquipmentId: 'AXIS001',
          Name: '20161213',
          Type: '20201213',
          Manufacturer: 'Manufacturer',
          MaintenanceDate: '20191031',
          NextMaintenanceDate: '20191231',
          Department: 'Department1',
        },
        {
          EquipmentId: 'AXIS002',
          Name: '20161215',
          Type: '20201215',
          Manufacturer: 'Manufacturer',
          MaintenanceDate: '20191031',
          NextMaintenanceDate: '20191231',
          Department: 'Department1',
        },
        {
          EquipmentId: 'AXIS003',
          Name: '20161217',
          Type: '20201217',
          Manufacturer: 'Manufacturer',
          MaintenanceDate: '20191031',
          NextMaintenanceDate: '20191231',
          Department: 'Department1',
        },
        {
          EquipmentId: 'AXIS004',
          Name: '20161219',
          Type: '20201219',
          Manufacturer: 'Manufacturer',
          MaintenanceDate: '20191031',
          NextMaintenanceDate: '20191231',
          Department: 'Department1',
        },
        {
          EquipmentId: 'AXIS005',
          Name: '20161218',
          Type: '20201218',
          Manufacturer: 'Manufacturer',
          MaintenanceDate: '20191031',
          NextMaintenanceDate: '20191231',
          Department: 'Department1',
        },
      ],
    };
  }

  public render() {
    if (localStorage.getItem('login') !== 'true') {
      localStorage.setItem('pageNow', 'Login');
      window.location.reload();
    }
    const handleClick = () => {
      localStorage.setItem('pageNow', 'Maintance');
      window.location.reload();
    };
    return (
      <Page>
        <SidebarContainer />
        <Wrapper>
          <div>
            <div className="el-card login-card text-primary fs-xl is-always-shadow">
              <div className="el-card__header">設備清單</div>
              <div className="el-card__body">
                <div className="table-responsive">
                  <table
                    style={{ color: 'black' }}
                    className="table table-striped table-hover"
                  >
                    <thead className="bg-info">
                      <tr>
                        <th>設備名稱</th>
                        <th>最後保養日期</th>
                        <th>下次保養日期</th>
                        <th>保養紀錄</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.list.map(i => (
                        <tr key={i}>
                          <td>{i.EquipmentId}</td>
                          <td>{i.Name}</td>
                          <td>{i.Type}</td>
                          <td>
                            <button
                              onClick={handleClick}
                              className="btn btn-success"
                            >
                              保養紀錄
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </Page>
    );
  }
}
