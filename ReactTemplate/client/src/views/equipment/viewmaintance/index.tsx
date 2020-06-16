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

export class ViewMaintance extends React.Component<{}, MyState> {
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
            <div className="col-md-9">
              <div className="table-responsive">
                <table className="table table-striped table-hover ">
                  <thead className="bg-info">
                    <tr>
                      <td colSpan={2}>保養紀錄</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>日期</td>
                      <td>20201231</td>
                    </tr>
                    <tr>
                      <td>費用</td>
                      <td>$99999 USD</td>
                    </tr>
                    <tr>
                      <td>廠商</td>
                      <td>NADI</td>
                    </tr>
                    <tr>
                      <td>備註</td>
                      <td />
                    </tr>
                  </tbody>
                </table>
                <button onClick={handleClick} className="btn btn-primary">
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </Wrapper>
      </Page>
    );
  }
}
