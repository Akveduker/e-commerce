import { render, screen } from "@testing-library/react"
import DefaultInputWithValidators from "./DefaultInputWithValidators"

describe('DefaultInputWithValidators', () => {
    test('Только инпут без маски, снапшот', () => {
        const { container } = render(
            <DefaultInputWithValidators
                inputTitle="title"
                errorTitle="error"
                stateItemKey="phone"
                dispatch={jest.fn}
                dataItemState={{ errorBody: '', status: 'idle', value: '', validators: [] }}
            />
        )
        expect(screen.queryByTestId('default')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})