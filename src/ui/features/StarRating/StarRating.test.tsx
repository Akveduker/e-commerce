import { render, screen } from "@testing-library/react"
import StarRating from "./StarRating"

describe('StarRating', () => {
    test('Снапшот', () => {
        const { container } = render(<StarRating rate={20} />)
        expect(container).toMatchSnapshot()
    })
    test('Класс меняется', () => {
        render(<StarRating rate={30} yellow />)
        expect(screen.getByTestId('rate')).toHaveClass('rating--active__yellow')
    })
})