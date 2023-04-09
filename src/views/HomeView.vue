<script lang="ts" setup>
import { useConfigStore } from '@/stores/config'
import { useTempStore } from '@/stores/temp'

const { col, row, divWidth, divHeight, updateSpeed, enabledTransition } = storeToRefs(
  useConfigStore()
)
const { isStart, isLocked } = storeToRefs(useTempStore())
let map: {
  x: number
  y: number
}[] = reactive([])
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
function getBrother(
  arr: {
    x: number
    y: number
  }[],
  x: number,
  y: number
) {
  function get(x: number, y: number) {
    return arr.find((e) => e.x === x && e.y === y) ?? null
  }
  return [...nestArray([-1, 0, 1], [-1, 0, 1])]
    .filter(([vx, vy]) => !(vx === 0 && vy === 0))
    .map(([vx, vy]) => get(x + vx, y + vy))
}
function getBrotherPo(
  arr: {
    x: number
    y: number
  }[],
  x: number,
  y: number
) {
  return [...nestArray([-1, 0, 1], [-1, 0, 1])]
    .filter(([vx, vy]) => !(vx === 0 && vy === 0))
    .map(([vx, vy]) => ({ x: x + vx, y: y + vy }))
}
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
function uniq<T>(arr: T[]) {
  return arr.filter((e, i, arr) => arr.findIndex((e2) => _.isEqual(e, e2)) === i)
}
watch(isStart, () => {
  if (!isStart.value) return
  let preTimeStamp = performance.now()
  requestAnimationFrame(function t(timeStamp: number) {
    if (!isStart.value) return
    if (timeStamp - preTimeStamp >= updateSpeed.value) {
      preTimeStamp = timeStamp
      let temp: {
        x: number
        y: number
      }[] = []
      let needFor: {
        x: number
        y: number
      }[] = []
      map.forEach(({ x, y }) => {
        ;[{ x, y }, ...getBrotherPo(map, x, y)].forEach((e) => {
          needFor.push(e)
        })
      })
      uniq(needFor).forEach(({ x, y }) => {
        let val = getXY(x, y)
        switch (getBrother(map, x, y).reduce((pre, cur) => pre + +!!cur, 0)) {
          case 2:
            break
          case 3:
            val || temp.push({ x, y })
            break
          default:
            val && temp.push({ x, y })
        }
      })
      temp.forEach(({ x, y }) => {
        setXY(x, y)
      })
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

function getDistance(a: { x: number; y: number }, b: { x: number; y: number }) {
  const x = a.x - b.x
  const y = a.y - b.y
  return Math.hypot(x, y)
}
function getCenter(a: { x: number; y: number }, b: { x: number; y: number }) {
  const x = (a.x + b.x) / 2
  const y = (a.y + b.y) / 2
  return { x: x, y: y }
}
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
  if ((e.pointerType === 'mouse' && !targetChange.value) || e.pointerType !== 'mouse') {
    longPress.value = true
  }
}
</script>

<template>
  <div
    class="container"
    :style="{
      gridTemplateColumns: `repeat(${rCol.length}, auto)`,
      '--width': divWidth + 'px',
      '--height': divHeight + 'px'
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
