
import { ICategories } from './../categories/categories';
import { IFilterRange } from './range/range';
export interface IFiltersDefault {
    search: string;
    productsView: productView;
    poductsSum: number;
}
export interface IFilter extends IFiltersDefault {
    categories: ICategories[];
    checkboxes: ICheckbox[];
    ranges: IFilterRange[];
};
export interface productView {
    viewType: productViewType,
    limit: number,
    type: itemsRenderType,
}
export interface ICheckbox {
    name: CheckboxNames;
    activeIdArr: number[];
}

export type itemsRenderType = 'concat' | 'page'

export type CheckboxNames = 'brands';

export type productViewType = 'grid' | 'list';
export type filtersNames = 'ranges' | 'checkboxes'

