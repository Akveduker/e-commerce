import { render, screen } from "@testing-library/react"
import InputValidationOk from "./InputValidationOk"

describe('InputValidationOk', () => {
    test('Элемент не рендерится, снапшот', () => {
        const { container } = render(<InputValidationOk status="idle" />)
        expect(screen.queryByTestId('icon')).toBeNull()
        expect(container).toMatchSnapshot()
    })
    test('Элемент рендерится, снапшот', () => {
        const { container } = render(<InputValidationOk status="succeeded" />)
        expect(screen.queryByTestId('icon')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})