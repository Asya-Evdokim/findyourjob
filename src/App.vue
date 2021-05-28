<template>
  <div id="app">
    <Header/>
    <Categories/>
    <Offers/>
    <Subscribe/>
    <Footer/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Header from "@/components/Header";
import Categories from "@/components/Categories";
import Offers from "@/components/Offers";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Subscribe,
    Offers,
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

</style>
