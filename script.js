const BASE_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
const GET_GOODS_ITEMS = `${BASE_URL}catalogData.json`
const GET_BASKET_GOODS_ITEMS = `${BASE_URL}getBasket.json`

function service(url) {
 return fetch(url)
  .then((res) => res.json())
  
}
function init(){
  const compAp = Vue.component('component-a',{
    props:[
      'title'
    ],
    template:`
    <div>
    <h1 v-on:click="$emit('my-event',title)">{{ title }}</h1>
   <component-b> </component-b>
   <component-b> </component-b>
   <component-b> </component-b>
    </div>
    `
  })
  const compB = Vue.component('component-b',{
    template:`
    <div>component-b</div>
    `
  })
  const app = new Vue({
    el: '#root',
    data:{
      items:[],
      filteredItems: [],
      search:'',
      isVisibleCart: false,
      titlea: 'test test test'
    },
    methods:{
      testEvents(event){
        alert(event)
        
      },
      fetchGoods() {
           service(GET_GOODS_ITEMS).then((data) => {
             this.items = data;
              this.filteredItems = data;
            });
          }, 
          filterItems() {
            this.filteredItems = this.items.filter(({ product_name }) => {
              return product_name.match(new RegExp(this.search, 'gui'))
            })
          },
          setVisionCart(){
            this.isVisibleCart = !this.isVisibleCart
          }
  },
  computed:{
    calculatePrice() {
        return this.items.reduce((prev, { price }) => {
          return prev + price;
        }, 0)
      }
},
    mounted(){
      this.fetchGoods();
    }
  })
}
window.onload = init