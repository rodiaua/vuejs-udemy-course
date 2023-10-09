const app = Vue.createApp(
    {
        data() {
            return {
                userStyle: '',
                pToggeled: false,
                bgColor: ''
            }
        },
        computed:{
            computedClasses(){
                //return [this.userStyle, this.pToggeled? 'hidden':'visible']
                return {
                    user1: this.userStyle === 'user1',
                    user2: this.userStyle === 'user2',
                    visible: !this.pToggeled,
                    hidden: this.pToggeled
                }
            }
        },
        methods:{
            toggleP(){
                this.pToggeled = !this.pToggeled;
            }
        }
    }
);

app.mount('#assignment');