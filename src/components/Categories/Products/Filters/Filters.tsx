import s from './Filters.module.scss'
import { FC } from 'react';
import CategoriesCheckboxContainer from '../../CategoriesCheckboxContainer/CategoriesCheckboxContainer';
import { useAppSelector } from '../../../../store/store';
import CategoriesSearch from '../CategoriesSearch/CategoriesSearch';
import CategoriesSubList from '../../CategoriesSubList/CategoriesSubList';
import FilterRange from '../../../../ui/features/ranges/filterRange/FilterRange/FilterRange';
const Filters: FC = () => {
    const ranges = useAppSelector(state => state.filters.ranges)
    const checkboxesArr = useAppSelector(state => state.filters.checkboxes)
    return (
        <div className={s['container']}>
            <div className={s['filter']}>
                <CategoriesSearch />
            </div>
            <div className={s['filter']}>
                <CategoriesSubList />
            </div>
            <div className={s['filter']}>
                {checkboxesArr.map(checkboxItem => {
                    return (
                        <div key={checkboxItem.name} className={s['filter']}>
                            <CategoriesCheckboxContainer
                                checkboxCatName={checkboxItem.name}
                            />
                        </div>
                    )
                })}
            </div>
            {ranges.map(range => {
                return (
                    <div key={range.name} className={s['filter']}>
                        <FilterRange
                            name={range.name}
                        />
                    </div>
                )
            })}

        </div>
    );
};

export default Filters;