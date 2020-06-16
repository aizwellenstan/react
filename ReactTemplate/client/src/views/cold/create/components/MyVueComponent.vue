<template>
  <div class="app-container">
    <h3>創造靜態資料 匯入csv檔</h3>
    <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
    <button @click="handleSubmit" class="btn btn-primary">Submit</button>
    <div style=" overflow-y: scroll;">
      <vue-scrolling-table
        :scroll-horizontal="scrollHorizontal"
        :scroll-vertical="scrollVertical"
        :sync-header-scroll="syncHeaderScroll"
        :sync-footer-scroll="syncFooterScroll"
        :dead-area-color="deadAreaColor"
        :class="{ freezeFirstColumn:freezeFirstColumn }"
      >
        <template slot="thead">
          <tr>
            <th v-for="col in tableHeader" :key="col">{{ col }}</th>
          </tr>
        </template>
        <template slot="tbody">
          <tr v-for="item in tableData" :key="item.id">
            <td v-for="col in tableHeader" :key="col">{{ item[col] }}</td>
          </tr>
        </template>
      </vue-scrolling-table>
    </div>
  </div>
</template>

<script>
import UploadExcelComponent from './UploadExcel/index.vue';
import VueScrollingTable from 'vue-scrolling-table';
import {api, serverProxy} from '../../../../api';


import {alarmApi} from '../../../../api';

const railsApi = api+serverProxy+'/v2';
// const railsApi = 'http://10.5.117.235/api/v2';
// const railsApi = 'railsapi';
const CompanyId = localStorage.getItem('CompanyId');
const ProductId = localStorage.getItem('ProductId');
const ProjectId = localStorage.getItem('ProjectId');
const CREATE_URL = `${railsApi}/${CompanyId}/${ProductId}/${ProjectId}/colddata`;

export default {
  name: 'UploadExcel',
  components: { UploadExcelComponent, VueScrollingTable },
  data() {
    return {
      tableData: [],
      tableHeader: [],
      dataTable: {},
    };
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;

      if (isLt1M) {
        return true;
      }

      this.$message({
        message: 'Please do not upload files larger than 1m in size.',
        type: 'warning',
      });
      return false;
    },
    handleSuccess({ results, header }) {
      this.tableData = results;
      this.tableHeader = header;
    },
    consoleTableData() {
      console.log(this.tableData);
    },
    handleSubmit1() {
      // console.log(this.tableData)
      // console.log(this.tableData[0])
      var test = this.tableData[0];
      delete test.ParentId;
      delete test.ObjectId;
      delete test.ChartURL;
      delete test.Discriptor;
      delete test.Status;
      delete test.Thumbnail;
      delete test.Language;
      delete test.ObjectUnitDescriptor;
      delete test.ocmsSensorName;

      console.log(JSON.stringify(test));
    },
    handleSubmit() {
      this.errorMessage = '';
      this.successMessage = '';
      this.signingUp = true;
      // for (var i = 0; i < this.tableData.length; i++) {
        fetch(CREATE_URL, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            token: localStorage.getItem('token'),
          },
          body: JSON.stringify(this.tableData),
        })
          .then(res => res.json())
          .then(parsedResponse => {
            console.log(parsedResponse);
            this.successMessage = parsedResponse.message;
          })
          .then(result => {
            setTimeout(() => {
              this.signingUp = false;
            }, 1000);
          });


          // Post to Alarm To Create Colddata
          fetch(alarmApi, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            token: localStorage.getItem('token'),
          },
          body: JSON.stringify(this.tableData),
        })
          .then(res => res.json())
          .then(parsedResponse => {
            console.log(parsedResponse);
            this.successMessage = parsedResponse.message;
          })
          .then(result => {
            setTimeout(() => {
              this.signingUp = false;
            }, 1000);
          });
      // }
      this.tableData = '';
      this.tableHeader = '';
    },
  },
};
</script>

<style scoped>
.dataTables_wrapper {
  clear: both;
  margin-bottom: 1em;
}
.dataTables_wrapper:after {
  content: '';
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}
.dataTables_length {
  float: left;
  white-space: nowrap;
}
.dataTables_filter {
  float: right;
  white-space: nowrap;
}
.tablepress {
  clear: both;
  margin: 0 !important;
  line-height: 2;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: none;
}
.tablepress-id-demo-responsive {
  white-space: nowrap;
}
table {
  display: table;
}
tr {
  display: table-row;
}
</style>