import { render, screen } from "@testing-library/react"
import InputValidationError from "./InputValidationError"

describe('InputValidationError', () => {
    test('Элемент не рендерится, снапшот', () => {
        const { container } = render(<InputValidationError errorBody="error" status="idle" />)
        expect(screen.queryByText('error')).toBeNull()
        expect(container).toMatchSnapshot()
    })
    test('Элемент рендерится, снапшот', () => {
        const { container } = render(<InputValidationError errorBody="error" status="error" />)
        expect(screen.queryByText('error')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})