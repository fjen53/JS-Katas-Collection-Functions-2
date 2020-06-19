//kata 1
function add(x, y) {
    return x + y
}
console.log(add(9, 3))


// //kata 2
function multiply(x, y) {
    let result = 0;
    for (let count = 0; count < y; count++) {
        result = add(result, x)
    }
    return result;
}
console.log(multiply(12, 5))

//kata 3
function power(x, n) {
    let result = 1
    for (let count = 0; count < n; count++) {
        result = multiply(result, x);
    }
    return result
}
console.log(power(4, 5))

// //kata 4
function factorial(n) {
    let result = 1;
    if (n == 0 || n == 1) {
        return result;
    } else {
        for (let count = n; count >= 1; count--) {
            result = multiply(result, count);
        }
        return result;
    }
}
console.log(factorial(5))

// kata 5
function fibonacci(n) {
    let a = 1, b = 1, c = 1;
    for (let count = 3; count <= n; count++) {
        // c = a, b;
        a = b;
        b = c;
        c = add(a, b)
    }
    return b;
}
console.log(fibonacci(8))


