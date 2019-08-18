<template>
  <div class="Land">
    <div class="topzi">企业云登陆</div>
    <el-tabs type="border-card" @tab-click="recognize">
      <el-tab-pane label="用户名密码登陆">
        <el-form :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
          <el-form-item prop="username" label="姓名">
            <el-input v-model="ruleForm1.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm1.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm1')">提交</el-button>
            <el-button type="success" >注册</el-button>
            <el-button @click="resetForm('ruleForm1')">重置</el-button>
            <el-link type="primary">忘记密码</el-link>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="短信验证码登陆">
        <el-form :model="messageLogin"  ref="message" label-width="100px" class="demo-ruleForm">
          <el-form-item prop="username" label="手机号">
            <el-input placeholder="手机号码" v-model="messageLogin.number" >
              <el-button slot="append">发送验证码</el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="username" label="验证码">
            <el-input placeholder="验证码" v-model="messageLogin.valid" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('message')">提交</el-button>
            <el-button @click="resetForm('message')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="人脸识别登陆" >
        <img :src="url" class="face-image">
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
  export default {
    data() {
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm1.password !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm1: {
          password: '',
          username: ''
        },
        messageLogin:{
          number:'',
          valid:'',
        },
        url:'http://img.mp.sohu.com/upload/20170615/a13cfdd50fd5410a880bcb13c8d57e32.png',
        rules1: {
          password: [
            { required: true,validator: validatePassword, trigger: 'blur' }
          ],
          username: [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$router.push({name:'index'})
      },
      recognize(tab, event) {
        console.log(tab, event);
        if(tab.index === "2") {
          const h = this.$createElement;
          this.$notify({
            title: '识别结果',
            message: h('i', { style: 'color: teal'}, '人脸识别成功')
          });
        }
        if(tab.index === "3") {
          const h = this.$createElement;
          this.$notify({
            title: '识别结果',
            message: h('i', { style: 'color: teal'}, '语音识别成功')
          });
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>


<style scoped>
  html,body{
    width:100%;
    height:100%;
    background-size: 100% 100%;
  }
  #app .topzi{
    font-size: 40px;
    margin-bottom: 20px;
  }
  #app .Land{
    width: 40%;
    position:fixed;
    top:20%;
    left: 0;
    right: 0;
    margin:0 auto;
    padding: 40px;
  }
  #app  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .face-image {
    display: block;
    margin: 0 auto;
  }
</style>
