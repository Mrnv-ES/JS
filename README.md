JavaScript
№1

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2, т.к это префиксная форма, в которой инкрементирование производится сразу (2), а возврат — уже с обновленным значением (2)
d = b++; alert(d);           // 1, т.к. это постфиксная форма, в ней сначала происходит возвращение значения (1), а потом выполняется инкрементирование (2)
c = (2 + ++a); alert(c);     // 5, т.к. прибавили по единице во 2й строке и в данном примере (из-за префиксной формы сразу возвращаем увеличенное значение "а" в данной строке)
d = (2 + b++); alert(d);     // 4, т.к. прибавили единицу в 3й строке, но в данной строке постфиксная форма, поэтому "b" не обновляется сразу
alert(a);                    // 3, т.к. прибавили по единице во 2й и 4й строках
alert(b);                    // 3, т.к. прибавили по единице в 3й и 5й строках

№2

var a = 2;
var x = 1 + (a *= 2);

// "x" будет равен 5, т.к. a *= 2  --  это то же самое, что и  a = a * 2, поэтому x = 1 + (2 * 2)

№3

let a = 111;
let b = -2;

function countNum(a, b) {
    if (a > 0 && b > 0) {
        return (a - b)
    }

    if (a < 0 && b < 0) {
        return (a * b)
    }

    if ((a >= 0 && b < 0) || (a <= 0 && b > 0)) {
        return (a + b)
    }
}

alert(countNum(a, b))

№4

const a = Math.round(Math.random() * 15)
console.log('Будет организован вывод чисел от ' + a + ' до 15')

function numbers(n) {
    switch (n) {
        case 0: console.log(0);
        case 1: console.log(1);
        case 2: console.log(2);
        case 3: console.log(3);
        case 4: console.log(4);
        case 5: console.log(5);
        case 6: console.log(6);
        case 7: console.log(7);
        case 8: console.log(8);
        case 9: console.log(9);
        case 10: console.log(10);
        case 11: console.log(11);
        case 12: console.log(12);
        case 13: console.log(13);
        case 14: console.log(14);
        case 15: console.log(15);
    }
}

numbers(a);

№5

function sum(x, y) {
    return (x + y);
}

function sub(x, y) {
    return (x - y);
}

function mul(x, y) {
    return (x * y);
}

function div(x, y) {
    return (x / y);
}

let a = 55;
let b = 10;

console.log(sum(a, b));
console.log(sub(a, b));
console.log(mul(a, b));
console.log(div(a, b));

№6

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+': console.log(sum(arg1, arg2));
            break;
        case '-': console.log(sub(arg1, arg2));
            break;
        case '*': console.log(mul(arg1, arg2));
            break;
        case '/': console.log(div(arg1, arg2));
            break;
    }

}

mathOperation(30, 2, '-');

№7

console.log(null > 0);    // false
console.log(null == 0);   // false
console.log(null === 0);  // false
console.log(null >= 0);   // true
console.log(null < 0);    // false
console.log(null <= 0);   // true

/*Сравнения преобразуют null в число, рассматривая
его как 0. Поэтому выражения (null >= 0), (null <= 0) истинны,
а (null > 0), (null < 0) ложны. С другой стороны, для нестрогого и строгого
равенства ("==" и "===") значений null действует особое правило:
эти значения ни к чему не приводятся, они равны друг другу и
не равны ничему другому. Поэтому (null === 0) и (null == 0) ложно.
*/

№8

/* first draft
function exp(val, pow) {
    if (pow > 0) {
        return (val * exp(val, pow - 1));
    }
    else {
        return 1;
    }
}
*/

function exp(val, pow) {
    return pow > 0 ? (val * exp(val, pow - 1)) : 1;
}

console.log(exp(2, 4));

