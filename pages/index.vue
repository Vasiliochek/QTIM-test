<template>
  <section class="articles">
    <div class="container">
      <h1 class="article__title">Articles</h1>
      <div class="articles-container">
        <ArticleCard 
          v-for="article in showingArticles" 
          :key="article.id" 
          :card-info="article"
        />
      </div>
      <Pagination />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Article } from '~/types/Article';

const { data: articles} = await useAsyncData<Article[]>('articles', 
  () => $fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/')
)

const store = qtimStore()
const totalPages = storeToRefs(store).totalPages
const activePage = storeToRefs(store).activePage
const showingArticles = computed(() => articles.value?.slice((activePage.value - 1) * 8, (activePage.value - 1) * 8 + 8))

if (articles.value?.length) {
  totalPages.value = Math.ceil(articles.value.length / 8)
}
</script>

<style scoped>

.container {
  padding: 120px 0 140px 0;
}

.article__title {
  font-size: 84px;
  font-weight: 400;

  margin-bottom: 59px;
}

.articles-container {
  display: flex;
  flex-wrap: wrap;
  column-gap: 32px;
  row-gap: 42px;
  margin-bottom: 50px;
}

</style>