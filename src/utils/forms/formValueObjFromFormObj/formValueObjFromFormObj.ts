import { ValidationScheme } from '../../../types/IInputValidation/InputValidation';
import _ from 'lodash';

export const formValueObjFromFormObj = <T extends string[]>(obj: ValidationScheme<T>) => {
    let result = _.mapValues(obj, (o) => o.value)
    return result
}