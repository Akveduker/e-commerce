import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { withMemoryRouterAndRedux } from "../../../../helper/testFc/withMemoryRouterAndRedux/withMemoryRouterAndRedux"
import PaginationLink from "./PaginationLink"

describe('PaginationLink', () => {
    test('Ссылка неактивна', () => {
        const { container } = withMemoryRouterAndRedux(<PaginationLink num={5} />, {}, ['/?p=2'])
        const button = screen.getByTestId('button')
        expect(button).not.toHaveClass('link--active')
        expect(container).toMatchSnapshot()

    })
    test('Ссылка активна,меняет параметры и состояние', () => {
        const { container } = withMemoryRouterAndRedux(<PaginationLink num={1} />, {}, ['/?p=2'])
        const button = screen.getByTestId('button')
        userEvent.click(button)
        expect(button).toHaveClass('link--active')
        expect(container).toMatchSnapshot()
    })
})