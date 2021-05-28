<template>
<section class="section subscribe">
  <div class="container">
    <form class="subscribe-form">
      <h2 class="subscribe-title">Подпишитесь на рассылку с новыми вакансиями</h2>
      <p class="subscribe-subtitle">Мы отправляем по одному письму в неделю с подходящими вам вакансиями</p>
      <div class="input-group d-flex">
        <input type="text" class="input" placeholder="E-mail">
        <button class="button button-primary">
          <letter/>
          <span class="button-text">Подписаться</span>
        </button>
      </div>
    </form>
  </div>
</section>
</template>

<script>
import Letter from "@/assets/img/letter";
export default {
  name: "Subscribe",
  components: {Letter}
}
</script>

<style scoped lang="scss">
.subscribe {
  background: #F2F3F6;


  .subscribe-form {
    padding: 90px 0;
    max-width: 460px;
    margin: auto;
    text-align: center;

    .subscribe-title {
      font-weight: 900;
      font-size: 36px;
      line-height: 43px;
      margin-bottom: 20px;
    }

    .subscribe-subtitle {
      font-size: 18px;
      line-height: 140%;
      margin-bottom: 40px;
    }
  }
}

</style>