import { validationFunctionArr } from "../../../types/IInputValidation/InputValidation";
import { FormStateItemConstructor } from "../FormStateItemConstructor/FormStateItemConstructor";

export class FormStateAddressItemConstructor extends FormStateItemConstructor {
    addressId: string;
    constructor(validators: validationFunctionArr, value = '') {
        super(validators, value)
        this.addressId = ''
    }
}