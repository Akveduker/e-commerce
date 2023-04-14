import { Reducer } from 'react';
import { Status } from './../categories/categories';

export interface IInputValidationState {
    status: Status;
    errorBody: string
}

export interface IInputValidationItem extends IInputValidationState {
    value: string;
    validators: validationFunctionArr;
    addressId?: string;
}

export type InputValidationReducer<T extends string[]> =
    Reducer<ValidationScheme<T>, IInputValidationActions<T>>
    | Reducer<ValidationScheme<T>, IInputValidationAddressActions<T>>

export type IInputValidationActions<T extends string[]> =
    | { type: 'setValue', payload: { value: string, key: keyof ValidationScheme<T> } }
    | { type: 'setValidation', payload: { value: IInputValidationState, key: keyof ValidationScheme<T> } }
    | { type: 'setFullState', payload: ValidationScheme<T> }
export type IInputValidationAddressActions<T extends string[]> =
    IInputValidationActions<T>
    | { type: 'clearAddress', payload: keyof ValidationScheme<T> }
    | { type: 'setAddress', payload: { addressId: string, value: string, key: keyof ValidationScheme<T> } }

export type validationFunctionArr = ((string: string) => IInputValidationState)[]

export interface IInputValidationSchemeItem {
    validators: validationFunctionArr,
    value?: string
}
export type ValidationStateScheme<T extends string[]> = {
    [K in (T extends (infer U)[] ? U : never)]: IInputValidationSchemeItem
};
export type ValidationScheme<T extends string[]> = {
    [K in (T extends (infer U)[] ? U : never)]: IInputValidationItem;
}
export type ValidationObj<T extends string[]> = {
    [K in (T extends (infer U)[] ? U : never)]: string;
}
