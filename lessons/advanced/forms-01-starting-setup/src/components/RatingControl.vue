<template>
  <ul>
    <li :class="{active: modelValue === 0}"><button @click="onButtonClicked(0)" type="button">Poor</button></li>
    <li :class="{active: modelValue === 1}"><button @click="onButtonClicked(1)" type="button">Average</button></li>
    <li :class="{active: modelValue === 2}"><button @click="onButtonClicked(2)" type="button">Great</button></li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods:{
    onButtonClicked(index){
      this.$emit('update:modelValue', index)
    }
  }
}
</script>

<style scoped>
.active{
  border-color: #800852;
}

.active button{
  color: #800852;
}

ul{
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li{
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button{
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>