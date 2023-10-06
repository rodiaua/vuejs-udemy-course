const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    submitForm(){
      alert('Submitted!');
    },
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName){
      this.name = event.target.value + " " + lastName;
    },
    confirmName(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
