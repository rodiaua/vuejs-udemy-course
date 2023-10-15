<template>
    <div class="card">
        <div class="card-heading">
            <h2>Active User</h2>
        </div>
        <section>
            <h3>Name: {{ userName }}</h3>
            <h4>Age: {{ userAge }}</h4>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        userAge:{
           type: Number,
           required: true
        },
        userName:{
            type: String,
            required: true
        }
    }
}
</script>
