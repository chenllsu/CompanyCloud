<template>
  <div>
    <el-row>
      <el-col :span="5">
        <vsidebar @selectPageItem="selectPageItem"></vsidebar>
      </el-col>
      <el-col :span="19">
        <!--企业信息模块-->
        <companyInfo></companyInfo>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import sidebar from './sidebar'
  import companyInfo from './company_item'

  export default {
    name: "index",
    components: {
      vsidebar: sidebar,
      companyInfo: companyInfo
    },
    data() {
      return{
        name: 'chenlong'
      }
    },
    methods: {
      selectPageItem(pageIndex) {
      }
    }
  }
</script>

<style scoped>

</style>
