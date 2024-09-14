<template>
  <div class="pagination__container" v-if="totalPages > 1">
    <button 
      class="pagination__btn arrow-btn"
      @click="setActivePage(activePage - 1)"
      :hidden="activePage === 1"
    >
      <IconsNextArrowPagination :style="{transform: 'rotate(180deg)'}"/>
    </button>
    <button 
      v-for="i in totalPages" 
      :key="i" 
      :class="[activePage === i ? 'active-btn' : '']"
      class="pagination__btn num-btn"
      @click="setActivePage(i)"
      :hidden="paginationSizing(i)"
    >
      {{ i }}
    </button>
    <button 
      class="pagination__btn arrow-btn"
      @click="setActivePage(activePage + 1)"
      :hidden="activePage === totalPages "
    >
      <IconsNextArrowPagination />
    </button>
  </div>
</template>

<script setup lang="ts">



const store = qtimStore()
const totalPages = storeToRefs(store).totalPages
const activePage = storeToRefs(store).activePage

const setActivePage = (i: number) => {
  activePage.value = i
}

const paginationSizing = (i: number) => {

  const half = Math.floor(totalPages.value / 2)

  if (i === 1 && activePage.value > 1 || i < activePage.value - 3) return true
  if (activePage.value <= half) return i > half
  if (activePage.value > half) return i > activePage.value 
}

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

  text-align: center;

  font-size: 16px;
  line-height: 8px;

  transition: all 0.3s ease;
}

.num-btn {
  background-color: var(--main-gray);
}

.num-btn:hover {
  background-color: var(--hover-gray);
}

.arrow-btn {
  background-color: var(--main-white);
  outline: 1px solid var(--main-gray);

  transition: all 0.3s ease;
}

.arrow-btn:hover {
  background-color: var(--hover-gray);
}

.arrow-btn:active {
  background-color: rgb(148, 148, 148);
}

.next-btn:hover {
  background-color: var(--hover-gray);
}

.active-btn {
  background-color: var(--main-black);
  color: var(--main-white);
}
</style>