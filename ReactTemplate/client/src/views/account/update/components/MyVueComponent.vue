<template>
  <div>
    <div class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">修改帳戶</div>
      <div class="el-card__body">
        <div class="table-responsive">
          <table
            v-for="(val, key, index) in userslist"
            :key="index"
            border="1"
            style="color:black;"
            width="242px"
            class="table table-striped table-hover"
          >
            <tr>
              <td width="92px">使用者名稱</td>
              <td>{{ val.username }}</td>
            </tr>
            <tr>
              <td width="92px">備註</td>
              <td>{{ val.description }}</td>
            </tr>
            <tr>
              <td width="92px">權限</td>
              <td>{{ val.group }}</td>
            </tr>
            <tr>
              <td width="92px">語言</td>
              <td>{{ val.language }}</td>
            </tr>
            <tr>
              <td width="92px">地址</td>
              <td>{{ val.address }}</td>
            </tr>
            <tr>
              <td width="92px">電話號碼</td>
              <td>{{ val.phone }}</td>
            </tr>
            <tr>
              <td width="92px">email</td>
              <td>{{ val.email }}</td>
            </tr>
            <tr>
              <td colspan="2">
                <center>
                  <span
                    v-if="
                      group == 'Guest' || 
                      group == 'User' && ((val.group == 'User' && userid !== val.id)|| val.group =='Manger')
                    "
                    style="color: red"
                  >權限不足</span>
                  <!-- <router-link v-else :to="{ name: 'EditUser', params: { id : val.id }}"> -->
                  <button v-else class="btn btn-warning" @click="handleclick(val.id)">修改</button>
                  <!-- </router-link> -->
                </center>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {api, serverProxy} from '../../../../api';

const railsApi = api+serverProxy;
// const railsApi = 'https://siemensproduct.nadi3docms.com/api';
// const railsApi = 'http://10.5.117.235/api';
// const railsApi = 'railsapi';
const QUERY_URL = railsApi + '/user/search';
const CompanyId = localStorage.getItem('CompanyId');
const ProductId = localStorage.getItem('ProductId');
const ProjectId = localStorage.getItem('ProjectId');
export default {
  data() {
    return {
      userid: '',
      group: '',
      search: '',
      userslist: [],
    };
  },
  created() {
    this.userid = localStorage.getItem('userid');
    this.group = localStorage.getItem('group');
  },
  mounted() {
    this.query();
  },
  methods: {
    query() {
      fetch(QUERY_URL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Token: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          CompanyId: CompanyId,
          ProductId: ProductId,
          ProjectId: ProjectId,
        }),
      })
        .then(response =>
          response.json().then(data => ({
            data: data,
          })),
        )
        .then(json => {
          this.userslist = Object(json.data);
        });
    },
    handleclick(id) {
      localStorage.setItem('pageNow', 'EditAccount');
      window.location.reload();
    },
  },
};
</script>
