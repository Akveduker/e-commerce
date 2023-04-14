import React, { FC, SVGAttributes } from 'react';

const PlusIcon: FC<SVGAttributes<SVGElement>> = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3327 8H2.66602" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
            <path d="M8 13.3334V2.66676" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
        </svg>
    );
};

export default PlusIcon