import { render, screen } from "@testing-library/react"
import { withMemoryRouterAndRedux } from "../../../helper/testFc/withMemoryRouterAndRedux/withMemoryRouterAndRedux"
import CategoriesSubItemLink from "./CategoriesSubItemLink"

describe('CategoriesSubItemLink', () => {
    test('Категория есть в сторе', () => {
        const { container } = withMemoryRouterAndRedux(<CategoriesSubItemLink id={1} />)
        const link = screen.getByTestId('link')
        expect(container).toMatchSnapshot()
        expect(link).toHaveAttribute('href', '/categories/1')
        expect(link).toBeHre
    })
    test('Категории нет в сторе', () => {
        const { container } = withMemoryRouterAndRedux(<CategoriesSubItemLink id={100} />)
        expect(container).toMatchSnapshot()
    })
})