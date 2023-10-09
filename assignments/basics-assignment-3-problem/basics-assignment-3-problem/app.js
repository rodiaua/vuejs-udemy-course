const app = Vue.createApp({
    data(){
        return {
            number: 0
        }
    },
    methods: {
        add(value){
            this.number += value;
        }
    },
    computed: {
        result(){
            return this.number === 37? 37: this.number < 37? 'Not there yet' : 'Too much!';
        }
    },
    watch: {
        result(){
            const that = this;
            setTimeout(function(){
                that.number = 0;
            }, 5000);
        }
    }
});

app.mount("#assignment");