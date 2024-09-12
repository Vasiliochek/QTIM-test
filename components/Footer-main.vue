<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__title__container">
        <p class="footer__title-span">Is there a project?</p>
        <h2 class="footer__title">Let’s work together</h2>
      </div>
      <div class="footer__contacts__container">
        <ul class="footer__contacts__list">
          <li class="footer__contacts__list__item">
            <h4 class="contacts__title">For all questions</h4>
            <p class="contacts__phone">+7 (920) 278—00—68</p>
            <p class="contacts__email">qtim@agency.com</p>
          </li>
          <li class="footer__contacts__list__item">
            <h4 class="contacts__title">Office in Russia</h4>
            <p class="contacts__address">139 Ruben Station Lake Drew, NM 52678</p>
            <a class="contacts__location-link" href="#"><IconsContactsLocation /></a>
          </li>
          <li class="footer__contacts__list__item">
            <h4 class="contacts__title">Office in Dubai</h4>
            <p class="contacts__address">139 Ruben Station Lake Drew, NM 52678</p>
            <a class="contacts__location-link" href="#"><IconsContactsLocation /></a>
          </li>
        </ul>
      </div>
      <div class="footer__socials__container">
        <ul class="footer__socials__list">
          <li class="footer__socials__list__item">
            <a href="#">Facebook</a>
          </li>
          <li class="footer__socials__list__item">
            <a href="#">Instagram</a>
          </li>
          <li class="footer__socials__list__item">
            <a href="#">Telegram</a>
          </li>
          <li class="footer__socials__list__item">
            <a href="#">Behance</a>
          </li>
          <li class="footer__socials__list__item">
            <a href="#">Linkedn</a>
          </li>
          <li class="footer__socials__list__item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <div class="half-circle">
          <a href="#" class="circle-btn">Go</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer{
  background-color: var(--purple-main);
}

.footer__container {
  padding: 140px 0 0 0;

  display: grid;
  grid-template-columns: 464px 1fr;
  grid-template-rows: 1fr;

  gap: 273px 0px;
}

.footer__title__container{
  max-width: 464px;

  flex-wrap: wrap;
}

.footer__title-span{
  font-size: 16px;
  line-height: 19px;

  display: block;

  margin-bottom: 56px;
}

.footer__title{
  font-size: 112px;
  text-decoration: underline 2px;
  text-underline-offset: 15px;
  font-weight: 400;
}

.footer__contacts__container {
  padding-top: 75px;
}

.footer__contacts__list {
  max-width: 175px;

  margin-left: 386px;
}

.footer__contacts__list__item {
  margin-bottom: 36px;
}

.contacts__title {
  font-size: 16px;
  line-height: 19px;

  font-weight: 400;

  margin-bottom: 12px;
}

.contacts__phone {
  font-size: 16px;
  line-height: 19px;

  font-weight: 400;
}

.contacts__address {
  margin-bottom: 8px;
}

.location-svg {
  transition: all 0.3s ease;
}

.contacts__location-link:hover > .location-svg {
  filter:invert(100%)
}

.footer__socials__container {
  grid-column: 1 / 3;

  position: relative;
}

.footer__socials__list {
  padding: 0;
  padding-bottom: 20px;

  display: flex;
  gap: 32px;

  align-items: flex-end;
}

.footer__socials__list__item{
  text-decoration: underline 1px;
  text-underline-offset: 6px;

  transition: opacity 0.3s ease;
}

.footer__socials__list__item:hover{
  opacity: 0.5;
}

.footer__socials__list__item:nth-child(4n){
  margin-left: auto;
}

.half-circle {
  position: absolute;
  bottom: 0;
  left: 37%;

  width: 358px;
  height: 179px;
  border-radius: 179px 179px 0 0;
  background-color: var(--main-black);

  transition: all 0.3s ease;
}

.circle-btn {
  position: absolute;

  width: 358px;
  height: 179px;

  padding-top:110px;
  padding-left: 155px;
  border-radius: 179px 179px 0 0;

  color: var(--main-white);
  font-size: 32px;

  transition: all 0.3s ease;
}

.half-circle:hover{
  background: var(--main-white);
}
.half-circle:hover > .circle-btn{
  color: var(--main-black);
}
</style>