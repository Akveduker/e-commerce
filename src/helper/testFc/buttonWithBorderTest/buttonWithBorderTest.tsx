import { render, screen } from "@testing-library/react"
import { ButtonWithBorderProps } from "../../../types/ui/buttonsWithBorders/buttonsWithBorders"
import { MemoryRouter } from "react-router-dom";

export const buttonWithBorderTest = (name: string, ButtonElement: React.ReactElement<ButtonWithBorderProps>, childrenText: string) => {
    describe(name, () => {
        test('Снапшот', () => {
            const { container } = render(
                <MemoryRouter>
                    {ButtonElement}
                </MemoryRouter>
            )
            expect(container).toMatchSnapshot()
        })
        test('чилдрен есть', () => {
            render(
                <MemoryRouter>
                    {ButtonElement}
                </MemoryRouter>
            )
            const button = screen.getByText(childrenText)
            expect(button).toHaveTextContent(childrenText)
        })
        test('Классы работают', () => {
            render(
                <MemoryRouter>
                    {ButtonElement}
                </MemoryRouter>
            )
            const button = screen.getByText(childrenText)
            expect(button).toHaveClass(`button--${ButtonElement.props.styleType}`)

        })
    })
}