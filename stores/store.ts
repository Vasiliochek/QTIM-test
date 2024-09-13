import type { Article } from '~~/types/Article'

export const qtimStore = defineStore('qtim', () => {

  const allArticles = ref<Article[]>([])
  const activePage = ref<number>(1)
  const totalPages = ref<number>(0)


  return { allArticles, activePage, totalPages}
})
 