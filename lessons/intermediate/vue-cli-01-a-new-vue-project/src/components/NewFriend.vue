<template>
    <form @submit.prevent="">
        <div>
            <label for="name">Name</label>
            <input id="name" type="text" v-model="friend.name">
        </div>
        <div>
            <label for="phone">Phone</label>
            <input id="phone" type="tel" v-model="friend.phone">
        </div>
        <div>
            <label for="email">E-mail</label>
            <input id="email" type="email" v-model="friend.email">
        </div>
        <div>
            <button @click="addFriend">Add Contact</button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            friend: {
                id: '',
                name: '',
                phone: '',
                email: '',
                isFavorite: false
            }
        }
    },
    emits: ['friend-added'],
    methods: {
        addFriend() {
            this.friend.id = new Date().getTime();
            this.$emit('friend-added', this.friend);
            this.resetFriend();
        },
        resetFriend(){
            this.friend = {
                id: '',
                name: '',
                phone: '',
                email: '',
                isFavorite: false
            };
        }
    }
}
</script>