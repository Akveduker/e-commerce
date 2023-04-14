import { render, screen } from "@testing-library/react"
import { withMemoryRouter } from "../../../helper/testFc/withMemoryRouter/withMemoryRouter"
import GreenLink from "./GreenLink"

describe('GreenLink', () => {
    test('Снапшот', () => {
        const { container } = withMemoryRouter(
            <GreenLink to={'/'}>
                link
            </GreenLink>
        )
        expect(screen.queryByText('link')).not.toHaveClass('link__underline')
        expect(container).toMatchSnapshot()
    })
    test('Есть в документе', () => {
        withMemoryRouter(
            <GreenLink to={'/'}>
                link
            </GreenLink>
        )
        expect(screen.queryByText('link')).toBeInTheDocument()
    })
    test('Класс меняется, снапшот', () => {
        const { container } = withMemoryRouter(
            <GreenLink to={'/'} underline>
                link
            </GreenLink>
        )
        expect(screen.queryByText('link')).toBeInTheDocument()
        expect(screen.queryByText('link')).toHaveClass('link__underline')
        expect(container).toMatchSnapshot()
    })
})