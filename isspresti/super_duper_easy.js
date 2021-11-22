//https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript
//Make a function that returns the value multiplied by 50 and increased by 6.
//If the value entered is a string it should return "Error".


function problem(x) {
    if (typeof x !== 'number') {
        return "Error"
    }
    return x * 50 + 6
}


describe("Basic tests", () => {
    test("hello", () => {
        expect(problem("hello")).toBe("Error")
    })
    test("1", () => {
        expect(problem(1)).toBe(56)
    })
    test("5", () => {
        expect(problem(5)).toBe(256)
    })
    test("0", () => {
        expect(problem(0)).toBe(6)
    })
    test("1.2", () => {
        expect(problem(1.2)).toBe(66)
    })
    test("3", () => {
        expect(problem(3)).toBe(156)
    })
    test("RyanIsCool", () => {
        expect(problem("RyanIsCool")).toBe("Error")
    })
    test("-3", () => {
        expect(problem(-3)).toBe(-144)
    })
    test("", () => {
        expect(problem("")).toBe("Error")
    })
    test("0.03", () => {
        expect(problem(0.03)).toBe(7.5)
    })
})







