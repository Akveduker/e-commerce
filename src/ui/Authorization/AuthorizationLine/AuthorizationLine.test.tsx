import { render } from "@testing-library/react"
import AuthorizationLine from "./AuthorizationLine"
describe('AuthorizationLine', () => {
    test('Снапшот', () => {
        const { container } = render(<AuthorizationLine />)
        expect(container).toMatchSnapshot()
    })
})