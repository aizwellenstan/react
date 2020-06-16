<template>
  <div>
    <div style="color: black" class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">通知管理訊息聯絡人設定</div>
      <div class="el-card__body">
        <label>聯絡人</label>
        <input type="textbox" v-model="val" value="Contact" class="form-control" />
        <br />
        <label>
          <input type="checkbox" v-model="val" value="Email" /> Email
        </label>
        <div class="el-form-item__content">
          <div class="el-input">
            <input
              id="username"
              v-model="contact.email"
              type="text"
              class="form-control"
              aria-describedby
              placeholder="input Email"
            />
          </div>
        </div>
        <label>
          <input type="checkbox" v-model="val" value="Line" /> Line
        </label>
        <div class="el-form-item__content">
          <div class="el-input">
            <input
              id="username"
              v-model="contact.line"
              type="text"
              class="form-control"
              aria-describedby
              placeholder="input Line"
            />
          </div>
        </div>
        <label>
          <input type="checkbox" v-model="val" value="簡訊" /> 簡訊
        </label>
        <div class="el-form-item__content">
          <div class="el-input">
            <input
              id="username"
              v-model="contact.message"
              type="text"
              class="form-control"
              aria-describedby
              placeholder="input Phone"
            />
          </div>
        </div>
        <div data-v-dc72230a style="padding-top: 21px;">
          <button data-v-dc72230a type="submit" class="btn btn-primary">Submit</button>
          <!-- <p>{{ val }}</p> -->
        </div>
      </div>
    </div>

    <h3>聯絡人列表</h3>
    <div class="table-responsive">
      <table border="1" style="color:black;" class="table table-striped table-hover">
        <thead class="bg-info">
          <tr>
            <th>姓名</th>
            <th>Email</th>
            <th>Line</th>
            <th>電話號碼</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(val, key, index) in contactList" :key="index">
            <td>{{ val.name }}</td>
            <td>{{ val.email }}</td>
            <td>{{ val.line }}</td>
            <td>{{ val.message }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: [],
      contact: {
        name: '',
        email: '',
        line: '',
        message: '',
      },
      contactList: [
        {
          name: 'andeeson',
          email: 'andeeson@gmail.com',
          line: 'andeeson',
          message: '+886923452132',
        },
        {
          name: 'johon',
          email: 'johon@gmail.com',
          line: 'johon',
          message: '+886923452135',
        },
        {
          name: 'jonny',
          email: 'jonny',
          line: 'jonny',
          message: '+886923452131',
        },
      ],
    };
  },
};
</script>

<style scoped>
.text-primary {
  color: #000 !important;
}
</style>