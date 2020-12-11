№1

// Нашла пример похожей задачи с нашего корса по Питону,
// адаптировала код под js, но так и не смогла довести его
// до нужного состояния. В данном случае решается задача
// нахождения i-го по счёту простого числа:

function simple(i) {

    let count = 1;

    while (count <= i) {
        let t = 1
        let isSimple = true
        let n = 2;
        while (t <= n) {
            if (n % t == 0 && t != 1 && t != n) {
                is_simple = false
                break
            }
            t += 1
        }
        if (isSimple = true) {
            if (count == i) {
                break
            }
            count += 1
        }
        n += 1
        return n
    }
}

console.log(simple(2))


№2

let goods = [
    ['phone', 20000, 10],
    ['laptop', 40000, 5],
    ['tablet', 25000, 7]
]

let sum = 0;

function countBasketPrice(array, item, amount) {
    for (let i = 0; i < 3; i++) {
        if (array[i][0] == item) {
            sum = amount * array[i][1]
        }
    }
    return sum

}

console.log('Сумма Ваших покупок: ' + countBasketPrice(goods, 'phone', 2) + ' руб.')


№3

for (let i = 0; i <= 9; console.log(i++)) { }


№4

var arr = [];
var flag = 0;
while (flag < 20) {
    arr.push('x');
    flag++;
    console.log(arr);
}

