//https://www.codewars.com/kata/55a75e2d0803fea18f00009d/train/javascript
//Given an array of 4 integers [a, b, c, d] representing two points(a, b) and(c, d), return a string representation of the slope of the line joining these two points.For an undefined slope(division by 0), return undefined.Note that the "undefined" is case -sensitive.
// a: x1
// b: y1
// c: x2
// d: y2
// Assume that[a, b, c, d] and the answer are all integers(no floating numbers!).Slope: https://en.wikipedia.org/wiki/Slope

function slope([a, b, c, d]) {

    if (c - a === 0) {
        return "undefined"
    }

    return ((d - b) / (c - a)).toString()
}


describe("Tests", () => {
    test("1", () => {
        expect(slope([19, 3, 20, 3])).toBe("0")
    })
    test("2", () => {
        expect(slope([2, 7, 4, -7])).toBe("-7")
    })
    test("3", () => {
        expect(slope([10, 50, 30, 150])).toBe("5")
    })
    test("4", () => {
        expect(slope([15, 45, 12, 60])).toBe("-5")
    })
    test("5", () => {
        expect(slope([10, 20, 20, 80])).toBe("6")
    })
    test("6", () => {
        expect(slope([-10, 6, -10, 3])).toBe("undefined")
    })
})





