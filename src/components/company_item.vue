<template>
  <div>
    <div class="page-header">
      <img src="../img/abc_logo.png" class="header-logo"/>
      <span>农银普惠云</span>
    </div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="com in companyInfo">
        <div class="grid-content bg-purple">
          <comInfoItem :comInfo="com"></comInfoItem>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import comInfoItem from './companyInfoItem'
  export default {
    name: "company_item",
    components: {
      comInfoItem: comInfoItem
    },
    data() {
      return {
        pageIndex: 0,
        pageHead: '',
        companyInfo: [
          {
            name: '阿里巴巴',
            creditScore: 'A',
            companyIcon: 'static/companyIcon/bee.png',
            work: '互联网企业',

          },
          {
            name: '阿里巴巴',
            creditScore: 'A',
            companyIcon: 'static/companyIcon/bee.png'
          },{
            name: '阿里巴巴',
            creditScore: 'A',
            companyIcon: 'static/companyIcon/bee.png'
          },{
            name: '阿里巴巴',
            creditScore: 'A',
            companyIcon: 'static/companyIcon/bee.png'
          },{
            name: '阿里巴巴',
            creditScore: 'A',
            companyIcon: 'static/companyIcon/bee.png'
          }
        ]

      }
    },
    mounted: function () {
      console.log(this.$route.query.itemIndex)
      this.pageIndex = this.$route.query.itemIndex
    },
    watch: {
      pageIndex() {
        console.log('pageindex is changing!')
      }
    }
  }
</script>

<style scoped>
  .page-header {
    margin: 0 5px;
    padding: 10px 0 10px 22px;
    font-weight: bolder;
    border-bottom: 1px solid rgb(192, 192, 192);
  }

  .header-logo {
    width: 40px;
    vertical-align: -9px;
  }
</style>
