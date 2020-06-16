<template>
  <div>
    <div class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">刪除靜態資料點位</div>
      <div class="el-card__body">
        <!-- {{this.colddataList}} -->
        <div class="float-right">
          <button @click="handleDeleteAll()" class="btn btn-danger">DeleteAll</button>
        </div>
        <div class="table-responsive">
          <table border="1" style="color:black;" class="table table-striped table-hover">
            <thead class="bg-info">
              <tr>
                <th>ParentId</th>
                <th>ObjectId</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody v-if="renderComponent">
              <tr v-for="(val, key, index) in colddataList" :key="index">
                <td>{{ val.ObjectData.ParentId }}</td>
                <td>{{ val.ObjectData.ObjectId }}</td>
                <td>
                  <button @click="handleDelete(val.ObjectData.id)" class="btn btn-danger">Delete</button>
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
const QUERY_URL = `${railsApi}/${CompanyId}/${ProductId}/${ProjectId}/colddata`;
export default {
  data() {
    return {
      renderComponent: true,
      search: '',
      colddataList: [],
    };
  },
  mounted() {
    this.query();
  },
  methods: {
    query() {
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
        });
    },
    forceRerender() {
      // Remove my-component from the DOM
      this.renderComponent = false;

      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true;
        this.query();
      });
    },
    handleDelete(id) {
      fetch(QUERY_URL + `/+${id}`, {
        method: 'delete',
        headers: {
          Token: localStorage.getItem('token'),
        },
      }).then(
        (this.colddataList = ''),
        setTimeout(() => {
          this.forceRerender();
        }, 1000),
      );
    },
    handleDeleteAll() {
      fetch(QUERY_URL, {
        method: 'delete',
        headers: {
          Token: localStorage.getItem('token'),
        },
        body: {
          CompanyId: localStorage.getItem('CompanyId'),
          ProductId: localStorage.getItem('ProductId'),
          ProjectId: localStorage.getItem('ProjectId'),
        },
      })
      .then(
        (this.colddataList = ''),
        setTimeout(() => {
          this.forceRerender();
        }, 1000),
      );
    },
  },
};
</script>
