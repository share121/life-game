<script lang="ts" setup>
import { useConfigStore } from '@/stores/config'
import { useTempStore } from '@/stores/temp'

const { col, row, divSize, updateSpeed, enabledTransition } = storeToRefs(useConfigStore())
const { isStart, isLocked } = storeToRefs(useTempStore())
let map: {
  x: number
  y: number
}[] = reactive([])
function getXY(x: number, y: number) {
  return map.find((e) => e.x === x && e.y === y)
}
function findXY(x: number, y: number) {
  return map.findIndex((e) => e.x === x && e.y === y)
}
function setXY(x: number, y: number, val: boolean = !getXY(x, y)) {
  const isAlive = !!getXY(x, y)
  if (isAlive) {
    if (!val) {
      map.splice(findXY(x, y), 1)
    }
  } else {
    if (val) {
      map.push({ x, y })
    }
  }
}
watch(isStart, () => {
  if (!isStart.value) return
  let preTimeStamp = performance.now()
  requestAnimationFrame(async function t(timeStamp: number) {
    if (!isStart.value) return
    if (timeStamp - preTimeStamp >= updateSpeed.value) {
      preTimeStamp = timeStamp
      const { workerFn } = useWebWorkerFn((map: string) => {
        const map1: {
          x: number
          y: number
        }[] = JSON.parse(map)
        function* nestArray<T extends any>(...arr: T[][]): IterableIterator<T[]> {
          if (arr.length === 1) for (const i of arr[0]) yield [i]
          else {
            const tempArr: T[][] = []
            const i = arr[0][0]
            for (const j of nestArray(...arr.slice(1))) {
              tempArr.push(j)
              yield [i, ...j]
            }
            for (const i of arr[0].slice(1)) for (const j of tempArr) yield [i, ...j]
          }
        }
        function getBrother(
          arr: {
            x: number
            y: number
          }[],
          x: number,
          y: number
        ) {
          function get(x: number, y: number) {
            return arr.find((e) => e.x === x && e.y === y)
          }
          return getBrotherPo(x, y).map(({ x, y }) => get(x, y))
        }
        function getBrotherPo(x: number, y: number) {
          return [...nestArray([-1, 0, 1], [-1, 0, 1])]
            .filter(([vx, vy]) => !(vx === 0 && vy === 0))
            .map(([vx, vy]) => ({ x: x + vx, y: y + vy }))
        }
        function getXY(x: number, y: number) {
          return map1.find((e) => e.x === x && e.y === y)
        }
        function deepEqual<T>(value: T, other: T) {
          return JSON.stringify(value) === JSON.stringify(other)
        }
        function uniq<T>(arr: T[]) {
          return arr.filter((e, i, arr) => arr.findIndex((e2) => deepEqual(e, e2)) === i)
        }
        const temp: {
          x: number
          y: number
        }[] = []
        const needFor: {
          x: number
          y: number
        }[] = []
        map1.forEach(({ x, y }) => {
          ;[{ x, y }, ...getBrotherPo(x, y)].forEach((e) => {
            needFor.push(e)
          })
        })
        uniq(needFor).forEach(({ x, y }) => {
          const val = getXY(x, y)
          switch (getBrother(map1, x, y).reduce((pre, cur) => pre + +!!cur, 0)) {
            case 2:
              break
            case 3:
              val || temp.push({ x, y })
              break
            default:
              val && temp.push({ x, y })
          }
        })
        return JSON.stringify(temp)
      })
      JSON.parse(await workerFn(JSON.stringify(map))).forEach(
        ({ x, y }: { x: number; y: number }) => {
          setXY(x, y)
        }
      )
    }
    requestAnimationFrame(t)
  })
})
function range(start: number, end: number, step: number = 1) {
  return Array(Number((end - start) / step))
    .fill(start)
    .map((e: number, i) => e + i * step)
}
const rRow = computed(() => {
  let max = map.reduce((pre, cur) => (cur.y > pre ? cur.y : pre), row.value - 1) + 1
  let min = map.reduce((pre, cur) => (cur.y < pre ? cur.y : pre), 0)
  return range(min, max)
})
const rCol = computed(() => {
  let max = map.reduce((pre, cur) => (cur.x > pre ? cur.x : pre), col.value - 1) + 1
  let min = map.reduce((pre, cur) => (cur.x < pre ? cur.x : pre), 0)
  return range(min, max)
})

const longPress = ref(false)
const { x, y } = useMouse({ type: 'page' })
const { element } = useElementByPoint({ x, y })
const { pressed } = useMousePressed()
const { vibrate } = useVibrate({ pattern: [300, 100, 300] })
const targetChange = ref(false)
watch(longPress, (longPress) => {
  if (longPress) {
    let x = +element.value?.dataset.x!
    let y = +element.value?.dataset.y!
    if (!isNaN(x) && !isNaN(y)) setXY(x, y)
  }
  vibrate()
  isLocked.value = longPress
})
watch(pressed, (pressed) => {
  if (!pressed) targetChange.value = longPress.value = false
})
watch(element, () => {
  if (!pressed.value || longPress.value) return
  targetChange.value = true
})
watch(element, (element) => {
  if (!longPress.value) return
  let x = +element?.dataset.x!
  let y = +element?.dataset.y!
  if (isNaN(x) || isNaN(y)) return
  setXY(x, y)
})
function FnlongPress(e: PointerEvent) {
  if ((e.pointerType === 'mouse' && !targetChange.value) || e.pointerType !== 'mouse')
    longPress.value = true
}
</script>

<template>
  <div
    class="container"
    :style="{
      gridTemplateColumns: `repeat(${rCol.length}, auto)`,
      '--width': divSize + 'px',
      '--height': divSize + 'px'
    }"
    @contextmenu.prevent
    v-on-long-press="FnlongPress"
  >
    <template v-for="y in rRow" :key="y">
      <template v-for="x in rCol" :key="x">
        <div
          :data-x="x"
          :data-y="y"
          @click="setXY(x, y)"
          :class="{ true: getXY(x, y) }"
          :style="enabledTransition ? {} : { transition: 'none' }"
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
    transition: all var(--el-transition-duration);
  }
}
</style>
