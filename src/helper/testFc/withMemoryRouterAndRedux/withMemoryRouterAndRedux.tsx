import { configureStore } from "@reduxjs/toolkit"
import { render } from "@testing-library/react"
import { InitialEntry } from "history"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { mockReducersForStore } from "../../mock/mockStore/mockStore"
export const withMemoryRouterAndRedux = (children: React.ReactNode, reducers?: Partial<typeof mockReducersForStore>, initialEntries?: InitialEntry[]) => {
    const mockStore = configureStore({
        reducer: { ...mockReducersForStore, ...reducers }
    });
    return render(
        <MemoryRouter initialEntries={initialEntries}>
            <Provider store={mockStore}>

                {children}
            </Provider>
        </MemoryRouter>
    )
}