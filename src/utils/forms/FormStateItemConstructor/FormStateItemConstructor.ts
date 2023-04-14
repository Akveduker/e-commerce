import { STATUS_IDLE } from '../../../data/status/status';
import { Status } from '../../../types/categories/categories';
import { validationFunctionArr } from '../../../types/IInputValidation/InputValidation';
export class FormStateItemConstructor {
    value: string;
    status: Status;
    validators: validationFunctionArr;
    errorBody: string;
    constructor(validators: validationFunctionArr, value = '') {
        this.value = value;
        this.status = STATUS_IDLE;
        this.errorBody = '';
        this.validators = validators
    }
}