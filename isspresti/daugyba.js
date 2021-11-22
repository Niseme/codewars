function daugyba(a, b) {

    if (typeof a === 'undefined' || typeof b === 'undefined') {
        return "truksta parametru"
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Klaida ivedant skaiciu"
    }

    if (!isFinite(a) || !isFinite(b)) {
        return "daugyba su netikrais skaiciais neglima"
    }

    return a * b;
}
describe("Sveikuju skaiciu daugyba", () => {
    test("2*4=6", () => {
        expect(daugyba(2, 4)).toBe(8)
    })
    test("-2*4=2", () => {
        expect(daugyba(-2, 4)).toBe(-8)
    })
    test("0*(-4)=0", () => {
        expect(daugyba(0, -4)).toBe(-0)
    })
})

describe("Desimtainiu skaiciu daugyba", () => {
    test("2.5*1.5=3.75", () => {
        expect(daugyba(2.5, 1.5)).toBe(3.75)
    })
    test("-2.5*2.5=-6.25", () => {
        expect(daugyba(-2.5, 2.5)).toBe(-6.25)
    })
    test("0.112*0.118=0.013216", () => {
        expect(daugyba(0.112, 0.118)).toBeCloseTo(0.013216, 1)
    })
})

describe("Darbas su neskaiciais", () => {
    test("w*21", () => {
        expect(daugyba("w", 21)).toBe("Klaida ivedant skaiciu")
    })
    test("21*w", () => {
        expect(daugyba(21, "w")).toBe("Klaida ivedant skaiciu")
    })
    test("2f*w", () => {
        expect(daugyba("2f", "w")).toBe("Klaida ivedant skaiciu")
    })
})

describe("Pamirstas parametras", () => {
    test("nera parametru", () => {
        expect(daugyba()).toBe("truksta parametru")
    })
    test("nera parametro", () => {
        expect(daugyba(4)).toBe("truksta parametru")
    })
})

describe("netikri skaiciai", () => {
    test("-begalybe", () => {
        expect(daugyba(-Infinity, 1)).toBe("daugyba su netikrais skaiciais neglima")
    })
    test("begalybe", () => {
        expect(daugyba(Infinity, 1)).toBe("daugyba su netikrais skaiciais neglima")
    })
    test("skaicius ir -begalybe", () => {
        expect(daugyba(1, -Infinity)).toBe("daugyba su netikrais skaiciais neglima")
    })
    test("skaicius ir begalybe", () => {
        expect(daugyba(1, Infinity)).toBe("daugyba su netikrais skaiciais neglima")
    })
    test("NaN pirmoj pozicijoj", () => {
        expect(daugyba(NaN, 5)).toBe("daugyba su netikrais skaiciais neglima")
    })
    test("NaN antroj pozicijoj", () => {
        expect(daugyba(5, NaN)).toBe("daugyba su netikrais skaiciais neglima")
    })
})