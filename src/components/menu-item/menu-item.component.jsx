import React from 'react';

import './menu-item.styles.scss';


const MenuItem = ({ id, name, price, imageUrl }) => (
  <div className='menu-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='menu-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default MenuItem;