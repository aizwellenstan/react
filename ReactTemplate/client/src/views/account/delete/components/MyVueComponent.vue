<template>
  <div>
    <div class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">刪除帳戶</div>
      <div class="el-card__body">
        <div v-if="renderComponent" class="table-responsive">
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
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(val, index) in userslist" :key="index">
                <th>{{ val.username }}</th>
                <th>{{ val.description }}</th>
                <th>{{ val.group }}</th>
                <th>{{ val.language }}</th>
                <th>{{ val.address }}</th>
                <th>{{ val.phone }}</th>
                <th>{{ val.email }}</th>
                <th>
                  <span
                    v-if="
                    group == 'Guest' || 
                    group == 'User' && ((val.group == 'User' && userid !== val.id)|| val.group =='Manger')
                  "
                    style="color: red"
                  >權限不足</span>
                  <button v-else class="btn btn-danger" @click="handleDelete(val.id)">Delete</button>
                </th>
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
const DESTORY_URL = railsApi + '/user';
const CompanyId = localStorage.getItem('CompanyId');
const ProductId = localStorage.getItem('ProductId');
const ProjectId = localStorage.getItem('ProjectId');
export default {
  data() {
    return {
      userid: '',
      group: '',
      renderComponent: true,
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
    forceRerender() {
      // Remove my-component from the DOM
      this.renderComponent = false;

      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true;
        this.query();
      });
    },
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
    handleDelete(id) {
      fetch(DESTORY_URL + `/${id}`, {
        method: 'delete',
        headers: {
          Token: localStorage.getItem('token'),
        },
      });
      if (this.userid == id) {
        setTimeout(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('level');
          localStorage.removeItem('userid');
          this.$store.dispatch('user/logout');
          // this.$router.push(`/login?redirect=${this.$route.fullPath}`)
          document.location.href = '/';
          delete localStorage.token;
        }, 1000);
      } else {
        this.userslist = '';
        this.forceRerender();
      }
    },
  },
};
</script>
