<template>
  <div class="login_wrap">
    <el-form
      class="login_form"
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
    >
      <h2>登录</h2>
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-button @click.prevent="handelLogin()" class="login_btn" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'top',
      formLabelAlign: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async handelLogin () {
      const res =  await this.$http.post('login', this.formLabelAlign)
        const {
          data,
          meta: { msg, status }
        } = res.data
        if (status === 200) {
          this.$message.success(msg)
          sessionStorage.setItem('token', data.token)
          this.$router.push({ name: 'home' })
        } else {
          this.$message.warning(msg)
        }
    }
  }
}
</script>

<style lang="less" scoped>
.login_wrap {
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_form {
    width: 400px;
    padding: 30px;
    background-color: #fff;
    border-radius: 5px;
  }
  .login_btn {
    width: 100%;
  }
}
</style>
