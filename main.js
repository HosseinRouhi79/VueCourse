new Vue({
    el: '#app',
    data: {
      message: 'Hello World',
      title: 'Vue.js',
      link: 'https://google.com',
      otherLink:'<a href="https://google.com">Google2</a>'
    },
    methods: {
      changeMessage: function(event){
        this.message = event.target.value;
      },
      sayHello: function(){
        // return "Hello!"
        this.title = "Golang"
        return this.title
      }
    }
  });
  