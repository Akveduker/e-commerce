import { render } from "@testing-library/react"
import Loader from "./Loader"

describe('Loader', () => {
    test('Снапшот', () => {
        const { container } = render(<Loader />)
        expect(container).toMatchSnapshot()
    })
})