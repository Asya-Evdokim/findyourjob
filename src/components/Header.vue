<template>
<header class="header pb-5">
  <div class="container">
    <div class="row align-items-center py-3">
      <div class="col-2">
        <a href="/" class="logo-link">
          <logo/>
        </a>
      </div>
      <div class="col d-flex justify-content-center">
        <nav class="nav">
          <ul class="menu d-flex">
            <li class="menu-item"><a href="#" class="menu-link">Главная</a></li>
            <li class="menu-item"><a href="#" class="menu-link">Вакансии</a></li>
            <li class="menu-item"><a href="#" class="menu-link">Компании</a></li>
          </ul>
        </nav>
      </div>
      <div class="col-3 d-flex align-items-center justify-content-end">
        <a href="#" class="button-link button">Войти</a>
        <a href="#" class="button-primary button">Регистрация</a>
      </div>
    </div>
    <div class="row pt-5">
      <div class="col-5">
        <h1 class="hero-title">Найдите удаленную работу вашей мечты</h1>
        <p class="hero-text">Создайте резюме или отправьте отклик на вакансию 
          в компании с мировым именем и работайте по свободному графику</p>
        <div class="input-group d-flex">
          <input type="text" class="input" placeholder="Начните поиск">
          <button class="button button-primary">
            <search/>
            <span class="button-text">Искать вакансии</span>
          </button>
        </div>
        <div class="tags-group">
          <span class="tags-label">Например: </span>
          <a href="" class="tag">Front-end</a>
          <a href="" class="tag">Back-end</a>
          <a href="" class="tag">Designer</a>
        </div>
      </div>
      <div class="col-6 offset-1">
        <hero-image/>
      </div>
    </div>
  </div>

</header>
</template>

<script>
import Logo from "@/assets/img/logo";
import HeroImage from "@/assets/img/hero-image";
import Search from "@/assets/img/search";
export default {
  name: "Header",
  components: {Search, HeroImage, Logo}
}
</script>

<style scoped lang="scss">
header {
  background: #F2F3F6;
}
.menu {
  list-style: none;
  padding: 0;
  margin: 0;

  .menu-item:not(:last-child) {
    margin-right: 20px;
  }

  .menu-link {
    text-decoration: none;
    color: #111238;
  }
}

.button {
  text-decoration: none;
  display: inline-block;
  border: none;
  font-size: 16px;
}

.button-link {
  color: #111238;
  padding: 10px;
  margin-right: 40px;
}
.button-primary{
  background: #1A75E8;
  color: #FFFFFF;
  border-radius: 5px;
  padding: 15px 30px;
}

.hero-title {
  font-size: 44px;
  line-height: 53px;
  margin-bottom: 15px;
  margin-top: 42px;
}

.hero-text {
  font-size: 18px;
  line-height: 140%;
  margin-bottom: 30px;
}

.input-group {
  background: #FFFFFF;
  border: 1px solid rgba(209, 209, 209, 0.1);
  box-shadow: 0 4px 25px rgba(15, 17, 56, 0.1);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 25px;

  .input {
    background-color: #FFFFFF;
    border: none;
    flex-grow: 1;
    font-size: 16px;
    line-height: 19px;
    padding-left: 15px;

    &:focus {
      outline: 1px dotted #666;
    }
  }
  svg {
    vertical-align: middle;
    margin-right: 10px;
  }

  .button-text {
    vertical-align: middle;
  }
}

.tags-group {
  padding-left: 10px;
  color: #B2B2B2;
  font-size: 14px;
  line-height: 17px;

  .tag {
    color: #B2B2B2;
    text-decoration: none;
    padding: 5px 10px;
    margin-left: 10px;
    border: 1px solid #B2B2B2;
    border-radius: 5px;
  }
}

</style>