<script lang="ts" setup>
import { useConfigStore } from '@/stores/config'
import { useTempStore } from '@/stores/temp'
const { col, row, divSize, updateSpeed, enabledTransition } = storeToRefs(useConfigStore())
let { isStart, isClean } = storeToRefs(useTempStore())
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
      .filter(([vx, vy]) => vx !== 0 || vy !== 0)
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
let AnimationFrameID: Ref<number | null> = ref(null)
watch(isStart, () => {
  if (isStart.value) {
    let preTimeStamp = performance.now()
    AnimationFrameID.value = requestAnimationFrame(async function t(timeStamp: number) {
      if (isStart.value) {
        if (timeStamp - preTimeStamp >= updateSpeed.value) {
          preTimeStamp = timeStamp
          JSON.parse(await workerFn(JSON.stringify(map))).forEach(
            ({ x, y }: { x: number; y: number }) => {
              setXY(x, y)
            }
          )
        }
        requestAnimationFrame(t)
      }
    })
  }
})
function range(start: number, end: number) {
  return Array(end - start)
    .fill(start)
    .map((e: number, i) => e + i)
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
watch(
  () => rRow.value[0],
  async (newVal, oldVal) => {
    let main = document.querySelector('main')
    if (main)
      if (newVal !== oldVal && main.scrollTop === 0) {
        await nextTick()
        main.scrollTop += (divSize.value + 8) * (oldVal - newVal)
      }
  }
)
watch(
  () => rCol.value[0],
  (newVal, oldVal) => {
    let main = document.querySelector('main')
    if (main)
      if (newVal !== oldVal) {
        main.scrollLeft += (divSize.value + 8) * (oldVal - newVal)
      }
  }
)
const longPress = ref(false)
const { x, y } = useMouse({ type: 'client' })
const { element } = useElementByPoint({ x, y })
const { pressed } = useMousePressed()
const { vibrate } = useVibrate({ pattern: [300, 100, 300] })
const targetChange = ref(false)
const isZoom = ref(false)
watch(longPress, (longPress) => {
  if (longPress) {
    if (element.value && isPoint(element.value)) {
      let { x, y } = getPoint(element.value)!
      setXY(x, y)
      vibrate()
    }
  }
})
watch(pressed, () => {
  targetChange.value = longPress.value = false
})
watch(element, () => {
  if (pressed.value || !longPress.value) {
    targetChange.value = true
  }
})
watch(element, (element) => {
  if (longPress.value && element && isPoint(element!)) {
    let { x, y } = getPoint(element)!
    setXY(x, y)
  }
})
function FnlongPress(e: PointerEvent) {
  if (!isZoom.value && (!targetChange.value || e.pointerType !== 'mouse')) longPress.value = true
}
function isPoint(el: HTMLElement) {
  return !!(el.dataset.x && el.dataset.y)
}
function getPoint(el: HTMLElement) {
  if (isPoint(el)) {
    let x = +el.dataset.x!
    let y = +el.dataset.y!
    return { x, y }
  }
}
function Fnclick(e: MouseEvent) {
  if (e.target && isPoint(e.target as HTMLElement)) {
    const { x, y } = getPoint(e.target as HTMLElement)!
    setXY(x, y)
  }
}
watch(isClean, () => {
  if (isClean) {
    isClean.value = false
    if (AnimationFrameID.value) {
      cancelAnimationFrame(AnimationFrameID.value)
      AnimationFrameID.value = null
    }
    map.length = 0
  }
})
function getDistance(a: { x: number; y: number }, b: { x: number; y: number }) {
  const x = a.x - b.x
  const y = a.y - b.y
  return Math.hypot(x, y)
}
let point1 = { x: 0, y: 0 }
let point2 = { x: 0, y: 0 }
function FnzoomStart(e: TouchEvent) {
  if (e.touches.length === 2) {
    isZoom.value = true
    point1.x = e.touches[0].clientX
    point1.y = e.touches[0].clientY
    point2.x = e.touches[1].clientX
    point2.y = e.touches[1].clientY
  }
}
function FnzoomMove(e: TouchEvent) {
  if (e.touches.length === 2) {
    e.preventDefault()
    let nowPo1 = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    let nowPo2 = { x: e.touches[1].clientX, y: e.touches[1].clientY }
    let ratio = getDistance(nowPo1, nowPo2) - getDistance(point1, point2)
    let vsize = ratio / 200
    console.log(vsize)
    divSize.value += vsize
    if (divSize.value < 1) divSize.value = 1
  } else if (longPress.value) {
    e.preventDefault()
  }
}
</script>

<template>
  <div
    class="container"
    :style="{
      '--columns': rCol.length,
      '--size': divSize + 'px'
    }"
    @contextmenu.prevent
    @click="Fnclick"
    @touchstart="FnzoomStart"
    @touchmove="FnzoomMove"
    @touchend="isZoom = false"
    v-on-long-press="FnlongPress"
    :class="{
      transition: enabledTransition,
      zoom: isZoom
    }"
  >
    <template v-for="y in rRow" :key="y">
      <template v-for="x in rCol" :key="x">
        <div :data-x="x" :data-y="y" :class="{ true: getXY(x, y) }"></div>
      </template>
    </template>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(var(--columns), auto);
  place-content: center;
  gap: 8px;
  min-height: 100%;
  min-width: 100%;
  width: fit-content;
  & > div {
    width: var(--size);
    height: var(--size);
    border-radius: 8px;
    background-color: var(--el-fill-color);
    &.true {
      background-color: var(--el-text-color-regular);
      &:hover {
        background-color: var(--el-text-color-primary);
      }
    }
  }
  &.transition > div {
    transition: all var(--el-transition-duration);
  }
  &.zoom > div {
    transition-property: background-color;
  }
}
</style>
