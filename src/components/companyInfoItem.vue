<template>
  <div class="item_wrapper">
    <img :src="comInfo.companyIcon" class="companyIcon"/>
    <div class="companyNameWrapper">{{comInfo.name}}</div>
    <div class="companyWork">互联网企业</div>
    <div class="creditScoreWrapper">
      <span>信用评级:</span>
      <span class="creditInfo">{{comInfo.creditScore}}</span>
    </div>
    <div class="creditScoreWrapper">
      {{comInfo.date}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      comInfo: {
        type: Object
      }
    },
    name: "companyInfoItem"
  }
</script>

<style scoped>
  .item_wrapper {
    border: 1px solid black;
    margin: 10px 10px;
    padding-bottom: 10px;
    border-radius: 3px;
    height: 180px;
  }
  .companyIcon {
    margin-top: 10px;
    width: 60%;
    padding: 0 20%;
  }
  .companyNameWrapper {
    text-align: center;
    font-weight: bolder;
    font-size: 15px;
  }
  .companyWork {
    text-align: center;
    color: gray;
    font-size: 9px;
  }
  .creditScoreWrapper {
    text-align: center;
    font-size: 9px;
  }
  .creditInfo {
    vertical-align: -2px;
    font-size: 20px;
    color: red;
    font-weight: bolder;
  }

</style>
