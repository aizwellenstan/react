<template>
  <div>
    <div class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">查詢帳戶</div>
      <div class="el-card__body">
        <label>查詢</label>
        <input v-model="search" type="text" placeholder="輸入關鍵字" />
        <div class="table-responsive">
          <table border="1" style="color:black;" class="table table-striped table-hover">
            <thead class="bg-info">
              <tr>
                <th>使用者名稱</th>
                <th>備註</th>
                <th>權限</th>
                <th>語言</th>
                <th>地址</th>
                <th>電話號碼</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(val, index) in filteredList" :key="index">
                <th>{{ val.username }}</th>
                <th>{{ val.description }}</th>
                <th>{{ val.group }}</th>
                <th>{{ val.language }}</th>
                <th>{{ val.address }}</th>
                <th>{{ val.phone }}</th>
                <th>{{ val.email }}</th>
              </tr>
            </tbody>
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
      search: '',
      userslist: '',
    };
  },
  computed: {
    filteredList() {
      return Object.keys(this.userslist)
        .filter(
          key => key.toLowerCase().indexOf(this.search.toLowerCase()) !== -1,
        )
        .reduce((obj, key) => {
          obj[key] = this.userslist[key];
          return obj;
        }, {});
      // return Object.entries(this.userslist).map(([key, value]) => ({key, value}))
      //         .filter((data) =>
      //         JSON.stringify(data).toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
    },
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
    searchData() {
      fetch(QUERY_URL, {
        method: 'post',
        headers: {
          Token: localStorage.getItem('token'),
        },
      })
        .then(response =>
          response.json().then(data => ({
            data: data,
          })),
        )
        .then(json => {
          this.userslist = Object(json.data);
          console.log(json.data);
        });
    },
  },
};
</script>
