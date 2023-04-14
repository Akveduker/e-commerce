import { ExpandenStatus } from './../../categories/categories';
import { AddFc, IProduct } from './../products';
export interface ISmallCardContext extends IProduct {
    removeStatus: ExpandenStatus;
    removeFc: () => void;
    amount: number;
    addFc: AddFc;
    addStatus: ExpandenStatus;

}