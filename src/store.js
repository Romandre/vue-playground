import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Checking Vue version and is app runs on server or client side
console.log("Vue version: ", Vue.version);
console.log("Vuex version: ", Vuex.version);
console.log("Is server: ", Vue.prototype.$isServer);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    clicks: 0,
  },
  getters: {
    doubleCounter: (state) => {
      return `Counter: ${state.counter}`;
    },
    stringCounter: (state) => {
      return state.clicks + " clicks";
    },
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: (state, payload) => {
      state.counter -= payload;
    },
    addClicks: (state) => {
      state.clicks++;
    },
  },
  actions: {
    /* Default syntax for registering an action 
    increment: (context) => {
      context.commit("increament");
    }, */
    increment: ({ commit }) => {
      // destructuring is used above to get commit function
      commit("increament");
    },
  },
});
