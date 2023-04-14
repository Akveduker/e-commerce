import { FC, memo } from 'react';
import { useAppSelector } from '../../../store/store';
import { getCategoriesfromStore } from '../../../utils/store/categories/getCategoriesfromStore';
import RenderFooterTags from '../RenderFooterTags/RenderFooterTags';
import s from './FooterTags.module.scss'
const FooterTags: FC = () => {
    const categories = useAppSelector(getCategoriesfromStore).categories
    return (
        <div >
            <h3 className={s['title']}>Категории товаров</h3>
            <div className={s['wrapper']} >
                {categories.map((category) => {
                    if (category.childCategory.length) {
                        return (
                            <RenderFooterTags
                                key={category.name}
                                categoriesIds={category.childCategory}
                            />
                        )
                    }
                })}

            </div>
        </div>
    );
};

export default FooterTags;