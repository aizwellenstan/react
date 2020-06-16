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

export class EditEquipList extends React.Component<{}, MyState> {
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

  private handleCancel() {
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
            <div className="el-card login-card text-primary fs-xl is-always-shadow">
              <div className="el-card__header">Edit Equipment</div>
              <form>
                <div className="form-group">
                  <div className="el-form-item">
                    <label className="el-form-item__label">
                      無線傳輸
                      <input
                        id="username"
                        type="text"
                        aria-describedby=""
                        placeholder=""
                        className="form-control"
                      />
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="el-form-item">
                    <label className="el-form-item__label">
                      傳輸距離
                      <input
                        id="username"
                        type="text"
                        aria-describedby=""
                        placeholder=""
                        className="form-control"
                      />
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="el-form-item">
                    <label className="el-form-item__label">
                      發射訊號間隔
                      <input
                        id="username"
                        type="text"
                        aria-describedby=""
                        placeholder=""
                        className="form-control"
                      />
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="el-form-item">
                    <label className="el-form-item__label">
                      按鍵類型
                      <input
                        id="username"
                        type="text"
                        aria-describedby=""
                        placeholder=""
                        className="form-control"
                      />
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="el-form-item">
                    <label className="el-form-item__label">
                      LED 燈號顯示
                      <input
                        id="username"
                        type="text"
                        aria-describedby=""
                        placeholder=""
                        className="form-control"
                      />
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="el-form-item">
                    <label className="el-form-item__label">
                      移動感應
                      <input
                        id="username"
                        type="text"
                        aria-describedby=""
                        placeholder=""
                        className="form-control"
                      />
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="el-form-item">
                    <label className="el-form-item__label">
                      電池容量
                      <input
                        id="username"
                        type="text"
                        aria-describedby=""
                        placeholder=""
                        className="form-control"
                      />
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="el-form-item">
                    <label className="el-form-item__label">
                      工作環境
                      <input
                        id="username"
                        type="text"
                        aria-describedby=""
                        placeholder=""
                        className="form-control"
                      />
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="el-form-item">
                    <label className="el-form-item__label">
                      儲存環境
                      <input
                        id="username"
                        type="text"
                        aria-describedby=""
                        placeholder=""
                        className="form-control"
                      />
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="el-form-item">
                    <label className="el-form-item__label">
                      防水等級
                      <input
                        id="username"
                        type="text"
                        aria-describedby=""
                        placeholder=""
                        className="form-control"
                      />
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="el-form-item">
                    <label className="el-form-item__label">
                      產品外殼
                      <input
                        id="username"
                        type="text"
                        aria-describedby=""
                        placeholder=""
                        className="form-control"
                      />
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="el-form-item">
                    <label className="el-form-item__label">
                      外觀尺寸及重量
                      <input
                        id="username"
                        type="text"
                        aria-describedby=""
                        placeholder=""
                        className="form-control"
                      />
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="el-form-item">
                    <label className="el-form-item__label">
                      保養時間
                      <input
                        id="username"
                        type="text"
                        aria-describedby=""
                        placeholder=""
                        className="form-control"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      this.handleCancel();
                    }}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                  &nbsp;&nbsp;
                  <button
                    onClick={() => {
                      this.handleCancel();
                    }}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Wrapper>
      </Page>
    );
  }
}
