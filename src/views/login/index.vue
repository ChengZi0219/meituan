<template>
  <div class="login-container">
    <!-- 卡片 -->
    <vue-particle-line
      color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi">
      <!-- <router-view /> -->
    </vue-particle-line>
    <el-card class="login_box">
      <img src="../../assets/logo.png" alt="">
      <!-- 表单
          :model="loginForm" 对验证有影响 -->
      <el-form :rules="loginRules" :model="loginForm" status-icon ref="">
        <el-form-item prop='mobile'>
          <el-input placeholder="请输入您的手机号" v-model='loginForm.mobile' @keyup.enter="handleAddBook"></el-input>
        </el-form-item>
        <el-form-item prop='pass' >
          <el-input type="password" placeholder="请输入密码" v-model='loginForm.pass' @keyup.enter="handleAddBook"></el-input>
        </el-form-item>
        <el-form-item prop='code'>
          <el-input placeholder="验证码" v-model='loginForm.code' style="width:200px" @keyup.enter="handleAddBook"></el-input>
          <el-button style="float:right;">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked" class="el-checkbox"></el-checkbox>
          我已阅读并同意 <el-link type="primary">用户协议</el-link> 和 <el-link type="primary">隐私条款</el-link>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click.native="handleAddBook">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <span class="f-bottom">Copyright 2020 山西易采购互联网科技有限公司版权所有 浙ICP备17040279号-1 客服：400-650-5860</span>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    var validatePass = (rule, value, callback) => {
      if (/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不对'))
      }
    }
    var validatePass1 = (rule, value, callback) => {
      if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(value)) {
        callback()
      } else {
        callback(new Error('密码格式不对'))
      }
    }
    return {
      // 默认选中复选框
      checked: true,
      // 表单对应的对象
      loginForm: {
        mobile: '18254621212',
        pass: 'ecaigou888',
        code: '123456'
      },
      // 表单校验规则对象
      loginRules: {
        mobile: [
          // 是否为必填项 提示 什么时候触发
          { required: true, message: '此项为必填项 请输入！', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '此项为必填项 请输入！', trigger: 'blur' },
          { validator: validatePass1, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '此项为必填项 请校验！', trigger: 'blur' },
          { len: 6, message: '请输入6位数哦！', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    // this.keyupEnter()
  },
  methods: {
    // 回车事件(不知原因 无效)
    // keyupEnter () {
    //   document.onkeydown = e => {
    //     const body = document.getElementsByTagName('body')[0]
    //     if (e.keyCode === 13 && e.target.baseURI.match(/inputbook/) && e.target === body) {
    //       console.log('enter') // match(此处应填写文件在浏览器中的地址，如 '/home/index')
    //       this.handleAddBook()
    //     }
    //   }
    // },
    handleAddBook () {
      // 整体表单的校验
      // this.$refs.loginForm.validate((valid) => {
      //   this.$http.post()
      // .then(res=>{})
      // })
      //

      // 登录成功 跳转到首页
      this.$router.push('/welcome')
    }
  }
}
</script>
<style lang='less' scoped>
.login-container {
  width: 100%;
  height:100%;
  position: absolute;
  left: 0;
  top: 0;
  // background: url(../../assets/images/login_bg.jpg) no-repeat center / cover ;
}
.login_box {
  width: 450px;
  height: 420px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform:translate(-50%,-50%);
  border-radius: 3%;
  img {
    display: block;
    width: 200px;
    margin: 0 auto 20px;
  }
}
.el-card /deep/ .el-card__body {
  padding: 20px 50px;
}
.login_box /deep/ .el-link {
  vertical-align:baseline;
}
.f-bottom {
  position: fixed;
  font-size: 12px;
  bottom: 10px;
  left: 50%;
  transform:translate(-50%,0);
  color: #8d8383;
}
</style>
