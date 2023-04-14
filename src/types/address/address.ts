
import { ValidationScheme, IInputValidationAddressActions } from '../IInputValidation/InputValidation';
export type AddressState = ValidationScheme<AddressKeys>
export interface IAddress {
    city: string;
    street: string;
    house: string;
    floor: string;
    apartment: string;
    entrance: string;
}
export type AddressKeys = (keyof IAddress)[]
export interface IAddressFormProps {
    dispatch: React.Dispatch<IInputValidationAddressActions<AddressKeys>>;
    addressState: AddressState;
}