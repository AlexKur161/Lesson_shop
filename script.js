const GET_GOODS_ITEM = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';
const GET_BASKET = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json';

function service(url,callback){
  xhr = new XMLHttpRequest();
  xhr.open('GET',url);
  xhr.send();
  xhr.onload = () =>{
    callback(JSON.parse(xhr.response));
    console.log(JSON.parse(xhr.response))
  }
}
class GoodsItem {
  constructor({ product_name, price }) {
    this.product_name = product_name;
    this.price = price;
  }
  render(){
    return `
    <div class="goods-item">
    <h3 class="goods-heading">${this.product_name}</h3>
    <p>${this.price}</p>
    </div>
    `;
  }
  }
class GoodsList {
  items = [];
  fetchGoods(callback) {
    service(GET_GOODS_ITEM,(data) => {
      this.items = data;
      callback();
    });
  }
  calculatePrice() {
    return this.items.reduce((prev, { price }) => {
      return prev + price;
    }, 0)
  }
  render() {
    const goods = this.items.map(item => {
      const goodItem = new GoodsItem(item);
      return goodItem.render()
    }).join('');
  
    document.querySelector('.goods-list').innerHTML = goods;
  }
}
class GoodsBasket {
  items = [];
  fetchGoods(callback) {
    service(GET_BASKET,(data) => {
      this.items = data;
      callback();
    });
  }
}
const goodsList = new GoodsList();
const goodsBasket  = new GoodsBasket();
goodsBasket.fetchGoods;
goodsList.fetchGoods(() => {
  goodsList.render();
});
const basketSum = goodsList.calculatePrice();
