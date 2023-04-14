import _ from "lodash";
import { IInputValidationSchemeItem, validationFunctionArr, ValidationObj, ValidationStateScheme } from "../../../types/IInputValidation/InputValidation";

/* Функция для создания обьекта для валидации инпутов типа 
/Имя инпута: { validators: Массив валидаторов, value: Изначальное значение} /
Принимает на вход Массив ключей 1 параметром,
массив массивов валидаторов 2 параметром,
опциональный обьект значений в котором хранятся изначальные значения инпутов 3 параметром,
*** ВАЖНО (Обьект изначальных параметров должен иметь ключи равные ключам которые идут 1 параметром) ***
*** ВАЖНО2 (Присвоение Имен к валидатором идет равнозначным образом т.е. keysArr[0] получит массив валидаторов validatorsArr[0]) ***
*/
export const useCreateValidatorsState = <T extends string[]>(
    keysArr: T,
    validatorsArr: validationFunctionArr[],
    validatorsInitialObj?: ValidationObj<T>
) => {
    let values: IInputValidationSchemeItem[] = []
    if (!validatorsInitialObj) {
        values = validatorsArr.map(validator => {
            return { validators: validator, values: '' }
        })
    } else {
        values = keysArr.map((key, index) => {
            return { validators: validatorsArr[index], value: validatorsInitialObj[key as keyof ValidationObj<T>] }
        })
    }
    const result = _.zipObject(keysArr, values)
    return result as ValidationStateScheme<T>
}