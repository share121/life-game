<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import HeaderView from './views/HeaderView.vue'
import HomeView from './views/HomeView.vue'
const locale = zhCn

useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light'
})
const fullscreenEle: Ref<HTMLElement> = ref(document.documentElement)
const { toggle } = useFullscreen(fullscreenEle)
</script>

<template>
  <el-config-provider :locale="locale">
    <el-container>
      <el-header class="header">
        <header-view @fullscreen="toggle()"></header-view>
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
