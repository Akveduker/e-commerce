import { FC, memo, SVGAttributes } from 'react';

const ArrowDown: FC<SVGAttributes<SVGElement>> = (props) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M4.81348 6.53336L7.55348 9.27336C7.67838 9.39752 7.84735 9.46722 8.02348 9.46722C8.1996 9.46722 8.36857 9.39752 8.49348 9.27336L11.1601 6.60669" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
        </svg>
    );
};

export default memo(ArrowDown);