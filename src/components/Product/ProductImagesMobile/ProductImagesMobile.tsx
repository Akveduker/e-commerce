import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import s from './ProductImagesMobile.module.scss'
import imgStyle from '../ProductImages/ProductImages.module.scss'
import image from '../../../assets/img/prouct-img-page.jpg'
import { useNotNullContext } from "../../../hooks/context/useNotNullContext";
import { ProductPageContext } from "../../../context/product/ProductPageProvider/PoroductPageProvider";
const ProductImagesMobile = () => {
    const title = useNotNullContext(ProductPageContext).title
    return (
        <Swiper
            pagination={{
                clickable: true,
                type: 'bullets',
                bulletActiveClass: s['bullet--active']
            }}
            className={'slider'}
            spaceBetween={20}
            modules={[Pagination]}
        >
            <SwiperSlide className={s['slide']}>
                <div className={imgStyle['img']}>
                    <img src={image} alt={title} />
                </div>
            </SwiperSlide>
            <SwiperSlide className={s['slide']}>
                <div className={imgStyle['img']}>
                    <img src={image} alt={title} />
                </div>
            </SwiperSlide>



        </Swiper>
    );
};

export default ProductImagesMobile;