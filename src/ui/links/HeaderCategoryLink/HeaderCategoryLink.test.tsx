import { render } from "@testing-library/react"
import { withMemoryRouter } from "../../../helper/testFc/withMemoryRouter/withMemoryRouter"
import HeaderCategoryLink from "./HeaderCategoryLink"

describe('HeaderCategoryLink', () => {
    test('Снапшот', () => {
        const { container } = withMemoryRouter(
            <HeaderCategoryLink to={'/'}>
                link
            </HeaderCategoryLink>
        )
        expect(container).toMatchSnapshot()
    })
})