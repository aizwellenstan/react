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

export class EquipList extends React.Component<{}, MyState> {
  private constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      list: [
        {
          EquipmentId: 'AXIS001',
          Name: '電子定位製程卡 電子定位卡',
          Type: '電子定位卡',
          Manufacturer: 'Manufacturer',
          MaintenanceDate: '20191031',
          NextMaintenanceDate: '20191231',
          Department: 'Department1',
        },
        {
          EquipmentId: 'AXIS002',
          Name: '電子定位製程卡 電子定位卡',
          Type: '電子定位卡',
          Manufacturer: 'Manufacturer',
          MaintenanceDate: '20191031',
          NextMaintenanceDate: '20191231',
          Department: 'Department1',
        },
        {
          EquipmentId: 'AXIS003',
          Name: '電子定位製程卡 電子定位卡',
          Type: '電子定位卡',
          Manufacturer: 'Manufacturer',
          MaintenanceDate: '20191031',
          NextMaintenanceDate: '20191231',
          Department: 'Department1',
        },
        {
          EquipmentId: 'AXIS004',
          Name: '電子定位製程卡 電子定位卡',
          Type: '電子定位卡',
          Manufacturer: 'Manufacturer',
          MaintenanceDate: '20191031',
          NextMaintenanceDate: '20191231',
          Department: 'Department1',
        },
        {
          EquipmentId: 'AXIS005',
          Name: '電子定位製程卡 電子定位卡',
          Type: '電子定位卡',
          Manufacturer: 'Manufacturer',
          MaintenanceDate: '20191031',
          NextMaintenanceDate: '20191231',
          Department: 'Department1',
        },
      ],
    };
  }

  private handleViewMore() {
    localStorage.setItem('pageNow', 'ViewEquipList');
    window.location.reload();
  }

  private handleEdit() {
    localStorage.setItem('pageNow', 'EditEquipList');
    window.location.reload();
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
                        <th>EquipmentId</th>
                        <th>EquipmentName</th>
                        <th>Type</th>
                        <th>製造商</th>
                        <th>維護日期</th>
                        <th>下次維護日期</th>
                        <th>部門</th>
                        <th>更多資訊</th>
                        <th>編輯</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.list.map(i => (
                        <tr key={i}>
                          <td>{i.EquipmentId}</td>
                          <td>{i.Name}</td>
                          <td>{i.Type}</td>
                          <td>{i.Manufacturer}</td>
                          <td>{i.MaintenanceDate}</td>
                          <td>{i.NextMaintenanceDate}</td>
                          <td>{i.Department}</td>
                          <td>
                            <button
                              onClick={() => {
                                this.handleViewMore();
                              }}
                              className="btn btn-success"
                            >
                              View More
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() => {
                                this.handleEdit();
                              }}
                              className="btn btn-warning"
                            >
                              Edit
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
