import React, { FC } from 'react';
import { Props } from 'react-select';
import Select from 'react-select';
const FormSelect: FC<Props> = (props) => {
    return (
        <Select
            {...props}
            theme={(theme) => {
                theme.colors.primary = '#92c064'
                theme.colors.primary25 = '#c8deb3'
                theme.colors.primary50 = '#c8deb3'
                return theme
            }}
            classNamePrefix={'form-react-select'}
            className={'form-react-select-container'}
        />
    );
};

export default FormSelect;