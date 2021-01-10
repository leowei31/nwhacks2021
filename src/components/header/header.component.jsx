import React from 'react';

import {Link} from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';

import './header.styles.css';



const Header = ({currentUser}) => (
    <div className='navbar navbar-expand-lg navbar-light'>
        <a className="navbar-brand" href="http://localhost:3000/">DINE </a>
        <ul className="navbar-nav mr-auto">
            <li className='nav-item'>

                {
                    currentUser ? (
                        <div className='nav-link'>Hello {currentUser.displayName}</div>
                    ) : (
                        <div></div>
                    )
                }

                {
                    currentUser ? (
                        <div className='nav-link' onClick={() => auth.signOut()}>SIGN OUT</div>
                    ) : (
                        <Link className='nav-link' to='/signin'>SIGN IN</Link>
                    )
                }
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/contact'>CONTACT</Link>
            </li>
        </ul>
    </div>
)

export default Header;