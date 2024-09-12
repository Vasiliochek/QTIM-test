<template>
  <header class="header">
    <div class="container header__container">
      <a class="header__logo" href="https://qtim.pro/">
        <img class="header__logo__img" src="@/public/logo.png" alt="Logo-QTIM">
      </a>
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__list__item">
            <a href="#">Works</a>
          </li>
          <li class="header__list__item">
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <div class="header__btns-container">
        <button class="header__btn-lang">
        <IconsUKFlag />
        </button>
        <button class="header__btn-login">Let`s work</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>

.container {
  max-width: 1440px;
  height: 121px;

  display: flex;
  align-items: center;
}

.header__nav {
  margin-left: auto;
  margin-right: 91px;
}

.header__list {
  display: flex;
  gap: 58px;

  font-size: 20px;

  margin: 0;
  padding: 0;
}

.header__list__item {
  transition: all 0.3s ease;
}

.header__list__item:hover {
  opacity: 0.5;
}

.header__list__item:active {
  opacity: 1;
}

.header__btns-container {
  display: flex;
  gap: 16px;
}

.header__btn-lang {
  height: 52px;

  padding: 14px;

  outline: 3px solid var(--main-gray);
  border-radius: 50%;

  transition: all 0.3s ease;
}

.header__btn-lang:hover {
  outline: 3px solid var(--main-black);
}

.header__btn-lang:active {
  outline: 3px solid var(--main-gray);
}

.header__btn-login {
  padding: 16px 32px;

  font-size: 20px;
  color: var(--main-white);

  background-color: var(--main-black);

  border-radius: 30px;

  transition: all 0.3s ease;
}

.header__btn-login:hover {
  background-color: var(--main-gray);
  color: var(--main-black);

  outline: 1px solid var(--main-black);
  }

  .header__btn-login:active {
  background-color: var(--main-black);
  color: var(--main-white);
  }
</style>