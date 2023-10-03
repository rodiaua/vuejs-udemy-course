const app = Vue.createApp({
    data(){
        return {
            name: 'Max',
            age: 25,
            imageUrl: 'https://rb.gy/owb6l'
        };
    },
    methods:{
        getFavoriteNumber(){
            var num = Math.random();
            return num;
        }
    }
});

app.mount('#assignment');