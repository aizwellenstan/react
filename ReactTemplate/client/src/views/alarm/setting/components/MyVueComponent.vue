<template>
  <div class="app">
    <div class="" style="margin-left:0!important; margin-right:0!important; width:100%!important">
      <div class="row header">
        <h1 class="col s6 offset-s3 center-align teal-text">警報條件設定</h1>
      </div>
      <div class="row">
        <form class="col s6 offset-s3" @submit.prevent="submitTodo">
          <div class="input-field">
            <i class="material-icons prefix">列表</i>
            <div style="overflow-x:auto;">
              <!-- <table >
    <thead>
      <tr>
      <th>Object</th>
      <th>Alarm Category</th>
      <th>Alarm Function</th>
      <th>Trigger<br>Logic</th>
      <th>Trigger Value</th>
      <th>Is Value Aberrant</th>
      <th>Is Open Trigger</th>
      <th>Is Trigger</th>
      <th>Alarm Message Chinese</th>
      <th>Alarm Message Spanish</th>
      <th>Alarm Message Japanese</th>
      <th/>
    </tr>
    </thead>
    <tbody class="chat-area">
      <tr v-for="todo in todos" :key="todo.id" >
      <td>
                    <select id="new-object" v-model="todo.object" type="text">
                      <option>A</option>
                      <option>B</option>
                    </select>
                  </td>

                  <td>
                    <select id="new-object" v-model="todo.alarmcategory" type="text">
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                      <option>Fault</option>
                    </select>
                  </td>

                  <td>
                    <select id="new-object" v-model="todo.alarmfunction" type="text">
                      <option value="AlarmNeedAckNoReset">單次確認</option>
                      <option value="AlarmNeedAckNeedReset">雙次確認</option>
                      <option value="AlarmNoAckNoReset">僅通知</option>
                    </select>
                  </td>

                  <td>
                    <select id="new-object" v-model="todo.trigger_logic" type="text">
                      <option><</option>
                      <option>=</option>
                      <option>></option>
                    </select>
                  </td>

                  <td ><input id="icon_prefix2" v-model="todo.trigger_value" type="text"></td>

                  <td>
                    <select id="new-object" v-model="todo.isvalueaberrant" type="text">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </td>

                  <td>
                    <select id="new-object" v-model="todo.isopentrigger" type="text">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </td>

                  <td>
                    <select id="new-object" v-model="todo.istrigger" type="text">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </td>

                  <td><input id="new-object" v-model="todo.alarmmessagechinese" type="text"></td>

                  <td><input id="new-object" v-model="todo.alarmmessagechinese" type="text"></td>

                  <td><input id="new-object" v-model="todo.alarmmessagechinese" type="text"></td>

                  <td>
                    <a @click.prevent="deleteTodo(todo)">
                      <i class="btn btn-danger">delete</i>
                    </a>
                  </td>
    </tr>
    </tbody>
  </table> -->

              <body class="vsc-initialized">

                <div class="scrollableContainer">
                  <div class="scrollingArea">
                    <table class="cruises scrollable">
                      <thead>
                        <tr>
                          <th class="name"><div>Object</div></th>
                          <th class="operator"><div>Alarm Category</div></th>
                          <th class="alarmfunc"><div>Alarm Function</div></th>
                          <th class="tonnage"><div>Trigger Logic</div></th>
                          <th class="triggervalue"><div>Trigger Value</div></th>
                          <!-- <th class="name1"><div>Is Value Aberrant</div></th>
                          <th class="edit"><div>Is Open Trigger</div></th>
                          <th class="alarmfunc1"><div>Is Trigger</div></th> -->
                          <th class="tonnage1"><div>Alarm Message English</div></th>
                          <th class="operator2"><div>Edit?</div></th>
                          <th class="operator2"><div>Delete?</div></th>
                        </tr>
                      </thead>
                      <tbody style="margin-top:52px" v-if="renderComponent">
                        <tr  v-for="(setting, index) in settingList" :key="index">
                          <div v-if="setting.edit">
                            <td class="name"><div>
                              {{setting.AlarmInfoRule.ObjectId__ObjectId}}</div></td>
                            <td class="operator">
                              <div>
                                <select id="new-object" v-model="edit.AlarmCategory" type="text">
                                  <option value="High">High</option>
                                  <option value="Medium">Medium</option>
                                  <option value="Low">Low</option>
                                  <option value="Fault">Fault</option>
                                </select>
                              </div>
                            </td>
                            <td class="alarmfunc">
                              <div>
                                <select id="new-object" v-model="edit.AlarmFunction" type="text">
                                  <option value="AlarmNeedAckNoReset">單次確認</option>
                                  <option value="AlarmNeedAckNeedReset">雙次確認</option>
                                  <option value="AlarmNoAckNoReset">僅通知</option>
                                </select>
                              </div>
                              <!-- <div v-if="setting.AlarmInfoRule.AlarmFunction__AlarmFunction == 'AlarmNeedAckNoReset'"
                              >單次確認</div>
                              <div v-else-if="setting.AlarmInfoRule.AlarmFunction__AlarmFunction == 'AlarmNeedAckNeedReset'"
                              >雙次確認</div>
                              <div v-else>僅通知</div> -->

                              <!-- <div>{{setting.AlarmInfoRule.AlarmFunction__AlarmFunction}}</div> -->
                            </td>
                            <td class="tonnage">
                              <div>
                                <select id="new-object" v-model="edit.TriggerLogic" type="text">
                                  <option><</option>
                                  <option>=</option>
                                  <option>></option>
                                </select>
                              </div>
                            </td>
                            <td class="triggervalue">
                              <div>
                                <input id="new-object" v-model="edit.trigger_value" type="text">
                              </div>
                            </td>
                            <!-- <td class="name1"><div>
                              </div></td>
                            <td class="edit"><div><select id="new-object" v-model="setting.isopentrigger" type="text">
                              <option>Yes</option>
                              <option>No</option>
                            </select></div></td>
                            <td class="alarmfunc1"><div><select id="new-object" v-model="setting.istrigger" type="text">
                              <option>Yes</option>
                              <option>No</option>
                            </select></div></td> -->
                            <td class="tonnage1">
                              <div>
                                <input id="new-object" v-model="edit.AlarmMessageEnglish" type="text">
                              </div>
                            </td>
                            <td class="operator2">
                              <div>
                                  <button type="button" class="btn btn-secondary" @click="handleEditCancel(index)">Cancel</button>
                              </div>
                            </td>
                            <td class="operator2">
                              <div>
                                <button type="button" class="btn btn-primary" @click="handleEditSubmit()">Submmit</button>
                              </div>
                            </td>
                          </div>






                          
                          <div v-else >
                            <td class="name"><div>{{setting.AlarmInfoRule.ObjectId__ObjectId}}</div></td>
                            <td class="operator"><div>
                              {{setting.AlarmInfoRule.AlarmCategory__AlarmCategory}}</div></td>
                            <td class="alarmfunc">
                              <div v-if="setting.AlarmInfoRule.AlarmFunction__AlarmFunction == 'AlarmNeedAckNoReset'"
                              >單次確認</div>
                              <div v-else-if="setting.AlarmInfoRule.AlarmFunction__AlarmFunction == 'AlarmNeedAckNeedReset'"
                              >雙次確認</div>
                              <div v-else>僅通知</div>
                              <!-- <div>{{setting.AlarmInfoRule.AlarmFunction__AlarmFunction}}</div> -->
                            </td>
                            <td class="tonnage"><div>
                              {{setting.AlarmInfoRule.TriggerLogic__TriggerLogic}}</div></td>
                            <td class="triggervalue">
                              <div>
                                {{setting.AlarmInfoRule.trigger_value}}
                              </div>
                            </td>
                            <!-- <td class="name1"><div>
                              </div></td>
                            <td class="edit"><div><select id="new-object" v-model="setting.isopentrigger" type="text">
                              <option>Yes</option>
                              <option>No</option>
                            </select></div></td>
                            <td class="alarmfunc1"><div><select id="new-object" v-model="setting.istrigger" type="text">
                              <option>Yes</option>
                              <option>No</option>
                            </select></div></td> -->
                            <td class="tonnage1"><div>
                              {{setting.AlarmInfoRule.AlarmMessageEnglish}}</div></td>
                            <td class="operator2">
                              <div>
                                <button v-if="!editing" class="btn btn-warning" @click="handleEdit(index)">Edit</button>
                                <span v-else>Editing</span>
                              </div>
                            </td>
                            <td class="operator2">
                              <div>
                                <a @click.prevent="handleDelete(setting.AlarmInfoRule.ObjectId__ObjectId, setting.AlarmInfoRule.TriggerLogic__TriggerLogic)">
                                  <i class="btn btn-danger">delete</i>
                                </a>
                              </div>
                            </td>
                          </div>
                        </tr>
                        <span id="scrollToMe" />
                      </tbody>
                    </table>
                  </div>
                </div>

              </body>

            </div>
            
            
            <h3>新增規則</h3>
            <div class="scrollableContainer">
                  <div>
                    <table class="cruises scrollable">
                      <thead>
                        <tr>
                          <th class="name"><div>Object</div></th>
                          <th class="operator"><div>Alarm Category</div></th>
                          <th class="alarmfunc"><div>Alarm Function</div></th>
                          <th class="tonnage"><div>Trigger Logic</div></th>
                          <th class="triggervalue"><div>Trigger Value</div></th>
                          <!-- <th class="name1"><div>Is Value Aberrant</div></th>
                          <th class="edit"><div>Is Open Trigger</div></th>
                          <th class="alarmfunc1"><div>Is Trigger</div></th> -->
                          <th class="tonnage1"><div>Alarm Message English</div></th>
                          <th class="operator2"><div>Submmit?</div></th>
                        </tr>
                      </thead>
                      <tbody style="margin-top:52px">
                        <tr>
                          <td class="name">
                            <div>
                              <input id="icon_prefix2" v-model="setting.ObjectId" type="text" class="form-control">
                              <!-- <select id="new-object" v-model="setting.ObjectId" type="text">
                                <option>A</option>
                                <option>B</option>
                              </select> -->
                            </div>
                          </td>
                          <td class="operator"><div><select id="new-object" v-model="setting.AlarmCategory" type="text">
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                            <option>Fault</option>
                          </select></div></td>
                          <td class="alarmfunc"><div><select id="new-object" v-model="setting.AlarmFunction" type="text">
                            <option value="AlarmNeedAckNoReset">單次確認</option>
                            <option value="AlarmNeedAckNeedReset">雙次確認</option>
                            <option value="AlarmNoAckNoReset">僅通知</option>
                          </select></div></td>
                          <td class="tonnage"><div><select id="new-object" v-model="setting.TriggerLogic" type="text">
                            <option><</option>
                            <option>=</option>
                            <option>></option>
                          </select></div></td>
                          <td class="triggervalue"><div><input class="form-control" v-model="setting.trigger_value" type="text"></div></td>
                          <td class="tonnage1"><div><input class="form-control" v-model="setting.AlarmMessageEnglish" type="text"></div></td>
                          <td class="operator2">
                            <div>
                              <button class="btn btn-primary" @click="handleSubmit()"><a href="#scrollToMe" style="color:#fff">Submmit</a></button>
                            </div>
                          </td>
                        </tr>
                        <span id="scrollToMe" />
                      </tbody>
                    </table>
                  </div>
                </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const alarmApi = 'https://product.nadi3docms.com/Siemens';
