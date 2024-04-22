<template>
  <section>
    <h2>Users list</h2>
    <!-- Searching -->
    <div class="searchByUser">
      Filter by any part of the name: <input v-model="searchInput" />
    </div>

    <!-- All fetched users -->
    <div v-if="!searchInput" class="users">
      <h3>All users list from API</h3>
      <ul>
        <li v-for="user in users" :key="user.name">
          <span>{{ user.id }}.</span>
          <span>{{ user.name }}</span>
        </li>
      </ul>
    </div>

    <!-- Filtered users -->
    <div v-else>
      <div v-if="searchResult.length > 0" class="result">
        <ul>
          <li v-for="result in searchResult" :key="result.id">
            {{ `${result.id}. ${result.name}` }}
          </li>
        </ul>
      </div>
      <div v-if="!searchResult.length">
        <h3>No users found with current filter</h3>
      </div>
    </div>

    <button class="button" @click="navigateToHome">Go Home</button>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      users: "",
      searchInput: "",
      searchResult: "",
    };
  },
  watch: {
    searchInput(newName, oldName) {
      if (newName.length >= 1) {
        this.searchResult = this.users.filter((user) => {
          if (user.name.toLowerCase().includes(newName.toLowerCase())) {
            return user.name;
          }
        });
      } else {
        this.searchResult = "";
      }
    },
  },
  methods: {
    getUsers() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          this.users = json;
        });
    },
    navigateToHome() {
      this.$router.push({ name: "home" });
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  display: block;
  margin: 8px 10px;
}
a {
  color: #42b983;
}
button {
  margin: 16px 0;
}
</style>
