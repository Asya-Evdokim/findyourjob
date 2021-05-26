<template>
  <div id="app">
    <Header/>
    <Categories/>

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Header from "@/components/Header";
import Categories from "@/components/Categories";

export default {
  name: 'App',
  components: {
    Categories,
    Header

  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700;900&display=swap');
*, *:before, *:after {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: "Fira Sans", sans-serif;
  font-size: 16px;
  color: #111238;
}

</style>
