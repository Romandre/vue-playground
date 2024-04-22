<template>
  <div>
    <h1>Number taken from router is {{ number }}</h1>
    <p>(This is another component)</p>
  </div>
</template>

<script>
export default {
  params: ["id"],
  data() {
    return {
      number: this.$route.params.num,
    };
  },
  watch: {
    $route(to, from) {
      this.number = to.params.num;
    },
  },
};
</script>

<style scoped>
div {
  background: lightgrey;
}
</style>
