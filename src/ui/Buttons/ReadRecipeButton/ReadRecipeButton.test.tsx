import { withMemoryRouter } from "../../../helper/testFc/withMemoryRouter/withMemoryRouter"
import ReadRecipeButton from "./ReadRecipeButton"

describe('ReadRecipeButton', () => {
    test('Снапшот', () => {
        const { container } = withMemoryRouter(
            <ReadRecipeButton to={'/'} />
        )
        expect(container).toMatchSnapshot()
    })
})