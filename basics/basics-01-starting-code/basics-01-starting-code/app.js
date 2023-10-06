const app = Vue.createApp({
    data(){
        return{
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Finish the course and learn Angular!',
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        outputGoal: function(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');