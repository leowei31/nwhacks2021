import React from 'react';
import './homePage.css';
import CustomButton from '../../components/custom-button/customButton.component';

class HomePage extends React.Component {
    render() {
        return (
            <div className="HomePage">
                <h1 style={{color: "orange"}}>Welcome</h1>
                <CustomButton>Place Order</CustomButton>
                <CustomButton>Sign Up for Waitlist</CustomButton>
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
