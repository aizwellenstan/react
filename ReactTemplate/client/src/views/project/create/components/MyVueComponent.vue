<template>
  <div class="table-responsive">
      <div class="row header">
        <h1 class="col s6 offset-s3 center-align teal-text">專案</h1>
      </div>
      <div class="row">
        <form class="col s6 offset-s3">
          <div class="input-field">
            <i class="material-icons prefix"></i>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>選擇</th>
                  <th>專案ID</th>
                  <th>公司ID</th>
                  <th>產品ID</th>
                  <th>標題</th>
                  <th>備註</th>
                  <th>編輯</th>
                </tr>
              </thead>
              <tbody v-if="renderComponent">
                <tr v-for="project in projectList" :key="project.id">
                  <td>
                    &nbsp;&nbsp;
                    <input type="radio" :id="project.id" :value="project.ProjectId" v-model="picked" @click="handlePorjectId(project.ProjectId, project.CompanyId, project.ProductId)">
                    <!-- {{project.id}} -->
                  </td>

                  <td>{{project.ProjectId}}</td>

                  <td>{{project.CompanyId}}</td>

                  <td>{{project.ProductId}}</td>

                  <td>{{project.Title}}</td>

                  <td>{{project.Description}}</td>

                  <td>
                      <button
                        class="btn btn-warning"
                        @click="handleEdit(project.id)"
                      >Edit
                      </button>
                    
                    <!-- <button class="btn btn-warning" @click="handleEdit()">Edit</button> -->
                  </td>
                </tr>
              </tbody>
              <span>目前選擇專案: <br>{{ picked }}</span>
              <br>
              <br>
              <h3>新建專案</h3>
              <thead>
                <tr>
                  <th>專案ID</th>
                  <th>公司ID</th>
                  <th>產品ID</th>
                  <th>標題</th>
                  <th>備註</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input id="icon_prefix2" v-model="newProjectId" type="text"></td>

                  <td><input id="icon_prefix2" v-model="newCompanyId" type="text"></td>

                  <td><input id="icon_prefix2" v-model="newProductId" type="text"></td>

                  <td><input id="icon_prefix2" v-model="newTitle" type="text"></td>

                  <td><input id="icon_prefix2" v-model="newDescription" type="text"></td>

                  <td><button class="btn btn-primary" @click="handleSubmit()">Add</button></td>
                </tr>
              </tbody>
              <br>
            </table>
          </div>
        </form>
      </div>
    
  </div>
</template>

<script>
import api from '../../../../api';

const railsApi = api+'/api';
const QUERY_URL = railsApi + `/projectinfo`
export default {
  name: 'App',
  data() {
    return {
      renderComponent: true,
      picked: '',
      projectList: '',
      newProjectId: '',
      newCompanyId: '',
      newProductId: '',
      newTitle: '',
      newDescription: ''
    }
  },
  mounted() {
    this.query()
  },
  methods:{
    forceRerender() {
      // Remove my-component from the DOM
      this.renderComponent = false

      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true
        this.query()
      })
    },
    query() {
      fetch(QUERY_URL+`?SiUsername=${localStorage.getItem('SiUsername')}`, {
      method: 'get',
    })
    .then(
          response =>
            response.json().then(data => ({
              data: data
            }))
        )
        .then(json => {
          this.projectList = Object(json.data)
          console.log(json.data)
        })
    },
    handlePorjectId(company,product,project) {
      localStorage.setItem('selectCompanyId', company)
      localStorage.setItem('selectProductId', product)
      localStorage.setItem('selectProjectId', project)
    },
    handleSubmit() {
      fetch(QUERY_URL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          'ProjectId': this.newProjectId,
          'CompanyId': this.newCompanyId,
          'ProductId': this.newProductId,
          'Title': this.newTitle,
          'Description': this.newDescription,
          'SiUsername': localStorage.getItem('SiUsername')
        })
      })
      .then(
        this.newProjectId= '',
        this.newCompanyId= '',
        this.newProductId= '',
        this.newTitle= '',
        this.newDescription= '',
      )
      this.forceRerender()   
    },
    handleEdit(id){
    localStorage.setItem('id', id);
    //   localStorage.setItem('pageNow', 'EditCold');
      window.location.reload();
    }
  }
}
</script>
