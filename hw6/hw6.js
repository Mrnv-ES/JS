const catalog = {
    catalogBlock: null,
    basket: {},
    list: [
        {
            id_product: 657233,
            product_name: 'iPhone',
            price: 90000,
            quantity: 1,
        },
        {
            id_product: 454456,
            product_name: 'Sumsung',
            price: 30000,
            quantity: 1,
        },
        {
            id_product: 22345,
            product_name: 'Xiaomi',
            price: 20000,
            quantity: 1,
        }
    ],

    init(catalogBlockClass, basket) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.basket = basket;
        this.render();
        this.addEventHandlers();
    },

    render() {
        if (this.getCatalogListLength() > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket(event) {
        if (!event.target.classList.contains('product__add-to-basket')) return;
        const id_product = +event.target.dataset.id_product;
        this.basket.addToBasket(id_product);
    },

    getCatalogListLength() {
        return this.list.length;
    },

    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    renderCatalogItem(item) {
        return `<div class="product">
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <button class="product__add-to-basket" data-id_product="${item.id_product}">Add to basket</button>
            </div>`;
    },

    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.insertAdjacentHTML('beforeend', `Catalog is empty.`);
    },
};

const basket = {
    basketBlock: null,
    clrBasketButton: null,
    catalogList: [],
    goods: [],

    init(basketBlockClass, clrBasketButton, catalogList) {
        this.basketBlock = document.querySelector(`.${basketBlockClass}`);
        this.clrBasketButton = document.querySelector(`.${clrBasketButton}`);
        this.catalogList = catalogList;
        this.addEventHandlers();
        this.render();
    },

    addEventHandlers() {
        this.clrBasketButton.addEventListener('click', this.dropBasket.bind(this));
    },

    dropBasket() {
        this.goods = [];
        this.render();
    },

    render() {
        if (this.getBasketGoodsLength() > 0) {
            this.renderBasketList();
        } else {
            this.renderEmptyBasket();
        }
    },

    findProduct(id_product) {
        return this.catalogList.find(product => product.id_product === id_product);
    },

    addToBasket(id_product) {
        const product = this.findProduct(id_product);

        if (product) {
            this.goods.push({ ...product });
            this.render();
        } else {
            alert('Ошибка добавления!');
        }

    },

    getBasketGoodsLength() {
        return this.goods.length;
    },

    renderEmptyBasket() {
        this.basketBlock.innerHTML = '';
        this.basketBlock.insertAdjacentHTML('beforeend', 'Корзина пуста.');
    },

    renderBasketList() {
        this.basketBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.basketBlock.insertAdjacentHTML('beforeend', this.renderBasketItem(item));
        });
    },

    renderBasketItem(item) {
        return `<div>
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <p>${item.quantity} шт.</p>
            </div>`;
    },
};

catalog.init('catalog', basket);
basket.init('basket', 'clr-basket', catalog.list);
