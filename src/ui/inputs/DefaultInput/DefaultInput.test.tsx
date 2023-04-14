import { render, screen } from "@testing-library/react"
import DefaultInput from "./DefaultInput"

describe('DefaultInput', () => {
    describe('С маской', () => {
        test('Рендерится нужный инпут, снапшот', () => {
            const { container } = render(<DefaultInput inputType='mask' mask={''} />)
            expect(screen.queryByTestId('label')).toBeNull()
            expect(screen.queryByTestId('default')).toBeNull()
            expect(container).toMatchSnapshot()
        })
        test('Добавляется доп элемент и работает связыванние классов', () => {
            const { container } = render(
                <DefaultInput inputType='mask' mask={''} childrenClassName={'children'} labelClassName={'label'}>
                    elem
                </DefaultInput>
            )
            expect(screen.getByTestId('label')).toHaveClass('label')
            const children = screen.queryByText('elem')
            expect(children).toBeInTheDocument()
            expect(children).toHaveClass('children')
            expect(container).toMatchSnapshot()
        })
    })
    describe('Без маски', () => {
        test('Рендерится нужный инпут, снапшот', () => {
            const { container } = render(<DefaultInput />)
            expect(screen.queryByTestId('label')).toBeNull()
            expect(screen.queryByTestId('default')).toBeInTheDocument()
            expect(container).toMatchSnapshot()
        })
        test('Добавляется доп элемент и работает связыванние классов', () => {
            const { container } = render(
                <DefaultInput childrenClassName={'children'} labelClassName={'label'}>
                    elem
                </DefaultInput>
            )
            expect(screen.getByTestId('label')).toHaveClass('label')
            const children = screen.queryByText('elem')
            expect(children).toBeInTheDocument()
            expect(children).toHaveClass('children')
            expect(container).toMatchSnapshot()
        })
    })
})