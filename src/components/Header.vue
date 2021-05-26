<template>
<header class="header">
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
  </div>

</header>
</template>

<script>
import Logo from "@/assets/img/logo";
export default {
  name: "Header",
  components: {Logo}
}
</script>

<style scoped lang="scss">

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
</style>