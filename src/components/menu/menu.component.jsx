import React from 'react';


class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!Array.isArray(this.props.menu)) {
            return (<div></div>)
        }
        return (
            <div key={this.props.menu}>
                {this.props.menu.map(category => (
                    <table>
                        <thead>
                        <tr>
                            <th>{Object.keys(category)[0]}</th>
                        </tr>
                        </thead>
                        {category[Object.keys(category)[0]].map(menuItem => (
                            <tr>
                                <th>{menuItem.name}</th>
                                <th>{menuItem.price}</th>
                            </tr>
                        ))}
                    </table>
                ))}
            </div>

        )
    }
}

// const Menu = ({title, items}) => (
//     <div className='big-menu'>
//     <h1 className='title'>{title.toUpperCase()}</h1>
//     <div className='preview'>
//       {items
//         .map(({ id, ...otherItemProps }) => (
//           <MenuItem key={id} {...otherItemProps} />
//         ))}
//     </div>
//   </div>
// )

export default Menu