// const alarmApi = 'alarmapi';
const QUERY_URL = alarmApi+'/alarmInfo/'

export default {
  name: 'App',
  data() {
    return {
      renderComponent: true,
      settingList: '',
      setting: '',
      todos: [],
      newObject: '',
      newValue: '',
      newDay: '',
      elements: [],
      newTime: {
        HH: '00',
        mm: '00'
      },
      setting:{},
      edit: {},
      editing: false
    }
  },
  watch: {
    todos: {
      handler() {
        localStorage.todos = JSON.stringify(this.todos)
      },
      deep: true
    }
  },
  mounted() {
    this.query()
  },
  methods: {
    forceRerender() {
      // Remove my-component from the DOM
      this.renderComponent = false

      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true
      })
    },
    query() {
      fetch(QUERY_URL, {
        method: 'get'
      })
        .then(
          response =>
            response.json().then(data => ({
              data: data
            }))
        )
        .then(json => {
          
          this.settingList = Object(json.data)
          // console.log(json.data)
          for(var i=0; i<this.settingList.length; i++){
            this.settingList[i].edit = false
            // console.log(this.settingList[i])
          }
          
        })
    },
    handleSubmit() {
      fetch(QUERY_URL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify([
          this.setting
        ])
      })
        .then(
          response =>
            response.json().then(data => ({
              data: data
            }))
        )
        .then(json => {
          this.settingList = Object(json.data)
          console.log(json.data)
        })
    },
    handleDelete(ObjectId, TrigerLogic) {
      fetch(QUERY_URL, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify([{
          "ObjectId": ObjectId,
          TriggerLogic: TrigerLogic
        }])
      })
        .then(
          response =>
            response.json().then(data => ({
              data: data
            }))
        )
        .then(json => {
          this.settingList = Object(json.data)
          console.log(json.data)
        })
    },
    handleEdit(index) {
      this.settingList[index].edit=true,
      this.edit.ObjectId=this.settingList[index].AlarmInfoRule.ObjectId__ObjectId
      this.edit.AlarmCategory=this.settingList[index].AlarmInfoRule.AlarmCategory__AlarmCategory
      this.edit.AlarmFunction=this.settingList[index].AlarmInfoRule.AlarmFunction__AlarmFunction
      this.edit.TriggerLogic=this.settingList[index].AlarmInfoRule.TriggerLogic__TriggerLogic
      this.edit.trigger_value = this.settingList[index].AlarmInfoRule.trigger_value
      this.edit.AlarmMessageEnglish = this.settingList[index].AlarmInfoRule.AlarmMessageEnglish
      this.forceRerender()
      this.editing= true
    },
    handleEditCancel(index) {
      this.settingList[index].edit=false,
      this.forceRerender()
      this.editing= false
    },
    handleEditSubmit(index) {
      fetch(QUERY_URL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify([
          this.edit
        ])
      })
        .then(
          setTimeout(() => {
            this.editing= false,
            this.settingList='',
            this.forceRerender(),
            this.query()
          }, 1000)
        )
    }
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

