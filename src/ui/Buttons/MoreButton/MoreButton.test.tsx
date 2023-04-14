import { render, screen } from "@testing-library/react"
import MoreButton from "./MoreButton"

describe('MoreButton', () => {
    describe('Кнопка активна', () => {
        const element = <MoreButton isOpen setFunction={jest.fn()} />
        test('Снапшот активной кнопки', () => {
            const { container } = render(element)
            expect(container).toMatchSnapshot()
        })
        test('Активный текст', () => {
            render(element)
            const button = screen.getByTestId('toggle-button')
            expect(button).toHaveTextContent(/скрыть/i)
        })
        test('Активный класс', () => {
            render(element)
            const button = screen.getByTestId('toggle-button')
            expect(button).toHaveClass('button--active')
        })
    })
    describe('Кнопка неактивна', () => {
        const element = <MoreButton isOpen={false} setFunction={jest.fn()} />
        test('Снапшот неактивной кнопки', () => {
            const { container } = render(element)
            expect(container).toMatchSnapshot()
        })
        test('Неактивный текст', () => {
            render(element)
            const button = screen.getByTestId('toggle-button')
            expect(button).toHaveTextContent(/больше категорий/i)
        })
        test('Неактивный класс', () => {
            render(element)
            const button = screen.getByTestId('toggle-button')
            expect(button).not.toHaveClass('button--active')
        })
    })
})