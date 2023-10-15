<template>
    <div class="card">
        <div class="card-heading">
            <h2>User check-in</h2>
        </div>
        <section>
            <form @submit.prevent="">
                <div class="input">
                    <label for="name">Name</label>
                    <input id="name" type="text" v-model="name">
                </div>
                <div class="input">
                    <label for="age">Age</label>
                    <input id="age" type="number" v-model="age">
                </div>
                <div class="check-in-button">
                    <button @click="checkIn">Check-in</button>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            age: 0
        }
    },
    emits: ['user-check-in'],
    methods: {
        checkIn() {
            this.$emit('user-check-in', this.name, this.age);
            this.name = '';
            this.age = null;
        }
    }
}
</script>

<style>

.input{
    display: grid;
}

.check-in-button{
    text-align: center;
    margin-top: 20px;
}

</style>
