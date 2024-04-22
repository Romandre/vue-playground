<template>
  <section>
    <h3>TODO list</h3>
    <input @keyup.enter="addComment" v-model="text" />
    <button @click="addComment">Add task</button>
    <ul class="todos">
      <li v-for="(comment, index) in comments" :key="index">
        {{ comment }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["comments"],
  data() {
    return {
      text: "",
    };
  },
  methods: {
    addComment() {
      if (this.text) this.comments.push(this.text);
      this.text = "";
    },
  },
};
</script>

<style scoped>
.todos {
  display: block;
  margin: 16px 0;
  padding: 0;
  list-style: none;
}

li {
  padding: 4px 16px;
}

li:nth-child(odd) {
  display: inline-block;
  background: #ddd;
}
</style>
