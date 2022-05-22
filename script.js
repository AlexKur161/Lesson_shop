const BASE_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
const GET_GOODS_ITEMS = `${BASE_URL}catalogData.json`
const GET_BASKET_GOODS_ITEMS = `${BASE_URL}getBasket.json`

function service(url) {
 return fetch(url)
  .then((res) => res.json())
  
}
function init(){
 const Search= Vue.component('search', {
   props:[
     'value'
   ],
   template:`
   <div class="search">
       <input type="text" class="goods-search" :value="value" @input="$emit('input', $event.target.value)"/>
      <custom-button v-on:click="$emit('searchclick')">Искать</custom-button>
    </div>
   `
 })
  const customButton = Vue.component('custom-button',{
    template:`
    <button class="search-button cart-button2" type="button" v-on:click="$emit('filteritems')">
    <slot></slot>
    </button>
    `
  })
  const basketGoods = Vue.component('basket-goods',{
    props:[
      'isvisiblecart',
      'calculateprice'
    ],
    template:`
    <div  class="fixed-area" v-if="isvisiblecart">
    <div class="basket-card">
        <div class="basket-card-header">
            <h1 class="title-basket-card">Корзина</h1>
            <div>{{calculateprice}}</div>
            <div class="close-basket-card" v-on:click="$emit('closecart')"></div>
        </div>
    </div>
</div>
    `
  })
  const goodsItem = Vue.component('goods-item',{
    props:[
      'item'
    ],
    template:`
    <div class="goods-list">
    <div class="goods-item">
          <h3 class="goods-heading">{{item.product_name}}</h3>
            <p>{{item.price}}</p>
            </div>
  </div>
    `
  })
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
   <slot>
   что либо
   </slot>
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
              debugger
            })
          },
          setVisionCart(){
            this.isVisibleCart = !this.isVisibleCart
            
          },
          searchChengeHandler(value){
            this.search = value
           
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