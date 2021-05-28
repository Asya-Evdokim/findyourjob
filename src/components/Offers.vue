<template>
<section class="section offers">
  <div class="container">
    <h2 class="section-title">Свежие вакансии</h2>
    <div class="offer d-flex align-items-center">
      <logo-company/>
      <div class="offer-title">
        <h3 class="offer-heading">Front-end разработчик</h3>
        <span class="offer-place">Технопарк, Казань</span>
      </div>
      <span class="offer-salary">65 000 ₽</span>
      <div class="tags-group">
        <span class="tags-label">Требования:</span>
        <a href="" class="tag">React</a>
        <a href="" class="tag">Sass</a>
        <a href="" class="tag">Figma</a>
      </div>
      <a href="#" class="more">Подробнее →</a>
    </div>
    <div class="offer d-flex align-items-center">
      <logo-company/>
      <div class="offer-title">
        <h3 class="offer-heading">Front-end разработчик</h3>
        <span class="offer-place">Технопарк, Казань</span>
      </div>
      <span class="offer-salary">65 000 ₽</span>
      <div class="tags-group">
        <span class="tags-label">Требования:</span>
        <a href="" class="tag">React</a>
        <a href="" class="tag">Sass</a>
        <a href="" class="tag">Figma</a>
      </div>
      <a href="#" class="more">Подробнее →</a>
    </div>
    <div class="offer d-flex align-items-center">
      <logo-company/>
      <div class="offer-title">
        <h3 class="offer-heading">Front-end разработчик</h3>
        <span class="offer-place">Технопарк, Казань</span>
      </div>
      <span class="offer-salary">65 000 ₽</span>
      <div class="tags-group">
        <span class="tags-label">Требования:</span>
        <a href="" class="tag">React</a>
        <a href="" class="tag">Sass</a>
        <a href="" class="tag">Figma</a>
      </div>
      <a href="#" class="more">Подробнее →</a>
    </div>
    <div class="offer d-flex align-items-center">
      <logo-company/>
      <div class="offer-title">
        <h3 class="offer-heading">Front-end разработчик</h3>
        <span class="offer-place">Технопарк, Казань</span>
      </div>
      <span class="offer-salary">65 000 ₽</span>
      <div class="tags-group">
        <span class="tags-label">Требования:</span>
        <a href="" class="tag">React</a>
        <a href="" class="tag">Sass</a>
        <a href="" class="tag">Figma</a>
      </div>
      <a href="#" class="more">Подробнее →</a>
    </div>

  </div>
</section>
</template>

<script>
import LogoCompany from "@/assets/img/logo-company";
export default {
  name: "Offers",
  components: {LogoCompany}
}
</script>

<style scoped lang="scss">
.section-title {
  margin-bottom: 40px;
}

.offer {
  padding: 30px;
  border: 1px solid #c5c9d5;
  border-radius: 10px;
  margin-bottom: 20px;

  .offer-title {
    padding-left: 20px;

    .offer-heading {
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 10px;
    }
    .offer-place {
      font-size: 14px;
      line-height: 17px;
    }
  }

  .offer-salary {
    margin-left: 46px;
    margin-right: 62px;
    padding: 10px 25px;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    background: #1A75E8;
    border-radius: 5px;
  }
  .more {
    font-size: 14px;
    line-height: 17px;
    color: #1A75E8;
    text-decoration: none;
    margin-left: auto;
    margin-right: 25px;
  }

}
</style>