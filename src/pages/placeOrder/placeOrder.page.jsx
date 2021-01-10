import React from 'react';
import './placeOrder.css';

class placeOrder extends React.Component {
  render() {
      return (
          <div className="placeOrder">
            <form>
              <p>Enter restaurant code: </p>
              <input type="text" />
            </form>
            <button>Submit</button>
            <form>
            <p>Enter table number: </p>
              <input type="text" />
            </form>
            <button>Submit</button>
            
              
          </div>

      )
  }
}

export default placeOrder;
