import { mockAuthSlice } from "../../../helper/mock/mockStore/mockAuthSlice/mockAuthSlice"
import { withMemoryRouterAndRedux } from "../../../helper/testFc/withMemoryRouterAndRedux/withMemoryRouterAndRedux"
import { createAuthSlice } from "../../../slices/authSlice/authSlice"
import UserProfile from "./UserProfile"

describe('UserProfile', () => {
    test('Снапшот с рутом на авторизацию', () => {
        const authReducerNotLoggedIn = createAuthSlice(mockAuthSlice({ accessToken: '', id: 0 })).reducer
        const { container } = withMemoryRouterAndRedux(
            <UserProfile />,
            {
                auth: authReducerNotLoggedIn
            }
        )
        expect(container).toMatchSnapshot()
    })
    test('Снапшот с рутом на профиль', () => {
        const { container } = withMemoryRouterAndRedux(
            <UserProfile />
        )
        expect(container).toMatchSnapshot()
    })
})