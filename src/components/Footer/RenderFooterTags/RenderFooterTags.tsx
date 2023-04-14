import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { roots } from '../../../router/routes/routes';
import { useAppSelector } from '../../../store/store';
import s from './RenderFooterTags.module.scss'
interface RenderFooterTagsProps {
    categoriesIds: number[];
}
const RenderFooterTags: FC<RenderFooterTagsProps> = ({ categoriesIds }) => {
    const categories = useAppSelector(state => state.categories.categories.filter(item => categoriesIds.includes(item.id)))
    return (
        <>
            {categories.map(category => {
                return (
                    <Link to={`/${roots.categories}/${category.id}`} className={s['tag']} key={category.name}>
                        {category.name}
                    </Link>
                )
            })
            }
        </>
    );
};

export default RenderFooterTags;
