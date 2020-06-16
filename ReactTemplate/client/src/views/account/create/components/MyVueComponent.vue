<template>
  <div>
    <div class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">新增使用者</div>
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
    <!-- <div>
    <div class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">Create Account</div>
      <div class="el-card__body">
        <form class="el-form">
          <div class="el-form-item">
             <div v-if="errorMessage" class="alert alert-danger" role="alert">
                {{ errorMessage }}
              </div>
          </div>

          <div class="el-form-item">
            <label class="el-form-item__label">ユーザー名</label>
            <div class="el-form-item__content">
              <div class="el-input">
                <input
                  id="username"
                  v-model="user.username"
                  type="text"
                  class="el-input__inner"
                  aria-describedby="usernameHelp"
                  placeholder="Enter a username"
                  required
                >
              </div>
            </div>
          </div>

          <div class="el-form-item">
            <label class="el-form-item__label">パスワード</label>
            <div class="el-form-item__content">
              <div class="el-input">
                <input
                  id="password"
                  v-model="user.password"
                  type="password"
                  class="el-input__inner"
                  aria-describedby="passwordHelp"
                  placeholder="Password"
                  required
                  autocomplete="off"
                >
              </div>
            </div>
          </div>

          <div class="el-form-item">
            <label class="el-form-item__label">Confirmパスワード</label>
            <div class="el-form-item__content">
              <div class="el-input">
                <input
                  id="confirmPassword"
                  v-model="user.confirmPassword"
                  type="password"
                  class="el-input__inner"
                  aria-describedby="confirmPasswordHelp"
                  placeholder="Password"
                  required
                >
              </div>
            </div>
          </div>

          <div class="el-form-item">
            <label class="el-form-item__label">Last Name</label>
            <div class="el-form-item__content">
              <div class="el-input">
                <input type="password" autocomplete="off" class="el-input__inner">
              </div>
            </div>
          </div>

          <div class="el-form-item">
            <label class="el-form-item__label">First Name</label>
            <div class="el-form-item__content">
              <div class="el-input">
                <input type="password" autocomplete="off" class="el-input__inner">
              </div>
            </div>
          </div>

          <div class="el-form-item">
            <label class="el-form-item__label">Permission</label>
            <el-select filterable placeholder="Select">
              <el-option>1</el-option>
              <el-option>2</el-option>
              <el-option>3</el-option>
            </el-select>
          </div>

          <div class="el-form-item">
            <label class="el-form-item__label">Email</label>
            <div class="el-form-item__content">
              <div class="el-input">
                <input type="password" autocomplete="off" class="el-input__inner">
              </div>
            </div>
          </div>

          <div class="el-form-item">
            <div class="el-form-item__content">
              <div class="d-flex jc-between">
                <el-button type="submit">Submit</el-button>
                &nbsp;&nbsp;
                <a href="/login">ログイン</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>-->
  </div>
</template>

<script>
import {api, serverProxy} from '../../../../api';

const railsApi = api+serverProxy;
// const railsApi = 'https://siemensproduct.nadi3docms.com/api';
// const railsApi = 'http://10.5.117.235/api';
// const railsApi = 'railsapi';
// import Joi from 'joi'
const REGISTER_URL = `${railsApi}/signup`;
// const schema = Joi.object().keys({
//   username: Joi.string().regex(/(^[a-zA-Z0-9_]+$)/).min(2).max(30)
//     .required(),
//   password: Joi.string().regex(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(^[a-zA-Z0-9@\$=!:.#%]+$)/).trim().min(8).required(),
//   confirmPassword: Joi.string().regex(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(^[a-zA-Z0-9@\$=!:.#%]+$)/).trim().min(8).required()
// })
export default {
  data: () => ({
    group: '',
    signingUp: false,
    errorMessage: '',
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
    successMessage: '',
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
    this.group = localStorage.getItem('group');
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
        fetch(REGISTER_URL, {
          method: 'post',
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
            }, 1000);
          });
      }
    },
    // valid() {
    //   if (this.isChecked === false) {
    //     this.errorMessage = 'Please agree Terms of Use and Privacy Policy. 🙈';
    //     return false;
    //   }
    //   if (this.user.password !== this.user.confirmPassword) {
    //     this.errorMessage = 'Passwords must match. 🙈';
    //     return false;
    //   }
    //   const result = Joi.validate(this.user, schema);
    //   if (result.error === null) {
    //     return true;
    //   }
    //   if (result.error.message.includes('username')) {
    //     this.errorMessage = 'Username is invalid. 😭';
    //   } else if(result.error.message.includes('password')) {
    //     this.errorMessage = 'Password is invalid. 🙈';
    //   } else {
    //     console.log(result.error.message)
    //   }
    //   return false;
    // },
  },
};
</script>
