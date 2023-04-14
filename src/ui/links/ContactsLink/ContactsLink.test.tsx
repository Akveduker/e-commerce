import { screen } from "@testing-library/react"
import { withMemoryRouter } from "../../../helper/testFc/withMemoryRouter/withMemoryRouter"
import HeaderCategoryLink from "../HeaderCategoryLink/HeaderCategoryLink"

describe('ContactsLink', () => {
    test('Снапшот', () => {
        const { container } = withMemoryRouter(
            <HeaderCategoryLink to={'/'}>
                link
            </HeaderCategoryLink>
        )
        expect(container).toMatchSnapshot()
    })
    test('Есть в документе', () => {
        withMemoryRouter(
            <HeaderCategoryLink to={'/'}>
                link
            </HeaderCategoryLink>
        )
        expect(screen.queryByText('link')).toBeInTheDocument()
    })
})