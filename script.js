const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Lil'},
    { },
    ];
        const renderGoodsItem = (title = 'Test', price = 20) => {
        return `
        <div class="goods-item">
        <h3 class="goods-heading">${title}</h3>
        <p>${price}</p>
        </div>
        `;
        };
        const renderGoodsList = (list) => {
            let goodsList = list.map((item)=>{
              return renderGoodsItem(item.title, item.price);
            });
            document.querySelector('.goods-list').innerHTML = goodsList.join('');
            }  
        renderGoodsList(goods);
        