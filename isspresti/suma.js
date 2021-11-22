function suma(a, b) {

    if (typeof a === 'undefined' || typeof b === 'undefined') {
        return "truksta parametru"
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Klaida ivedant skaiciu"
    }
    // if (a === -Infinity || b === -Infinity) {
    //     return "suma su netikrais skaiciais neglima"
    // }
    // if (a === Infinity || b === Infinity) {
    //     return "suma su netikrais skaiciais neglima"
    // }
    // if (isNaN(a) || isNaN(b)) {
    //     return "suma su netikrais skaiciais neglima"
    // }

    //09-17 eilutes uzrasomos per inFinite - yra baigtiniai.
    if (!isFinite(a) || !isFinite(b)) {
        return "suma su netikrais skaiciais neglima"
    }

    return a + b;
}

describe("Sveikuju skaiciu suma", () => {
    test("2+4=6", () => {
        expect(suma(2, 4)).toBe(6)
    })
    test("-2+4=2", () => {
        expect(suma(-2, 4)).toBe(2)
    })
    test("0+(-4)=-4", () => {
        expect(suma(0, -4)).toBe(-4)
    })
})

describe("Desimtainiu skaiciu suma", () => {
    test("2.5+1.5=4", () => {
        expect(suma(2.5, 1.5)).toBe(4)
    })
    test("-2.5+2.5=0", () => {
        expect(suma(-2.5, 2.5)).toBe(0)
    })
    test("0.112+0.118=0.23", () => {
        expect(suma(0.112, 0.118)).toBeCloseTo(0.23, 1)
    })

})
describe("Darbas su neskaiciais", () => {
    test("w+21", () => {
        expect(suma("w", 21)).toBe("Klaida ivedant skaiciu")
    })
    test("21+w", () => {
        expect(suma(21, "w")).toBe("Klaida ivedant skaiciu")
    })
    test("2f+w", () => {
        expect(suma("2f", "w")).toBe("Klaida ivedant skaiciu")
    })
})

describe("Pamirstas parametras", () => {
    test("nera parametru", () => {
        expect(suma()).toBe("truksta parametru")
    })
    test("nera parametro", () => {
        expect(suma(4)).toBe("truksta parametru")
    })
})

describe("netikri skaiciai", () => {
    test("-begalybe", () => {
        expect(suma(-Infinity, 1)).toBe("suma su netikrais skaiciais neglima")
    })
    test("begalybe", () => {
        expect(suma(Infinity, 1)).toBe("suma su netikrais skaiciais neglima")
    })
    test("skaicius ir -begalybe", () => {
        expect(suma(1, -Infinity)).toBe("suma su netikrais skaiciais neglima")
    })
    test("skaicius ir begalybe", () => {
        expect(suma(1, Infinity)).toBe("suma su netikrais skaiciais neglima")
    })
    test("NaN pirmoj pozicijoj", () => {
        expect(suma(NaN, 5)).toBe("suma su netikrais skaiciais neglima")
    })
    test("NaN antroj pozicijoj", () => {
        expect(suma(5, NaN)).toBe("suma su netikrais skaiciais neglima")
    })
})