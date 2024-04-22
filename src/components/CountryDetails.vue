<template>
  <section>
    <div :class="['details', { active: isShown }]">
      <div class="toggle" @click="toggleCountry">
        <h3>{{ country.name }}</h3>
        <span v-show="isShown" class="close">X</span>
      </div>

      <div v-if="isShown">
        <p>{{ "Population: " + country.population }}</p>
        <p>{{ "Capital: " + country.capital }}</p>
        <p>{{ "Government: " + country.government }}</p>
        <p>{{ "Language: " + country.language }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["country", "active"],
  data() {
    return {};
  },
  computed: {
    isShown() {
      return this.active === this.country.name;
    },
  },
  methods: {
    toggleCountry() {
      this.$emit("toggle-details", this.country.name);
    },
  },
};
</script>

<style scoped>
h3 {
  display: inline-block;
  width: 100px;
  margin: 4px auto;
  padding: 6px;
  color: blue;
  background: #dddddd;
  border-radius: 10px;
}

.details {
  position: relative;
  width: 60%;
  margin: 0 auto;
  padding: 4px;
}

.details.active {
  padding: 2px;
  border: 1px solid black;
  border-radius: 10px;
}

.details.active h3 {
  background: white;
}

.toggle {
  cursor: pointer;
  display: inline;
}

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  color: red;
  font-weight: 800;
}
</style>
