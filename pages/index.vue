<template>
  <section class="articles">
    <div class="container">
      <h1 class="article__title">Articles</h1>
      <div class="articles-container">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      <Pagination />
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

.container {
  padding: 120px 0 140px 0;
}

.article__title {
  font-size: 84px;
  font-weight: 400;

  margin: 0;
  padding: 0;

  margin-bottom: 59px;
}

.articles-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 42px;
  margin-bottom: 50px;
}

</style>