import { render, screen } from "@testing-library/react"
import CardPrice from "./CardPrice"

describe('CardPrice', () => {
    describe('Со скидкой', () => {
        const element = <CardPrice discount={{ newPrice: 32, percent: 20 }} price={40} />
        test('Снапшот', () => {
            const { container } = render(element)
            expect(container).toMatchSnapshot()
        })
        test('Есть блок новой цены', () => {
            render(element)
            expect(screen.getByTestId('new')).toBeInTheDocument()
        })
    })
    describe('без скидки', () => {
        const element = <CardPrice price={40} />
        test('Снапшот', () => {
            const { container } = render(element)
            expect(container).toMatchSnapshot()
        })
        test('Нет блока новой цены', () => {
            render(element)
            expect(screen.queryByTestId('new')).toBeNull()
        })
    })
    describe('Модификация класса', () => {
        test('Класса нет', () => {
            render(<CardPrice price={40} discount={{ newPrice: 32, percent: 20 }} />)
            const container = screen.queryByTestId('container')
            const oldPrice = screen.queryByTestId('old')
            expect(container).not.toHaveClass('price__green')
            expect(oldPrice).not.toHaveClass('price__big')
        })
        test('Класс есть', () => {
            render(<CardPrice isGreen isProductPage price={40} discount={{ newPrice: 32, percent: 20 }} />)
            const container = screen.getByTestId('container')
            const oldPrice = screen.getByTestId('old')
            expect(container).toHaveClass('price__big')
            expect(oldPrice).toHaveClass('price__green')
        })
    })
})