import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import CheckboxProvider from '../../../context/categories/checkbox/CheckboxProvider';
import { useFindSingleBrand } from '../../../hooks/categories/filters/useFindSingleBrand';
import { CheckboxNames } from '../../../types/filter/filter';
import { stringFirstLetterUppercase } from '../../../utils/general/stringFirstLetterUppercase';
import CategoriesBrandItem from '../CategoriesBrandItem/CategoriesBrandItem';
import s from './CategoriesCheckboxContainer.module.scss'
interface CategoriesCheckboxContainerProps {
    checkboxCatName: CheckboxNames;
}
const CategoriesCheckboxContainer: FC<CategoriesCheckboxContainerProps> = ({ checkboxCatName }) => {
    const { id } = useParams()
    const brands = useFindSingleBrand(Number(id))
    const title = stringFirstLetterUppercase(checkboxCatName)
    if (!brands) return null
    return (
        <CheckboxProvider
            checkboxName={checkboxCatName}
        >
            <div>
                <h2 className={s['title']}>{title}</h2>
                {brands.map(brand =>
                    <div key={brand.id} className={s['item']}>
                        <CategoriesBrandItem
                            {...brand}
                        />
                    </div>
                )}
            </div>
        </CheckboxProvider>
    );
};
export default memo(CategoriesCheckboxContainer);