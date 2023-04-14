import { ErrorAppCodes } from "../../../types/error/error";

export const fetchErrorHandlerTest = (title: string,
    handler: (action: ErrorAppCodes) => string,
    validAction: { code: ErrorAppCodes, result: string },
    notValidAction: { code: number, result: string }
) => {
    describe(title, () => {
        test('Валидный кейс', () => {
            expect(handler(validAction.code)).toBe(validAction.result)
        })
        test('Невалидный кейс', () => {
            expect(handler(notValidAction.code as ErrorAppCodes)).toBe(notValidAction.result)
        })
    })
}