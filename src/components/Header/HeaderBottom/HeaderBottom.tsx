import { FC, memo, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../../store/store';
import { getCategoriesfromStore } from '../../../utils/store/categories/getCategoriesfromStore';
import s from './HeaderBottom.module.scss'
import HeaderBottomCategoryItem from './HeaderBottomCategoryItem/HeaderBottomCategoryItem';
const HeaderBottom: FC = () => {
    const categories = useAppSelector(getCategoriesfromStore).categories.filter(item => !item.parentId).map(item => item.id);
    const parentRef = useRef<HTMLDivElement>(null)
    return (
        <div className={s['container']}>
            <div className={s['wrapper']}
                ref={parentRef}
            >
                <Swiper
                    className={s['slider']}
                    slidesPerView={'auto'}
                    spaceBetween={40}
                >
                    {categories.map(id => {
                        return (
                            <SwiperSlide
                                className={s['item']}
                                key={id}
                            >
                                <HeaderBottomCategoryItem
                                    id={id}
                                    parentRef={parentRef}
                                    type='main'
                                />
                            </SwiperSlide>
                        )
                    })}



                    {categories.map(id => {
                        return (
                            <SwiperSlide
                                className={s['item']}
                                key={id}
                            >
                                <HeaderBottomCategoryItem
                                    id={id}
                                    parentRef={parentRef}
                                    type='main'
                                />
                            </SwiperSlide>
                        )
                    })}

                    {categories.map(id => {
                        return (
                            <SwiperSlide
                                className={s['item']}
                                key={id}
                            >
                                <HeaderBottomCategoryItem
                                    id={id}
                                    parentRef={parentRef}
                                    type='main'
                                />
                            </SwiperSlide>
                        )
                    })}

                    {categories.map(id => {
                        return (
                            <SwiperSlide
                                className={s['item']}
                                key={id}
                            >
                                <HeaderBottomCategoryItem
                                    id={id}
                                    parentRef={parentRef}
                                    type='main'
                                />
                            </SwiperSlide>
                        )
                    })}

                    {categories.map(id => {
                        return (
                            <SwiperSlide
                                className={s['item']}
                                key={id}
                            >
                                <HeaderBottomCategoryItem
                                    id={id}
                                    parentRef={parentRef}
                                    type='main'
                                />
                            </SwiperSlide>
                        )
                    })}

                    {categories.map(id => {
                        return (
                            <SwiperSlide
                                className={s['item']}
                                key={id}
                            >
                                <HeaderBottomCategoryItem
                                    id={id}
                                    parentRef={parentRef}
                                    type='main'
                                />
                            </SwiperSlide>
                        )
                    })}


                    {categories.map(id => {
                        return (
                            <SwiperSlide
                                className={s['item']}
                                key={id}
                            >
                                <HeaderBottomCategoryItem
                                    id={id}
                                    parentRef={parentRef}
                                    type='main'
                                />
                            </SwiperSlide>
                        )
                    })}



                </Swiper>
            </div>
        </div>
    );
};

export default memo(HeaderBottom);