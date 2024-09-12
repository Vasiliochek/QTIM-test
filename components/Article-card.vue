<template>
  <div class="article-card__container">
    <div class="article-card__img">
      <img src="@/public/image-test.jpg" alt="Article-image">
    </div>
    <div class="article-card__descr">
      <p class="article-card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, nostrum sunt odit, fugit nam cumque minus veniam fuga esse sed quas error eum similique, adipisci sit commodi nesciunt dolores distinctio!</p>
      <button class="article-card__btn">Read more</button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.article-card__container {
  max-width: 280px;
  max-height: 414px;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 24px;

  transition: transform 0.3s ease;

  transform: translateY(20px);
}

.article-card__container:hover {
  transform: translateY(0);
}

.article-card__container:hover > .article-card__descr > .article-card__btn {
  opacity: 1;
  transform: translateY(0);
}

.article-card__img {
  max-width: 280px;
  max-height: 280px;
}

.article-card__descr {
  max-height: 110px;

  justify-content: space-between;
}

.article-card__text{
  max-width: 280px;
  height: 74px;

  margin: 0;
  margin-bottom: 12px;
  
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  

  font-size: 20px;
  line-height: 24px;
}

.article-card__btn {
  padding: 0;

  transition: all 0.3s ease;

  opacity: 0;
  transform: translateY(20px);

  color: var(--purple-main);
  font-size: 20px;
  line-height: 24px;
}

.article-card__btn:hover {
  color: rgb(121, 60, 170);
}
</style>