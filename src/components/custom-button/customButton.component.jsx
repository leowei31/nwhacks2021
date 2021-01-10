  
import React from 'react';

import './customButton.styles.scss';

const CustomButton = ({children, ...otherProps}) => (
    <button className= 'customBtn' {...otherProps}>
        {children}
    </button>
);

export default CustomButton;