const basketItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Товар</b>: ${good.product_name}</div>
                    <div><b>Цена за ед.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
}

const basket = {
    basketListBlock: null,
    basketItem,
    goods: [
        {
            product_name: 'смартфон iPhone',
            price: 60000,
            quantity: 3,
        },
        {
            product_name: 'смартфон Sumsung',
            price: 30000,
            quantity: 2,
        },
        {
            product_name: 'смартфон Xiaomi',
            price: 15000,
            quantity: 1,
        },
    ],
    init() {
        this.basketListBlock = document.querySelector('.basket-list');
        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.basketListBlock.insertAdjacentHTML('beforeend', this.basketItem.render(good));
            });
            this.basketListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} товара (ов) на сумму ${this.getBasketPrice()} руб.`);
        } else {
            this.basketListBlock.textContent = 'Корзина пуста';
        }
    },
    getBasketPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },

};

basket.init();
