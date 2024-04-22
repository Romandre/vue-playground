// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Router from "vue-router";
import App from "./App";
import HomePage from "./pages/HomePage.vue";
import NumbersPage from "./pages/NumbersPage.vue";
import CalculatorPage from "./pages/CalculatorPage.vue";
import UsersPage from "./pages/UsersPage.vue";
import ReceiveNumber from "./components/ReceiveNumber.vue";
import MoviesPage from "./pages/MoviesPage.vue";

import { store } from "./store";

Vue.config.productionTip = false;

Vue.use(Router);

const router = new Router({
  routes: [
    { path: "/", name: "home", component: HomePage },
    {
      path: "/users",
      name: "users",
      component: UsersPage,
      //children: [{ path: ":id", component: TheUser, params: true }],
    },
    {
      path: "/numbers",
      name: "numbers",
      component: NumbersPage,
      children: [{ path: ":num", component: ReceiveNumber, params: true }],
    },
    { path: "/calculator", name: "calc", component: CalculatorPage },
    { path: "/movies", name: "movies", component: MoviesPage },
  ],
  mode: "history", // default mode is 'hash'
});

// Register a global custom directive called `v-focus`
Vue.directive("focus", {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus();
  },
});

// Registering "globaly-reg-comp" component globaly
Vue.component("globaly-reg-comp", {
  data() {
    return {
      title: "Hi!",
      text: "I'm a globaly registered component (defined in main.js)",
    };
  },
  template: `<div><h3>{{ title }}</h3><p>{{ text }}</p></div>`,
});

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
