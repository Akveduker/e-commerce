const regular = /^\d*\.?\d*$/
export const onlyNumbersInput = (value: string) => {
    return regular.test(value);
}