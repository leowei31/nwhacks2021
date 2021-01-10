import React from 'react';

import FormInput from '../../components/form-input/form-input.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import SignUp from '../../components/sign-up/sign-up.component';

import './signIn_and_signUp.styles.scss';

class SignInPage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email:'',
            password: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'', password: ''});
        }catch(error){
            console.log(error);
        }


        
    }

    handleChange = event =>{
        const {value, name} = event.target;

        this.setState({[name]:value})
    }

    render(){
        return(
            <div className = 'row g-3'>
                <div className = 'sign-in col'>
                    <h2>I already have an account</h2>
                    <span className = 'sign-in-with'>Sign in with your email and password</span>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput 
                        name = "email" 
                        type = "email" 
                        value = {this.state.email} 
                        handleChange = {this.handleChange}
                        label="email"
                        required
                        />
                        
                        <FormInput 
                        name = "password" 
                        type = "password" 
                        value = {this.state.password}
                        handleChange = {this.handleChange}
                        label="password"
                        required
                        />
                        <div className = 'buttons'>
                            <button className = 'btn btn-warning' type = "submit">Sign In</button>
                            <button className = 'btn btn-primary' type = "button" onClick = {signInWithGoogle}>{''}Sign In With Google{''}</button>
                        </div>
                    </form>
                </div>
                <div className = 'sign-up col'>
                    <SignUp/>
                </div>
            </div>
        )
    }

}

export default SignInPage;