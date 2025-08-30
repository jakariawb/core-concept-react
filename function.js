function newFun(y, x) {

    var result = y + x;
    return result;
}
var totle = newFun(5, 6)
console.log(totle)


function number1(number) {
    var result = number * 10;
    return result;
}
var finNumber = number1(100)
console.log(finNumber)

var secinNumber = number1(10);
console.log(secinNumber);


function number() {
    var largNumber = 1;
    if (largNumber % 2 === 0) {
        return true;
    }
    return false;
}
console.log(number())

function chakenght(str) {
    var size = str.lenght;
    console.log(str)
    console.log(str, size)

}

chakenght('jakaria')

var arr = ['nume', 'number', 'Email', 'pass']
console.log(arr.includes(number));

const max = Math.max(12, 45, 67, 89, 7, 777,)
console.log('max Number' + " = " + max)



// const number1 = 10;
// const number2 = 30;
// const number4 = 60;

function maxNumber() {
    const number1 = 100;
    const number2 = 3100;
    const number4 = 690;

    if (number1 > number2 && number1 > number4) {
        return number1;
    }
    else if (number2 > number1 && number2 > number4) {
        return number2;
    }
    else {
        return number4;
    }
}

var comprigom = maxNumber();
console.log(comprigom)



// function maxNumber(number1, number2, number4) {
//     if (number1 > number2 && number1 > number4) {
//         // return number1
//         console.log("number1 is max number" + " " + number1)
//     }
//     else if (number2 > number1 && number2 > number4) {
//         console.log('number2 is a max number');
//     }
//     else {
//         console.log('number4 is a bigg number')
//     }
// }
// const out = maxNumber(101, 23, 66)
// console.log(out);


function add(num1, num2) {
    const result = num1 + num2;
    return result;

}
function subtract(num1, num2) {
    return num1 - num2;;
}
function multiplay(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2
}
function cal(a, b, operation) {
    if (operation === "add") {
        const result = add(a, b);
        return result;
    }
    else if (operation === "subtract") {
        const result = subtract(a, b);
        return result;
    }
    else if (operation === "multiplay") {
        const result = multiplay(a, b);
        return result;
    }
    else if (operation === "multiplay") {
        const result = multiplay(a, b)
        return result.toFixed(1)
    }
}
const result = add(10, 20);
console.log(result)

const result1 = subtract(10, 20);
console.log(result1)

const multiplayResult = divide(10, 30)
console.log(multiplayResult)
const sum = multiplayResult + 100;
console.log(sum)

function sumNumber(sum) {
    const sum1 = sum;
    return sum1;
}
const main = sumNumber(10)
console.log('jakck number' + main);


function sqearNumber(main1, num1) {
    const tenSquare = main1 * num1;
    // return tenSquare;
    console.log(tenSquare)

}
const sqearResult = sumNumber(20, 120)
console.log(sqearResult)


function soping(shirt, pant, shoe) {
    const shirtPrice = 400;
    const pantPrice = 600;
    const shoePrice = 700;

    const shirtTotle = shirt * shirtPrice;
    const pantTotle = pant * pantPrice;
    const shoeTotle = shoe * shoePrice;

    const totlePrice = shirtTotle + pantTotle + shoeTotle;
    const vat = totlePrice + 10;
    // console.log(vat)
    return vat;
}
const price = soping(0, 0, 1)
const vatPrice = soping(1)
console.log(vatPrice)
console.log('totle shoping price + vat', price, vatPrice)