//Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
//function evalObject(value){
// var result = 0;
// switch (value.operation) {
//     case '+': result = value.a + value.b;
//     case '-': result = value.a - value.b;
//     case '/': result = value.a / value.b;
//     case '*': result = value.a * value.b;
//     case '%': result = value.a % value.b;
//     case '^': result = Math.pow(value.a, value.b);
// }
// return result;
// }

function evalObject(value) {
    var result = 0;
    switch (value.operation) {
        case '+': result = value.a + value.b;
            break;
        case '-': result = value.a - value.b;
            break;
        case '/': result = value.a / value.b;
            break;
        case '*': result = value.a * value.b;
            break;
        case '%': result = value.a % value.b;
            break;
        case '^': result = Math.pow(value.a, value.b);
            break;
    }
    return result;
}

describe('Fixed Tests', () => {
    test("1+1", () => {
        expect(evalObject({ a: 1, b: 1, operation: '+' })).toBe(2)
    })
    test("1+1", () => {
        expect(evalObject({ a: 1, b: 1, operation: '-' })).toBe(0)
    })
    test("1+1", () => {
        expect(evalObject({ a: 1, b: 1, operation: '*' })).toBe(1)
    })
    test("1+1", () => {
        expect(evalObject({ a: 1, b: 1, operation: '%' })).toBe(0)
    })
    test("1+1", () => {
        expect(evalObject({ a: 1, b: 1, operation: '^' })).toBe(1)
    })
})



