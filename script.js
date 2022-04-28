window.onload = function(){
  const app = new Vue({
    el:'#root',
    data:{
      message: 'Hello world',
      isShow: false,
      items:[
        {
id:1,
name: 'papa'
        },
        {

        },
        'red',
        'green',
        'blue'
      ]
    },
    computed:{
      getMessage(){
        return'opa'
      }
    },
    methods:{
      myFu(){
        alert('опачки')
      }
    }
  })
}