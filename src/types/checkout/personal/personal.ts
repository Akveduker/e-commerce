
import { IUser } from './../../User/User';
export type PersonalDataKeys = (keyof Pick<IUser, 'firstName' | 'secondName' | 'email' | 'phone'>)[]
export interface IPersonalProps {
    setIsDone: React.Dispatch<React.SetStateAction<boolean>>
}