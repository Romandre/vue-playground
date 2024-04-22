<template>
  <div class="test-state">
    <div>
      <h2>{{ doubleCounter }}</h2>
      <p>Number of clicks: {{ stringCounter }}</p>
      <p>{{ testProperty }}</p>
      <p>(State Management store value)</p>
    </div>
    <button @click="incrementCounter(100)">Increment global counter</button>
    <button @click="decrementCounter(50)">Decrement global counter</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"]),
    testProperty() {
      return "Testing mapGetters with own computed properties!";
    },
  },
  /* 
   * Alternative way of using getters, but mapGetters
   * is much easier and compact. 
  computed: {
    counter() {
      return this.$store.getters.doubleCounter;
    },
    clicks() {
      return this.$store.getters.stringCounter;
    },
  }, */
  methods: {
    ...mapMutations(["increment", "decrement", "addClicks"]),
    incrementCounter(val) {
      this.increment(val);
      this.addClicks();
    },
    decrementCounter(val) {
      this.decrement(val);
      this.addClicks();
    },
    /* 
     * This can be used as well, but mapMutations save place 
     * and make usage of mutations easier and compact. 
    incrementCounter() {
      // this.$store.state.counter++;
      // using state MUTATIONS instead
      this.$store.commit("increment");
      this.$store.commit("addClicks");
    },
    decrementCounter() {
      // this.$store.state.counter--;
      // using state MUTATIONS instead
      this.$store.commit("decrement");
      this.$store.commit("addClicks");
    }, */
  },
};
</script>
