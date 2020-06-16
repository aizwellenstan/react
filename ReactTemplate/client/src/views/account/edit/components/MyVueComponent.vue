<template>
  <div>
    <!-- #edit user {{ $route.params.id }} -->
    <div class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">修改使用者</div>
      <div v-if="errorMessage" class="alert alert-danger" role="alert">{{ errorMessage }}</div>
      <div v-if="successMessage" class="alert alert-success" role="alert">{{ successMessage }}</div>
      <form v-if="!signingUp" @submit.prevent="signup">
        <div class="form-group">
          <div class="el-form-item">
            <label class="el-form-item__label">使用者名稱</label>
            <div class="el-form-item__content">
              <div class="el-input">
                <input
                  id="username"
                  v-model="user.username"
                  type="text"
                  class="form-control"
                  aria-describedby="usernameHelp"
                  placeholder="Username"
                  required
                />
              </div>
            </div>
          </div>
          <h5 id="usernameHelp" class="form-text text-muted" />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <span class="tag">密碼</span>
            <br />
            <br />
            <input
              id="password"
              v-model="user.password"
              type="password"
              class="form-control"
              aria-describedby="passwordHelp"
              placeholder="Password"
              required
            />
            <h5 id="passwordHelp" class="form-text text-muted" />
          </div>
          <div class="form-group col-md-6">
            <span class="tag">確認密碼</span>
            <br />
            <br />
            <input
              id="confirmPassword"
              v-model="user.confirmPassword"
              type="password"
              class="form-control"
              aria-describedby="confirmPasswordHelp"
              placeholder="ConfirmPassword"
              required
            />
          </div>
          <div class="form-group col-md-6">
            <span class="tag">Email</span>
            <br />
            <br />
            <input
              v-model="user.email"
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Email"
              required
            />
          </div>
          <div class="form-group col-md-6">
            <span class="tag">電話號碼</span>
            <br />
            <br />
            <input
              v-model="user.phone"
              type="text"
              class="form-control"
              aria-describedby
              placeholder="Phone"
              required
            />
          </div>
          <hr />
          <div class="form-group col-md-6">
            <span class="tag">地址</span>
            <br />
            <br />
            <input
              v-model="user.address"
              type="text"
              class="form-control"
              aria-describedby
              placeholder="Address"
              required
            />
          </div>
          <div class="form-group col-md-6">
            <span class="tag">語言</span>
            <br />
            <br />
            <input
              v-model="user.language"
              type="text"
              class="form-control"
              aria-describedby
              placeholder="Language"
              required
            />
          </div>
          <div class="form-group col-md-6">
            <span class="tag">備註</span>
            <br />
            <br />
            <input
              v-model="user.description"
              type="text"
              class="form-control"
              aria-describedby
              placeholder="Description"
              required
            />
          </div>
          <div class="form-group col-md-6">
            <label class="tag">權限</label>
            <form>
              <select v-if="group == 'Manager'" v-model="user.group" class="custom-select">
                <option selected>Guest</option>
                <option>User</option>
                <option>Manager</option>
              </select>
              <select v-else-if="group == 'User'" v-model="user.group" class="custom-select">
                <option selected>Guest</option>
                <option>User</option>
              </select>
              <select v-if="group == 'Guest'" v-model="user.group" class="custom-select">
                <option selected>Guest</option>
              </select>
            </form>
          </div>
        </div>
        <div style="padding-top: 21px">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {api, serverProxy} from '../../../../api';

const railsApi = api+serverProxy;
// const railsApi = 'https://siemensproduct.nadi3docms.com/api';
// const railsApi = 'http://10.5.117.235/api';
// const railsApi = 'railsapi';
const UPDATE_URL = railsApi + '/user/';
// import Joi from 'joi'

// const schema = Joi.object().keys({
//   username: Joi.string().regex(/(^[a-zA-Z0-9_]+$)/).min(2).max(30).required(),
//   password: Joi.string().regex(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(^[a-zA-Z0-9@\$=!:.#%]+$)/).trim().min(8).required(),
//   confirmPassword: Joi.string().regex(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(^[a-zA-Z0-9@\$=!:.#%]+$)/).trim().min(8).required()
// })
export default {
  data: () => ({
    group: '',
    userid: '',
    signingUp: false,
    errorMessage: '',
    successMessage: '',
    user: {
      username: '',
      password: '',
      confirmPassword: '',
      companyId: '',
      productId: '',
      projectId: '',
      description: '',
      group: '',
      language: '',
      address: '',
      phone: '',
      email: '',
    },
    isChecked: true,
    okRegister: false,
  }),
  watch: {
    user: {
      handler() {
        this.errorMessage = '';
      },
      deep: true,
    },
  },
  created() {
    // this.id = this.$route.params.id;
    this.userid = localStorage.getItem('userid');
    this.group = localStorage.getItem('group');
    var url = window.location.search;
    url = url.replace('?id=', ''); // remove the ?
    this.id = url;
  },
  methods: {
    signup() {
      this.errorMessage = '';
      this.successMessage = '';
      this.signingUp = true;
      // if(localStorage.getItem('selectProjectId')=="") {
      //   alert("Please Select Project From ProjectPage")
      //   this.$router.push('/admin/project')
      // } else {
      //   this.user.companyId = localStorage.getItem('selectCompanyId')
      //   this.user.productId = localStorage.getItem('selectProductId')
      //   this.user.projectId = localStorage.getItem('selectProjectId')
      //   this.okRegister=true
      // }
      this.user.companyId = localStorage.getItem('CompanyId');
      this.user.productId = localStorage.getItem('ProductId');
      this.user.projectId = localStorage.getItem('ProjectId');
      this.okRegister = true;
      if (this.okRegister) {
        fetch(UPDATE_URL + this.id, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(this.user),
        })
          .then(res => res.json())
          .then(parsedResponse => {
            console.log(parsedResponse);
            this.successMessage = parsedResponse.message;
          })
          .then(result => {
            setTimeout(() => {
              this.signingUp = false;
              this.$router.push('/admin/accounts/update');
            }, 1000);
          });
      }
    },
  },
};
</script>
