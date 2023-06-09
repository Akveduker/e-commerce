import React, { FC, SVGAttributes } from 'react';

const SliderArrow: FC<SVGAttributes<SVGElement>> = (props) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M13.0664 22.3734L18.5464 16.8934C18.7947 16.6436 18.9341 16.3056 18.9341 15.9534C18.9341 15.6011 18.7947 15.2632 18.5464 15.0134L13.2131 9.68005" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
        </svg>

    );
};

export default SliderArrow;