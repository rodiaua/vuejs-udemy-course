const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullname: ''
    };
  },
  watch: {
    
    //dataPropertyName(newValue, oldValue)
    counter(value){
      if(Math.abs(value) > 50){
        const that = this;
        setTimeout(function(){
          that.counter = 0;
        }, 2000);
      }
    }
    // name(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullname(){
      console.log("running again...")
      if (this.name === '' && this.lastName === ''){
        return '';
      }
      return this.name+' '+this.lastName; 
    }
  },
  methods: {
    outputFullName(){
      console.log("running again...")
      if (this.name === ''){
        return '';
      }
      return this.name+' '+"William";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetName(){
      console.log("reset")
      this.name = '';
      this.lastName = '';
    }
  }
});

app.mount('#events');