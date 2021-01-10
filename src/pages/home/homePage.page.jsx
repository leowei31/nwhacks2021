import React from 'react';
import {Link} from 'react-router-dom';

import './homePage.css';

import CustomButton from '../../components/custom-button/customButton.component';
import HomePageLogo from '../../pics/MenuLogo.png';

class HomePage extends React.Component {
    render() {
        return (
            <div className="HomePage">
                <h1 style={{color: "orange"}}>Welcome</h1>
                <img src ={HomePageLogo} className="HomePageLogo" alt= 'HomePageLogo'/>
                <br></br>
                <Link to = '/placeorder' >
                    <CustomButton className = 'btn btn-outline-warning btn-lg'>
                        Place Order
                    </CustomButton>
                </Link>

                <CustomButton className = 'btn btn-outline-warning btn-lg'>Sign Up for Waitlist</CustomButton>
            </div>
            
        )
    }
}
// const HomePage = () => (
//     <div>
//         welcome to your menu
//     </div>
// )

export default HomePage;
