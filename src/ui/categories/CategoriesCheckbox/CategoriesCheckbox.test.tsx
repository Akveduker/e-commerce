import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import CheckboxProvider from "../../../context/categories/checkbox/CheckboxProvider"
import { withMemoryRouterAndRedux } from "../../../helper/testFc/withMemoryRouterAndRedux/withMemoryRouterAndRedux"
import CategoriesCheckbox from "./CategoriesCheckbox"

describe('CategoriesCheckbox', () => {
    /* чекбокс используется с именем brands потому что в инициализации фекового стора 
    указан обьект с этим именем
    */
    const element =
        <CheckboxProvider checkboxName='brands'>
            <CategoriesCheckbox checkId={1} />
        </CheckboxProvider>
    test('снапшот неактивного чекбокса', () => {
        const { container } = withMemoryRouterAndRedux(element)
        expect(container).toMatchSnapshot()
    })
    test('Смена состояния работает, класс поменялся', () => {
        withMemoryRouterAndRedux(element)
        const label = screen.getByTestId('label')
        userEvent.click(label)
        expect(label).toHaveClass('label--active')
    })
    test('снапшот активного чекбокса', () => {
        const { container } = withMemoryRouterAndRedux(element)
        const label = screen.getByTestId('label')
        userEvent.click(label)
        expect(container).toMatchSnapshot()
    })
})