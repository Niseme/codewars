// Each number should be formatted that it is rounded to two decimal places.You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

function roundedToTwo(a) {
    round = Number(a).toFixed(2);
    return Number(round)
}

describe("round to two decimal places", () => {
    test("1st test", () => {
        expect(roundedToTwo(4.659725356)).toBe(4.66)
    })
    test("2nd test", () => {
        expect(roundedToTwo(173735326.3783732637948948)).toBe(173735326.38)
    })
    test("3rd test", () => {
        expect(roundedToTwo(4.653725356)).toBe(4.65)
    })
})

