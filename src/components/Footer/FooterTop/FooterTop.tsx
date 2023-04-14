import { FC, useEffect } from 'react';
import { allLinksEndpoint } from '../../../api/api';
import { STATUS_ERROR } from '../../../data/status/status';
import { useFetchData } from '../../../hooks/fetch/useFetchData';
import { ILinks } from '../../../types/Links/Links';

import FooterList from '../FooterList/FooterList';
import s from './FooterTop.module.scss'
const FooterTop: FC = () => {
    const { data, status, fetchCallback } = useFetchData<ILinks[]>(allLinksEndpoint())
    useEffect(() => {
        fetchCallback()
    }, [])
    if (status.type !== STATUS_ERROR && data)
        return (
            <div className={s['container']}>
                {data.map(item => {
                    return (
                        <div className={s['item']} key={item.title}>
                            <FooterList
                                item={item}
                            />
                        </div>
                    )
                })
                }
            </div>
        );
    return null
};

export default FooterTop;