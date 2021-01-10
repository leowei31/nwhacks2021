import React from 'react';
import './menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!Array.isArray(this.props.menu) || this.props.menu.length === 0) {
            return (<div></div>)
        }
        return (
            <div className={"overlay"} key={this.props.menu}>
                <div className={"menu-header"}>
                    <h3 className={"menu-title"}> MENU </h3>
                    <button type="button" className="close" aria-label="Close">
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                {this.props.menu.map(category => (
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th colspan="2">{Object.keys(category)[0]}</th>
                        </tr>
                        </thead>
                        {category[Object.keys(category)[0]].map(menuItem => (
                            <tr>
                                <td>{menuItem.name}</td>
                                <td>${(menuItem.price / 100).toFixed(2)}</td>
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