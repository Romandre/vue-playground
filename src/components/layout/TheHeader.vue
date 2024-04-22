<template>
  <div class="header">
    <p class="title">My Vue playground</p>
    <ul class="menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link :to="{ name: 'users' }">Users</router-link></li>
      <li><router-link :to="{ name: 'numbers' }">Numbers</router-link></li>
      <li><router-link :to="{ name: 'movies' }">Movies</router-link></li>
      <li><router-link :to="{ name: 'calc' }">Calculator</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
.header {
  background: orange;
  display: block;
  padding: 12px;
}

.title {
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
}

p {
  color: white;
  display: block;
  position: relative;
}

a {
  color: white;
  text-decoration: none;
}

.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 18px;
}

.menu li {
  display: inline-block;
  margin: 0 8px;
}
</style>
