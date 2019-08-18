<template>
  <div class="Land">
    <div class="topzi">企业云注册</div>
    <div class="head-wrapper">
      <el-steps :active="active" finish-status="success">
        <el-step title="手机短信验证"></el-step>
        <el-step title="填写详细信息"></el-step>
      </el-steps>
    </div>
    <div class="step1" v-if="active == 0" >
      <el-form ref="form" :model="form" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="number" label="手机号">
          <el-input placeholder="手机号码" v-model="form.number" style="width: 70%">
            <el-button slot="append">发送验证码</el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="valid" label="验证码">
          <el-input placeholder="验证码" v-model="form.valid" style="width: 70%"/>
        </el-form-item>
      </el-form>
      <el-button style="display: block; margin: 12px 30px;" @click="next">下一步</el-button>
    </div>
    <div class="step2" v-if="active == 1" >
      <el-form ref="form" :model="form" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="password" label="登录密码">
          <el-input placeholder="登陆密码" v-model="form.password" style="width: 70%" >
          </el-input>
        </el-form-item>
        <el-form-item prop="confirm" label="确认密码">
          <el-input placeholder="确认密码" v-model="form.confirm" style="width: 70%" />
        </el-form-item>
        <el-form-item prop="card_id" label="农行卡号">
          <el-input placeholder="农行卡号" v-model="form.card_id" style="width: 70%" />
        </el-form-item>
        <el-form-item prop="real_name" label="真实姓名">
          <el-input placeholder="真实姓名" v-model="form.real_name" style="width: 70%" />
        </el-form-item>
        <el-form-item prop="id_number" label="身份证号">
          <el-input placeholder="身份证号" v-model="form.id_number" style="width: 70%" />
        </el-form-item>
          <el-checkbox name="type" v-model="form.clauses" style="margin-left: 30px;"></el-checkbox><el-link type="primary" style="margin-left: 10px">我已经阅读并同意《最终用户协议》</el-link>
        <br>
        <el-button :disabled="!form.clauses" style="margin-left: 30px;margin-top: 20px;">提交</el-button>
      </el-form>
    </div>

  </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0,
                form: {
                    valid:'',
                    number: '',
                    password: '',
                    confirm: '',
                    card_id:'',
                    real_name:'',
                    id_number:'',
                    clauses:false,
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            next() {
                if (this.active++ > 2) this.active = 0;
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
    left: 0;
    right: 0;
    margin:0 auto;
    padding: 40px;
  }
  .head-wrapper {
    margin-bottom:20px ;
  }
</style>

