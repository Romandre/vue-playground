<template>
  <div>
    <h3>Custom input example</h3>
    <div>Input is pre-focused due to custom global directive</div>
    <input
      type="text"
      ref="input"
      @input="$emit('input', $event.target.value)"
      v-focus
    />
    <button @click="clearInput">Clear</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  refs: ["input"],
  methods: {
    clearInput() {
      this.$refs.input.value = "";
      this.$emit("clear-input");
    },
  },
};
</script>
