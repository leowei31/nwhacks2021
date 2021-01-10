import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

const Menu = ({title, items}) => (
    <div className='big-menu'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .map(({ id, ...otherItemProps }) => (
          <MenuItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
)

export default Menu