import { FC, useEffect, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CustomerSaysCard from '../CustomerSaysCard/CustomerSaysCard';
import s from './CustomersSaysSlider.module.scss'
import 'swiper/css';
import { Icomments } from '../../../types/comments/comments';
import SliderArrow from '../../../ui/icons/SliderArrow/SliderArrow';
import { allCommentsEndpoint } from '../../../api/api';
import { useFetchData } from '../../../hooks/fetch/useFetchData';
import Loader from '../../../ui/features/Loader/Loader';
import { STATUS_DONE, STATUS_ERROR } from '../../../data/status/status';
const CustomersSaysSlider: FC = () => {
    let { status, data, fetchCallback } = useFetchData<Icomments[]>(allCommentsEndpoint())
    useEffect(() => {
        fetchCallback()
    }, [])
    const swiperRef = useRef<SwiperType>();
    if (status.type === STATUS_ERROR) return null
    if (status.type !== STATUS_DONE || !data) return <div className={s['fake']}><Loader /></div>
    return (
        <div className={s['container']}>
            <Swiper
                className={s['slider']}
                spaceBetween={32}
                slidesPerView="auto"
                loop
                centeredSlides
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {data.map(item => {
                    return (
                        <SwiperSlide
                            className={s['slide']}
                            key={item.name}
                        >
                            <CustomerSaysCard

                                text={item.text}
                                name={item.name}
                                img={item.img}
                            />

                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className={s['slider__left']}
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <SliderArrow
                    className={s['icon']}
                />

            </div>
            <div className={s['slider__right']}
                onClick={() => swiperRef.current?.slideNext()}
            >
                <SliderArrow
                />
            </div>
        </div>
    );
};

export default CustomersSaysSlider;