<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import HeaderView from './views/HeaderView.vue'
import HomeView from './views/HomeView.vue'

useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light'
})
</script>

<template>
  <el-config-provider :locale="zhCn">
    <el-container>
      <el-header class="header">
        <header-view></header-view>
      </el-header>
      <el-main class="main">
        <home-view></home-view>
      </el-main>
    </el-container>
  </el-config-provider>
</template>

<style lang="less" scoped>
.header {
  box-shadow: var(--el-fill-color) 0px 5px 20px 0px;
}
.main {
  height: 100%;
  width: 100%;
}
</style>
