// Welcome.In this kata, you are asked to square every digit of a number and concatenate them. For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. Note: The function accepts an integer and returns an integer.

function squareDigits(num) {
    let a = num.toString().split("")
    for (var i = 0; a.length > i; i++) {
        let b = a.map(x => x * x);
        c = b.join('');
        d = parseInt(c)
        return d;

    }
}
describe("square every digit", () => {
    test("1st test square every digit", () => {
        expect(squareDigits(3212)).toBe(9414)
    })
    test("2nd test square every digit", () => {
        expect(squareDigits(2112)).toBe(4114)
    })
    test("3rd test square every digit", () => {
        expect(squareDigits(0)).toBe(0)
    })
})


