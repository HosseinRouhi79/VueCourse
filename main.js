new Vue({
    el: '#app',
    data: {
      message: 'Hello World',
      title: 'Vue.js',
      link: 'https://google.com',
      otherLink:'<a href="https://google.com">Google2</a>',
      counter:0,
      x:0,
      y:0,
    },
    methods: {
      changeMessage: function(event){
        this.message = event.target.value;
      },
      sayHello: function(){
        // return "Hello!"
        this.title = "Golang"
        return this.title
      },
      increase: function(step , event){
        this.counter += step
      },
      updateCoordinates: function(event){
        this.x = event.clientX,
        this.y = event.clientY
      },
      // dummy: function(event){
      //   event.stopPropagation()
      // }
      addAlert: function(){
        alert('Alert')
      }
    }
  });
  