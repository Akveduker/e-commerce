import { IUser } from './../User/User';
import { IToken } from './../token/token';
import { IInputValidationState, ValidationScheme, ValidationStateScheme } from "../IInputValidation/InputValidation";

export type IFormState = ['email', 'password']

export interface IAuthLoginBody {
    email: string;
    password: string;
}

export interface IAuthRegistrationBody extends IAuthLoginBody {
    birthDate: '';
    firstName: '';
    secondName: '';
    phone: '';
    addressBook: [];
}

export type FetchBodyCreator = (body: IAuthLoginBody | IAuthRegistrationBody) => RequestInit

export interface ITestResult {
    key: formInputsKeys;
    result: string | IInputValidationState;
}

export interface IAuthResponse extends IToken {
    user: IUser;
}

export type authorizationType = 'registration' | 'login'

export interface IAuthState extends IToken {
    id: number;
    expiresAt: number;
}

export type formInputsKeys = keyof IFormState;