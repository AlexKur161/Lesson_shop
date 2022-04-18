 class GoodsItem {
    constructor(title = 'test',price = 100){
      this.title = title;
      this.price = price;
    }
    render(){
      return `
      <div class="goods-item">
      <h3 class="goods-heading">${this.title}</h3>
      <p>${this.price}</p>
      </div>
      `;
    }
  }
  
  class GoodsList{
    constructor(){
      this.goods = [];
    }
    feethGoods(){
      this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
      {},
      {},
    ]
    }
    render() {
      let listHtml = '';
      this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
      });
      document.querySelector('.goods-list').innerHTML = listHtml;
      }
  }
const list = new GoodsList();
list.feethGoods();
list.render();

        