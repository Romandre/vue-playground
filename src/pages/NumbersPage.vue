<template>
  <section>
    <div>
      <h2>Use of router parameter in child component test</h2>
      <p>
        Here we can check how sertain value can be transfered to a child route.
      </p>
      <p>
        The number selection is triggering Router to update the route and the
        number is transfered to another component related to the new route.
      </p>
      <h3>Select number:</h3>
      <button @click="updateRoute(num1)">{{ num1 }}</button>
      <button @click="updateRoute(num2)">{{ num2 }}</button>
      <button @click="updateRoute(num3)">{{ num3 }}</button>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  data() {
    return {
      num1: 7,
      num2: 35,
      num3: 128,
    };
  },
  methods: {
    updateRoute(id) {
      this.$router.push("/numbers/" + id);
    },
  },
};
</script>
