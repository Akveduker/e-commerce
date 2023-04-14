
import { IAuthState } from "../../../../types/Authorization/Authorization"
import { mockObject } from "../../mockObject/mockObject"
import { createAuthSlice } from '../../../../slices/authSlice/authSlice';

export const mockAuthInitial: IAuthState = {
    accessToken: 'token',
    id: 1,
    expiresAt: 232222222,
}
export const mockAuthSlice = (item?: Partial<IAuthState>) => mockObject(mockAuthInitial, item)
export const mockAuthReducer = createAuthSlice(mockAuthInitial).reducer