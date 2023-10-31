<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">set goal</button>
    <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <h2>Input is invalid!</h2>
      <p>Provide a value to set a goal!</p>
      <button @click="closeTheError">Ok</button>
    </error-alert>
    </teleport>
</template>
<script>
import ErrorAlert from './ErrorAlert.vue'
export default {
  components:{
    ErrorAlert
  },
  data() {
    return {
      inputIsInvalid:false
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },
    closeTheError(){
      this.inputIsInvalid = false;
    }
  },
};
</script>