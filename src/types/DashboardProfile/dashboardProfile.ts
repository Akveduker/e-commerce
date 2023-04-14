import { IUser } from './../User/User';
import { ValidationStateScheme } from './../IInputValidation/InputValidation';
import { IInputValidationItem, ValidationScheme } from '../IInputValidation/InputValidation';
export type DashboardProfile = ValidationScheme<IDashboardProfileKeysArr>
export type DashboardProfileValidators = ValidationStateScheme<IDashboardProfileKeysArr>
export type IDashboardProfileKeys = keyof Pick<IUser, 'firstName' | 'secondName' | 'birthDate' | 'phone'>
export type IDashboardProfileKeysArr = (keyof Pick<IUser, 'firstName' | 'secondName' | 'birthDate' | 'phone'>)[]