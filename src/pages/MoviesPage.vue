<template>
  <section>
    <h2>Best movies of all time (from dummy API)</h2>
    <div class="movies">
      <div class="card" v-for="movie in movies.data" :key="movie.id">
        <p class="title" @click="selectMovie(movie.movie)">
          {{ movie.movie }}
        </p>
        <div v-if="active === movie.movie">
          <p>Rating: {{ movie.rating }}</p>
          <p>IMDB: {{ movie.imdb_url }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return { movies: {}, active: "" };
  },
  methods: {
    getMovies() {
      axios
        .get("https://dummyapi.online/api/movies")
        .then((resp) => (this.movies = resp));
    },
    selectMovie(movie) {
      this.active = movie;
    },
  },
  mounted() {
    this.getMovies();
  },
};
</script>

<style scoped>
.movies {
  display: flex;
  flex-wrap: wrap;
}

.card {
  display: inline;
  width: calc(50% - 24px);
  margin: 12px;
  padding: 12px;
  background: lightskyblue;
  box-sizing: border-box;
}

.title {
  cursor: pointer;
  font-weight: 700;
}
</style>
