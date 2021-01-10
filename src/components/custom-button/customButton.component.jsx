import React from 'react';

import './customButton.styles.css';

const CustomButton = ({children, ...otherProps}) => (
    <button className= 'customBtn' {...otherProps}>
        {children}
    </button>
);

export default CustomButton;