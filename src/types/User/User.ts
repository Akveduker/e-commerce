import { IAddress } from '../address/address';
import { IDashboardProfileKeys } from '../DashboardProfile/dashboardProfile';
export interface IUser {
    id: number;
    email: string;
    firstName: string;
    secondName: string;
    birthDate: string;
    phone: string;
    addressBook: IAddressItem[];
}
export interface IAddressItem {
    id: number;
    address: IAddressState;
}
export interface IAddressState extends IAddress {
    isActive: boolean;
}
export type UserPersonal = Pick<IUser, IDashboardProfileKeys>