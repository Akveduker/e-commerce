import { render } from "@testing-library/react"
import PaginationDots from "./PaginationDots"

describe('PaginationDots', () => {
    test('Снапшот', () => {
        const { container } = render(<PaginationDots />)
        expect(container).toMatchSnapshot()
    })
})