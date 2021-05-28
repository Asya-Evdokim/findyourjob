<template>
<div class="section">
  <div class="container">
    <h2 class="section-title">Категории</h2>
    <div class="row">
      <div class="col">
        <a href="#" class="card align-items-center">
          <brush/>
          <span class="card-text">Дизайн</span>
        </a>
      </div>
      <div class="col">
        <a href="#" class="card align-items-center">
          <browser/>
          <span class="card-text">Разработка</span>
        </a>
      </div>
      <div class="col">
        <a href="#" class="card align-items-center">
          <edit/>
          <span class="card-text">Копирайтинг</span>
        </a>
      </div>
      <div class="col">
        <a href="#" class="card align-items-center">
          <fingerprint/>
          <span class="card-text">Безопасность</span>
        </a>
      </div>
      <div class="col">
        <a href="#" class="card align-items-center">
          <camera/>
          <span class="card-text">Видео</span>
        </a>
      </div>
      <div class="col">
        <a href="#" class="card align-items-center">
          <school/>
          <span class="card-text">Образование</span>
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import School from "@/assets/img/school";
import Camera from "@/assets/img/camera";
import Fingerprint from "@/assets/img/fingerprint";
import Edit from "@/assets/img/edit";
import Browser from "@/assets/img/browser";
import Brush from "@/assets/img/brush";
export default {
  name: "Categories",
  components: {Brush, Browser, Edit, Fingerprint, Camera, School}
}
</script>

<style scoped lang="scss">

.section {
  padding-top: 70px;
  padding-bottom: 80px;

  .section-title {
    margin-bottom: 40px;
    margin-top: 0;
  }
  .card {
    text-decoration: none;
    color: #111238;
    background: #F2F3F6;
    border-radius: 10px;
    padding: 35px;
    transition: background 0.2s, color 0.2s;

    &:hover {
      background: #1A75E8;
      color: #FFFFFF;

      ::v-deep svg path {
        fill: #FFFFFF;
      }
    }

    svg {
      margin-bottom: 15px;
      transition: fill 0.2s;
    }
  }
}


</style>