function findAverage(nums) {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return nums.reduce(reducer) / nums.length
}
describe("find average ", () => {
    test("2 and 4", () => {
        expect(findAverage([1])).toBe(1)
    })
    test("4 and 4", () => {
        expect(findAverage([4, 4])).toBe(4)
    })
})
