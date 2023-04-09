export const useConfigStore = defineStore('config', {
  state: () => ({
    col: 15,
    row: 15,
    divSize: 50,
    updateSpeed: 500,
    enabledTransition: true
  }),
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage }]
  }
})
