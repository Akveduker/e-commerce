import { render, screen } from "@testing-library/react"
import InputName from "./InputName"

describe('InputName', () => {
    test('Рендерится имя, снапшот', () => {
        const { container } = render(<InputName inputName="name" />)
        expect(screen.queryByText('name')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})