import React from 'react';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div>
        <input onChange = {handleChange} {...otherProps}/>
    </div>
)

export default FormInput;