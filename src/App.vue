<template>
  <div class="main">
    <TheHeader></TheHeader>
    <div class="content"><router-view /></div>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  name: "App",
  components: { TheHeader, TheFooter },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  min-height: 400px;
}

a.router-link-exact-active {
  opacity: 0.6;
}
</style>
