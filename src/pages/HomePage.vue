<template>
  <section>
    <div>
      <h1>{{ msg }}</h1>
    </div>
    <hr />
    <div>
      <custom-input
        v-model="inputValue"
        @clear-input="clearInput"
      ></custom-input>
      <div v-html="textfrominput"></div>
    </div>
    <hr />
    <div>
      <h3>Testing dynamic component rendering</h3>
      <button @click="switchDynamicComp">Switch test component</button>
      <div class="dynamic-component-text">
        <component :is="currentComponent"></component>
      </div>
    </div>
    <hr />
    <div>
      <countries-list></countries-list>
    </div>
    <hr />
    <div>
      <todo-list :comments="comments"></todo-list>
    </div>
    <hr />
    <div class="functional-comp">
      <functional-component
        v-for="{ type, content } in textForFunctionalComp"
        :type="type"
        :content="content"
        :key="content"
      />
    </div>
    <hr />
    <div class="global-comp"><globaly-reg-comp /></div>
    <hr />
    <state-test />
    <br />
  </section>
</template>

<script>
import CustomInput from "../components/CustomInput.vue";
import DynamicComp1 from "../components/DynamicComp1.vue";
import DynamicComp2 from "../components/DynamicComp2.vue";
import CountriesList from "../components/CountriesList.vue";
import TodoList from "../components/TodoList.vue";
import FunctionalComponent from "../components/FunctionalComponent.vue";
import StateTest from "../components/StateTest.vue";

export default {
  name: "HelloWorld",
  components: {
    CustomInput,
    CountriesList,
    TodoList,
    FunctionalComponent,
    StateTest,
  },
  data() {
    return {
      msg: "Checkout my components below!",
      inputValue: "",
      currentComponent: DynamicComp1,
      comments: [
        "Vue is awesome!",
        "Let's learn more stuff!",
        "Add something more under me :)",
      ],
      textForFunctionalComp: [
        { type: "h3", content: "Functional Component Example" },
        { type: "h4", content: "Yes, I'm functional component. Hello!" },
        {
          type: "p",
          content:
            "I don't have a state and a livecycle as a normal component.",
        },
        {
          type: "p",
          content:
            "I am used for presentational purposes, v-for loops and to wrap basic functionality in high order functions.",
        },
      ],
    };
  },
  computed: {
    textfrominput() {
      return this.inputValue
        ? `<strong>Input two-way binded value</strong>: ${this.inputValue}`
        : `Start entering anything to the input`;
    },
  },
  methods: {
    switchDynamicComp() {
      this.currentComponent =
        this.currentComponent === DynamicComp1 ? DynamicComp2 : DynamicComp1;
    },
    clearInput() {
      this.inputValue = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.dynamic-component-text {
  max-width: 800px;
  margin: 0 auto;
}

.functional-comp {
  margin: 8px 20px;
}

.global-comp {
  padding: 2px;
  background: wheat;
}
</style>
