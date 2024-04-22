<template>
  <section>
    <h1>{{ test }}</h1>
    <div class="calc" @click="makeOperation">
      <input v-model="input" readonly @click="preventEvent" />
      <button class="oper">AC</button>
      <button class="oper">/</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="oper">*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button class="oper">-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button class="oper">+</button>
      <button>0</button>
      <button>.</button>
      <button class="oper submit">=</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      test: "Simple Vue Calculator",
      input: 0,
      prevInput: 0,
      operation: "",
    };
  },
  watch: {
    input(newVal, oldVal) {
      if (
        newVal.toString().match(/[.]/g) &&
        newVal.toString().match(/[.]/g).length > 1
      ) {
        this.input = oldVal;
      }
    },
  },
  methods: {
    makeOperation(event) {
      let value = event.target.outerText;
      if (value === "AC") {
        this.input = 0;
        this.prevInput = 0;
        this.operation = "";
        return;
      }
      if (!isNaN(value) || value === ".") {
        if (this.operation && !this.prevInput) {
          if (this.operation !== "=") {
            this.prevInput = this.input;
          } else {
            this.prevInput = 0;
            this.operation = "";
          }
          this.input = 0;
        }
        if (this.input.toString() === "0" && value !== ".") {
          this.input = value;
        } else {
          this.input += value;
        }
      } else {
        if (value === "=") {
          if (this.prevInput && this.input) {
            this.calculate();
            this.operation = "";
          }
        } else if (this.prevInput) {
          this.calculate();
        }
        this.operation = value;
      }
    },
    preventEvent(event) {
      event.stopPropagation();
    },
    calculate() {
      if (this.operation === "/" && Number(this.input) === 0) {
        this.input = "Not a number";
      } else {
        this.input = eval(this.prevInput + this.operation + this.input);
      }
      this.prevInput = 0;
    },
  },
};
</script>

<style scoped>
.calc {
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  margin: 0 auto 40px;
}

input {
  min-width: 0;
  padding: 0 20px;
  text-align: right;
  font-size: 30px;
}

input,
.submit {
  flex: 1 0 45%;
  margin: 5px;
  box-sizing: border-box;
}

button {
  flex: 1 0 20%;
  margin: 5px;
  height: 100px;
  background-color: white;
  font-size: 24px;
}

.oper {
  background: orange;
}
</style>
