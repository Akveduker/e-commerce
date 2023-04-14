import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

export const withMemoryRouter = (children: React.ReactNode) => {
    return render(
        <MemoryRouter>
            {children}
        </MemoryRouter>
    )
}