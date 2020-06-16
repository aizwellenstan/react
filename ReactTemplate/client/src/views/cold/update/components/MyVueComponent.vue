<template>
  <div>
    <div class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">更新靜態資料點位</div>
      <div class="el-card__body">
        <!-- {{this.colddataList}} -->
        <div class="table-responsive">
          <table border="1" style="color:black;" class="table table-striped table-hover">
            <thead class="bg-info">
              <tr>
                <th>ParentId</th>
                <th>ObjectId</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(val, key, index) in colddataList" :key="index">
                <td>{{ val.ObjectData.ParentId }}</td>
                <td>{{ val.ObjectData.ObjectId }}</td>
                <td>
                  <!-- <router-link :to="{ name: 'EditColddata', params: { id : val.ObjectData.id }}"> -->
                  <button class="btn btn-warning" @click="handleclick(val.ObjectData.id)">Edit</button>
                  <!-- </router-link> -->
                </td>
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
// const railsApi = 'http://10.5.117.235/api';
// const railsApi = 'railsapi';
const CompanyId = localStorage.getItem('CompanyId');
const ProductId = localStorage.getItem('ProductId');
const ProjectId = localStorage.getItem('ProjectId');
const QUERY_URL = railsApi + `/${CompanyId}/${ProductId}/${ProjectId}/colddata`;
export default {
  data() {
    return {
      search: '',
      colddataList: [],
    };
  },
  mounted() {
    fetch(QUERY_URL, {
      method: 'get',
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
        this.colddataList = Object(json.data);
        console.log(this.colddataList);
      });
  },
  methods: {
    handleclick(id) {
      localStorage.setItem('id', id);
      localStorage.setItem('pageNow', 'EditCold');
      window.location.reload();
    },
  },
};
</script>
