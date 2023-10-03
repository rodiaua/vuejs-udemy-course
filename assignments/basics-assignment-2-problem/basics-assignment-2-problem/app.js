const app = Vue.createApp({
    data(){
        return {
            userInput: '',
            confirmedInput: ''
        }
    },
    methods: {
        handleClick(){
            alert("button clicked");
        },
        handleInput(event){
            this.userInput = event.target.value;
        },
        handleConfirmedInput(){
            this.confirmedInput = this.userInput
        }
    }
});
app.mount("#assignment");