.chat-area {
/*   border: 1px solid #ccc; */
  height: 500px;
  overflow: auto;
}

  * { padding: 0; margin: 0; }
  table.cruises {
    font-family: verdana, arial, helvetica, sans-serif;
    font-size: 11.5px;
    border-collapse: collapse;
    width: 535px;
    }
  table.cruises td {
    border-left: 1px solid #999;
    border-top: 1px solid #999;
    padding: 2px 4px;
    }
  table.cruises tr:first-child td {
    border-top: none;
  }
  table.cruises th {
    border-left: 1px solid #999;
    padding: 2px 4px;
    background: #6b6164;
    color: white;
    font-variant: small-caps;
    }
  table.cruises td { background: #eee; overflow: hidden; }

  div.scrollableContainer {
    position: relative;
    width: 100%;
    padding-top: 36px;
    margin: 0px;
    border: 1px solid #999;
    background: #6b6164;
    }
  div.scrollingArea {
    height: 400px;
    overflow: auto;
    }

  table.scrollable thead tr {
    left: -1px; top: 0;
    position: absolute;
    }

  table.cruises .name     div { width: 300px; }
  table.cruises .operator div { width: 85px; }
  table.cruises .alarmfunc    div { width: 93px;  text-align:center; }
  table.cruises .tonnage  div { width: 60px;  text-align:center; }
  table.cruises .triggervalue   div { width: 80px; }
  table.cruises .name1     div { width: 68px; }
  table.cruises .edit div { width: 68px; }
  table.cruises .alarmfunc1   div { width: 68px;  text-align:center; }
  table.cruises .tonnage1  div { width: 170px;  text-align:center; }
  table.cruises .triggervalue1   div { width: 170px; }
  table.cruises .name2    div { width: 128px; }
  table.cruises .operator2 div { width: 73px; }

  table.cruises td.operator { background: #ebcb4d; }
  table.cruises td.tonnage  { background: white; }
  table.cruises td.name     { background: #C7E0C1; }
  table.cruises td.alarmfunc    { background: #B7C3E8; }

</style>
