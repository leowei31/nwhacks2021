import React from 'react';

import Menu from '../../components/menu/menu.component';

import MENU_DATA from './MENU_DATA';

class MenuPage extends React.Component{
    constructor(){
        super();
        this.state = {
            menu_collection: MENU_DATA
        }
    }

    render(){
        const {menu_collection} = this.state;
        return(
            <div className='shop-page'>
                {menu_collection.map(({ id, ...otherCollectionProps }) => (
                <Menu key={id} {...otherCollectionProps} />
                ))}
            </div>

        )
    }

}

export default MenuPage;