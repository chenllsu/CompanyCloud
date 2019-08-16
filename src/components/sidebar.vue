<template>
  <div>
    <el-menu default-active=""
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             @select="selectItem"
             :collapse="false">
      <div class="page-header">
        <img src="../img/abc_logo.png" class="header-logo"/>
        <span>农银普惠云</span>
      </div>

      <el-menu-item index="1" route="/compant_item">
        <img src="../img/corn.png" class="item-logo"/>
        <span slot="title">农业</span>
      </el-menu-item>
      <el-menu-item index="2">
        <img src="../img/tree.png" class="item-logo"/>
        <span slot="title">林业</span>
      </el-menu-item>

      <el-menu-item index="3">
        <img src="../img/cow.png" class="item-logo"/>
        <span slot="title">畜牧业</span>
      </el-menu-item>

      <el-menu-item index="4">
        <img src="../img/fish.png" class="item-logo"/>
        <span slot="title">渔业</span>
      </el-menu-item>

      <el-submenu index="5">
        <template slot="title" class="item-wrapper">
          <img src="../img/factory.png" class="item-logo"/>
          <span slot="title">工业</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="1-1">采矿业</el-menu-item>
          <el-menu-item index="1-2">制造业</el-menu-item>
          <el-menu-item index="1-2">电力</el-menu-item>
          <el-menu-item index="1-2">热力</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </div>
</template>


<script>
  export default {
    //父组件通过props属性传递进来的数据
    props: {
      name: {
        type: String,
        default: () => {
          return ''
        }
      }
    },
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      selectItem(index, indexPath) {
        console.log('选择index，发送给父组件：', index, indexPath)
        this.$emit('selectPageItem', index);
        // this.$router.push({path: '/index/company_item', query: {itemIndex: index}});
      }
    }
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    /*width: 200px;*/
    min-height: 600px;
  }
  .page-header {
    margin: 0 5px;
    padding: 10px 0 10px 22px;
    font-weight: bolder;
    border-bottom: 1px solid 	rgb(192,192,192);
  }
  .header-logo {
    width: 40px;
    vertical-align: -9px;
  }

  .item-logo {
    width: 20px;
    vertical-align: center;
  }
</style>
