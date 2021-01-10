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
        const url = BASE_URL.concat('/restaurant/').concat(this.state.rName).concat('/menu')
        console.log(url)
        axios.get(url).then(res => this.setState({apiResponse: JSON.stringify(res.data)}))
    }

    render() {
        return (
            <div className="placeOrder">
                <form onSubmit={this.getMenu} className={"form-inline"}>
                    <div className={"form-group row"}>
                        <label htmlFor="rName" className="sr-only">Restaurant Name</label>
                    <input
                        type='text'
                        className={"form-control"}
                        placeholder="Restaurant Name"
                        id={"rName"}
                        name="rName"
                        value={this.state.rName}
                        onChange={this.updateInput} />
                    </div>
                    <input className={"btn btn-light"} type={"submit"} value={"Submit"}/>
                </form>
                {/*<p>{this.state.apiResponse}</p>*/}
            </div>

        )
    }
}

export default PlaceOrderPage;
