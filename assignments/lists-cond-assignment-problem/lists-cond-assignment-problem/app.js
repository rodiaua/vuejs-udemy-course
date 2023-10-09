const app = Vue.createApp({
    data(){
        return {
            tasks:[],
            enteredTaskValue: '',
            listIsHidden: false
        };
    },
    methods:{
        addTask(){
            if(this.enteredTaskValue !== ''){
                this.tasks.push(this.enteredTaskValue);
                this.enteredTaskValue = '';
            }
        },
        toggleHideListButton(){
            this.listIsHidden = !this.listIsHidden;
        }
    }
});

app.mount("#assignment");