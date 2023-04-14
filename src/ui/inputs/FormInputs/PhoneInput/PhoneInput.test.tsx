import { render, screen } from "@testing-library/react"
import PhoneInput from "./PhoneInput"

describe('PhoneInput', () => {
    test('Только инпут с маской,снапшот', () => {
        const { container } = render(
            <PhoneInput
                inputTitle="title"
                errorTitle="error"
                stateItemKey="phone"
                dispatch={jest.fn}
                dataItemState={{ errorBody: '', status: 'idle', value: '', validators: [] }}
            />
        )
        expect(screen.queryByTestId('default')).toBeNull()
        expect(container).toMatchSnapshot()
    })
})