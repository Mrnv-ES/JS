№1

function NumToObj(num) {
    let arrNumber = num.split('');
    while (arrNumber.length < 3) {
        arrNumber.unshift(0);
    }
    let objNumber = {};
    if (arrNumber.length > 3) {
        return null;
    }
    else {
        objNumber['сотни'] = +arrNumber[0];
        objNumber['десятки'] = +arrNumber[1];
        objNumber['единицы'] = +arrNumber[2];
        return objNumber;
    }
}
let number = '257';
let obj = NumToObj(number);
if (obj == null) {
    console.log("Object is null");
}
else {
    console.log(obj);
}

№2

let basket = {
    goods: [
        {
            id_product: 11,
            product_name: 'phone',
            price: 20000,
            quantity: 1,
        },
        {
            id_product: 12,
            product_name: 'laptop',
            price: 40000,
            quantity: 1,
        },
        {
            id_product: 13,
            product_name: 'tablet',
            price: 25000,
            quantity: 2,
        }
    ],
    countBasketPrice() {
        return basket.goods.reduce((total, item) => total += item.price * item.quantity, 0);
    }
}

console.log('Сумма Ваших покупок: ' + basket.countBasketPrice() + ' руб.');


