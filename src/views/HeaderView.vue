<script lang="ts" setup>
import { useConfigStore } from '@/stores/config'
const { isStart } = storeToRefs(useConfigStore())
const dialogVisible = ref(false)
const form = useConfigStore()
</script>

<template>
  <div class="container">
    <h1>生命游戏</h1>
    <div>
      <el-space>
        <el-button @click="isStart = !isStart">{{ isStart ? '暂停' : '开始' }}</el-button>
        <el-button @click="dialogVisible = true">设置</el-button>
        <el-divider direction="vertical" />
        <use-dark v-slot="{ isDark, toggleDark }">
          <el-switch
            :model-value="isDark"
            active-text="暗色"
            inactive-text="浅色"
            @change="toggleDark()"
          />
        </use-dark>
      </el-space>
    </div>
    <el-dialog v-model="dialogVisible" title="设置" :show-close="false">
      <el-form :model="form" label-width="120px">
        <el-form-item label="列">
          <el-input-number v-model="form.col" :min="1" step-strictly :disabled="isStart" />
        </el-form-item>
        <el-form-item label="行">
          <el-input-number v-model="form.row" :min="1" step-strictly :disabled="isStart" />
        </el-form-item>
        <el-form-item label="迭代速度">
          <el-popover placement="right" title="迭代速度" :width="200" trigger="hover">
            每次迭代的间隔时间<br />单位：ms
            <template #reference>
              <el-input-number v-model="form.updateSpeed" :min="1" step-strictly />
            </template>
          </el-popover>
        </el-form-item>
        <el-form-item label="细胞宽度">
          <el-popover placement="right" title="细胞宽度" :width="200" trigger="hover">
            单位：px
            <template #reference>
              <el-input-number v-model="form.divWidth" :min="1" step-strictly />
            </template>
          </el-popover>
        </el-form-item>
        <el-form-item label="细胞高度">
          <el-popover placement="right" title="细胞高度" :width="200" trigger="hover">
            单位：px
            <template #reference>
              <el-input-number v-model="form.divHeight" :min="1" step-strictly />
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
</style>
