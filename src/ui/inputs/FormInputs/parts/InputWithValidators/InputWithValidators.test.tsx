import { render, screen } from "@testing-library/react"
import InputWithValidators from "./InputWithValidators"

describe('InputWithValidators', () => {
    test('Все элементы рендерятся правильно', () => {
        const { container } = render(
            <InputWithValidators
                inputTitle="title"
                status="succeeded"
                errorBody="error"
                errorTitle="error"
            />
        )
        expect(screen.queryByText('title')).toBeInTheDocument()
        expect(screen.queryByTestId('icon')).toBeInTheDocument()
        expect(screen.queryByText('error')).toBeNull()
        expect(container).toMatchSnapshot()
    })
})