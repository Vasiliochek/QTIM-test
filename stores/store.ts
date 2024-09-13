export const qtimStore = defineStore('qtim', () => {

  const activePage = ref<number>(1)
  const totalPages = ref<number>(0)

  return { activePage, totalPages}
})
 