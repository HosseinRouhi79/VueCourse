new Vue({
    el: '#app',
    data: {
      message: 'Hello World'
    },
    methods: {
      changeMessage: function(event){
        this.message = event.target.value;
      },
      sayHello: function(){
        return "Hello!"
      }
    }
  });
  