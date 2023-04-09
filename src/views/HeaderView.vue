<script lang="ts" setup>
import { useConfigStore } from '@/stores/config'
import { useTempStore } from '@/stores/temp'
import {
  Sunny,
  Moon,
  FullScreen,
  Setting,
  Delete,
  VideoPlay,
  VideoPause
} from '@element-plus/icons-vue'
defineEmits(['fullscreen'])
const { isStart, isClean } = storeToRefs(useTempStore())
const dialogVisible = ref(false)
const form = useConfigStore()
const isS = useMediaQuery('(min-width: 400px)')
const isM = useMediaQuery('(min-width: 660px)')
useFullscreen()
</script>

<template>
  <div class="container">
    <h1>生命游戏</h1>
    <div>
      <el-space class="space">
        <el-button @click="isStart = !isStart" circle :icon="isStart ? VideoPause : VideoPlay" />
        <el-button @click="$emit('fullscreen')" :icon="FullScreen" circle />
        <el-button @click="isClean = true" :icon="Delete" circle />
        <el-button @click="dialogVisible = true" :icon="Setting" circle />
        <template v-if="isS">
          <el-divider direction="vertical" />
          <use-dark v-slot="{ isDark, toggleDark }">
            <el-switch
              :model-value="isDark"
              inline-prompt
              :active-icon="Moon"
              :inactive-icon="Sunny"
              @change="toggleDark()"
            />
          </use-dark>
        </template>
      </el-space>
    </div>
    <el-dialog
      v-model="dialogVisible"
      title="设置"
      :show-close="false"
      :width="isM ? '50%' : '90%'"
    >
      <el-form :model="form" :label-width="isM ? '120px' : '70px'">
        <el-form-item label="列">
          <el-input-number v-model="form.col" :min="1" step-strictly />
        </el-form-item>
        <el-form-item label="行">
          <el-input-number v-model="form.row" :min="1" step-strictly />
        </el-form-item>
        <el-form-item label="迭代速度">
          <el-popover placement="top" title="迭代速度" :width="200" trigger="hover">
            每次迭代的间隔时间<br />单位：ms
            <template #reference>
              <el-input-number v-model="form.updateSpeed" :min="0" step-strictly />
            </template>
          </el-popover>
        </el-form-item>
        <el-form-item label="细胞大小">
          <el-popover placement="top" title="细胞大小" :width="200" trigger="hover">
            单位：px
            <template #reference>
              <el-input-number v-model="form.divSize" :min="1" step-strictly />
            </template>
          </el-popover>
        </el-form-item>
        <el-form-item label="过渡动画">
          <el-popover placement="top" title="过渡动画" :width="200" trigger="hover">
            是否显示细胞出现和消失的动画
            <template #reference>
              <el-switch v-model="form.enabledTransition" />
            </template>
          </el-popover>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped>
h1 {
  margin: 0;
}
.container {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.space > :deep(:last-child) {
  margin-right: 0 !important;
}
</style>
