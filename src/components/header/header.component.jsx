import React from 'react';

import {Link} from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';

import './header.styles.css';

import Logo from '../../pics/MenuLogo.png';

const Header = ({currentUser}) =>(
    <div className = 'header'>
        <Link className= 'logo-container' to='/'>
            <img src ={Logo} alt= 'Logo'/>
        </Link>
        <div className= 'options'>
            {
                currentUser ? (
                <div className = 'option' onClick = {()=> auth.signOut()}>SIGN OUT</div>
                ):(
                <Link className = 'option' to ='/signin'>SIGN IN</Link>
                )
            }
        </div>
    </div>
)

export default Header;