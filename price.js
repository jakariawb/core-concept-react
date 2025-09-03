var phone = [
    { name: "iphon", price: 2011000, model: "13proMax", mper: 2000 },
    { name: "5ster", price: 2000, model: "13proMax", mper: 2100 },
    { name: "relme", price: 2101000, model: "13proMax", mper: 3000 },
    { name: "HTC", price: 310000, model: "13proMax", mper: 20000 },
];
function loestPrice(phone) {
    var min = phone[0]
    for (var sum of phone) {
        if (sum.price > min.price) {
            min = sum;

        }
    }
    return min;
}
var smolePrice = loestPrice(phone)
console.log(smolePrice)

function discountePrice(quantity) {
    if (quantity <= 100) {
        var totle = quantity * 100;
        return totle
    } else if (quantity <= 200) {
        var totle = quantity * 90;
        return totle;
    } else {
        var totle = quantity * 70;
        return totle;
    }
}
var totlePrice = discountePrice(211)
console.log(totlePrice)

var plear = [
    { name: "jakaria", ren: 70 },
    { name: " mahamud", ren: 100 },
    { name: " jakir", ren: 80 },
    { name: " sala", ren: 71 },
];
function maixRun(plear) {
    var min = plear[0];
    for (var sum of plear) {
        if (sum.ren > min.ren) {
            min = sum;
        }
    }
    return min;
}
var totleRen = maixRun(plear)
console.log(totleRen)


function discountePrice(prodect) {
    if (prodect <= 100) {
        var totlePrice = prodect * 100;
        var discounte = totlePrice / 10
        var totlepay = totlePrice - discounte
        return totlepay;
    }
}
var totlePrice = discountePrice(22)
console.log(totlePrice);

function add(num1, num2) {
    return num1 + num2
}
function subtract(num1, num2) {
    return num1 - num2
}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2
}
function allResult(a, b, operation) {
    if (operation === 'add') {
        var result = add(a, b)
        return result
    } else if (operation === "subtract") {
        return subtract(a, b)
    }
    else if (operation === "divide") {
        return divide(a, b);
    }
}
var totleResult = allResult(1, 4, 'add')
console.log(totleResult);

var subtractResult = allResult(6, 10, "subtract")
console.log(subtractResult);

var divideResult = allResult(4, 7, "divide")
console.log(divideResult)

var name = [
    { name: "jakaria jomaddar" },
    info = {
        Number: "01401813864",
        Email: "jakariaja@gmail.com"
    }
    ]
var pus = name.push([name + "jakari"])
console.log(name, pus)
