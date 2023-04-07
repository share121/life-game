export const useConfigStore = defineStore('config', {
  state: () => ({
    col: 15,
    row: 15,
    divWidth: 50,
    divHeight: 50,
    updateSpeed: 500,
    isStart: false
  })
})
