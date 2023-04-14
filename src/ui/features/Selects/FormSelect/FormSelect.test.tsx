import { render } from "@testing-library/react"
import FormSelect from "./FormSelect"

describe('FormSelect', () => {
    test('Снапшот', () => {
        const { container } = render(<FormSelect />)
        expect(container).toMatchSnapshot()
    })
})