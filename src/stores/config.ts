export const useConfigStore = defineStore('config', {
  state: () => ({
    col: 15,
    row: 15,
    divSize: 30,
    updateSpeed: 300,
    enabledTransition: true
  }),
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage }]
  }
})
