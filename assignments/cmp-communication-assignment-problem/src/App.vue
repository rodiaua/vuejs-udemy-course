<template>
  <div>
    <div class="bar">
      <h1>User App</h1>
    </div>
    <div class="cards">
      <active-user :user-name="name" :user-age="age"></active-user>
      <user-data @user-check-in="checkInUser"></user-data>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Rostyslav Kravchenko",
      age: 25,
    };
  },
  methods: {
    checkInUser(name, age) {
      this.name = name;
      this.age = +age;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

html {
  font-family: "Roboto", sans-serif;
  /* Choose a modern font-family */
}

body {
  margin: 0;
}

.bar {
  background-color: #333;
  color: #fff;
  text-align: left;
  padding: 5px;
}

h1 {
  margin: 0;
}

h2 {
  margin: 0;
  padding: 5px;
}

.cards {
  display: flex;
  justify-content: center;
}

.card {
  border: 1px solid black;
  border-radius: 10px;
  padding: 0 0 10px 0;
  margin: 10px;
  max-width: 100vw;
  box-shadow: 2px 2px 7px 1px;
}

.card:hover {
  box-shadow: 2px 2px 15px 1px;
}

.card-heading {
  background-color: #333;
  color: #fff;
  margin: 0;
  border-radius: 8px 8px 0 0;
}

section {
  padding: 5px;
  max-width: 300px;
  word-wrap: break-word;
}
</style>