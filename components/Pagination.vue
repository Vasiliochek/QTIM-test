<template>
  <div class="pagination__container">
    <button class="pagination__btn num-btn active-btn">1</button>
    <button class="pagination__btn num-btn">2</button>
    <button class="pagination__btn num-btn">3</button>
    <button class="pagination__btn num-btn">4</button>
    <button class="pagination__btn num-btn">5</button>
    <button class="pagination__btn next-btn">
      <IconsNextArrowPagination />
    </button>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.pagination__container {
  display: flex;
  gap: 8px;
}
.pagination__btn {
  height: 44px;
  width: 44px;

  border-radius: 12px;

  

  padding: 11px 17px 11px 17px;

  font-size: 16px;
  line-height: 8px;
}

.num-btn {
  background-color: var(--main-gray);
}

.num-btn:hover {
  background-color: var(--hover-gray);
}

.next-btn {
  background-color: var(--main-white);
  outline: 1px solid var(--main-gray);
}

.next-btn:hover {
  background-color: var(--hover-gray);
}

.active-btn {
  background-color: var(--main-black);
  color: var(--main-white);
}
</style>