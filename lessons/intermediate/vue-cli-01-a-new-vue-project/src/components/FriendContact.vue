<template>
  <li>
    <h2>{{ friend.name }} {{ friend.isFavorite ? '(Favorite)' : '' }}</h2>
    <fallthrough-button @click="toggleIsFavorite" :text="friend.isFavorite ? 'Remove from favorites' : 'Mark as favorite'"></fallthrough-button>
    <fallthrough-button @click="toggleDetails" :text="detailsAreVisible ? 'Hide Details' : 'Show Details'"></fallthrough-button>
    <ul v-if="detailsAreVisible">
      <li><strong>Id:</strong> {{ friend.id }}</li>
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
    <button @click="$emit('friend-deleted', this.friend.id)">Delete</button>
  </li>
</template>
<script>
export default {
  //props: ['friend'],
  props: {
    friend: Object
  },
  emits: ['toggle-favorite', 'friend-deleted'],
  //emits: {
  //   'toggle-favorite': (friendId) => {
  //     if(friendId){
  //       return true;
  //     }else{
  //       console.warn('friendId is missing');
  //       return false;
  //     }
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleIsFavorite() {
      this.$emit('toggle-favorite', this.friend.id);
    }
  }
};
</script>

<style>
button {
  margin: 1%;
}
</style>