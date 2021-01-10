import React from 'react';
import './placeOrder.css';
import {BASE_URL} from "../../constants";
import axios from 'axios'

class PlaceOrderPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rName: "", t: null, tblNo: -1, apiResponse: ""};
    }

    updateInput = event => {
        const target = event.target
        this.setState({[target.name]: target.value});
    }

    getMenu = event => {
        event.preventDefault();
        const rName = {rName: this.state.rName}
        const url = BASE_URL.concat('/restaurant/').concat(rName).concat('/menu')
        axios.get(url).then(res => this.setState({apiResponse: JSON.stringify(res.data)}))
    }

    render() {
        return (
            <div className="placeOrder">
                <form onSubmit={this.getMenu}>
                    <label htmlFor={"rName"}>Restaurant Name:</label>
                    <input
                        type='text'
                        id={"rName"}
                        name="rName"
                        value={this.state.rName}
                        onChange={this.updateInput} />
                    <input type={"submit"} value={"Submit"}/>
                </form>
                <p>{this.state.apiResponse}</p>
            </div>

        )
    }
}

export default PlaceOrderPage;
