import React, { FC, SVGAttributes } from 'react';

const HeartIcon: FC<SVGAttributes<SVGElement>> = (props) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_30409_107578)">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.13062 3.25998C9.76714 2.62346 10.6304 2.26587 11.5306 2.26587C12.4308 2.26587 13.2941 2.62346 13.9306 3.25998C14.5671 3.8965 14.9247 4.75981 14.9247 5.65998C14.9247 6.56016 14.5671 7.42346 13.9306 8.05998L13.0573 8.93331L8.25729 13.7333L3.45729 8.93331L2.58396 8.05998C1.94744 7.42346 1.58984 6.56016 1.58984 5.65998C1.58984 4.75981 1.94744 3.8965 2.58396 3.25998C3.22048 2.62346 4.08378 2.26587 4.98396 2.26587C5.88413 2.26587 6.74744 2.62346 7.38396 3.25998L8.25729 4.13331L9.13062 3.25998Z" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_30409_107578">
                    <rect width="16" height="16" fill="white" transform="translate(0.256836)" />
                </clipPath>
            </defs>
        </svg>

    );
};

export default HeartIcon;