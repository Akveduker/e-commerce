import { render } from "@testing-library/react"
import InputForDatePicker from "./InputForDatePicker"

describe('InputForDatePicker', () => {
    test('Снапшот', () => {
        const { container } = render(<InputForDatePicker />)
        expect(container).toMatchSnapshot()
    })
})