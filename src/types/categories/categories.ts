
import { STATUS_DONE, STATUS_ERROR, STATUS_IDLE, STATUS_LOADING } from './../../data/status/status';
export interface ICategories {
    id: number;
    name: string;
    parentId: number | null;
    childCategory: number[];
}
export interface ICategoriesState {
    categories: ICategories[];
}
export type ExpandenStatus = { type: typeof STATUS_DONE | typeof STATUS_IDLE | typeof STATUS_LOADING } | ExpandenError
export type ExpandenError = { type: typeof STATUS_ERROR, body: string }
export type Status = typeof STATUS_DONE | typeof STATUS_LOADING | typeof STATUS_ERROR | typeof STATUS_IDLE

export type HeaderBottomCategoryItemType = 'main' | 'sub'
export interface HeaderBottomCategoryCords {
    left: number;
    minWidth: number;
}