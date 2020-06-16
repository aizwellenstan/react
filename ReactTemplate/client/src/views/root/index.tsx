import * as React from 'react';
import { ThemeProvider, styled } from 'client/src/styles';
import { I18nextProvider } from 'react-i18next';
import { getLocale } from 'client/src/locales';
import { theme } from 'client/src/styles/theme';
import { Banner } from 'client/src/components/banner';
import { GlobalStyle } from './global-style';

// import { Events } from 'client/src/views/events';
import { Home } from 'client/src/views/home';
import { Login } from 'client/src/views/login';

import { AlarmList } from 'client/src/views/alarm/list';
import { AlarmHistory } from 'client/src/views/alarm/history';
import { AlarmSetting } from 'client/src/views/alarm/setting';
import { CreateCold } from 'client/src/views/cold/create';
import { UpdateCold } from 'client/src/views/cold/update';
import { EditCold } from 'client/src/views/cold/edit';
import { QueryCold } from 'client/src/views/cold/query';
import { DeleteCold } from 'client/src/views/cold/delete';
import { Schedule } from 'client/src/views/schedule';
import { Assets } from 'client/src/views/assets/index';
import { NewAssets } from 'client/src/views/assets/new';
import { EquipList } from 'client/src/views/equipment/equiplist';
import { ViewEquipList } from 'client/src/views/equipment/viewequiplist';
import { EditEquipList } from 'client/src/views/equipment/editequiplist';
import { Maintance } from 'client/src/views/equipment/maintance';
import { ViewMaintance } from 'client/src/views/equipment/viewmaintance';
import { Notification } from 'client/src/views/equipment/notification';
import { Report } from 'client/src/views/equipment/report';
import { CreateAccount } from 'client/src/views/account/create';
import { UpdateAccount } from 'client/src/views/account/update';
import { EditAccount } from 'client/src/views/account/edit';
import { QueryAccount } from 'client/src/views/account/query';
import { DeleteAccount } from 'client/src/views/account/delete';
import { ModulePermission } from 'client/src/views/settings/modulepermission';
import { Project } from 'client/src/views/project/create';
// import { Settings } from 'client/src/views/settings';
import { NoMatch } from 'client/src/views/nomatch';

const locale = getLocale();

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundNormal};
`;

var pageNow = 'Home';

if (localStorage.getItem('pageNow')) {
  pageNow = localStorage.getItem('pageNow').toString();
}

var Main = Home;
switch (pageNow) {
  case 'Home':
    Main = Home;
    break;
  case 'Login':
    Main = Login;
    break;
  case 'AlarmList':
    Main = AlarmList;
    break;
  case 'AlarmHistory':
    Main = AlarmHistory;
    break;
  case 'AlarmSetting':
    Main = AlarmSetting;
    break;
  case 'Assets':
    Main = Assets;
    break;
  case 'CreateCold':
    Main = CreateCold;
    break;
  case 'UpdateCold':
    Main = UpdateCold;
    break;
  case 'EditCold':
    Main = EditCold;
    break;
  case 'QueryCold':
    Main = QueryCold;
    break;
  case 'DeleteCold':
    Main = DeleteCold;
    break;
  case 'Schedule':
    Main = Schedule;
    break;
  case 'NewAssets':
    Main = NewAssets;
    break;
  case 'EquipList':
    Main = EquipList;
    break;
  case 'ViewEquipList':
    Main = ViewEquipList;
    break;
  case 'EditEquipList':
    Main = EditEquipList;
    break;
  case 'Maintance':
    Main = Maintance;
    break;
  case 'ViewMaintance':
    Main = ViewMaintance;
    break;
  case 'Notification':
    Main = Notification;
    break;
  case 'Report':
    Main = Report;
    break;
  case 'CreateAccount':
    Main = CreateAccount;
    break;
  case 'UpdateAccount':
    Main = UpdateAccount;
    break;
  case 'EditAccount':
    Main = EditAccount;
    break;
  case 'QueryAccount':
    Main = QueryAccount;
    break;
  case 'DeleteAccount':
    Main = DeleteAccount;
    break;
  case 'ModulePermission':
    Main = ModulePermission;
    break;
  case 'Project':
    Main = Project;
    break;
  default:
    Main = NoMatch;
}

export const Root: React.SFC = React.memo(() => {
  return (
    <>
      <I18nextProvider i18n={locale}>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Banner />
            {/* <Switch>
              <Redirect exact from="/" to="/createaccount" />
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/admin" component={Admin} />

              <Route path="/alarmlist" component={AlarmList} />
              <Route path="/alarmhistory" component={AlarmHistory} />
              <Route path="/alarmsetting" component={AlarmSetting} />
              <Route path="/createcold" component={CreateCold} />
              <Route path="/updatecold" component={UpdateCold} />
              <Route path="/editcold" component={EditCold} />
              <Route path="/querycold" component={QueryCold} />
              <Route path="/deletecold" component={DeleteCold} />
              <Route path="/createhot" component={CreateHot} />
              <Route path="/updatehot" component={UpdateHot} />
              <Route path="/queryhot" component={QueryHot} />
              <Route path="/deletehot" component={DeleteHot} />
              <Route path="/schedule" component={Schedule} />
              <Route path="/asset" component={Assets} />
              <Route path="/newasset" component={NewAssets} />
              <Route path="/equiplist" component={EquipList} />
              <Route path="/viewequiplist" component={ViewEquipList} />
              <Route path="/editequiplist" component={EditEquipList} />
              <Route path="/maintance" component={Maintance} />
              <Route path="/viewmaintance" component={ViewMaintance} />
              <Route path="/notification" component={Notification} />
              <Route path="/report" component={Report} />
              <Route path="/createaccount" component={CreateAccount} />
              <Route path="/updateaccount" component={UpdateAccount} />
              <Route path="/editaccount" component={EditAccount} />
              <Route path="/queryaccount" component={QueryAccount} />
              <Route path="/deleteaccount" component={DeleteAccount} />
              <Route path="/settings" component={Settings} />
              <Route component={NoMatch} />
            </Switch> */}
            <Main />
            <GlobalStyle />
          </Wrapper>
        </ThemeProvider>
      </I18nextProvider>
    </>
  );
});
