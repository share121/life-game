<script lang="ts" setup>
import { useConfigStore } from '@/stores/config'
const { col, row, divWidth, divHeight, updateSpeed, isStart } = storeToRefs(useConfigStore())
let map: Ref<boolean[][]> = ref(
  Array(row.value)
    .fill([])
    .map(() => Array(row.value).fill(false))
)

// 长宽自动调整
watch(
  () => ({
    col: unref(col),
    row: unref(row)
  }),
  ({ col, row }) => {
    if (map.value.length > row) {
      map.value.splice(row - map.value.length)
    } else if (map.value.length < row) {
      map.value.push(...Array(row - map.value.length).fill(Array(col).fill(false)))
    }
    map.value.forEach((e) => {
      if (e.length > col) {
        e.splice(col - e.length)
      } else if (e.length < col) {
        e.push(...Array(col - e.length).fill(false))
      }
    })
  }
)
function* nestArray<T extends any>(...arr: T[][]): IterableIterator<T[]> {
  if (arr.length === 1) for (const i of arr[0]) yield [i]
  else {
    let tempArr: T[][] = []
    const i = arr[0][0]
    for (const j of nestArray(...arr.slice(1))) {
      tempArr.push(j)
      yield [i, ...j]
    }
    for (const i of arr[0].slice(1)) for (const j of tempArr) yield [i, ...j]
  }
}
function getBrother<T>(arr: T[][], x: number, y: number) {
  function get(x: number, y: number) {
    try {
      return unref(arr)[y][x]
    } catch {
      return
    }
  }
  return [...nestArray([-1, 0, 1], [-1, 0, 1])]
    .filter(([vx, vy]) => !(vx === 0 && vy === 0))
    .map(([vx, vy]) => get(x + vx, y + vy))
}
watch(isStart, function t() {
  if (isStart.value) {
    const newMap: boolean[][] = Array(row.value)
      .fill([])
      .map(() => Array(row.value).fill(false))
    map.value.forEach((row, y) => {
      row.forEach((val, x) => {
        switch (getBrother(map.value, x, y).reduce((pre, cur) => pre + +(cur === true), 0)) {
          case 2:
            newMap[y][x] = val
            break
          case 3:
            newMap[y][x] = true
        }
      })
    })
    map.value = newMap
    setTimeout(t, unref(updateSpeed))
  }
})
</script>

<template>
  <div
    class="container"
    :style="{
      gridTemplateColumns: `repeat(${col}, auto)`,
      '--width': divWidth + 'px',
      '--height': divHeight + 'px'
    }"
  >
    <template v-for="(row, y) in map">
      <template v-for="(val, x) in row">
        <!-- eslint-disable-next-line vue/require-v-for-key -->
        <div
          :class="{ true: val }"
          @mousedown="map[y][x] = !map[y][x]"
          @mouseover="$event.buttons === 1 && (map[y][x] = !map[y][x])"
        ></div>
      </template>
    </template>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: grid;
  place-content: center;
  gap: 8px;
  min-height: 100%;
  min-width: 100%;
  width: fit-content;
  & > div {
    width: var(--width);
    height: var(--height);
    border-radius: 8px;
    background-color: var(--el-fill-color);
    &.true {
      background-color: var(--el-text-color-regular);
      &:hover {
        background-color: var(--el-text-color-primary);
      }
    }
    transition: all var(--el-transition-duration-fast);
  }
}
</style>
