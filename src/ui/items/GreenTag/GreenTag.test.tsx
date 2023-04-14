import { render, screen } from "@testing-library/react"
import GreenTag from "./GreenTag"

describe('GreenTag', () => {
    test('Снапшот', () => {
        const { container } = render(
            <GreenTag>
                tag
            </GreenTag>
        )
        expect(container).toMatchSnapshot()
    })
    test('Есть в документе', () => {
        render(
            <GreenTag>
                tag
            </GreenTag>
        )
        expect(screen.queryByText('tag')).toBeInTheDocument()
    })
})