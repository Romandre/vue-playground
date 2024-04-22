<template>
  <section>
    <h3>Countries list</h3>
    <p>(Testing method emitting from child to parent)</p>
    <ul>
      <li v-for="country in countries" :key="country.name">
        <country-details
          :country="country"
          :active="activeCountry"
          @toggle-details="toggleDetails"
        ></country-details>
      </li>
    </ul>
  </section>
</template>

<script>
import CountryDetails from "./CountryDetails.vue";

export default {
  components: { CountryDetails },
  data() {
    return {
      activeCountry: "",
      countries: [
        {
          name: "Russia",
          population: "147,182,123",
          government: [
            "Constitutional republic",
            "Federal republic",
            "Semi-presidential system",
          ],
          capital: "Moscow",
          language: "Russian",
          currency: "RUB",
        },
        {
          name: "Finland",
          population: "5,614,571",
          government: "Unitary parliamentary republic",
          capital: "Helsinki",
          language: ["Finnish", "Swedish"],
          currency: "EUR",
        },
        {
          name: "Spain",
          population: "47,325,360",
          government: "Unitary parliamentary constitutional monarchy",
          capital: "Madrid",
          language: "Spanish",
          currency: "EUR",
        },
      ],
    };
  },
  methods: {
    toggleDetails(countryName) {
      this.activeCountry =
        this.activeCountry === countryName ? "" : countryName;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 6px 0;
  padding: 0 12px;
}
</style>
