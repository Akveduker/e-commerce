import { onlyNumbersInput } from "./onlyNumbersInput"

describe('onlyNumbersInput', () => {
    test('Строка без числа', () => {
        expect(onlyNumbersInput('asdasd')).toBe(false)
    })
    test('Строка с числом', () => {
        expect(onlyNumbersInput('1')).toBe(true)
    })
})