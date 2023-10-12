<template>
  <li>
    <h2>{{ friend.name }} {{friend.isFavorite?'(Favorite)':''}}</h2>
    <button @click="toggleIsFavorite">{{ friend.isFavorite?'Remove from favorites':'Mark as favorite' }}</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  //props: ['friend'],
  props: {
    friend: Object
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleIsFavorite(){
      this.$emit('toggle-favorite', this.friend.id);
    }
  }
};
</script>

<style>
button{
  margin: 1%;
}
</style>