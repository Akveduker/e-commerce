export const testForMock = <T extends {}>(
    description: string,
    initialState: T,
    mockFc: (item?: Partial<T>) => T,
    newValue: T
) => {
    describe(description, () => {
        test('Обьект без значения', () => {
            expect(mockFc()).toEqual(initialState)
        })
        test('Обьект со значением', () => {
            expect(mockFc(newValue)).toEqual({
                ...initialState,
                ...newValue,
            })
        })
    })
}