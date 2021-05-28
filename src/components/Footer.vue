<template>
<footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-3">
        <logo/>
        <p class="footer-description">Сайт с вакансиями для тех, <br> кто ищет удаленную работу</p>
        <span class="footer-copyright">© 2021</span>
      </div>
      <div class="col-3">
        <h3 class="footer-title">Свяжитесь с нами</h3>
        <ui class="footer-list">
          <li class="footer-list-item">
            <a href="tel: +78002020300" class="footer-list-link">8 800 20 20 300</a>
          </li>
          <li class="footer-list-item">
            <a href="mailto:info@findyourjob.net" class="footer-list-link">info@findyourjob.net</a>
          </li>
        </ui>
      </div>
      <div class="col-3">
        <h3 class="footer-title">Информация</h3>
        <ui class="footer-list">
          <li class="footer-list-item">
            <a href="#" class="footer-list-link">Обработка данных</a>
          </li>
          <li class="footer-list-item">
            <a href="#" class="footer-list-link">Конфиденциальность</a>
          </li>
          <li class="footer-list-item">
            <a href="#" class="footer-list-link">Публичная оферта</a>
          </li>
        </ui>
      </div>
      <div class="col-3">
        <h3 class="footer-title">Навигация по сайту</h3>
        <ui class="footer-list">
          <li class="footer-list-item">
            <a href="#" class="footer-list-link">Вакансии</a>
          </li>
          <li class="footer-list-item">
            <a href="#" class="footer-list-link">Компании</a>
          </li>
          <li class="footer-list-item">
            <a href="#" class="footer-list-link">Контакты</a>
          </li>
        </ui>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
import Logo from "@/assets/img/logo";
export default {
  name: "Footer",
  components: {Logo}
}
</script>

<style scoped lang="scss">

.footer {
  padding-top: 70px;
  padding-bottom: 100px;

  .footer-description {
    padding-top: 20px;
    font-size: 12px;
    line-height: 140%;
    color: #B2B2B2;
  }

  .footer-copyright {
    font-size: 12px;
    line-height: 140%;
    color: #B2B2B2;
  }

  .footer-title {
    margin-top: 0;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
  .footer-list {
    padding: 0;
    margin: 0;
    list-style: none;

    .footer-list-link {
      display: block;
      margin-bottom: 10px;
      font-size: 16px;
      line-height: 19px;
      color: #111238;
      text-decoration: none;
    }
  }
}
</style>