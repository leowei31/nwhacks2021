import React from 'react';
import './placeOrder.css';

class PlaceOrderPage extends React.Component {
  render() {
      return (
          <div className="placeOrder">
            <form>
              <p>Enter restaurant code: </p>
              <input type="text" />
              <p>Enter table number: </p>
              <input type="text" />
            </form>
            <button>Submit</button>
          </div>

      )
  }
}

export default PlaceOrderPage;
