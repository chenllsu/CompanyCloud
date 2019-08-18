<template>
  <div>
    <div class="page-header">
      <img src="../img/abc_logo.png" class="header-logo"/>
      <span>农银普惠云</span>
    </div>
    <el-row :gutter="20">

      <el-col :span="4" v-for="com in companyInfo">
        <div class="grid-content bg-purple" @click='clickCompanyItem()'>
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
            name: '百度',
            creditScore: 'A',
            companyIcon: 'static/companyIcon/baidu.png',
            work: '互联网企业',
            date: '2017-3-12'
          },
          {
            name: '小蜜蜂',
            creditScore: 'A',
            companyIcon: 'static/companyIcon/bee.png',
            work: '食品加工',
            date: '2012-6-2'
          }, {
            name: '四达时代',
            creditScore: 'A',
            companyIcon: 'static/companyIcon/sida.jpg',
            work: '互联网企业',
            date: '2019-4-12'
          }, {
            name: 'ABC英文教育',
            creditScore: 'A',
            companyIcon: 'static/chen1.png',
            work: '教育业',
            date: '2012-9-12'
          }, {
            name: '椰树牌椰汁',
            creditScore: 'A',
            companyIcon: 'static/yeezy.png',
            work: '食品加工',
            date: '2019-3-12'
          }, {
            name: '红道远金属',
            creditScore: 'C',
            companyIcon: 'static/companyIcon/2.jpg',
            work: '金属业',
            date: '2019-3-12'
          }, {
            name: '优创商贸',
            creditScore: 'B',
            companyIcon: 'static/companyIcon/3.png',
            work: '外贸业',
            date: '2019-3-12'
          }, {
            name: '陈氏水产',
            creditScore: 'A',
            companyIcon: 'static/companyIcon/pangxie.png',
            work: '渔业',
            date: '2019-6-12'
          }, {
            name: '治宇衣帽',
            creditScore: 'C',
            companyIcon: 'static/companyIcon/maozi.png',
            work: '服装制造',
            date: '2018-3-2'
          }, {
            name: '子卿家具',
            creditScore: 'A',
            companyIcon: 'static/companyIcon/zhuangxiu.png',
            work: '家具制造',
            date: '2019-3-12'
          }, {
            name: '倩茹美妆',
            creditScore: 'A',
            companyIcon: 'static/companyIcon/meizhuang.png',
            work: '自主创业',
            date: '2019-7-12'
          },
          {
            name: '晓慧农作物销售',
            creditScore: 'B',
            companyIcon: 'static/companyIcon/qingcai.png',
            work: '农业',
            date: '2017-3-12'
          },
          {
            name: '子昂打印室',
            creditScore: 'A',
            companyIcon: 'static/companyIcon/dayinji.png',
            work: '产品制造',
            date: '2019-3-12'
          },
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
    },
    methods: {
      clickCompanyItem() {
        console.log('213')
        this.$router.push({name: 'companyAllInfo'})
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
