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

export class ViewEquipList extends React.Component<{}, MyState> {
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

  private handleClick() {
    localStorage.setItem('pageNow', 'EquipList');
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
            <div className="table-responsive">
              <table className="table table-striped table-hover ">
                <thead className="bg-info">
                  <tr>
                    <th>功能</th>
                    <th>規格</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>無線傳輸</td>
                    <td>ZigBee 2.4GHz</td>
                  </tr>
                  <tr>
                    <td>傳輸距離</td>
                    <td>可視距離 50m (Max)</td>
                  </tr>
                  <tr>
                    <td>發射訊號間隔</td>
                    <td>定位: 1 sec ~ 10min(可調)</td>
                  </tr>
                  <tr>
                    <td>按鍵類型</td>
                    <td>電源開關，警報開關及自定義開關</td>
                  </tr>
                  <tr>
                    <td>LED 燈號顯示</td>
                    <td>電源開關，通訊狀況，電力容量狀況及自定義</td>
                  </tr>
                  <tr>
                    <td>移動感應</td>
                    <td>內建Gsensor</td>
                  </tr>
                  <tr>
                    <td>電池容量</td>
                    <td>
                      <li>DC 3V, 1A (水銀電池*1)</li>
                      <li>
                        可供電 1年以上(以一天30sec發送一次，一天工作12小時計算)
                      </li>
                    </td>
                  </tr>
                  <tr>
                    <td>工作環境</td>
                    <td>溫度:0 ~ 50°C; 濕度: 0~90%RH </td>
                  </tr>
                  <tr>
                    <td>儲存環境</td>
                    <td>溫度:0 ~ 70°C; 濕度: 0~90%RH </td>
                  </tr>
                  <tr>
                    <td>防水等級</td>
                    <td>IP-65 </td>
                  </tr>
                  <tr>
                    <td>產品外殼</td>
                    <td>
                      <li>白色ABS</li>
                      <li>可外加透明保護套</li>
                    </td>
                  </tr>
                  <tr>
                    <td>外觀尺寸及重量</td>
                    <td>
                      <li>84 x 54 x 5.6mm (不含保護套) </li>
                      <li>21g (不含保護套)</li>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <button
            onClick={() => {
              this.handleClick();
            }}
            className="btn btn-primary"
          >
            Back
          </button>
        </Wrapper>
      </Page>
    );
  }
}
