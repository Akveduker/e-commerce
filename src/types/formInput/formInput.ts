import { IInputValidationActions } from './../IInputValidation/InputValidation';

import { Props } from "react-input-mask";
import { Status } from "../categories/categories";
import { IInputValidationItem } from "../IInputValidation/InputValidation";
// Пропсы для обработки данных инпутов в формах
export interface IFormInputProps<S extends string[]> {
    dataItemState: IInputValidationItem;
    dispatch: React.Dispatch<IInputValidationActions<S>>;
    stateItemKey: (S extends (infer U)[] ? U : never);
}
// Пропсы для дефолтного инпута с валидтаорами
export interface IInputWithValidators {
    inputTitle: string;
    errorTitle: string;
    status: Status;
    errorBody: string;
}
// Пропсы для дефолтного инпуста с маской
export interface IDefaultInputMaskedProps extends Props {
    inputType: 'mask';
}
// Пропсы для дефолтного инпута без маски
export interface IDefaultInputNormalProps extends React.HTMLProps<HTMLInputElement> {
    inputType?: 'default';
}
// Дополнительные пропсы для дефолтного инпута
export interface IDefaultInput {
    children?: React.ReactNode;
    childrenClassName?: string;
    labelClassName?: string;
}
// Дженерик который берет дополнительные пропсы для дефолтного инпута и добавляет к ним пропсы по типу инпута(С маской или без маски)
export type HtmlPropsWithObject<T> = T & (IDefaultInputNormalProps | IDefaultInputMaskedProps)

// Стейт для дефолтного инпута с валидаторами
export type InputWithValidatorsProps = HtmlPropsWithObject<IInputWithValidators>

//Стейт для дефоолтного инпута
export type DefaultInputProps = HtmlPropsWithObject<IDefaultInput>

// Стейт для обработки данных инпутов в формах. 
//Берет часть доп. пропсов дефолтного инпута и добавляет к ним пропсы для обработки формы, пропсы по типу инпута(С маской или без маски)
export type FormDefaultInput<S extends string[]> = Pick<IInputWithValidators, 'inputTitle' | 'errorTitle'> & HtmlPropsWithObject<IFormInputProps<S>>;