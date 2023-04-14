import React, { FC } from 'react';
import CustomersSaysSlider from '../CustomersSaysSlider/CustomersSaysSlider';
import SectionHeaderWithLink from '../SectionHeaderWithLink/SectionHeaderWithLink';
import s from './CustomersSaysSection.module.scss'
const CustomersSaysSection: FC = () => {
    return (
        <section className={s['section']}>
            <div className={s['container']}>
                <SectionHeaderWithLink
                    title='Our customers says'
                    link='See all'
                    url='/'
                />
            </div>
            <CustomersSaysSlider />
        </section>
    );
};

export default CustomersSaysSection;