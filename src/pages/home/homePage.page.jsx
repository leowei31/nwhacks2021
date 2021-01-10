import React from 'react';
import './homePage.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className="HomePage">
                <h1 style={{color: "orange"}}>Welcome</h1>
                <button>Place Order</button>
                <button>Sign Up for Waitlist</button>
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
