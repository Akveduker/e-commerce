import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import AmountChanger from "./AmountChanger"

describe('AmountChanger', () => {
    const amount = 10
    const amountChanger = jest.fn
    test('Снапшот', () => {
        const { container } = render(
            <AmountChanger
                amount={amount}
                setAmount={amountChanger}
            />)
        expect(container).toMatchSnapshot()
    })
    describe('Плюс', () => {
        test('прибавить', () => {
            render(
                <AmountChanger
                    amount={amount}
                    setAmount={amountChanger}
                />)
            const plus = screen.getByTestId('plus')
            const input = screen.getByTestId('input')
            userEvent.click(plus)
            expect(input).toHaveValue('11')
        })
    })
    describe('Минус', () => {
        test('Отнять', () => {
            render(
                <AmountChanger
                    amount={amount}
                    setAmount={amountChanger}
                />)
            const plus = screen.getByTestId('minus')
            const input = screen.getByTestId('input')
            userEvent.click(plus)
            expect(input).toHaveValue('9')
        })
        test('Отнять меньше 1', () => {
            const amount = 0;
            render(
                <AmountChanger
                    amount={amount}
                    setAmount={amountChanger}
                />)
            const plus = screen.getByTestId('minus')
            const input = screen.getByTestId('input')
            userEvent.click(plus)
            expect(input).toHaveValue('1')
        })
    })

})