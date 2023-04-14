import { fireEvent, screen } from "@testing-library/react"
import { withMemoryRouterAndRedux } from "../../../../../helper/testFc/withMemoryRouterAndRedux/withMemoryRouterAndRedux"
import FilterRange from "./FilterRange"

describe('FilterRange', () => {
    //имя ренджа в фейковом сторе price
    const element = <FilterRange name="price" />
    test('Снапшот', () => {
        const { container } = withMemoryRouterAndRedux(
            element
        )
        expect(container).toMatchSnapshot()
    })
})